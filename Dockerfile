# syntax=docker/dockerfile:1

# Etapa de deps
FROM node:22-alpine AS deps
WORKDIR /app
# Ajuda com binários nativos (ex.: sharp)
RUN apk add --no-cache libc6-compat
COPY package*.json ./
# Use lockfile se existir; reprodutível
RUN npm ci

# Etapa de build
FROM deps AS builder
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Etapa de produção
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copia somente o build standalone e assets estáticos
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /public ./public
# Usuário não-root opcional
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]

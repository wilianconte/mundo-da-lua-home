export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="first">
          <img src="/img/logo-footer.svg" alt="logo" />
        </div>
        <div className="second">
          <div>
            <p className="fs-lg fw-600 fc-white">Se inscreva em nossa newsletter</p>
            <p className="fs-md fw-400 fc-white">Receba dicas de desenvolvimento infantil no seu e-mail.</p>
          </div>
          <div>
            <input type="text" placeholder="Seu melhor email..." />
            <a href="#">Quero receber</a>
          </div>
          <p className="fs-sm fw-400 fc-white">Ao se inscrever você concorda com nossa política de privacidade*</p>
        </div>
        <div className="third">
          <div>
            <p className="fs-sm fw-400 fc-white">Visite nossas redes sociais:</p>
          </div>
          <a 
            href="https://wa.me/+554133393991?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Mundo%20da%20Lua."
            target="_blank"
            rel="noopener noreferrer"><span className="icon-whatsapp"></span></a>
          <a 
            href="https://www.instagram.com/espacomundodalua"
            target="_blank"
            rel="noopener noreferrer"><span className="icon-instagran"></span></a>
          <a href="https://www.facebook.com/espacomundodalua"
            target="_blank"
            rel="noopener noreferrer"><span className="icon-facebook"></span></a>
        </div>
      </div>
    </footer>
  );
}

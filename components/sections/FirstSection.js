export default function FirstSection() {
  return (
    <div className="first">
      <div className="first-wrapper">
        <div className="left">
          <p className="fs-2xl desktop-fs-8xl fw-600">Novos horizontes aguardam seu filho</p>
          <p className="fs-md  desktop-fs-2xl fw-400">Nossos tutores ajudam seu pequeno a desbloquear todo o potencial guardado dentro dele.</p>
          <a className="btn btn-secondary" 
            href="https://wa.me/+554133393991?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Mundo%20da%20Lua."
            target="_blank"
            rel="noopener noreferrer">Marcar aula experimental</a>
        </div>
        <div className="right">
          <img src="/img/slide-1.jpg" alt="slide" />
          <img src="/img/slide-1-lg.jpg" alt="slide" />
        </div>
      </div>
    </div>
  );
}

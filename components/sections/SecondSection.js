export default function SecondSection() {
  return (
    <div className="second">
      <div className="second-wrapper">
        <div className="left">
          <p className="fs-3xl desktop-fs-7xl fw-600 fc-white">Um universo cheio de possibilidades</p>
          <p className="fs-xl fw-200 fc-white">Robótica, artes ou esportes? Temos profissionais que dão suporte em todas as áreas que o seu filho precisa.</p>
          <a className="btn btn-secondary" 
            href="https://wa.me/+554133393991?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Mundo%20da%20Lua."
            target="_blank"
            rel="noopener noreferrer">Conheça nossos serviços</a>
        </div>
        <div className="right">
          <img src="/img/astro.svg" alt="astro" />
        </div>
      </div>
    </div>
  );
}

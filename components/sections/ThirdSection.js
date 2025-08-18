export default function ThirdSection() {
  return (
    <div className="third">
      <div className="first-wrapper">
        <div className="left">
          <p className="fs-4xl desktop-fs-5xl fw-600">Embarque nesse foguete 🚀</p>
          <p className="fs-xl fw-400">Faça uma aula experimental gratuita e descubra a proxima paixão do seu pimpolho.</p>
          <a className="btn btn-secondary green" 
            href="https://wa.me/+554133393991?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Mundo%20da%20Lua."
            target="_blank"
            rel="noopener noreferrer">Agendar aula experimental</a>
        </div>
        <div className="right">
          <img src="/img/slide-2.jpg" alt="slide" />
          <img src="/img/slide-2-lg.jpg" alt="slide" />
        </div>
      </div>
    </div>
  );
}

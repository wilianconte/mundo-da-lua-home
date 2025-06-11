import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mundo da Lua</title>
        <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <div className="wrapper">
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <img src="/img/logo-horizontal.svg" alt="logo" />
            </div>
            <nav className="menu">
              <ul>
                <li><a className="current" href="#">Home</a></li>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Equipe</a></li>
                <li><a href="#">Faça Parte</a></li>
                <li><a href="#">Blog</a></li>
                <ul><a className="btn-primary" href="#">Contato</a></ul>
              </ul>
            </nav>
          </div>
        </header>
        <main className="main">
          <div className="first">
            <div className="first-wrapper">
              <div className="left">
                <p className="fs-2xl desktop-fs-8xl fw-600">Novos horizontes aguardam seu filho</p>
                <p className="fs-md  desktop-fs-2xl fw-400">Nossos tutores ajudam seu pequeno a desbloquear todo o potencial guardado dentro dele.</p>
                <a className="btn btn-secondary" href="#">Marcar aula experimental</a>
              </div>
              <div className="right">
                <img src="/img/slide-1.jpg" alt="slide" />
                <img src="/img/slide-1-lg.jpg" alt="slide" />
              </div>
            </div>
          </div>
          <div className="second">
            <div className="second-wrapper">
              <div className="left">
                <p className="fs-3xl desktop-fs-7xl fw-600 fc-white">Um universo cheio de possibilidades</p>
                <p className="fs-xl fw-200 fc-white">Robótica, artes ou esportes? Temos profissionais que dão suporte em todas as áreas que o seu filho precisa.</p>
                <a className="btn btn-secondary" href="#">Conheça nossos serviços</a>
              </div>
              <div className="right">
                <img src="/img/astro.svg" alt="astro" />
              </div>
            </div>
          </div>
          <div className="third">
            <div className="first-wrapper">
              <div className="left">
                <p className="fs-4xl desktop-fs-5xl fw-600">Embarque nesse foguete 🚀</p>
                <p className="fs-xl fw-400">Faça uma aula experimental gratuita e descubra a proxima paixão do seu pimpolho.</p>
                <a className="btn btn-secondary green" href="#">Agendar aula experimental</a>
              </div>
              <div className="right">
                <img src="/img/slide-2.jpg" alt="slide" />
                <img src="/img/slide-2-lg.jpg" alt="slide" />
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer-wrapper">
            <div className="first">
              <img src="/img/logo-footer.svg" alt="logo" />
            </div>
            <div className="second">
              <div>
                <p className="fs-lg fw-600 fc-white">Se inscreva em nossa newsleader</p>
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
              <a href="#"><span className="icon-whatsapp"></span></a>
              <a href="#"><span className="icon-instagran"></span></a>
              <a href="#"><span className="icon-facebook"></span></a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

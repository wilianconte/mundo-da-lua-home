import PageHead from '../components/PageHead';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <PageHead />
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
                <ul>
                  <a
                    className="btn-primary"
                    href="https://wa.me/+554133393991?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Mundo%20da%20Lua."
                    target="_blank"
                    rel="noopener noreferrer">
                    Contato
                  </a>
                </ul>
              </ul>
            </nav>
          </div>
        </header>
        <Main />
        <Footer />
      </div>
    </>
  );
}

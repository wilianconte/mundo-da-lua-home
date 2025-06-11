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
          <a href="#"><span className="icon-whatsapp"></span></a>
          <a href="#"><span className="icon-instagran"></span></a>
          <a href="#"><span className="icon-facebook"></span></a>
        </div>
      </div>
    </footer>
  );
}

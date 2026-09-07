import { WHATSAPP_URL } from "@/data/projects";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.jpg" alt="Crocoeduu" width={38} height={38} />
            <div className="footer-brand-text">
              <p>CROCOEDUU</p>
              <span>Desenvolvimento Web e soluções digitais.</span>
            </div>
          </div>

          <nav className="footer-links" aria-label="Navegação do rodapé">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#o-que-faco">O que faço</a>
            <a href="#projetos">Projetos</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href={WHATSAPP_URL}
            className="btn btn-ghost btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar comigo
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Crocoeduu. Todos os direitos reservados.</p>
          <p>
            WhatsApp:{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              wa.me/message/N45H7GGRTK72I1
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

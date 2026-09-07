import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/data/projects";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#o-que-faco", label: "O que faço" },
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header id="site-header" className={scrolled ? "scrolled" : undefined}>
        <div className="wrap nav-inner">
          <a href="#inicio" className="brand" aria-label="Crocoeduu — Início">
            <img src="/logo.jpg" alt="Crocoeduu" width={46} height={46} />
            <span className="brand-name">CROCOEDUU</span>
          </a>

          <nav className="nav-links" aria-label="Navegação principal">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              href={WHATSAPP_URL}
              className="btn btn-ghost btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar comigo
            </a>
            <button
              className="hamburger"
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-panel"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel${open ? " open" : ""}`} id="mobile-panel">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          Falar comigo
        </a>
      </div>
    </>
  );
}

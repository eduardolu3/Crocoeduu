import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Code2,
  LayoutGrid,
  Monitor,
  ShoppingBag,
  Triangle,
  Wrench,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Portfolio } from "@/components/portfolio";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL } from "@/data/projects";

export const Route = createFileRoute("/")({ component: Home });

const SERVICES = [
  {
    num: "01",
    icon: Monitor,
    title: "Desenvolvimento de Sites",
    text: "Sites modernos, rápidos e responsivos para empresas, profissionais, marcas e projetos.",
  },
  {
    num: "02",
    icon: Triangle,
    title: "Landing Pages",
    text: "Páginas focadas em apresentar produtos, serviços, projetos e gerar novos contatos.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Sistemas Web",
    text: "Ferramentas e sistemas personalizados desenvolvidos para necessidades específicas.",
  },
  {
    num: "04",
    icon: ShoppingBag,
    title: "Lojas Virtuais",
    text: "Experiências de compra online modernas, organizadas e adaptadas para diferentes dispositivos.",
  },
  {
    num: "05",
    icon: LayoutGrid,
    title: "Front-end / UI",
    text: "Interfaces modernas, responsivas e pensadas para oferecer uma excelente experiência ao usuário.",
  },
  {
    num: "06",
    icon: Wrench,
    title: "Manutenção e Melhorias",
    text: "Correções, atualizações, melhorias visuais e evolução de projetos existentes.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Você apresenta a ideia",
    text: "Entendo o que você precisa e qual objetivo deseja alcançar.",
  },
  {
    num: "02",
    title: "Planejamos a solução",
    text: "Definimos estrutura, funcionalidades, conteúdo e direção visual.",
  },
  {
    num: "03",
    title: "Eu desenvolvo o projeto",
    text: "Transformo o planejamento em uma experiência digital funcional.",
  },
  {
    num: "04",
    title: "Publicamos e evoluímos",
    text: "Faço os ajustes finais e preparo o projeto para continuar evoluindo.",
  },
];

const TECH = [
  { code: "01", icon: "HTML", title: "HTML", text: "Estrutura semântica e acessível para interfaces web." },
  { code: "02", icon: "CSS", title: "CSS", text: "Interfaces responsivas, organizadas e com identidade visual." },
  { code: "03", icon: "JS", title: "JavaScript", text: "Interações, lógica de interface e experiências dinâmicas." },
  { code: "04", icon: "R", title: "React", text: "Componentes reutilizáveis para aplicações modernas." },
  { code: "05", icon: "N", title: "Node.js", text: "Back-end e integrações para soluções web." },
  { code: "06", icon: "G", title: "Git", text: "Controle de versão e organização do desenvolvimento." },
  { code: "07", icon: "GH", title: "GitHub", text: "Versionamento, colaboração e publicação de projetos." },
];

const DIFFS = [
  "Design pensado nos detalhes",
  "Projetos personalizados",
  "Sites responsivos",
  "Código organizado",
  "Boa experiência do usuário",
  "Foco em performance",
];

function Home() {
  return (
    <>
      <a href="#inicio" className="skip-link">
        Pular para o conteúdo
      </a>
      <SiteHeader />

      <main id="inicio">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="hero-eyebrow">{"// crocoeduu.dev"}</p>
              <h1>Eu transformo ideias em experiências digitais.</h1>
              <p className="subtitle">
                Sou desenvolvedor web e criador da Crocoeduu. Desenvolvo sites, landing pages,
                sistemas e soluções digitais pensadas para serem bonitas, rápidas e funcionais.
              </p>
              <div className="hero-cta">
                <a href="#projetos" className="btn btn-primary">
                  Ver meus projetos
                </a>
                <a
                  href={WHATSAPP_URL}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar comigo
                </a>
              </div>
              <div className="hero-meta">
                <span>Desenvolvimento Web</span>
                <span className="dot" />
                <span>Design</span>
                <span className="dot" />
                <span>Tecnologia</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="ring" />
              <div className="ring r2" />
              <div className="glow" />
              <img src="/logo.jpg" alt="" className="hero-logo" />
              <span className="code-frag cf1">{"</>"}</span>
              <span className="code-frag cf2 fg">const site =</span>
              <span className="code-frag cf3">{"{ }"}</span>
              <span className="code-frag cf4 fg">01 · 02 · 03</span>
              <span className="code-frag cf5">_</span>
            </div>
          </div>
        </section>

        <section className="behind">
          <div className="wrap behind-grid">
            <Reveal className="behind-text">
              <p className="eyebrow">Por trás da Crocoeduu</p>
              <p>A Crocoeduu nasceu da minha vontade de transformar criatividade e programação em projetos reais.</p>
              <p>
                Gosto de transformar ideias em experiências digitais, explorando desenvolvimento, design e
                tecnologia para criar soluções que realmente façam sentido para cada projeto.
              </p>
              <div className="behind-tags">
                <span>Desenvolvimento Web</span>
                <span>Projetos personalizados</span>
                <span>Experiência do usuário</span>
                <span>Performance</span>
                <span>Tecnologia</span>
              </div>
              <p className="behind-highlight">Código bem escrito. Design bem pensado.</p>
            </Reveal>
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Sobre mim</p>
              <h2>Quem desenvolve a Crocoeduu</h2>
            </Reveal>
            <Reveal className="about-inner">
              <p>Sou desenvolvedor web e criador da Crocoeduu.</p>
              <p>
                Meu trabalho envolve transformar ideias em projetos digitais, combinando desenvolvimento,
                design e experiência do usuário.
              </p>
              <p>
                Crio desde sites institucionais e landing pages até sistemas web personalizados, sempre
                buscando uma solução visualmente bonita, funcional e responsiva.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="services" id="o-que-faco">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">O que eu faço</p>
              <h2>Serviços e soluções</h2>
            </Reveal>
            <Reveal>
              <div className="service-grid">
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.num} className="service-card">
                      <span className="service-num">{service.num}</span>
                      <Icon strokeWidth={1.5} />
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="process">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Como eu trabalho</p>
              <h2>Do conceito ao projeto</h2>
            </Reveal>
            <Reveal>
              <div className="process-track">
                {STEPS.map((step) => (
                  <div key={step.num} className="process-step">
                    <div className="process-num">{step.num}</div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Portfolio />

        <section className="lab">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Laboratório Crocoeduu</p>
              <h2>Um espaço para projetos, experimentos, ideias e tecnologias que estou explorando.</h2>
            </Reveal>
            <Reveal>
              <div className="terminal">
                <div className="terminal-bar">
                  <span />
                  <span />
                  <span />
                  <span className="terminal-title">lab@crocoeduu — zsh</span>
                </div>
                <div className="terminal-body">
                  <p className="term-line">
                    <span className="term-prompt">$</span>
                    <span className="term-cmd">ls ./laboratorio</span>
                  </p>
                  <p className="term-line">
                    <span className="term-out">01 / web</span>
                  </p>
                  <p className="term-line">
                    <span className="term-out">02 / ui</span>
                  </p>
                  <p className="term-line">
                    <span className="term-out">03 / experimentos</span>
                  </p>
                  <p className="term-line">
                    <span className="term-out">04 / sistemas</span>
                  </p>
                  <p className="term-line">
                    <span className="term-prompt">$</span>
                    <span className="term-cmd">status</span>
                    <span className="cursor" />
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="tech" id="tecnologias">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Tecnologias</p>
              <h2>Ferramentas que uso no dia a dia</h2>
            </Reveal>
            <Reveal>
              <div className="tech-grid">
                {TECH.map((item) => (
                  <div key={item.code} className="tech-card">
                    <span className="tech-code">{item.code}</span>
                    <div className="tech-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="diff">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Por que Crocoeduu?</p>
              <h2>Diferenciais</h2>
            </Reveal>
            <Reveal>
              <div className="diff-grid">
                {DIFFS.map((item) => (
                  <div key={item} className="diff-item">
                    <Check strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="impact">
          <div className="wrap">
            <Reveal>
              <p>
                Não é apenas sobre criar um site.
                <br />
                <span className="dim">É sobre transformar uma ideia em algo real.</span>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="wrap">
            <Reveal className="contact-inner">
              <p className="eyebrow">Vamos criar algo?</p>
              <h2>Tem uma ideia, projeto ou negócio que precisa de uma presença digital?</h2>
              <p className="lede">Vamos conversar.</p>
              <a
                href={WHATSAPP_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar comigo pelo WhatsApp
              </a>

              <div className="contact-brand">
                <img src="/logo.jpg" alt="Crocoeduu" width={28} height={28} />
                <span>CROCOEDUU — Desenvolvimento Web</span>
              </div>

              <div className="social-row">
                <a
                  href={WHATSAPP_URL}
                  className="social-btn live"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.5 8.5 0 01-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1121 11.5z" />
                  </svg>
                </a>
                <span className="social-btn soon" aria-label="Instagram (em breve)">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span className="social-btn soon" aria-label="GitHub (em breve)">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5 0-1-.5-2-1-2.5.5-1.2 0-2 0-2s-1 0-2.5 1a9 9 0 00-5 0C9 9.5 8 9.5 8 9.5s-.5.8 0 2c-.5.5-1 1.5-1 2.5 0 3.5 2.5 4.3 4.5 4.5-.6.6-.5 1-.5 2V21" />
                  </svg>
                </span>
                <span className="social-btn soon" aria-label="E-mail (em breve)">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

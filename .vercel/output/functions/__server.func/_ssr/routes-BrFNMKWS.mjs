import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, c as CodeXml, i as ShoppingBag, l as Check, n as Triangle, o as Monitor, s as LayoutGrid, t as Wrench, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BrFNMKWS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "todos",
		label: "Todos"
	},
	{
		id: "sites",
		label: "Sites"
	},
	{
		id: "landing",
		label: "Landing Pages"
	},
	{
		id: "sistemas",
		label: "Sistemas"
	},
	{
		id: "pessoal",
		label: "Projetos pessoais"
	}
];
var PROJECTS = [
	{
		id: "inove",
		title: "Inove Estética Automotiva",
		description: "Landing page premium para estética automotiva em Maringá. Polimento, vitrificação, higienização e detalhamento com o padrão Inove.",
		href: "https://previa-inove-estetica-automotiva.vercel.app/",
		image: "/projects/inove.jpg",
		categories: ["landing", "sites"],
		tags: ["Landing Page", "Estética automotiva"],
		location: "Maringá — PR",
		status: "Publicado"
	},
	{
		id: "vivasorriso",
		title: "VivaSorriso",
		description: "Site da Dra. Vitória Pasqualotto em Coronel Vivida. Odontologia com foco em sorrisos personalizados, facetas em resina e agendamento pelo WhatsApp.",
		href: "https://previa-vivasorriso.vercel.app/",
		image: "/projects/vivasorriso.jpg",
		categories: ["landing", "sites"],
		tags: ["Landing Page", "Odontologia"],
		location: "Coronel Vivida — PR",
		status: "Publicado"
	},
	{
		id: "beijaflor",
		title: "Odontologia Beija-Flor",
		description: "Presença digital para clínica odontológica em Maringá, com implantes, próteses, lentes de contato dental e avaliação 4,9 no Google.",
		href: "https://previa-odontologiabeijaflor.vercel.app/",
		image: "/projects/beijaflor.jpg",
		categories: ["landing", "sites"],
		tags: ["Landing Page", "Clínica odontológica"],
		location: "Maringá — PR",
		status: "Publicado"
	}
];
var WHATSAPP_URL = "https://wa.me/message/N45H7GGRTK72I1";
var LINKS = [
	{
		href: "#inicio",
		label: "Início"
	},
	{
		href: "#sobre",
		label: "Sobre mim"
	},
	{
		href: "#o-que-faco",
		label: "O que faço"
	},
	{
		href: "#projetos",
		label: "Projetos"
	},
	{
		href: "#tecnologias",
		label: "Tecnologias"
	},
	{
		href: "#contato",
		label: "Contato"
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const close = () => setOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		id: "site-header",
		className: scrolled ? "scrolled" : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap nav-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#inicio",
					className: "brand",
					"aria-label": "Crocoeduu — Início",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "Crocoeduu",
						width: 46,
						height: 46
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "brand-name",
						children: "CROCOEDUU"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "nav-links",
					"aria-label": "Navegação principal",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nav-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						className: "btn btn-ghost btn-sm",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Falar comigo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "hamburger",
						type: "button",
						"aria-label": open ? "Fechar menu" : "Abrir menu",
						"aria-expanded": open,
						"aria-controls": "mobile-panel",
						onClick: () => setOpen((v) => !v),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `mobile-panel${open ? " open" : ""}`,
		id: "mobile-panel",
		children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: link.href,
			onClick: close,
			children: link.label
		}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: WHATSAPP_URL,
			className: "btn btn-primary",
			target: "_blank",
			rel: "noopener noreferrer",
			onClick: close,
			children: "Falar comigo"
		})]
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "Crocoeduu",
						width: 38,
						height: 38
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-brand-text",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "CROCOEDUU" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Desenvolvimento Web e soluções digitais." })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "footer-links",
					"aria-label": "Navegação do rodapé",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#inicio",
							children: "Início"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#sobre",
							children: "Sobre mim"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#o-que-faco",
							children: "O que faço"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#projetos",
							children: "Projetos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#tecnologias",
							children: "Tecnologias"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contato",
							children: "Contato"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: WHATSAPP_URL,
					className: "btn btn-ghost btn-sm",
					target: "_blank",
					rel: "noopener noreferrer",
					children: "Falar comigo"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-bottom",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Crocoeduu. Todos os direitos reservados." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"WhatsApp:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: WHATSAPP_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					children: "wa.me/message/N45H7GGRTK72I1"
				})
			] })]
		})]
	}) });
}
function Reveal({ children, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("is-visible");
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				io.unobserve(entry.target);
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -36px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal ${className}`.trim(),
		children
	});
}
function Portfolio() {
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const visible = (0, import_react.useMemo)(() => {
		if (filter === "todos") return PROJECTS;
		return PROJECTS.filter((p) => p.categories.includes(filter));
	}, [filter]);
	const showEmpty = filter === "todos" || visible.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "portfolio",
		id: "projetos",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "section-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Projetos em destaque"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Projetos, experiências e soluções que desenvolvi ou estou desenvolvendo." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "filters",
					role: "group",
					"aria-label": "Filtrar projetos",
					children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `filter-btn${filter === item.id ? " active" : ""}`,
						"aria-pressed": filter === item.id,
						onClick: () => setFilter(item.id),
						children: item.label
					}, item.id))
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "project-grid",
					id: "project-grid",
					children: [visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "project-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "project-thumb",
							"aria-label": `Abrir ${project.title}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: `Prévia do site ${project.title}`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-body",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "project-tags",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag status",
										children: project.status
									}), project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag",
										children: tag
									}, tag))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: project.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.description }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "project-foot",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag",
										children: project.location
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.href,
										className: "project-link",
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["Ver projeto", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { strokeWidth: 2 })]
									})]
								})
							]
						})]
					}, project.id)), showEmpty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "project-card empty-slot",
						"aria-hidden": visible.length > 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { strokeWidth: 1.5 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Novo projeto em breve" })]
					}) : null]
				}) })
			]
		})
	});
}
var SERVICES = [
	{
		num: "01",
		icon: Monitor,
		title: "Desenvolvimento de Sites",
		text: "Sites modernos, rápidos e responsivos para empresas, profissionais, marcas e projetos."
	},
	{
		num: "02",
		icon: Triangle,
		title: "Landing Pages",
		text: "Páginas focadas em apresentar produtos, serviços, projetos e gerar novos contatos."
	},
	{
		num: "03",
		icon: CodeXml,
		title: "Sistemas Web",
		text: "Ferramentas e sistemas personalizados desenvolvidos para necessidades específicas."
	},
	{
		num: "04",
		icon: ShoppingBag,
		title: "Lojas Virtuais",
		text: "Experiências de compra online modernas, organizadas e adaptadas para diferentes dispositivos."
	},
	{
		num: "05",
		icon: LayoutGrid,
		title: "Front-end / UI",
		text: "Interfaces modernas, responsivas e pensadas para oferecer uma excelente experiência ao usuário."
	},
	{
		num: "06",
		icon: Wrench,
		title: "Manutenção e Melhorias",
		text: "Correções, atualizações, melhorias visuais e evolução de projetos existentes."
	}
];
var STEPS = [
	{
		num: "01",
		title: "Você apresenta a ideia",
		text: "Entendo o que você precisa e qual objetivo deseja alcançar."
	},
	{
		num: "02",
		title: "Planejamos a solução",
		text: "Definimos estrutura, funcionalidades, conteúdo e direção visual."
	},
	{
		num: "03",
		title: "Eu desenvolvo o projeto",
		text: "Transformo o planejamento em uma experiência digital funcional."
	},
	{
		num: "04",
		title: "Publicamos e evoluímos",
		text: "Faço os ajustes finais e preparo o projeto para continuar evoluindo."
	}
];
var TECH = [
	{
		code: "01",
		icon: "HTML",
		title: "HTML",
		text: "Estrutura semântica e acessível para interfaces web."
	},
	{
		code: "02",
		icon: "CSS",
		title: "CSS",
		text: "Interfaces responsivas, organizadas e com identidade visual."
	},
	{
		code: "03",
		icon: "JS",
		title: "JavaScript",
		text: "Interações, lógica de interface e experiências dinâmicas."
	},
	{
		code: "04",
		icon: "R",
		title: "React",
		text: "Componentes reutilizáveis para aplicações modernas."
	},
	{
		code: "05",
		icon: "N",
		title: "Node.js",
		text: "Back-end e integrações para soluções web."
	},
	{
		code: "06",
		icon: "G",
		title: "Git",
		text: "Controle de versão e organização do desenvolvimento."
	},
	{
		code: "07",
		icon: "GH",
		title: "GitHub",
		text: "Versionamento, colaboração e publicação de projetos."
	}
];
var DIFFS = [
	"Design pensado nos detalhes",
	"Projetos personalizados",
	"Sites responsivos",
	"Código organizado",
	"Boa experiência do usuário",
	"Foco em performance"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#inicio",
			className: "skip-link",
			children: "Pular para o conteúdo"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "inicio",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "hero",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap hero-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-eyebrow",
								children: "// crocoeduu.dev"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Eu transformo ideias em experiências digitais." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "subtitle",
								children: "Sou desenvolvedor web e criador da Crocoeduu. Desenvolvo sites, landing pages, sistemas e soluções digitais pensadas para serem bonitas, rápidas e funcionais."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-cta",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#projetos",
									className: "btn btn-primary",
									children: "Ver meus projetos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									className: "btn btn-ghost",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Falar comigo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Desenvolvimento Web" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dot" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Design" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dot" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tecnologia" })
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-visual",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ring" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ring r2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "glow" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.jpg",
									alt: "",
									className: "hero-logo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "code-frag cf1",
									children: "</>"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "code-frag cf2 fg",
									children: "const site ="
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "code-frag cf3",
									children: "{ }"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "code-frag cf4 fg",
									children: "01 · 02 · 03"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "code-frag cf5",
									children: "_"
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "behind",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap behind-grid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "behind-text",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Por trás da Crocoeduu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A Crocoeduu nasceu da minha vontade de transformar criatividade e programação em projetos reais." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gosto de transformar ideias em experiências digitais, explorando desenvolvimento, design e tecnologia para criar soluções que realmente façam sentido para cada projeto." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "behind-tags",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Desenvolvimento Web" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Projetos personalizados" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Experiência do usuário" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Performance" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tecnologia" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "behind-highlight",
									children: "Código bem escrito. Design bem pensado."
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "about",
					id: "sobre",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "section-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Sobre mim"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Quem desenvolve a Crocoeduu" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "about-inner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sou desenvolvedor web e criador da Crocoeduu." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Meu trabalho envolve transformar ideias em projetos digitais, combinando desenvolvimento, design e experiência do usuário." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Crio desde sites institucionais e landing pages até sistemas web personalizados, sempre buscando uma solução visualmente bonita, funcional e responsiva." })
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "services",
					id: "o-que-faco",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "section-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "O que eu faço"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Serviços e soluções" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "service-grid",
							children: SERVICES.map((service) => {
								const Icon = service.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "service-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "service-num",
											children: service.num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { strokeWidth: 1.5 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service.title }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.text })
									]
								}, service.num);
							})
						}) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "process",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "section-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Como eu trabalho"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Do conceito ao projeto" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "process-track",
							children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "process-step",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "process-num",
										children: step.num
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text })
								]
							}, step.num))
						}) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "lab",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "section-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Laboratório Crocoeduu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Um espaço para projetos, experimentos, ideias e tecnologias que estou explorando." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "terminal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "terminal-bar",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "terminal-title",
										children: "lab@crocoeduu — zsh"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "terminal-body",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "term-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-prompt",
											children: "$"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-cmd",
											children: "ls ./laboratorio"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "term-line",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-out",
											children: "01 / web"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "term-line",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-out",
											children: "02 / ui"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "term-line",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-out",
											children: "03 / experimentos"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "term-line",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-out",
											children: "04 / sistemas"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "term-line",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "term-prompt",
												children: "$"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "term-cmd",
												children: "status"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "cursor" })
										]
									})
								]
							})]
						}) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "tech",
					id: "tecnologias",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "section-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Tecnologias"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Ferramentas que uso no dia a dia" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "tech-grid",
							children: TECH.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "tech-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tech-code",
										children: item.code
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "tech-icon",
										children: item.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })
								]
							}, item.code))
						}) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "diff",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "section-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Por que Crocoeduu?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Diferenciais" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "diff-grid",
							children: DIFFS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "diff-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { strokeWidth: 2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						}) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "impact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Não é apenas sobre criar um site.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "dim",
								children: "É sobre transformar uma ideia em algo real."
							})
						] }) })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "contact",
					id: "contato",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "contact-inner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Vamos criar algo?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tem uma ideia, projeto ou negócio que precisa de uma presença digital?" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "lede",
									children: "Vamos conversar."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									className: "btn btn-primary",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Falar comigo pelo WhatsApp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contact-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/logo.jpg",
										alt: "Crocoeduu",
										width: 28,
										height: 28
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CROCOEDUU — Desenvolvimento Web" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "social-row",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: WHATSAPP_URL,
											className: "social-btn live",
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": "WhatsApp",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												viewBox: "0 0 24 24",
												fill: "none",
												strokeWidth: "1.5",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 11.5a8.5 8.5 0 01-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1121 11.5z" })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "social-btn soon",
											"aria-label": "Instagram (em breve)",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												viewBox: "0 0 24 24",
												fill: "none",
												strokeWidth: "1.5",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
														x: "3",
														y: "3",
														width: "18",
														height: "18",
														rx: "5"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														cx: "12",
														cy: "12",
														r: "4"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														cx: "17.5",
														cy: "6.5",
														r: "1",
														fill: "currentColor",
														stroke: "none"
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "social-btn soon",
											"aria-label": "GitHub (em breve)",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												viewBox: "0 0 24 24",
												fill: "none",
												strokeWidth: "1.5",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5 0-1-.5-2-1-2.5.5-1.2 0-2 0-2s-1 0-2.5 1a9 9 0 00-5 0C9 9.5 8 9.5 8 9.5s-.5.8 0 2c-.5.5-1 1.5-1 2.5 0 3.5 2.5 4.3 4.5 4.5-.6.6-.5 1-.5 2V21" })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "social-btn soon",
											"aria-label": "E-mail (em breve)",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												viewBox: "0 0 24 24",
												fill: "none",
												strokeWidth: "1.5",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "3",
													y: "5",
													width: "18",
													height: "14",
													rx: "2"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 7l9 6 9-6" })]
											})
										})
									]
								})
							]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { Home as component };

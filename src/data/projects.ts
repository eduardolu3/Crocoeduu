export type ProjectCategory = "sites" | "landing" | "sistemas" | "pessoal";

export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  categories: ProjectCategory[];
  tags: string[];
  location: string;
  status: string;
};

export const FILTERS: { id: "todos" | ProjectCategory; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "sites", label: "Sites" },
  { id: "landing", label: "Landing Pages" },
  { id: "sistemas", label: "Sistemas" },
  { id: "pessoal", label: "Projetos pessoais" },
];

export const PROJECTS: Project[] = [
  {
    id: "inove",
    title: "Inove Estética Automotiva",
    description:
      "Landing page premium para estética automotiva em Maringá. Polimento, vitrificação, higienização e detalhamento com o padrão Inove.",
    href: "https://previa-inove-estetica-automotiva.vercel.app/",
    image: "/projects/inove.jpg",
    categories: ["landing", "sites"],
    tags: ["Landing Page", "Estética automotiva"],
    location: "Maringá — PR",
    status: "Publicado",
  },
  {
    id: "vivasorriso",
    title: "VivaSorriso",
    description:
      "Site da Dra. Vitória Pasqualotto em Coronel Vivida. Odontologia com foco em sorrisos personalizados, facetas em resina e agendamento pelo WhatsApp.",
    href: "https://previa-vivasorriso.vercel.app/",
    image: "/projects/vivasorriso.jpg",
    categories: ["landing", "sites"],
    tags: ["Landing Page", "Odontologia"],
    location: "Coronel Vivida — PR",
    status: "Publicado",
  },
  {
    id: "beijaflor",
    title: "Odontologia Beija-Flor",
    description:
      "Presença digital para clínica odontológica em Maringá, com implantes, próteses, lentes de contato dental e avaliação 4,9 no Google.",
    href: "https://previa-odontologiabeijaflor.vercel.app/",
    image: "/projects/beijaflor.jpg",
    categories: ["landing", "sites"],
    tags: ["Landing Page", "Clínica odontológica"],
    location: "Maringá — PR",
    status: "Publicado",
  },
];

export const WHATSAPP_URL = "https://wa.me/message/N45H7GGRTK72I1";

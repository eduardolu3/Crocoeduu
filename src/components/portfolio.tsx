import { useMemo, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { FILTERS, PROJECTS, type ProjectCategory } from "@/data/projects";
import { Reveal } from "@/components/reveal";

type FilterId = "todos" | ProjectCategory;

export function Portfolio() {
  const [filter, setFilter] = useState<FilterId>("todos");

  const visible = useMemo(() => {
    if (filter === "todos") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const showEmpty = filter === "todos" || visible.length === 0;

  return (
    <section className="portfolio" id="projetos">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Projetos em destaque</p>
          <h2>Projetos, experiências e soluções que desenvolvi ou estou desenvolvendo.</h2>
        </Reveal>

        <Reveal>
          <div className="filters" role="group" aria-label="Filtrar projetos">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`filter-btn${filter === item.id ? " active" : ""}`}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="project-grid" id="project-grid">
            {visible.map((project) => (
              <article key={project.id} className="project-card">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-thumb"
                  aria-label={`Abrir ${project.title}`}
                >
                  <img src={project.image} alt={`Prévia do site ${project.title}`} />
                </a>
                <div className="project-body">
                  <div className="project-tags">
                    <span className="tag status">{project.status}</span>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-foot">
                    <span className="tag">{project.location}</span>
                    <a
                      href={project.href}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver projeto
                      <ArrowUpRight strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </article>
            ))}

            {showEmpty ? (
              <div className="project-card empty-slot" aria-hidden={visible.length > 0}>
                <Plus strokeWidth={1.5} />
                <span>Novo projeto em breve</span>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

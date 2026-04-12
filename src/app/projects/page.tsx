import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import projects from "./projects";

const title = SITE_CONFIG.NAME + " : Projects";

export const metadata: Metadata = {
  title: title,
  description: SITE_CONFIG.Description,
};

export default function Home() {
  return (
    <main className="main">
      <section className="about section">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              These projects represent key systems and solutions I have designed and built across multiple organizations and independent work.
            </div>
          </div>
          {projects.map((category) => (
            <div key={category.title} className="mb-5">
              
              {/* Category Title */}
              <h2 className="mb-4">{category.title}</h2>

              <div className="row">
                {category.items.map((project, i) => (
                  <div
                    key={project.project_title}
                    className="col-lg-6 col-md-12 mb-4"
                  >
                    <div className="card h-100 shadow-sm p-3">

                      <h5>{project.project_title}</h5>

                      <p><b>Skills:</b> {project.skills}</p>

                      {project.role && (
                        <p><b>Role:</b> {project.role}</p>
                      )}

                      {project.responsibility && (
                        <p><b>Responsibility:</b> {project.responsibility}</p>
                      )}

                      <p>{project.description}</p>
                      {project.links && project.links.length > 0 && (
                        <div>
                          <b>Links:</b>
                          <ul>
                            {project.links.map((link, j) => (
                              <li key={j}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>
    </main>
  );
}

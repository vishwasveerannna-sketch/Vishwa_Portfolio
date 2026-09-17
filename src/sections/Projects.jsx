import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import Reveal from '../components/Reveal';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">Projects</h2>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <article className="group rounded-2xl border border-border bg-surface p-8 md:p-10 hover:border-signal-dim transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <p className="text-signal text-sm font-medium">{project.date}</p>
                    <h3 className="font-display font-semibold text-2xl md:text-[1.75rem] text-ink mt-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-muted leading-relaxed max-w-2xl">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-border text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-ink/85 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-5 mt-8 pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-sm font-medium text-ink hover:text-signal transition-colors"
                  >
                    View details
                  </button>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-signal transition-colors"
                    >
                      <GithubIcon size={15} /> GitHub
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 text-sm text-faint cursor-not-allowed"
                      title="Add your repository link in portfolioData.js"
                    >
                      <GithubIcon size={15} /> GitHub link coming soon
                    </span>
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-signal transition-colors"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

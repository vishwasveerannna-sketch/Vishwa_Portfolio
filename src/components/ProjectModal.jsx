import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-surface border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 text-muted hover:text-ink transition-colors"
        >
          <X size={22} />
        </button>

        <p className="text-signal text-sm font-medium">{project.date}</p>
        <h3 id="project-modal-title" className="font-display font-semibold text-2xl md:text-3xl text-ink mt-2">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full border border-border text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>

        <dl className="mt-8 space-y-6">
          <div>
            <dt className="text-sm font-medium text-muted">Problem</dt>
            <dd className="mt-1.5 text-ink/90 leading-relaxed">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">Solution</dt>
            <dd className="mt-1.5 text-ink/90 leading-relaxed">{project.solution}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">Key features</dt>
            <dd className="mt-1.5">
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-ink/90 leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">My contribution</dt>
            <dd className="mt-1.5 text-ink/90 leading-relaxed">{project.contribution}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">Outcome</dt>
            <dd className="mt-1.5 text-ink/90 leading-relaxed">{project.outcome}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

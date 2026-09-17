import Reveal from '../components/Reveal';
import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
            What I work with
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-12">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <h3 className="text-sm font-medium text-muted mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full border border-border text-sm text-ink/90 bg-surface hover:border-signal-dim transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

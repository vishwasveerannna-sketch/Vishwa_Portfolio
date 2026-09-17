import Reveal from '../components/Reveal';
import { education, languages } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-16">
        <div>
          <Reveal>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">Education</h2>
          </Reveal>

          <ol className="mt-12 relative border-l border-border pl-8 space-y-12">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 100} as="li" className="relative">
                <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-signal ring-4 ring-base" />
                <p className="text-signal text-sm font-medium">{item.period}</p>
                <h3 className="font-display font-semibold text-lg text-ink mt-1.5">{item.degree}</h3>
                <p className="text-muted mt-1">{item.institution}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <Reveal delay={100}>
            <h3 className="font-display font-semibold text-xl text-ink">Languages</h3>
            <div className="mt-6 space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-3.5"
                >
                  <span className="text-ink/90">{lang.name}</span>
                  <span className="text-sm text-muted">{lang.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

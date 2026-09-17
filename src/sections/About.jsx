import Reveal from '../components/Reveal';
import { aboutPoints, summary } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">About</h2>
          <p className="mt-6 text-muted leading-relaxed max-w-md">{summary}</p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-4">
            {aboutPoints.map((point) => (
              <li key={point} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
                <span className="text-ink/90 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

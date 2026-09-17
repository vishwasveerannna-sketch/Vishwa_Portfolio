import { Award, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
            Certifications
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 flex flex-col">
                <Award className="text-signal" size={22} />
                <h3 className="font-display font-semibold text-lg text-ink mt-4">{cert.title}</h3>
                <p className="text-sm text-muted mt-1">
                  {cert.organization}
                  {cert.date ? `, ${cert.date}` : ''}
                </p>
                <p className="text-sm text-ink/80 leading-relaxed mt-4 flex-1">{cert.details}</p>

                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-signal mt-6"
                  >
                    <ExternalLink size={14} /> View certificate
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-faint mt-6" title="Add your certificate link in portfolioData.js">
                    <ExternalLink size={14} /> Certificate link coming soon
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

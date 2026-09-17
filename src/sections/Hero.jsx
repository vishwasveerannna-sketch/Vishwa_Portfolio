import { ArrowDownToLine } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import NodeNetwork from '../components/NodeNetwork';
import { profile } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <p className="text-signal text-sm font-medium mb-5">{profile.role}</p>

          <h1 className="font-display font-semibold text-[2.75rem] leading-[1.05] md:text-[4.25rem] md:leading-[1.03] text-ink">
            Hi, I&apos;m {profile.name}.
            <br />
            <span className="text-muted">I build practical AI &amp;</span>
            <br />
            <span className="text-muted">software solutions.</span>
          </h1>

          <p className="mt-7 text-muted text-base md:text-lg max-w-lg leading-relaxed">
            {profile.location}. Currently pursuing an MCA in AI &amp; Data Science, and building
            projects around machine learning, data and full-stack development along the way.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-signal text-base font-medium px-6 py-3 text-sm hover:bg-signal-dim transition-colors"
            >
              View my projects
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border text-ink font-medium px-6 py-3 text-sm hover:border-signal hover:text-signal transition-colors"
            >
              <ArrowDownToLine size={16} />
              Download résumé
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted hover:text-signal transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted hover:text-signal transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div className="relative h-72 md:h-[420px]">
          <div className="absolute inset-0 rounded-2xl border border-border bg-surface/40" />
          <NodeNetwork className="absolute inset-0 w-full h-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

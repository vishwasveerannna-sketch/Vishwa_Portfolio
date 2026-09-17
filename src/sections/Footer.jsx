import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-ink">{profile.name}</p>
          <p className="text-sm text-muted mt-0.5">MCA (AI &amp; Data Science), building AI/ML and software</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-signal transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-signal transition-colors">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-signal transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-sm text-faint">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

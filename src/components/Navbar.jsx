import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { nav, profile } from '../data/portfolioData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/90 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#home" className="font-display font-semibold text-lg text-ink">
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-muted hover:text-signal transition-colors"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted hover:text-signal transition-colors"
          >
            <LinkedinIcon size={19} />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-ink"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-base border-t border-border px-6 py-6">
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block text-base text-ink py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted">
              <GithubIcon size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

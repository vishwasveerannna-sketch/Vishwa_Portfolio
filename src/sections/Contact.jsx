import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import Reveal from '../components/Reveal';
import { profile } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // No backend is wired up. This opens the user's mail client with the
    // message pre-filled, so nothing is silently "sent" or stored.
    //
    // To send messages without opening a mail client instead, swap this
    // handler for a Formspree or EmailJS call — both accept a plain POST
    // from a form like this one. See README.md for setup notes.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-md">
            I&apos;m always interested in learning, building practical projects, collaborating,
            and exploring opportunities in AI, machine learning and software development.
          </p>

          <div className="mt-10 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-ink/90 hover:text-signal transition-colors">
              <Mail size={18} className="text-signal" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-ink/90 hover:text-signal transition-colors">
              <Phone size={18} className="text-signal" /> {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ink/90 hover:text-signal transition-colors">
              <GithubIcon size={18} className="text-signal" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ink/90 hover:text-signal transition-colors">
              <LinkedinIcon size={18} className="text-signal" /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-muted mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-ink placeholder:text-faint focus:border-signal outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-ink placeholder:text-faint focus:border-signal outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-ink placeholder:text-faint focus:border-signal outline-none resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-signal text-base font-medium px-6 py-3 text-sm hover:bg-signal-dim transition-colors"
            >
              Send message
            </button>
            <p className="text-xs text-faint">
              Opens your email client with this message pre-filled — nothing is stored or sent
              from this site directly.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

import React from 'react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const links = [
    {
      href: '/assets/Bifatima-CV-2025.pdf',
      label: 'My CV',
      newTab: true,
    },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Portfolio' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <nav className="container flex items-center justify-between py-4">
        <a
          href="#"
          className="font-semibold bg-brand-gradient bg-clip-text text-transparent"
        >
          Bifatima Seisembayeva
        </a>

        <button
          className="md:hidden p-2 rounded border"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="i">☰</span>
        </button>

        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...(l.newTab
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="text-slate-700 hover:text-brand-pink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="md:hidden container py-2 space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...(l.newTab
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default function Button({ children, variant="primary", href, onClick }) {
  const base = "inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition-shadow";
  const variants = {
    primary: "text-white shadow-soft bg-brand-gradient hover:shadow-lg",
    ghost:   "text-brand-purple border border-pink-200/70 bg-white/60 backdrop-blur hover:bg-white",
  };
  const className = `${base} ${variants[variant] || variants.primary}`;
  return href ? (
    <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>
  ) : (
    <button className={className} onClick={onClick}>{children}</button>
  );
}

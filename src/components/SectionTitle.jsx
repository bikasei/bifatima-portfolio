export default function SectionTitle({ id, children, subtitle }) {
  return (
    <div id={id} className="container py-16">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold bg-brand-gradient bg-clip-text text-transparent">
        {children}
      </h2>

      <div className="mt-4 flex items-center justify-center gap-3 text-brand-purple">
        <span className="h-px w-10 bg-brand-gradient rounded" />
        <span className="h-2 w-2 rounded-full bg-brand-gradient" />
        <span className="h-px w-10 bg-brand-gradient rounded" />
      </div>

      {subtitle && (
        <p className="mt-4 text-center text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}

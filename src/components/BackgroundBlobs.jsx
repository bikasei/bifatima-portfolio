export default function BackgroundBlobs() {
  // purely decorative
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(closest-side, rgba(124,58,237,.35), transparent)',
        }}
      />
      <div
        className="absolute -bottom-20 -right-16 h-80 w-80 rounded-full blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(closest-side, rgba(236,72,153,.35), transparent)',
        }}
      />
      <div
        className="absolute top-1/3 left-10 h-56 w-56 rounded-full blur-3xl opacity-30"
        style={{
          background:
            'radial-gradient(closest-side, rgba(99,102,241,.30), transparent)',
        }}
      />
    </div>
  );
}

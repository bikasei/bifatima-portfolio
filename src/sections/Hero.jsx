import BackgroundBlobs from '../components/BackgroundBlobs.jsx';
import Button from '../components/Button.jsx';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-indigo-50" />
      <BackgroundBlobs />

      <div className="container relative py-24 md:py-36 text-center">
        <img
          src="/assets/profile-pic.webp"
          alt="Bifatima's profile picture"
          className=" inline-flex items-center w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
        />

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
          Hello, I’m{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Bifatima
          </span>
        </h1>

        <div className="mt-4 flex items-center justify-center gap-3 text-brand-purple">
          <span className="h-px w-12 bg-brand-gradient rounded" />
          <span className="h-2 w-2 rounded-full bg-brand-gradient" />
          <span className="h-px w-12 bg-brand-gradient rounded" />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-slate-600">
          Full-Stack Software Engineering graduate with a background in digital
          production and marketing. I build clean, user-focused web apps and
          seeking for front-end or software engineering roles.
        </p>
      </div>
    </section>
  );
}

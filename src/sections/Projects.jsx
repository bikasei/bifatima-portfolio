import SectionTitle from '../components/SectionTitle';

const projects = [
  {
    title: 'Portfolio and Blog Template',
    description:
      'A modern blog and portfolio website built for Fariza (my friend), a political journalist. Designed to highlight her published articles, projects, and professional background with a clean, responsive layout and easy navigation.',
    tech: ['HTML', 'CSS', 'React', 'Vite'],
    live: 'https://fariza-blog.netlify.app/',
    repo: 'https://github.com/bikasei/fariza-blog-template',
    image: './assets/fariza-blog.webp',
  },

  {
    title: 'Scent Finder - The White Company',
    description:
      'Interactive product-recommendation tool that guides users through a series of questions to match them with the perfect fragrance, enhancing personalisation and customer experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API', 'Dynamic Yield'],
    live: 'https://www.thewhitecompany.com/uk/help/scent-finder',
    image: './assets/scent-finder.webp',
  },
  {
    title: 'Navigation Flyout - The White Company',
    description:
      'Interactive navigation component built to improve user access to The Thread, The White Company’s online magazine. When users hover over The Thread in the navigation, a flyout reveals categories, providing a seamless and intuitive browsing experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Dynamic Yield'],
    live: 'https://www.thewhitecompany.com/uk/',
    image: './assets/nav-flyout.webp',
  },

  {
    title: 'Color Pallete Generator',
    description:
      'A simple web app to create random palettes or build schemes from a chosen colour using TheColorAPI.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'LocalStorage',
      'Fetch API',
      'ES Modules',
      'MVC pattern',
    ],
    live: 'https://melodious-marigold-563e4b.netlify.app/',
    repo: 'https://github.com/bikasei/color-palette-generator',
    image: './assets/color-palette.webp',
  },
  {
    title: 'Pantry to Plate ',
    description:
      'A modular web app to manage pantry items, search recipes via API, and plan weekly meals.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'LocalStorage',
      'Fetch API',
      'ES Modules',
      'MVC pattern',
    ],
    live: 'https://melodious-marigold-563e4b.netlify.app/',
    repo: 'https://github.com/bikasei/pantry-to-plate',
    image: './assets/pantry-to-plate.webp',
  },
  {
    title: 'Grocery List App ',
    description:
      'A console-based JavaScript app built with Object-Oriented Programming. Users can add groceries, view their list, and cross off purchased items.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'http://gentle-rolypoly-58b6e1.netlify.app/',
    repo: 'https://github.com/bikasei/grocery-app-opp',
    image: './assets/grocery-list.webp',
  },

  {
    title: 'SVG Project',
    description: 'A hand coded SVG project using HTML and CSS',
    tech: ['HTML', 'CV'],
    live: 'https://peppy-banoffee-0e7b16.netlify.app/',
    repo: 'https://github.com/bikasei/svg-project',
    image: './assets/svg-project.webp',
  },
  {
    title: 'Clipboard Landing Page ',
    description:
      'Responsive landing page built with HTML and CSS, replicating Figma design across desktop and mobile.',
    tech: ['HTML', 'CSS', 'Figma'],
    live: 'https://grand-griffin-1a2f07.netlify.app/',
    repo: 'https://github.com/bikasei/clipboard-landing-page',
    image: './assets/clipboard-landing.webp',
  },
  {
    title: 'Four Card Feature Section',
    description:
      'Responsive feature section built with HTML and CSS, replicating a Figma design across desktop, mobile and tablet.',
    tech: ['HTML', 'CSS', 'Figma'],
    live: 'https://superb-bavarois-78b376.netlify.app/',
    repo: 'https://github.com/bikasei/four-card-feature-section',
    image: './assets/figma-feature.webp',
  },
  {
    title: 'HTML and CSS CV ',
    description: 'A CV made with pure HTML and CSS.',
    tech: ['HTML', 'CSS'],
    live: 'https://strong-swan-ced673.netlify.app/',
    repo: 'https://github.com/bikasei/bifatima-cv',
    image: './assets/new-html-cv.webp',
  },
];

export default function Projects() {
  return (
    <>
      <SectionTitle id="projects">Projects</SectionTitle>

      <div className="container -mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="rounded-soft border bg-white/60 backdrop-blur shadow-card overflow-hidden"
          >
            {/* screenshot */}
            <div className="relative">
              <img
                src={p.image}
                alt={p.alt}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              {/* soft gradient number badge */}
              <div
                className="absolute top-3 left-3 rounded-soft px-4 py-2 text-sm text-brand-purple"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(252,231,243,.9), rgba(221,214,254,.9))',
                }}
              >
                {(i + 1).toString().padStart(2, '0')}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-pill border border-pink-200/70 bg-white/70 backdrop-blur px-3 py-1 text-xs text-brand-purple"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-4 text-sm">
                <a
                  className="underline underline-offset-4"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <a
                  className="underline underline-offset-4"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container mt-10 text-center">
        <a
          href="#projects"
          className="inline-block rounded-pill bg-brand-gradient px-6 py-3 text-white shadow-soft"
        >
          View Full Portfolio
        </a>
      </div>
    </>
  );
}

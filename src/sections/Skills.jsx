import SectionTitle from '../components/SectionTitle.jsx';

const groups = [
  {
    title: 'Frontend Development',
    colour: 'from-pink-100 to-pink-50',
    items: [
      'HTML5 & CSS3',
      'JavaScript (ES6+',
      'React.js',
      'Vue.js',
      'Next.js',
      'TypeScript',
      'State Management',
      'Tailwind CSS',
      'Responcive design & Media Queries',
    ],
  },
  {
    title: 'Backend & Database',
    colour: 'from-violet-100 to-indigo-50',
    items: [
      'Node.js & Express.js',
      'RESTful APIs & Graph QL',
      'Authentification',
      'PostgreSQL',
      'MongoDB',
      'Severless Functions',
    ],
  },
  {
    title: 'Design & Tools',
    colour: 'from-blue-100 to-sky-50',
    items: [
      'Figma',
      'UI/UX Design Prototyping',
      'Git & GitHub',
      'Testing (Jest)',
      'CI/CS (basics)',
      'Hosting & Deployment',
    ],
  },
];

export default function Skills() {
  return (
    <>
      <SectionTitle id="skills">Skills & Expertise</SectionTitle>

      <div className="container -mt-10 grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-soft border bg-white/70 backdrop-blur p-6 shadow-card"
          >
            <h3 className="mt-4 text-xl font-semibold text-brand-purple">
              {g.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-pill bg-white/80 border px-4 py-2 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <>
      <SectionTitle id="about">About Me</SectionTitle>

      <div className="container -mt-10">
        <div className="rounded-soft border bg-white/70 backdrop-blur p-8 shadow-card">
          <p className="max-w-10xl">
            I’m a front-end developer with a background in digital production
            and a Master’s in Strategic Marketing. After completing a Full-Stack
            Software Engineering bootcamp, I’ve built projects that combine
            strong technical skills with a sharp eye for design and user
            experience. I’m now looking to bring this blend of creativity and
            technical expertise into front-end development or software
            engineering roles, where I can contribute to building clean,
            engaging, and user-focused applications.
          </p>
        </div>
      </div>
    </>
  );
}

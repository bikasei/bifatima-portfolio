import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <>
      <SectionTitle id="about">About Me</SectionTitle>

      <div className="container -mt-10">
        <div className="rounded-soft border bg-white/70 backdrop-blur p-8 shadow-card">
          <p className="max-w-10xl">
            I’m a software engineer transitioning from a digital production background, with a Master’s in Strategic Marketing. After completing a Full-Stack Software Engineering bootcamp, I’ve built hands-on projects using HTML, CSS, JavaScript, React, and Node.js that showcase both my technical problem-solving and my eye for clean, user-centred design. I’m now seeking a software engineering or front-end development roles where I can continue learning, collaborate on meaningful projects, and contribute to building engaging, accessible applications.
          </p>
        </div>
      </div>
    </>
  );
}

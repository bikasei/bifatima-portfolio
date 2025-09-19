import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import Button from '../components/Button.jsx';

export default function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio contact');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:bifatima123@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <SectionTitle id="contact">Contact Me</SectionTitle>

      <div className="container -mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-soft border bg-white/70 backdrop-blur p-6 shadow-card">
          <h3 className="font-semibold text-brand-purple">Ways to Connect</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              📧 Email —{' '}
              <a className="underline" href="mailto:bifatima123@gmail.com">
                bifatima123@gmail.com
              </a>
            </li>
            <li>
              💼 LinkedIn —{' '}
              <a
                className="underline"
                href="https://www.linkedin.com/in/bifatima-sei/"
                target="_blank"
                rel="noreferrer"
              >
                /in/bifatima-sei/
              </a>
            </li>
            <li>
              🐙 GitHub —{' '}
              <a
                className="underline"
                href="https://github.com/bikasei"
                target="_blank"
                rel="noreferrer"
              >
                /bikasei
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-soft border bg-white/70 backdrop-blur p-6 shadow-card space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              className="mt-1 w-full rounded-pill border bg-white/90 p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="mt-1 w-full rounded-pill border bg-white/90 p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Message</label>
            <textarea
              rows="5"
              className="mt-1 w-full rounded-soft border bg-white/90 p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button>Send Message 💌</Button>
        </form>
      </div>
    </>
  );
}

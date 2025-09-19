import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t mt-16">
        <div className="container py-8 text-sm text-slate-500">
          Made with 💜 by Bifatima Seisembayeva © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

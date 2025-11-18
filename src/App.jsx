import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* background pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_20%_-50px,rgba(59,130,246,0.08),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10 mt-10">
        <div className="container mx-auto px-6 text-center text-blue-200/70">
          © {new Date().getFullYear()} – Built with FastAPI, React & Spline.
        </div>
      </footer>
    </div>
  )
}

export default App

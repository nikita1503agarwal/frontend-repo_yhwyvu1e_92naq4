const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-blue-200/80 leading-relaxed">
            I’m a full‑stack engineer who loves turning complex ideas into simple, playful experiences.
            I work across the stack with a focus on performance, accessibility, and developer experience.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-blue-200/80">
            <li className="bg-white/5 ring-1 ring-white/10 px-4 py-3 rounded-xl">React • Vite • Tailwind</li>
            <li className="bg-white/5 ring-1 ring-white/10 px-4 py-3 rounded-xl">FastAPI • Python</li>
            <li className="bg-white/5 ring-1 ring-white/10 px-4 py-3 rounded-xl">MongoDB • REST</li>
            <li className="bg-white/5 ring-1 ring-white/10 px-4 py-3 rounded-xl">CI/CD • Testing</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-white/10" />
          <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[0_0_60px_rgba(59,130,246,0.25)_inset]" />
        </div>
      </div>
    </section>
  )
}

export default About
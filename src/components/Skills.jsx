const skills = [
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { group: 'Backend', items: ['FastAPI', 'Python', 'MongoDB', 'REST'] },
  { group: 'DevOps', items: ['Docker', 'CI/CD', 'Vercel', 'Fly.io'] },
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills & Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-3">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="text-xs text-blue-200/80 bg-blue-500/10 ring-1 ring-blue-400/30 px-2 py-1 rounded-full">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

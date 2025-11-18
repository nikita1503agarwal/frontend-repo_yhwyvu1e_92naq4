import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error('Failed to load projects', e)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
        </div>

        {loading ? (
          <p className="text-blue-200/80">Loading projects…</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <a key={i} href={p.link || p.repo || '#'} target="_blank" rel="noreferrer" className="group">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-sm">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="h-48 w-full object-cover group-hover:scale-105 transition" />
                  ) : (
                    <div className="h-48 w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      {p.featured && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 ring-1 ring-amber-300/30">Featured</span>}
                      {p.year && <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80 ring-1 ring-white/20">{p.year}</span>}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="text-sm text-blue-200/80 mt-1">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(p.tags || []).map((t, idx) => (
                        <span key={idx} className="text-xs text-blue-200/80 bg-blue-500/10 ring-1 ring-blue-400/30 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
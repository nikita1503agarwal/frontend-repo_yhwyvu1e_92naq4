import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus({ ok: true, message: 'Thanks! I will get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus({ ok: false, message: 'Something went wrong. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-blue-200/80">Have a project in mind or just want to say hi? Drop a message and I’ll reply within 24h.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Name</label>
              <input name="name" required value={form.name} onChange={handleChange} className="w-full rounded-lg bg-black/30 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Email</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-lg bg-black/30 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Message</label>
              <textarea name="message" rows="4" required value={form.message} onChange={handleChange} className="w-full rounded-lg bg-black/30 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-blue-400" />
            </div>
            <button disabled={loading} className="px-5 py-2.5 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition disabled:opacity-50">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {status && (
              <p className={`${status.ok ? 'text-emerald-300' : 'text-red-300'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

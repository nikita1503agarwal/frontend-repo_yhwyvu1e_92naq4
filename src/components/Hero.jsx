import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* soft radial glow behind content */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_50%_-100px,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="container mx-auto px-6 pt-20 pb-8 md:pt-28 md:pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/30">
              Full‑Stack Developer
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-white">
              Building modern, playful, high‑impact apps
            </h1>
            <p className="mt-4 text-blue-200/80 leading-relaxed">
              I design and develop end‑to‑end products that feel fast, polished, and fun.
              Explore selected work, the stack I love, and ways to collaborate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition ring-1 ring-white/10">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative h-[360px] md:h-[520px]">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[0_0_60px_rgba(59,130,246,0.35)_inset]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

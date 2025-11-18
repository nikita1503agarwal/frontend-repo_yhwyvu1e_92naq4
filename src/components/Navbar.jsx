const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/80 border-b border-white/10">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">Dev Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-200/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
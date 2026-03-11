export default function Hero() {
  return (
    <section id="hero" className="rounded-3xl border border-slate-800 bg-gradient-to-r from-violet-900/40 to-blue-900/40 p-8 md:p-14">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Hello, I&apos;m</p>
      <h1 className="mt-3 text-4xl font-bold md:text-6xl">Swati Hegde</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-300">
        AI Engineer and Full Stack Developer building cloud-native platforms, distributed systems, and intelligent automation.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="#projects" className="rounded-full bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500">
          View Projects
        </a>
        <a
          href="/resume-swati-hegde.pdf"
          download
          className="rounded-full border border-slate-600 px-6 py-3 font-semibold transition hover:border-violet-400 hover:text-violet-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

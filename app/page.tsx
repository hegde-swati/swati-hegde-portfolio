import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Chatbot from "../components/Chatbot";
import { profileData } from "../profileData";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 py-8 md:px-8 md:py-12">
      <nav className="sticky top-0 z-40 flex flex-wrap gap-3 rounded-full border border-slate-800 bg-slate-950/80 p-2 backdrop-blur">
        {[
          ["Hero", "hero"],
          ["About", "about"],
          ["Skills", "skills"],
          ["Projects", "projects"],
          ["Experience", "experience"],
          ["GitHub", "github"],
          ["Contact", "contact"]
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white">
            {label}
          </a>
        ))}
      </nav>

      <Hero />

      <section id="about" className="space-y-4">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="max-w-4xl leading-8 text-slate-300">
          Swati Hegde is an AI Engineer and Full Stack Developer who specializes in cloud-native microservices, distributed systems,
          and AI-driven automation platforms. She combines enterprise engineering practices with applied AI to build resilient,
          production-ready systems.
        </p>
      </section>

      <Skills />
      <Projects />

      <section id="experience" className="space-y-4">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-xl font-semibold text-violet-300">Infosys</h3>
          <p className="mt-2 text-slate-300">Built enterprise platforms with microservices and cloud technologies.</p>
          <p className="mt-3 text-slate-400">Delivered cloud-native systems with 99.9% uptime and automation tooling that reduced developer effort by up to 40%.</p>
        </div>
      </section>

      <section id="github" className="space-y-4">
        <h2 className="text-3xl font-semibold">GitHub Activity</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {["Open Source Contributions", "Recent Commits", "Tech Focus"].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="font-semibold text-violet-300">{item}</h3>
              <p className="mt-2 text-sm text-slate-300">Connect a GitHub username to render live repositories, commit charts, and language usage.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-4 pb-20">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-slate-300">Open to AI engineering and full-stack opportunities. Let&apos;s build scalable, intelligent products together.</p>
        <div className="flex flex-wrap gap-3">
          <a className="rounded-full bg-violet-600 px-5 py-2 font-medium hover:bg-violet-500" href="mailto:swati@example.com">
            Email Swati
          </a>
          <a className="rounded-full border border-slate-600 px-5 py-2 font-medium hover:border-violet-400" href="#hero">
            Back to Top
          </a>
        </div>
        <details className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <summary className="cursor-pointer text-slate-200">Raw profileData.ts content</summary>
          <pre className="mt-3 whitespace-pre-wrap text-xs leading-6 text-slate-400">{profileData}</pre>
        </details>
      </section>

      <Chatbot />
    </main>
  );
}

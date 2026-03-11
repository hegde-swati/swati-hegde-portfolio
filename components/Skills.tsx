const skillGroups = {
  Languages: ["Java", "Python", "TypeScript"],
  Cloud: ["Kubernetes", "OpenShift", "Azure", "Docker"],
  Data: ["PostgreSQL", "MongoDB", "Kafka"],
  AI: ["LLMs", "RAG Pipelines", "OpenAI APIs"]
};

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skillGroups).map(([group, items]) => (
          <div key={group} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <h3 className="text-lg font-semibold text-violet-300">{group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

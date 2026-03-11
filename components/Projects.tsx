import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI-Driven Incident Intelligence Platform",
    description:
      "Analyzes distributed system logs, detects incidents in real time, identifies likely root causes using LLM + RAG, and suggests actionable remediation steps.",
    stack: ["Java", "Kafka", "Kubernetes", "LLMs", "RAG"]
  },
  {
    title: "Enterprise Microservices Platform",
    description:
      "Designed and shipped high-availability services for enterprise workflows with API-first architecture and observability baked in.",
    stack: ["Spring Boot", "PostgreSQL", "Docker", "Azure"]
  },
  {
    title: "Developer Automation Toolkit",
    description:
      "Automation suite that streamlined SDLC workflows and reduced repetitive developer effort by up to 40%.",
    stack: ["TypeScript", "Python", "CI/CD", "OpenShift"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

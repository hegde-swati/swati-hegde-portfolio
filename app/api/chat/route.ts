import { NextResponse } from "next/server";
import { profileData } from "../../../profileData";

const snippets: Record<string, string> = {
  skills: "Swati's skills include Java, Python, TypeScript, Kubernetes, OpenShift, Azure, Docker, PostgreSQL, and MongoDB.",
  education: "Swati holds a Master of Computer Science from Cleveland State University with a GPA of 4.0.",
  experience: "Swati worked at Infosys building enterprise platforms with microservices and cloud technologies.",
  project:
    "A key project is the AI-Driven Incident Intelligence Platform that analyzes logs, detects incidents, identifies root causes using LLM + RAG, and recommends remediation.",
  technologies: "Key technologies include Java, Spring Boot, Kafka, Kubernetes, LLMs, RAG pipelines, and OpenAI APIs."
};

export async function POST(request: Request) {
  const { message } = (await request.json()) as { message?: string };

  if (!message) {
    return NextResponse.json({ reply: "Please ask a question about Swati's profile." }, { status: 400 });
  }

  const lower = message.toLowerCase();
  const match = Object.entries(snippets).find(([key]) => lower.includes(key));

  if (match) {
    return NextResponse.json({ reply: match[1] });
  }

  return NextResponse.json({
    reply: `Here is Swati's full profile context:\n\n${profileData.trim()}`
  });
}

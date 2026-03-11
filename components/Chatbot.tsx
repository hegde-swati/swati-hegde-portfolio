"use client";

import { FormEvent, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hi! Ask me anything about Swati's profile, projects, or skills." }
  ]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!input.trim() || loading) {
      return;
    }

    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content })
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply ?? "I couldn't find that info yet." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I couldn't reach chat service." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[340px] rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <h3 className="font-semibold">Ask SwatiBot</h3>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          <div className="h-72 space-y-3 overflow-y-auto p-4">
            {messages.map((msg, idx) => (
              <div
                key={`${msg.role}-${idx}`}
                className={`max-w-[90%] rounded-xl px-3 py-2 text-sm ${
                  msg.role === "user" ? "ml-auto bg-violet-600 text-white" : "bg-slate-800 text-slate-100"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex gap-2 border-t border-slate-800 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, education..."
              className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-violet-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium disabled:opacity-70"
            >
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-violet-600 px-5 py-3 font-semibold shadow-lg transition hover:bg-violet-500"
        >
          Chat with SwatiBot
        </button>
      )}
    </div>
  );
}

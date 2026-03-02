"use client";

import { useState } from "react";
import { FiMessageSquare, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type ChatMessage = { role: "bot" | "user"; text: string };

const starter: ChatMessage[] = [
  { role: "bot", text: "Hi, I’m Filmy Assistant. Ask about menu, booking, or dish suggestions." },
];

const getBotReply = (input: string) => {
  const text = input.toLowerCase();
  if (text.includes("book") || text.includes("table") || text.includes("reservation")) {
    return "For quick booking, head to the Reservation section and choose your date/time. I can suggest a prime slot at 7:30 PM.";
  }
  if (text.includes("indian") || text.includes("spicy")) {
    return "Try Cinema Fire Tandoori Platter and Noir Pepper Lamb for a bold flavor profile.";
  }
  if (text.includes("vegetarian") || text.includes("veg")) {
    return "Royal Butter Truffle Paneer and Gold Leaf Saffron Risotto are premium vegetarian favorites.";
  }
  if (text.includes("menu") || text.includes("price")) {
    return "Open the Interactive Menu section to filter by cuisine and add dishes instantly.";
  }
  return "I can help with reservations, menu picks, and cuisine recommendations. What would you like tonight?";
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(starter);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userText }, { role: "bot", text: getBotReply(userText) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-3 w-[320px] rounded-2xl border border-white/10 bg-black/85 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Filmy AI Concierge</h3>
              <button onClick={() => setOpen(false)} className="text-xs text-muted">Close</button>
            </div>
            <div className="mb-3 h-56 space-y-2 overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-3">
              {messages.map((message, idx) => (
                <div
                  key={`${message.role}-${idx}`}
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    message.role === "bot" ? "bg-white/10 text-white" : "ml-auto bg-gold text-black"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && send()}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                placeholder="Ask for menu, reservation..."
                aria-label="Chat message"
              />
              <button
                onClick={send}
                className="rounded-lg bg-gold p-2 text-black transition hover:bg-gold/90"
                aria-label="Send message"
              >
                <FiSend />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-black shadow-glow transition hover:scale-105"
        aria-label="Open chat assistant"
      >
        <FiMessageSquare size={20} />
      </button>
    </div>
  );
}

import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppUrl } from "@/lib/site-config";

const link = buildWhatsAppUrl("Hi Filmy Food, I’d like to place an order.");

export function WhatsAppOrderButton() {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:scale-105 md:bottom-5 md:left-5"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp size={18} />
      Order on WhatsApp
    </a>
  );
}

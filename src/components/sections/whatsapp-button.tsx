import { FaWhatsapp } from "react-icons/fa";

const phone = "919999999999";
const message = encodeURIComponent("Hi Filmy Food, I’d like to place an order.");

export function WhatsAppOrderButton() {
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:scale-105"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp size={18} />
      Order on WhatsApp
    </a>
  );
}

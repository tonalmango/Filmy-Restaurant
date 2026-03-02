import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-6 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold text-white">Filmy Food</p>
          <p className="mt-3 text-sm text-muted">Luxury cinematic fine dining experience.</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Hours</p>
          <p className="mt-3 text-sm text-muted">Mon–Sun: 6:00 PM – 12:00 AM</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</p>
          <p className="mt-3 text-sm text-muted">+91 99999 99999</p>
          <p className="text-sm text-muted">hello@filmyfood.com</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Newsletter</p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none"
            />
            <button className="rounded-lg bg-gold px-4 py-2 text-sm font-medium text-black">Join</button>
          </form>

          <div className="mt-4 flex gap-3 text-white/80">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><FaInstagram /></a>
            <a href="#" aria-label="X" className="hover:text-gold"><FaXTwitter /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gold"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FormEvent, useMemo, useState } from "react";
import { getContactEmail, getContactPhoneDisplay, getSocialLinks } from "@/lib/site-config";

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const socialLinks = useMemo(() => getSocialLinks(), []);
  const instagramUrl = socialLinks.find((link) => link.label === "instagram")?.url;
  const xUrl = socialLinks.find((link) => link.label === "x")?.url;
  const youtubeUrl = socialLinks.find((link) => link.label === "youtube")?.url;
  const contactPhone = getContactPhoneDisplay();
  const contactEmail = getContactEmail();

  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    const subject = encodeURIComponent("Filmy Food Newsletter Request");
    const body = encodeURIComponent(`Please subscribe this email to updates: ${email.trim()}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubscribed(true);
    setEmail("");
  };

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
          <p className="mt-3 text-sm text-muted">{contactPhone}</p>
          <p className="text-sm text-muted">{contactEmail}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Newsletter</p>
          <form onSubmit={submitNewsletter} className="mt-3 flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none"
            />
            <button type="submit" className="rounded-lg bg-gold px-4 py-2 text-sm font-medium text-black">Join</button>
          </form>

          {subscribed ? <p className="mt-2 text-xs text-gold">Your mail app opened with a pre-filled subscription request.</p> : null}

          <div className="mt-4 flex gap-3 text-white/80">
            {instagramUrl ? (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold"><FaInstagram /></a>
            ) : null}
            {xUrl ? (
              <a href={xUrl} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-gold"><FaXTwitter /></a>
            ) : null}
            {youtubeUrl ? (
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold"><FaYoutube /></a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}

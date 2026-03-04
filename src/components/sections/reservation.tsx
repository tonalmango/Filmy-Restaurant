"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { RippleButton } from "@/components/ui/ripple-button";
import { buildWhatsAppUrl } from "@/lib/site-config";

const ReservationCalendar = dynamic(
  () => import("@/components/sections/reservation-calendar").then((m) => m.ReservationCalendar),
  {
    ssr: false,
    loading: () => <div className="h-[332px] animate-pulse rounded-xl bg-white/5" aria-hidden />,
  },
);

const timeSlots = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

export function ReservationSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>(timeSlots[2]);
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; date?: string }>({});

  const minDate = useMemo(() => new Date(), []);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: { name?: string; phone?: string; date?: string } = {};

    if (!name.trim()) nextErrors.name = "Name is required.";
    if (!/^\d{10}$/.test(phone.trim())) nextErrors.phone = "Enter a valid 10-digit phone number.";
    if (!date) nextErrors.date = "Please select a date.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const selectedDate = date ? date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "N/A";
    const bookingMessage = [
      "Hi Filmy Food, I'd like to reserve a table.",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Date: ${selectedDate}`,
      `Time: ${time}`,
      `Guests: ${guests}`,
    ].join("\n");

    const requestUrl = buildWhatsAppUrl(bookingMessage);
    window.open(requestUrl, "_blank", "noopener,noreferrer");

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="reservation" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionTitle
          eyebrow="Reservation"
          title="Reserve Your Premier Night"
          subtitle="Choose your ideal date, time, and party size with instant confirmation experience."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard className="overflow-hidden">
            <ReservationCalendar selected={date} onSelect={setDate} minDate={minDate} />
            {errors.date ? <p className="mt-2 text-sm text-red-300">{errors.date}</p> : null}
          </GlassCard>

          <GlassCard>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/85">Full Name</label>
                <input
                  id="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none ring-gold/30 focus:ring"
                />
                {errors.name ? <p className="mt-1 text-xs text-red-300">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-white/85">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none ring-gold/30 focus:ring"
                />
                {errors.phone ? <p className="mt-1 text-xs text-red-300">{errors.phone}</p> : null}
              </div>

              <div>
                <label htmlFor="time" className="mb-2 block text-sm text-white/85">Time Slot</label>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none ring-gold/30 focus:ring"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="guests" className="mb-2 block text-sm text-white/85">Guests</label>
                <input
                  id="guests"
                  type="number"
                  min={1}
                  max={20}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none ring-gold/30 focus:ring"
                />
              </div>

              <RippleButton type="submit" className="w-full justify-center">Confirm Reservation</RippleButton>

              {success ? (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-gold/20 px-4 py-3 text-sm text-gold"
                >
                  Reservation request opened in WhatsApp for {guests} guests at {time}.
                </motion.p>
              ) : null}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

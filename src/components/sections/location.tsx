import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { RippleButton } from "@/components/ui/ripple-button";
import { LazyMap } from "@/components/sections/lazy-map";
import { getMapDirectionsUrl } from "@/lib/site-config";

export function LocationSection() {
  const mapDirectionsUrl = getMapDirectionsUrl();

  return (
    <section id="location" className="px-6 py-8 sm:py-12 md:py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Location"
            title="Visit Filmy Food"
            subtitle="Lower Parel, Mumbai · valet available · private dining on request"
          />
          <GlassCard>
            <p className="text-sm leading-7 text-muted">
              Step into an intimate cinematic dining room minutes from the city center. Ideal for anniversaries,
              premium business dinners, and celebratory nights.
            </p>
            <a href={mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block">
              <RippleButton>Get Directions</RippleButton>
            </a>
          </GlassCard>
        </div>

        <GlassCard className="overflow-hidden p-0">
          <LazyMap />
        </GlassCard>
      </div>
    </section>
  );
}

import Script from "next/script";
import { HomePage } from "@/components/home-page";
import { getSiteUrl } from "@/lib/site-url";
import { getContactEmail, getContactPhoneDisplay } from "@/lib/site-config";

const siteUrl = getSiteUrl();

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Filmy Food",
  image: `${siteUrl}/og-image.jpg`,
  servesCuisine: ["Indian", "Chinese", "Italian", "Fusion"],
  priceRange: "₹₹₹₹",
  telephone: getContactPhoneDisplay(),
  email: getContactEmail(),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lower Parel",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400013",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:00",
      closes: "00:00",
    },
  ],
  url: siteUrl,
};

export default function Home() {
  return (
    <>
      <Script id="restaurant-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(restaurantSchema)}
      </Script>
      <HomePage />
    </>
  );
}

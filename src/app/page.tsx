import Script from "next/script";
import { HomePage } from "@/components/home-page";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Filmy Food",
  image: "https://filmyfood.com/og-image.jpg",
  servesCuisine: ["Indian", "Chinese", "Italian", "Fusion"],
  priceRange: "₹₹₹₹",
  telephone: "+91-99999-99999",
  email: "hello@filmyfood.com",
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
  url: "https://filmyfood.com",
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

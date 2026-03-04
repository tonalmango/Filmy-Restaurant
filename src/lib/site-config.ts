import { normalizeAbsoluteUrl } from "@/lib/site-url";

type SocialLink = {
  label: "instagram" | "x" | "youtube";
  url: string;
};

const DEFAULT_PHONE_DISPLAY = "+91 99999 99999";
const DEFAULT_PHONE_RAW = "919999999999";
const DEFAULT_EMAIL = "hello@filmyfood.com";
const DEFAULT_MAP_URL = "https://maps.google.com/?q=Lower+Parel+Mumbai";

function getDigits(input?: string, fallback = DEFAULT_PHONE_RAW) {
  const value = (input || "").replace(/\D/g, "");
  return value || fallback;
}

export function getContactPhoneDisplay() {
  return process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || DEFAULT_PHONE_DISPLAY;
}

export function getContactPhoneRaw() {
  return getDigits(process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW);
}

export function getContactEmail() {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_EMAIL;
}

export function getMapDirectionsUrl() {
  return normalizeAbsoluteUrl(process.env.NEXT_PUBLIC_MAPS_URL) || DEFAULT_MAP_URL;
}

export function buildWhatsAppUrl(message: string) {
  const phone = getContactPhoneRaw();
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getSocialLinks(): SocialLink[] {
  const candidates: SocialLink[] = [
    {
      label: "instagram",
      url: normalizeAbsoluteUrl(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "") || "",
    },
    {
      label: "x",
      url: normalizeAbsoluteUrl(process.env.NEXT_PUBLIC_SOCIAL_X || "") || "",
    },
    {
      label: "youtube",
      url: normalizeAbsoluteUrl(process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "") || "",
    },
  ];

  return candidates.filter((item) => item.url);
}

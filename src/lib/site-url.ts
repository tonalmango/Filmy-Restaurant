const DEFAULT_SITE_URL = "https://filmyfood.com";

export function getSiteUrl(): string {
  const rawValue = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawValue) {
    return DEFAULT_SITE_URL;
  }

  const sanitizedHost = rawValue.replace(/^\.+/, "").replace(/^\/+/, "");

  if (!sanitizedHost) {
    return DEFAULT_SITE_URL;
  }

  const candidate = /^https?:\/\//i.test(sanitizedHost)
    ? sanitizedHost
    : `https://${sanitizedHost}`;

  try {
    const parsed = new URL(candidate);

    parsed.pathname = "";
    parsed.search = "";
    parsed.hash = "";

    return parsed.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

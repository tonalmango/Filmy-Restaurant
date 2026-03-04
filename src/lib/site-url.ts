const DEFAULT_SITE_URL = "https://filmyfood.com";

export function normalizeAbsoluteUrl(rawValue?: string): string | null {
  if (!rawValue) {
    return null;
  }

  const sanitizedHost = rawValue.trim().replace(/^\.+/, "").replace(/^\/+/, "");

  if (!sanitizedHost) {
    return null;
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
    return null;
  }
}

export function getSiteUrl(): string {
  return normalizeAbsoluteUrl(process.env.NEXT_PUBLIC_SITE_URL) || DEFAULT_SITE_URL;
}

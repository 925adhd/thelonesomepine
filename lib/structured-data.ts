import { siteConfig } from "@/config/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.vendorLocation.venue}, ${siteConfig.vendorLocation.street}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.stateCode,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4801,
      longitude: -86.2939,
    },
    openingHoursSpecification: siteConfig.hours
      .filter((h) => h.open !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: convertTo24Hr(h.open),
        closes: convertTo24Hr(h.close),
      })),
    image: `${siteConfig.url}/images/og-image.jpg`,
    priceRange: "$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.4801,
        longitude: -86.2939,
      },
      geoRadius: "50000",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logotransparent.webp`,
    email: siteConfig.email,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.vendorLocation.venue}, ${siteConfig.vendorLocation.street}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.stateCode,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };
}

function convertTo24Hr(time12h: string): string {
  if (!time12h) return "";
  const [time, modifier] = time12h.split(" ");
  const [hoursStr, minutes] = time.split(":");
  let hours = parseInt(hoursStr, 10);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

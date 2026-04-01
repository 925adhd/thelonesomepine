export const siteConfig = {
  name: "The Lonesome Pine",
  tagline: "Unique & Healthy Houseplants in Leitchfield, KY",
  description:
    "The Lonesome Pine specializes in unique and healthy houseplants to help you style your home and life. A vendor inside The Rabbit Hole at 101 N Heyser Dr in Leitchfield, Grayson County, Kentucky.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thelonesomepine.com",
  locale: "en_US",
  phone: "",
  email: "thelonesomepine21@gmail.com",
  address: {
    street: "1116 Danny Sadler Road",
    city: "Leitchfield",
    state: "Kentucky",
    stateCode: "KY",
    zip: "42754",
    county: "Grayson County",
  },
  vendorLocation: {
    venue: "The Rabbit Hole",
    street: "101 N Heyser Dr",
    city: "Leitchfield",
    stateCode: "KY",
    zip: "42754",
  },
  social: {
    facebook: "https://facebook.com/thelonesomepine",
    instagram: "https://instagram.com/the_lonesome_pine",
  },
  rabbitHoleFacebook:
    "https://www.facebook.com/profile.php?id=61554443211620",
  hours: [
    { day: "Monday", open: "Closed", close: "" },
    { day: "Tuesday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "10:00 AM", close: "6:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "4:00 PM" },
    { day: "Sunday", open: "Closed", close: "" },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Plants", href: "/plants" },
    { label: "Visit", href: "/visit" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

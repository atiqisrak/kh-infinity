import { Anton } from "next/font/google";

// Condensed display face for every v3 page (exposed as --font-display, used by .display)
export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

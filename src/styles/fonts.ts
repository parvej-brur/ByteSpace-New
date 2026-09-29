import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
});

export const clashDisplay = localFont({
  variable: "--font-clash-display",
  src: [{ path: "../../public/fonts/ClashDisplay-Bold.woff2", weight: "700" }],
});

/** Applied on <html> so every font variable is available to Tailwind. */
export const fontVariables = `${poppins.variable} ${satoshi.variable} ${clashDisplay.variable}`;

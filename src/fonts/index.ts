import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const monaSans = localFont({
  src: "./MonaSans-Bold.woff2",
  variable: "--font-monaSans",
  weight: "700",
  display: "swap",
});

export { monaSans, plusJakarta };

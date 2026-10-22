import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OwnGen Digital Solar | Energy Beyond Your Roof",
  description: "Explore off-site solar projects, estimate potential bill coverage and discover a new digital solar experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

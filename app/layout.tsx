import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import { resume } from "@/lib/resume";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const title = `${resume.name} · ${resume.title}`;
const description = resume.about.description;
const baseUrl = "https://nithinthampi.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: `${resume.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@nithinthampi",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground",
          inter.variable,
          spaceGrotesk.variable,
        )}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex flex-col gap-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

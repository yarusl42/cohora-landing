import type { Metadata } from "next";
import "@/index.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cohora.org";
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Cohora - Less admin. More teaching.",
    template: "%s | Cohora",
  },
  description:
    "Cohora is tutoring management software for independent tutors: manage students, lessons, homework, attendance, and payments in one clear workspace.",
  keywords: [
    "tutoring management software",
    "tutor CRM",
    "tutoring CRM",
    "lesson management software",
    "homework management for tutors",
    "tutor payment tracking",
  ],
  authors: [{ name: "Cohora" }],
  creator: "Cohora",
  publisher: "Cohora",
  category: "Education",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Cohora",
    title: "Cohora - Less admin. More teaching.",
    description:
      "A clear workspace for independent tutors to manage students, lessons, homework, and payments.",
    ...(siteUrl ? { url: "/" } : {}),
    ...(siteUrl
      ? {
          images: [
            {
              url: "/opengraph-image",
              width: 1200,
              height: 630,
              alt: "Cohora - Less admin. More teaching.",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Cohora - Less admin. More teaching.",
    description:
      "A clear workspace for independent tutors to manage students, lessons, homework, and payments.",
    ...(siteUrl ? { images: ["/opengraph-image"] } : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

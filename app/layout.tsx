import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lexgosolutions.com"),
  title: "LexGo Solutions - Scale Your Personal Injury Practice Without Hiring Headaches",
  description: "Dedicated case management teams + AI-powered workflows for Personal Injury law firms. Handle more cases, close faster, and grow without the overhead. 40% faster case resolution, 60-90% lower costs.",
  keywords: "personal injury law firm, case management, legal outsourcing, PI firm scaling, legal AI tools, law firm staffing, medical records retrieval, demand letters, legal case management",
  authors: [{ name: "LexGo Solutions" }],
  creator: "LexGo Solutions",
  publisher: "LexGo Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexgosolutions.com",
    siteName: "LexGo Solutions",
    title: "LexGo Solutions - Scale Your Personal Injury Practice Without Hiring Headaches",
    description: "Dedicated case management teams + AI-powered workflows for Personal Injury law firms. Handle more cases, close faster, and grow without the overhead.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LexGo Solutions - Scale Your Personal Injury Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LexGo Solutions - Scale Your Personal Injury Practice Without Hiring Headaches",
    description: "Dedicated case management teams + AI-powered workflows for Personal Injury law firms. 40% faster case resolution.",
    images: ["/og-image.jpg"],
    creator: "@lexgosolutions",
  },
  alternates: {
    canonical: "https://lexgosolutions.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#0A1F44" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

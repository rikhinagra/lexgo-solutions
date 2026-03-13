import type { Metadata } from "next";
import Script from "next/script";
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
    google: "bP2TLEPStspqchG1JgopwomOSvFFJwrl7QANqGpZZA0",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "LexGo Solutions",
  "description": "Dedicated case management teams + AI-powered workflows for Personal Injury law firms. Handle more cases, close faster, and grow without the overhead.",
  "url": "https://lexgosolutions.com",
  "logo": "https://lexgosolutions.com/logo.png",
  "image": "https://lexgosolutions.com/og-image.jpg",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "hello@lexgosolutions.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://twitter.com/lexgosolutions",
    "https://linkedin.com/company/lexgosolutions"
  ],
  "serviceType": ["Legal Case Management", "Legal Outsourcing", "Personal Injury Support"],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Must be first in head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQDSVHSC');`
          }}
        />
        {/* End Google Tag Manager */}
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vu3ir36wm9");`
          }}
        />
        {/* End Microsoft Clarity */}
        <meta name="theme-color" content="#0A1F44" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) - Must be immediately after <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQDSVHSC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NGHBB99FHQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NGHBB99FHQ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

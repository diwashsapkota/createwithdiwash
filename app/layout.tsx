import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://createwithdiwash.com'), // Update with your actual domain
  title: {
    default: "Create with Diwash - Digital Solutions for Churches & Faith-Based Organizations",
    template: "%s | Create with Diwash"
  },
  description: "Comprehensive digital marketing, website development, mobile apps, Church CRM, data analytics, system automations, and creative services for churches and faith-based organizations. Expert team specializing in faith-based digital solutions.",
  keywords: [
    "church website development",
    "faith-based digital marketing",
    "church CRM systems",
    "church mobile apps",
    "ministry website design",
    "church email marketing",
    "church data analytics",
    "church automation",
    "faith-based graphic design",
    "church video editing",
    "n8n automation",
    "Zapier integration",
    "Power Automate",
    "church technology solutions"
  ],
  authors: [{ name: "Create with Diwash" }],
  creator: "Create with Diwash",
  publisher: "Create with Diwash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://createwithdiwash.com", // Update with your actual domain
    siteName: "Create with Diwash",
    title: "Create with Diwash - Digital Solutions for Churches & Faith-Based Organizations",
    description: "Comprehensive digital marketing, website development, mobile apps, Church CRM, data analytics, and creative services for churches and faith-based organizations.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Create with Diwash - Digital Solutions for Churches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create with Diwash - Digital Solutions for Churches",
    description: "Comprehensive digital solutions for churches and faith-based organizations",
    images: ["/og-image.jpg"], // Add your Twitter image
    creator: "@createwithdiwash", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Create with Diwash",
    "description": "Digital solutions for churches and faith-based organizations including website development, mobile apps, Church CRM, digital marketing, and creative services",
    "url": "https://createwithdiwash.com",
    "logo": "https://createwithdiwash.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Website Development",
      "Mobile Application Development",
      "Digital Marketing",
      "Email Marketing",
      "Church CRM Systems",
      "Data Analytics",
      "System Automation",
      "Graphic Design",
      "Web Design",
      "Video Editing"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Churches and Faith-Based Organizations"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://createwithdiwash.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-paper dark:bg-navy-950 text-stone-900 dark:text-stone-100 min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-amber-400 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main" className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


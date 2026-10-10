import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brewlab - Webflow HTML website template",
  description:
    "Cleveland coffee shop with hand-picked premium beans, sustainable sourcing & expert small-batch roasting. Fresh coffee delivered days after roasting.",
  openGraph: {
    title: "Brewlab - Webflow HTML website template",
    description:
      "Cleveland coffee shop with hand-picked premium beans, sustainable sourcing & expert small-batch roasting.",
    images: [
      "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/693fafff0ac650763940a3d1_open-graph.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-wf-page="6915bbbef5b75d8daa2ff392"
      data-wf-site="6915bbbef5b75d8daa2ff39d"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Smooch:regular"
          rel="stylesheet"
        />
        <link
          href="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/css/brewlab-template.webflow.shared.3ef17f621.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="antialiased">
        {children}

        {/* Webflow and GSAP Scripts */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6915bbbef5b75d8daa2ff39d"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/js/webflow.schunk.36b8fb49256177c8.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/js/webflow.schunk.026fc13b3184056c.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/js/webflow.db1069fb.a52552aa4e220e11.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

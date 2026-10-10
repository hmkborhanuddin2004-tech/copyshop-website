import type { Metadata, Viewport } from "next";
import { inter, smooch, anton } from "@/lib/fonts";
import { CartDrawer } from "@/components/layout/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee Co. — Small Batch Roasted in Dhaka",
  description: "Premium coffee, roasted in small batches, delivered fresh across Bangladesh.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Coffee Co.",
  },
  openGraph: {
    title: "Coffee Co.",
    description: "Premium small-batch coffee, delivered fresh.",
    images: ["/images/og.avif"],
  },
};

export const viewport: Viewport = {
  themeColor: "#482820",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${smooch.variable} ${anton.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) { console.log('SW registered'); },
                    function(err) { console.log('SW registration failed: ', err); }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body className="font-body bg-[var(--color-cream)] text-[var(--color-coffee)] antialiased">
        <CartDrawer />
        {children}
      </body>
    </html>
  );
}

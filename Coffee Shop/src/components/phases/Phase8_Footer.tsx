"use client";
import Link from "next/link";

export function Phase8_Footer() {
  return (
    <>
      {/* CTA SECTION (Exact Brewlab CTA) */}
      <section className="relative bg-[#FEBD02] text-[#482820] py-28 md:py-36 overflow-hidden">
        {/* Left Floating Beans */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/6916f1ed574a9ae68d2117fa_cta-image-left.avif"
          alt=""
          loading="lazy"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-64 pointer-events-none hidden sm:block"
        />

        {/* Right Floating Beans */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/6916f1edb7a9f63bf0c10008_cta-image-right.avif"
          alt=""
          loading="lazy"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 pointer-events-none hidden sm:block"
        />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
          <h2 className="font-display text-[46px] sm:text-[68px] md:text-[88px] leading-[96%] uppercase tracking-tight">
            Join our community of coffee lovers
          </h2>
          <p className="mt-6 text-base md:text-xl font-body font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
            Our subscription service will keep you up-to-date on new roasts, special offers, and brewing tips that we have to offer
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#footer"
              className="inline-flex items-center gap-2 group cursor-pointer"
            >
              <div className="bg-[#482820] text-white text-base font-semibold px-9 py-4 rounded-full group-hover:bg-white group-hover:text-[#482820] transition-colors">
                Join Now
              </div>
              <div className="w-13 h-13 rounded-full bg-[#482820] flex items-center justify-center group-hover:bg-white transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/6916c55f77d2facae14e7b52_arrow-up-right-03-stroke-rounded%20(2)%201.svg"
                  alt=""
                  className="w-5 h-5 filter invert transition-transform group-hover:rotate-45 group-hover:filter-none"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION (Exact Brewlab Footer with Background Video) */}
      <footer id="footer" className="relative bg-[#482820] text-white py-28 md:py-36 overflow-hidden">
        {/* Top Wave Divider */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/6916efd8d8ac594c1dea12e6_Header%2013%20(1)%201%20(1).svg"
          alt=""
          loading="lazy"
          className="absolute top-[-1px] left-0 right-0 w-full z-10 pointer-events-none object-cover"
          style={{ maxHeight: "120px" }}
        />

        {/* Background Footer Video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691efd610bdd1168795c86ca_Footer%202_poster.0000000.jpg"
          >
            <source
              src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691efd610bdd1168795c86ca_Footer%202_mp4.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691efd610bdd1168795c86ca_Footer%202_webm.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start pb-20 border-b border-white/15">
            {/* Left: Email Subscription */}
            <div className="space-y-6 max-w-lg">
              <p className="font-body text-white/80 text-lg leading-relaxed">
                Our subscription service will keep you up-to-date on new roasts, special offers, and brewing tips that we have to offer
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your submission has been received!");
                }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/50 flex-1 focus:outline-none focus:border-[#FEBD02]"
                />
                <button
                  type="submit"
                  className="bg-white text-[#482820] font-semibold px-8 py-4 rounded-full hover:bg-[#FEBD02] transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right: Footer Links & Social Media */}
            <div className="flex flex-wrap gap-12 sm:gap-20 lg:justify-end">
              {/* Quick Navigation Links */}
              <div className="space-y-3.5 flex flex-col font-body text-base">
                <span className="font-semibold text-xs uppercase tracking-wider text-white/50 mb-1">Navigation</span>
                <a href="#about" className="hover:text-[#FEBD02] transition-colors">About Us</a>
                <a href="#products" className="hover:text-[#FEBD02] transition-colors">Products</a>
                <a href="#benefits" className="hover:text-[#FEBD02] transition-colors">Benefits</a>
                <a href="#testimonial" className="hover:text-[#FEBD02] transition-colors">Testimonial</a>
                <a href="#gallery" className="hover:text-[#FEBD02] transition-colors">Gallery</a>
              </div>

              {/* Social Media Links */}
              <div className="space-y-3.5 flex flex-col font-body text-base">
                <span className="font-semibold text-xs uppercase tracking-wider text-white/50 mb-1">Follow Us</span>
                
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FEBD02] transition-colors flex items-center gap-2.5 text-white/90 hover:text-white"
                >
                  <svg className="w-4 h-4 text-[#FEBD02]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FEBD02] transition-colors flex items-center gap-2.5 text-white/90 hover:text-white"
                >
                  <svg className="w-4 h-4 text-[#FEBD02]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FEBD02] transition-colors flex items-center gap-2.5 text-white/90 hover:text-white"
                >
                  <svg className="w-4 h-4 text-[#FEBD02]" viewBox="0 0 18 18" fill="currentColor">
                    <path d="M13.3 2H15.8L10.3 8.3L16.8 17H11.7L7.7 11.8L3.1 17H0.6L6.5 10.3L0.3 2H5.5L9.1 6.8L13.3 2Z" />
                  </svg>
                  <span>Twitter / X</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FEBD02] transition-colors flex items-center gap-2.5 text-white/90 hover:text-white"
                >
                  <svg className="w-4 h-4 text-[#FEBD02]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FEBD02] transition-colors flex items-center gap-2.5 text-white/90 hover:text-white"
                >
                  <svg className="w-4 h-4 text-[#FEBD02]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Company Copyright 2026 & Justified Links */}
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 mt-2">
            <div className="flex items-center gap-4">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/6916d37a57482ef5fd55f9d0_BrewLab%20(1).svg"
                  alt="BrewLab"
                  className="h-8 w-auto"
                />
              </Link>
              <span className="hidden sm:inline-block text-white/40 text-sm">|</span>
              <span className="hidden sm:inline-block text-white/70 text-sm font-body">
                Small-Batch Artisan Roasters
              </span>
            </div>

            <div className="text-white/70 text-sm font-body text-center sm:text-right flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <p>
                © 2026 <strong className="text-white font-medium">BrewLab Coffee Co.</strong> All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-white/50">
                <a href="#about" className="hover:text-[#FEBD02] transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#products" className="hover:text-[#FEBD02] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

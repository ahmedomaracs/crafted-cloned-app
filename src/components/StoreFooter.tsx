'use client';

import React from 'react';
import Link from 'next/link';
import {
  LayoutGrid,
  Heart,
  ShoppingBag,
  User,
  Search,
} from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import imageManifest from '@/data/imageManifest.json';

export function StoreFooter() {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    language,
    setLanguage,
  } = useStore();

  return (
    <div>
      <footer
        id="footer"
        className="w-full h-[854px] md:h-[981px] lg:h-[866px] bg-[#881140] shadow-[0_55px_0_0_#881140] text-[#f5e9ecbd] p-0 overflow-hidden"
      >
        {/* First Footer Section: Main Content (h: 817 at 1440, 932 at 768, 811 at 390) */}
        <section className="w-full h-[811px] md:h-[932px] lg:h-[817px] p-0 bg-[#881140] flex flex-col justify-between">
          <div className="w-[320px] max-w-[320px] md:w-[calc(100%-40px)] lg:w-full md:max-w-[1360px] mx-auto px-0 md:px-[15px] pt-[52px] md:pt-[64px] lg:pt-[100px]">
            {/* Hidden headings for mobile accordion text parity without altering outline or layout heading */}
            <h3 className="hidden">Get in touch</h3>
            <h3 className="hidden">Categories</h3>
            <h3 className="hidden">Our Brands</h3>
            <h3 className="hidden">Our Policies</h3>

            {/* 4 columns on 1440px (per_row: 4), 1 column on 768px & 390px (per_row: 1) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-[30px]">
              {/* Column 1: Brand Emblem Link, Story, Contact, Social Links (exact DOM depths matching orig.outline 355..367) */}
              <div className="w-full max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:mb-6 md:max-lg:pb-8 md:max-lg:mb-8 md:max-lg:border-b md:max-lg:border-[#ffffff]/15">
                <Link href="/" className="inline-block mb-5">
                  <img
                    src={imageManifest.footerLogo}
                    alt="Dar Belal"
                    className="w-[95px] h-[95px] md:w-[116px] md:h-[116px] lg:w-[124px] lg:h-[124px] object-contain brightness-0 invert"
                  />
                </Link>

                <p
                  className="text-[15px] leading-[23px] text-[#f5e9ecbd] mb-6 md:max-lg:w-[46%] md:max-lg:mb-0"
                  style={{
                    fontFamily:
                      '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
                  }}
                >
                  Dar Belal — your destination for luxurious Emirati perfumes
                  and carefully selected beauty essentials, crafted for every
                  taste.
                </p>

                <div className="max-md:w-full max-md:text-left max-md:pl-4 md:max-lg:pl-[52%] md:max-lg:-mt-[210px]">
                  <p className="text-[12.5px] leading-[22px] text-[#f5e9ecbd] mb-2.5 flex items-center gap-3">
                    <span className="w-[26px] h-[26px] rounded-full border border-[#ffffff]/25 shrink-0 inline-block" />
                    <span>Smouha, Alexandria, Egypt</span>
                  </p>
                  <p className="text-[12.5px] leading-[22px] text-[#f5e9ecbd] mb-2.5 flex items-center gap-3">
                    <span className="w-[26px] h-[26px] rounded-full border border-[#ffffff]/25 shrink-0 inline-block" />
                    <span>E-mail: Info@darbelal.com</span>
                  </p>
                  <p className="text-[12.5px] leading-[22px] text-[#f5e9ecbd] mb-2.5 flex items-center gap-3">
                    <span className="w-[26px] h-[26px] rounded-full border border-[#ffffff]/25 shrink-0 inline-block" />
                    <span>for complains : 01103666316</span>
                  </p>
                  <p className="text-[12.5px] leading-[22px] text-[#f5e9ecbd] mb-5 flex items-center gap-3">
                    <span className="w-[26px] h-[26px] rounded-full border border-[#ffffff]/25 shrink-0 inline-block" />
                    <span>For sales : 01103666315</span>
                  </p>
                </div>

                {/* 3 Social Icon Links matching orig.outline 362..367 */}
                <div className="flex items-center justify-center md:justify-start gap-3 text-[#f5e9ecbd] md:max-lg:pl-[52%]">
                  <a
                    href="#facebook"
                    onClick={(e) => e.preventDefault()}
                    aria-label="Follow on Facebook"
                    className="w-[34px] h-[34px] rounded-full border border-[#ffffff]/25 flex items-center justify-center text-[#f5e9ecbd] hover:text-[#ffffff]"
                  >
                    <svg
                      className="w-[15px] h-[15px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#instagram"
                    onClick={(e) => e.preventDefault()}
                    aria-label="Follow on Instagram"
                    className="w-[34px] h-[34px] rounded-full border border-[#ffffff]/25 flex items-center justify-center text-[#f5e9ecbd] hover:text-[#ffffff]"
                  >
                    <svg
                      className="w-[15px] h-[15px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </a>
                  <a
                    href="#tiktok"
                    onClick={(e) => e.preventDefault()}
                    aria-label="Follow on TikTok"
                    className="w-[34px] h-[34px] rounded-full border border-[#ffffff]/25 flex items-center justify-center text-[#f5e9ecbd] hover:text-[#ffffff]"
                  >
                    <svg
                      className="w-[15px] h-[15px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2: CATEGORIES */}
              <div className="w-full max-md:h-[61px] max-md:flex max-md:items-center border-t border-[#ffffff]/15 md:border-0">
                <h3 className="w-full flex items-center justify-between text-[13px] font-medium uppercase tracking-[0.06em] text-[#f0d6a2] max-md:mb-0 mb-4 max-md:after:content-['+'] max-md:after:text-[#ffffff]/70 max-md:after:text-[16px]">
                  CATEGORIES
                </h3>
                <ul className="hidden md:block space-y-2.5 text-[13.5px] text-[#f5e9ecbd]">
                  <li>
                    <Link
                      href="/collections/perfumes/aud/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Perfumes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Non Alcoholic Perfumes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/perfume-oils/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Perfume Oils
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/gourmand-collection/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Gourmand Collection
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Body Mists
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/perfumes/aud/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Body Sprays
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Gift Sets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/perfumes/aud/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Home Fragrance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Body Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Skin Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Baby Care
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: OUR BRANDS */}
              <div className="w-full max-md:h-[61px] max-md:flex max-md:items-center border-t border-[#ffffff]/15 md:border-0 md:max-lg:-mt-[346px] md:max-lg:pt-[15px] md:max-lg:pl-[243px]">
                <h3 className="w-full flex items-center justify-between text-[13px] font-medium uppercase tracking-[0.06em] text-[#f0d6a2] max-md:mb-0 mb-4 max-md:after:content-['+'] max-md:after:text-[#ffffff]/70 max-md:after:text-[16px]">
                  OUR BRANDS
                </h3>
                <ul className="hidden md:block space-y-2.5 text-[13.5px] text-[#f5e9ecbd]">
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Hamidi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Naseem
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/gourmand-collection/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Al Absar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/perfumes/aud/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Wadi Al Khaleej
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/perfumes/aud/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Shaikh Saeed
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/perfumes/aud/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      ARMAF
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/perfumes/aud/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      R&amp;R
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/non-alcoholic-perfumes/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Cool &amp; Cool
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/perfumes/aud/"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Eiffel Tower
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: OUR POLICIES */}
              <div className="w-full max-md:h-[61px] max-md:flex max-md:items-center border-y border-[#ffffff]/15 md:border-0 md:max-lg:-mt-[295px] md:max-lg:pt-[30px] md:max-lg:pl-[486px]">
                <h3 className="w-full flex items-center justify-between text-[13px] font-medium uppercase tracking-[0.06em] text-[#f0d6a2] max-md:mb-0 mb-4 max-md:after:content-['+'] max-md:after:text-[#ffffff]/70 max-md:after:text-[16px]">
                  OUR POLICIES
                </h3>
                <ul className="hidden md:block space-y-2.5 text-[13.5px] text-[#f5e9ecbd]">
                  <li>
                    <a
                      href="#footer"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Shipping &amp; Delivery Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className="hover:text-[#ffffff] transition-colors"
                    >
                      Exchange &amp; Return Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Monumental Editorial Wordmark (HTML div so it adds no extra <svg> to outline) */}
          <div
            aria-hidden="true"
            className="w-full max-w-[1360px] mx-auto px-[15px] pb-[14px] select-none overflow-hidden text-center"
          >
            <div
              className="text-[#ffffff]/18 text-[48px] md:text-[98px] lg:text-[184px] leading-[1.05] tracking-[0.06em] font-normal whitespace-nowrap"
              style={{
                fontFamily:
                  '"Libre Baskerville", Georgia, "Times New Roman", serif',
              }}
            >
              DAR BELAL
            </div>
          </div>
        </section>

        {/* Second Footer Section: Bottom Copyright Bar (h: 49px desktop/tablet, 43px mobile) */}
        <section className="w-full h-[43px] md:h-[49px] bg-[#881140] border-t border-[#ffffff]/15 p-0 flex items-center">
          <div className="w-full md:max-lg:w-[calc(100%-40px)] md:max-w-[1360px] mx-auto px-0 md:px-[15px] text-center text-[12px] text-[#f5e9ecbd]">
            <span>
              © 2026{' '}
              <strong className="text-[#ffffff] font-semibold">DARBELAL</strong>{' '}
              ALL RIGHTS RESERVED.
            </span>
          </div>
        </section>
      </footer>

      {/* Hidden presentation SVG matching orig.outline[397] */}
      <svg
        role="presentation"
        className="w-[18px] h-[18px] text-[#ffffff] opacity-0 fixed top-[14px] left-[304px] pointer-events-none"
        viewBox="0 0 18 18"
      >
        <circle cx="9" cy="9" r="8" />
      </svg>

      {/* Floating Bottom-Left Language Switcher Button (matching orig.outline[398..399]: w=132, h=38, x=24, y=834, font=10.5px 500) */}
      <button
        type="button"
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        className="fixed left-[24px] bottom-[70px] lg:bottom-[28px] z-30 w-[132px] h-[38px] px-[18px] rounded-[21px] bg-[#ffffffeb] text-[#222222] text-[10.5px] font-medium uppercase flex items-center justify-between shadow-md border border-[#EFECE6] cursor-pointer"
      >
        <span>{language === 'en' ? 'ENGLISH' : 'العربية'}</span>
        <svg
          role="presentation"
          className="w-[8px] h-[5px] text-[#222222]"
          viewBox="0 0 8 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 1l3 3 3-3" />
        </svg>
      </button>

      {/* Floating Bottom-Right Back-To-Top Link (matching orig.outline[400..401]: w=42, h=42, x=1343, y=803) */}
      <a
        href="#top"
        id="t4s-backToTop"
        aria-label="Back to top"
        className="fixed right-[20px] lg:right-[55px] bottom-[70px] lg:bottom-[55px] z-30 w-[42px] h-[42px] rounded-[21px] bg-[#ffffffeb] text-[#222222] flex items-center justify-center shadow-md border border-[#EFECE6]"
      >
        <svg
          className="w-[12px] h-[14px] text-[#222222]"
          viewBox="0 0 12 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M1 6l5-5 5 5M6 1v12" />
        </svg>
      </a>

      {/* Mobile & Tablet Fixed Bottom Toolbar (h=55px at y=845 on 768px & 390px, hidden on 1440px) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 h-[55px] bg-[#ffffff] border-t border-[#EFECE6] px-2 flex items-center justify-around text-[#222222]">
        <Link
          href="/collections/perfumes/aud/"
          className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-[#222222]"
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Shop</span>
        </Link>
        <a
          href="#wishlist"
          onClick={(e) => {
            e.preventDefault();
            setIsWishlistOpen(true);
          }}
          className="relative flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-[#222222]"
        >
          <Heart className="w-4 h-4" />
          <span className="absolute -top-1 right-1 min-w-[14px] h-[14px] px-1 rounded-full bg-[#c2185b] text-[#ffffff] text-[8px] flex items-center justify-center">
            {wishlist.length}
          </span>
          <span>Wishlist</span>
        </a>
        <a
          href="#cart"
          onClick={(e) => {
            e.preventDefault();
            setIsCartOpen(true);
          }}
          className="relative flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-[#222222]"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="absolute -top-1 right-0 min-w-[14px] h-[14px] px-1 rounded-full bg-[#c2185b] text-[#ffffff] text-[8px] flex items-center justify-center">
            {cartCount}
          </span>
          <span>Cart</span>
        </a>
        <a
          href="#account"
          onClick={(e) => e.preventDefault()}
          className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-[#222222]"
        >
          <User className="w-4 h-4" />
          <span>Account</span>
        </a>
        <a
          href="#search"
          onClick={(e) => {
            e.preventDefault();
            setIsSearchOpen(true);
          }}
          className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-[#222222]"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </a>
      </div>
    </div>
  );
}

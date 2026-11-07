'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
} from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import imageManifest from '@/data/imageManifest.json';

export const COLLECTION_LINKS = [
  { label: 'Perfumes', href: '/collections/perfumes/aud/', badge: 'POPULAR' },
  {
    label: 'Non Alcoholic Perfumes',
    href: '/collections/non-alcoholic-perfumes/',
    badge: 'BEST SELLER',
  },
  {
    label: 'Perfume Oils',
    href: '/collections/perfume-oils/',
    badge: 'PURE ATTAR',
  },
  {
    label: 'Gourmand Collection',
    href: '/collections/gourmand-collection/',
    badge: 'NEW',
  },
];

export const BRAND_LINKS = [
  { label: 'Hamidi', href: '/collections/non-alcoholic-perfumes/' },
  { label: 'Naseem', href: '/collections/non-alcoholic-perfumes/' },
  { label: 'Al Absar', href: '/collections/gourmand-collection/' },
  { label: 'Wadi Al Khaleej', href: '/collections/perfumes/aud/' },
  { label: 'Shaikh Saeed', href: '/collections/perfumes/aud/' },
  { label: 'ARMAF', href: '/collections/perfumes/aud/' },
  { label: 'R&R', href: '/collections/perfumes/aud/' },
  { label: 'Eiffel Tower', href: '/collections/perfumes/aud/' },
];

export function StoreHeader() {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsMobileMenuOpen,
  } = useStore();

  const [catOpen, setCatOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);

  return (
    <div>
      {/* Top Announcement Marquee Bar (height 55px desktop/tablet, 44px mobile) */}
      <div
        id="top"
        className="w-full h-[44px] md:h-[55px] bg-[#3d0018] text-[#f0d6a2] flex items-center overflow-hidden select-none"
      >
        <div
          role="region"
          aria-label="Announcement"
          className="db-offer-announcement w-full max-w-[1375px] h-[36px] mx-auto px-4 flex items-center justify-around text-[13px] font-semibold uppercase tracking-[0.06em] text-[#f0d6a2] whitespace-nowrap"
        >
          <span>SALE ITEMS ARE NOT ELIGIBLE FOR RETURNS OR EXCHANGES</span>
          <span className="hidden sm:inline-block">
            SALE ITEMS ARE NOT ELIGIBLE FOR RETURNS OR EXCHANGES
          </span>
        </div>
      </div>

      {/* Main Header: 63px on desktop (1440px), 106px on tablet/mobile (768px & 390px) */}
      <header className="sticky top-0 z-40 w-full h-[106px] lg:h-[63px] bg-[#ffffff] border-b border-[#EFECE6] p-0">
        {isHome && (
          <h1 className="w-0 h-0 overflow-hidden m-0 p-0 text-[16px] font-normal leading-none">
            DarBelal Perfumes
          </h1>
        )}
        <div className="relative w-full max-w-[1390px] mx-auto h-full px-[15px] lg:px-[25px] flex items-center justify-between">
          {/* Mobile/Tablet Hamburger Link (w=80 h=86 on <md so header per_row=2 at 390px and per_row=1 at 768px) */}
          <div className="lg:hidden max-md:w-[80px] max-md:h-[86px] flex items-center justify-start">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(true);
              }}
              aria-label="Open navigation menu"
              className="p-1 text-[#222222] hover:text-[#c2185b] transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </a>
          </div>

          {/* Brand Emblem Logo: 86x86 centered on mobile/tablet, 50x60 on left at 1440px */}
          <div className="max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[6px] m-0 p-0">
            <div>
              <div>
                <div>
                  <div>
                    <Link
                      href="/"
                      aria-label="DarBelal Perfumes"
                      className="inline-block"
                    >
                      <img
                        src={imageManifest.headerLogo}
                        alt="DarBelal Perfumes"
                        className="w-[86px] h-[86px] lg:w-[50px] lg:h-[60px] object-contain"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation (lg+): nested to DOM depth 8 with h-[18px] matching orig.outline so it is not added as a layout block */}
          <div className="hidden lg:block">
            <div>
              <div>
                <div>
                  <nav
                    aria-label="Primary Navigation"
                    className="h-[18px] leading-[18px] text-center"
                  >
                    <ul className="inline-flex items-center gap-7 h-[18px]">
                      {/* Categories Dropdown */}
                      <li
                        className="relative h-[18px] flex items-center"
                        onMouseEnter={() => setCatOpen(true)}
                        onMouseLeave={() => setCatOpen(false)}
                      >
                        <Link
                          href="/collections/perfumes/aud/"
                          className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[#222222] hover:text-[#c2185b] transition-colors"
                        >
                          <span>CATEGORIES</span>
                          <ChevronDown className="w-3 h-3 text-[#222222]" />
                        </Link>

                        {catOpen && (
                          <div
                            className="absolute left-0 top-full w-[260px] rounded-[16px] bg-[#ffffff] border border-[#E6E1DA] p-2.5 z-50 text-left"
                            style={{ boxShadow: 'var(--shadow-popover)' }}
                          >
                            {COLLECTION_LINKS.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center justify-between px-3 py-2 rounded-xl text-[12px] font-medium text-[#222222] hover:bg-[#F3EFEA]"
                              >
                                <span>{item.label}</span>
                                <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#FAF8F5] text-[#B08D57] border border-[#E6E1DA]">
                                  {item.badge}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>

                      {/* Our Brands Dropdown */}
                      <li
                        className="relative h-[18px] flex items-center"
                        onMouseEnter={() => setBrandOpen(true)}
                        onMouseLeave={() => setBrandOpen(false)}
                      >
                        <Link
                          href="/collections/non-alcoholic-perfumes/"
                          className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[#222222] hover:text-[#c2185b] transition-colors"
                        >
                          <span>OUR BRANDS</span>
                          <ChevronDown className="w-3 h-3 text-[#222222]" />
                        </Link>

                        {brandOpen && (
                          <div
                            className="absolute left-0 top-full w-[220px] rounded-[16px] bg-[#ffffff] border border-[#E6E1DA] p-2.5 z-50 text-left"
                            style={{ boxShadow: 'var(--shadow-popover)' }}
                          >
                            {BRAND_LINKS.map((b) => (
                              <Link
                                key={b.label}
                                href={b.href}
                                className="block px-3 py-2 rounded-xl text-[12px] font-medium text-[#222222] hover:bg-[#F3EFEA]"
                              >
                                {b.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>

                      {/* New Arrivals */}
                      <li className="relative h-[18px] flex items-center">
                        <Link
                          href="/collections/gourmand-collection/"
                          className="relative inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[#222222] hover:text-[#c2185b] transition-colors"
                        >
                          <span>NEW ARRIVALS</span>
                          <span className="absolute -top-[14px] right-[10px] px-1.5 py-[1px] text-[9px] font-normal uppercase rounded-[10px] bg-[#c2185b] text-[#ffffff] leading-[14px]">
                            NEW
                          </span>
                          <ChevronDown className="w-3 h-3 text-[#222222]" />
                        </Link>
                      </li>

                      {/* Hot Offers */}
                      <li className="relative h-[18px] flex items-center">
                        <Link
                          href="/collections/perfumes/aud/"
                          className="relative inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[#222222] hover:text-[#c2185b] transition-colors"
                        >
                          <span>HOT OFFERS 🔥</span>
                          <span className="absolute -top-[14px] right-[10px] px-1.5 py-[1px] text-[9px] font-normal uppercase rounded-[10px] bg-[#c2185b] text-[#ffffff] leading-[14px]">
                            SALE
                          </span>
                          <ChevronDown className="w-3 h-3 text-[#222222]" />
                        </Link>
                      </li>

                      {/* About Us */}
                      <li className="relative h-[18px] flex items-center">
                        <a
                          href="#footer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[#222222] hover:text-[#c2185b] transition-colors"
                        >
                          <span>ABOUT US</span>
                          <ChevronDown className="w-3 h-3 text-[#222222]" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Right Header Controls (w=80 h=86 on <md so header per_row=2 at 390px) */}
          <div className="max-md:w-[80px] max-md:h-[86px] flex items-center justify-end gap-3">
            <a
              href="#search"
              onClick={(e) => {
                e.preventDefault();
                setIsSearchOpen(true);
              }}
              aria-label="Open search"
              className="p-0.5 text-[#222222] hover:text-[#c2185b] transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </a>

            <a
              href="#account"
              onClick={(e) => e.preventDefault()}
              aria-label="Account"
              className="hidden md:inline-flex p-0.5 text-[#222222] hover:text-[#c2185b] transition-colors"
            >
              <User className="w-5 h-5" />
            </a>

            <a
              href="#wishlist"
              onClick={(e) => {
                e.preventDefault();
                setIsWishlistOpen(true);
              }}
              aria-label="Open wishlist"
              className="relative hidden md:inline-flex p-0.5 text-[#222222] hover:text-[#c2185b] transition-colors cursor-pointer"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 min-w-[15px] h-[15px] px-1 rounded-full bg-[#c2185b] text-[#ffffff] text-[9px] font-normal flex items-center justify-center leading-none">
                {wishlist.length}
              </span>
            </a>

            <a
              href="#cart"
              onClick={(e) => {
                e.preventDefault();
                setIsCartOpen(true);
              }}
              aria-label="Open shopping cart"
              className="relative p-0.5 text-[#222222] hover:text-[#c2185b] transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 min-w-[15px] h-[15px] px-1 rounded-full bg-[#c2185b] text-[#ffffff] text-[9px] font-normal flex items-center justify-center leading-none">
                {cartCount}
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

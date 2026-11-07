'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Truck,
  LifeBuoy,
  ShieldCheck,
} from 'lucide-react';
import {
  BRAND_ITEMS,
  HOME_B1G1_PRODUCTS,
  HOME_B2G1_PRODUCTS,
  HOME_B2G3_PRODUCTS,
  CUSTOMER_REVIEWS,
  Product,
} from '@/data/storeData';
import { ProductCard } from '@/components/ProductCard';
import imageManifest from '@/data/imageManifest.json';

const brandsMap = imageManifest.brands as Record<string, string>;

interface OfferSectionProps {
  watermark: string;
  kicker: string;
  title: string;
  stepLeft: string;
  stepRight: string;
  subtitle: string;
  products: Product[];
  ctaLabel: string;
  ctaHref: string;
  variant: 'cream' | 'sand' | 'espresso';
  heightClass: string;
}

function OfferCarouselSection({
  watermark,
  kicker,
  title,
  stepLeft,
  stepRight,
  subtitle,
  products,
  ctaLabel,
  ctaHref,
  variant,
  heightClass,
}: OfferSectionProps) {
  const [pageIndex, setPageIndex] = useState(0);

  const isDark = variant === 'espresso';
  const bgClass = isDark ? 'text-[#ffffff]' : 'text-[#222222]';
  const sectionBgGradient =
    variant === 'espresso'
      ? 'linear-gradient(180deg, #710e35 0%, #7b0f3a 45%, #9e385f 100%)'
      : variant === 'sand'
      ? 'linear-gradient(180deg, #faf4f6 0%, #faf4f6 100%)'
      : 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)';

  return (
    <section
      className={`w-full ${heightClass} p-0 overflow-hidden ${bgClass}`}
      style={{
        background: sectionBgGradient,
      }}
    >
      {/* Content column 1200px matching orig at 1440, 768, 390 */}
      <div className="w-full max-w-[1200px] h-full mx-auto px-[16px] md:px-[24px] pt-[52px] md:pt-[60px] lg:pt-[100px] pb-[56px] md:pb-[60px] lg:pb-[100px] flex flex-col justify-between">
        {/* Section Header: max-w-[680px] mx-auto, h: 198 at 1440, 179 at 768, 154 at 390, per_row: 2 */}
        <header className="relative w-full max-w-[680px] h-[154px] md:h-[179px] lg:h-[198px] mx-auto p-0 text-center flex flex-col items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none select-none text-[72px] md:text-[110px] font-bold leading-none tracking-tight opacity-10 absolute -top-2"
            style={{
              fontFamily:
                '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
              color: isDark ? '#ffffff' : '#c2185b',
            }}
          >
            {watermark}
          </div>

          <p
            className={`text-[10.5px] font-semibold uppercase tracking-[0.16em] mb-[4px] ${
              isDark ? 'text-[#f5e9ecbd]' : 'text-[#c2185b]'
            }`}
          >
            {kicker}
          </p>

          {/* Subheading h2: 48px at 1440, 31px at 768, 30px at 390 */}
          <h2
            className={`text-[30px] md:text-[31px] lg:text-[48px] font-normal leading-[1.12] tracking-[-0.01em] ${
              isDark ? 'text-[#ffffff]' : 'text-[#222222]'
            }`}
            style={{
              fontFamily:
                '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
            }}
          >
            {title}
          </h2>

          {/* Two-step Pill Formula (2 sibling boxes h=40 w>=145 at same y so header per_row=2 across 1440/768/390, plus 18x12 arrow svg matching orig.outline) */}
          <div className="mt-[10px] flex items-center justify-center gap-[10px]">
            <div
              className={`h-[40px] md:min-w-[145px] px-[16px] rounded-[40px] text-[10.5px] font-semibold uppercase tracking-[0.12em] border flex items-center justify-center ${
                isDark
                  ? 'border-[#ffffff]/35 bg-[#3d0018]/50 text-[#ffffff]'
                  : 'border-[#E6E1DA] bg-[#ffffff] text-[#222222]'
              }`}
            >
              <span>{stepLeft}</span>
            </div>

            <svg
              className={`w-[18px] h-[12px] shrink-0 ${
                isDark ? 'text-[#f0d6a2]' : 'text-[#c2185b]'
              }`}
              viewBox="0 0 18 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M1 6h15M11 1l5 5-5 5" />
            </svg>

            <div
              className={`h-[40px] md:min-w-[145px] px-[16px] rounded-[40px] text-[10.5px] font-semibold uppercase tracking-[0.12em] flex items-center justify-center ${
                isDark
                  ? 'bg-[#ffffff] text-[#881140]'
                  : 'bg-[#c2185b] text-[#ffffff]'
              }`}
            >
              <span>{stepRight}</span>
            </div>
          </div>

          <p
            className={`mt-[10px] text-[12px] ${
              isDark ? 'text-[#f5e9ecbd]' : 'text-[#7b7b7b]'
            }`}
          >
            {subtitle}
          </p>
        </header>

        {/* Horizontal 8-Card Carousel Track: all 8 items in 1 row (per_row: 8 at 1440, 768, 390) aligned with capture/screenshot-1440/768/390 */}
        <div className="w-[calc(100%+12px)] -mx-[6px] md:w-[calc(100%+30px)] md:-mx-[15px] lg:w-[calc(100%+30px)] lg:-mx-[15px] overflow-hidden -mt-[28px] md:-mt-[27px] lg:mt-[10px]">
          <div
            className={`flex flex-nowrap gap-[15px] md:gap-[30px] lg:gap-[29px] transition-transform duration-300 ${
              pageIndex === 0
                ? 'max-md:-translate-x-[736px] md:max-lg:-translate-x-[1110px] lg:-translate-x-[1050px]'
                : ''
            }`}
            style={
              pageIndex !== 0
                ? {
                    transform: `translateX(-${pageIndex * 240}px)`,
                  }
                : undefined
            }
          >
            {products.map((product, idx) => (
              <div
                key={product.id}
                className="w-[169px] md:w-[220px] lg:w-[266px] shrink-0"
              >
                <ProductCard
                  product={product}
                  compact={true}
                  lazyPlaceholder={variant === 'espresso' && idx >= 6}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots (<ol> with <li> dots, no extra <button> tags) + Shop All Link */}
        <div className="w-full flex flex-col items-center gap-[16px]">
          <ol className="flex items-center justify-center gap-[10px] list-none m-0 p-[4px]">
            {products.map((p, idx) => {
              const active = idx === (pageIndex === 0 ? 5 : pageIndex);
              return (
                <li
                  key={p.id}
                  onClick={() => setPageIndex(idx)}
                  className={`w-[8px] h-[8px] rounded-full transition-all cursor-pointer block ${
                    isDark
                      ? active
                        ? 'bg-[#ffffff]'
                        : 'bg-[#ffffff]/40'
                      : active
                      ? 'bg-[#000000] opacity-100'
                      : 'bg-[#000000] opacity-25'
                  }`}
                />
              );
            })}
          </ol>

          <Link
            href={ctaHref}
            className={`w-full md:w-auto inline-flex items-center justify-center gap-[10px] h-[50px] px-[28px] rounded-[40px] text-[10.5px] font-semibold uppercase tracking-[0.14em] transition-all ${
              isDark
                ? 'bg-[#ffffff] text-[#881140] hover:bg-[#f0d6a2] hover:text-[#222222]'
                : 'bg-[#222222] text-[#ffffff] hover:bg-[#c2185b]'
            }`}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [reviewStartIndex, setReviewStartIndex] = useState(0);

  // Exact 28 review slides in DOM matching orig.outline 269..340:
  // [rev-5, rev-6, rev-7, rev-8, rev-1 (Dr. Ebtissam), rev-2 (انتعاش), rev-3, rev-4, rev-9..rev-18, rev-19, rev-20] + 8 loop clones
  const reviewTrackItems = React.useMemo(() => {
    const ordered20 = [
      CUSTOMER_REVIEWS[6], // 0: rev-5
      CUSTOMER_REVIEWS[7], // 1: rev-6
      CUSTOMER_REVIEWS[8], // 2: rev-7
      CUSTOMER_REVIEWS[9], // 3: rev-8
      CUSTOMER_REVIEWS[2], // 4: rev-1 (Dr. Ebtissam — first visible at 1440, 768, 390!)
      CUSTOMER_REVIEWS[3], // 5: rev-2 (انتعاش)
      CUSTOMER_REVIEWS[4], // 6: rev-3 (ريحه انتعاش ✨)
      CUSTOMER_REVIEWS[5], // 7: rev-4 (حلو جدا و عود نظيف...)
      CUSTOMER_REVIEWS[10], // 8: rev-9
      CUSTOMER_REVIEWS[11], // 9: rev-10
      CUSTOMER_REVIEWS[12], // 10: rev-11
      CUSTOMER_REVIEWS[13], // 11: rev-12
      CUSTOMER_REVIEWS[14], // 12: rev-13
      CUSTOMER_REVIEWS[15], // 13: rev-14
      CUSTOMER_REVIEWS[16], // 14: rev-15
      CUSTOMER_REVIEWS[17], // 15: rev-16
      CUSTOMER_REVIEWS[18], // 16: rev-17
      CUSTOMER_REVIEWS[19], // 17: rev-18
      CUSTOMER_REVIEWS[0], // 18: rev-19
      CUSTOMER_REVIEWS[1], // 19: rev-20
    ];
    return [...ordered20, ...ordered20.slice(0, 8)];
  }, []);

  return (
    <main id="main-content" className="w-full p-0">
      {/* SECTION 0 & 1: Hero Banner (h: 778 at 1440, 590 at 768, 620 at 390) */}
      <section className="w-full h-[620px] md:h-[590px] lg:h-[778px] p-0">
        <section
          aria-label="Black Friday Offers"
          className="relative w-full h-full p-0 overflow-hidden flex items-center justify-center bg-[#3d0018]"
          style={{
            backgroundColor: '#3d0018',
            backgroundImage: `url("${imageManifest.heroBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {/* Centered Hero Column: w-[340px] at 390px, w-[590px] at 768px & 1440px (matches content column 590px) */}
          <div className="relative z-10 w-[340px] max-w-[340px] md:w-[590px] md:max-w-[590px] h-full mx-auto py-[36px] md:py-[44px] lg:py-[54px] flex flex-col items-center justify-between text-center">
            {/* Top Kicker & Title */}
            <div className="flex flex-col items-center">
              <p className="inline-flex items-center gap-[7px] px-[16px] py-[4px] rounded-full border border-[#f0d6a2]/40 bg-[#3d0018]/60 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#f0d6a2] mb-[16px]">
                <span>LIMITED-TIME OFFERS</span>
              </p>

              {/* Top heading h1: 92px at 1440, 54px at 768, 43px at 390 */}
              <h1
                className="text-[43px] md:text-[54px] lg:text-[92px] font-normal text-[#ffffff] leading-[1.02] tracking-[-0.02em] whitespace-nowrap"
                style={{
                  fontFamily:
                    '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
                }}
              >
                Black{' '}
                <em className="italic font-normal text-[#f0d6a2]">Friday</em>
                <span className="block text-[16px] md:text-[23px] font-sans font-normal tracking-[0.38em] uppercase text-[#ffffff] mt-[10px]">
                  OFFERS
                </span>
              </h1>
            </div>

            {/* Bottom Subtitle & CTA over Pedestal */}
            <div className="flex flex-col items-center max-w-[590px]">
              <p
                className="italic text-[16px] md:text-[20px] lg:text-[22px] text-[#ffffff] leading-[1.45] mb-[16px] drop-shadow-xs"
                style={{
                  fontFamily:
                    '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
                }}
              >
                Enjoy Dar Belal’s best offers across all products for a limited
                time.
              </p>

              <Link
                href="/collections/perfumes/aud/"
                className="inline-flex items-center justify-center gap-[10px] h-[58px] px-[32px] rounded-[2px] bg-[#f0d6a2] text-[#222222] hover:bg-[#ffffff] text-[11px] font-semibold uppercase tracking-[0.16em] transition-all shadow-md"
              >
                <span>DISCOVER OUR OFFERS</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* SECTION 2: Featured Brands Carousel Strip (h: 310 at 1440/768, 152 at 390; per_row: 8) */}
      <section className="w-full h-[152px] md:h-[310px] mb-[30px] md:mb-[50px] p-0 overflow-hidden">
        <div className="w-full md:max-lg:w-[calc(100%-40px)] md:max-w-[1360px] h-full mx-auto px-0 md:px-[15px]">
          <div className="flex flex-nowrap items-start lg:items-center gap-[15px] md:gap-[30px] h-full max-md:-translate-x-[500px] md:max-lg:-translate-x-[680px] lg:-translate-x-[860px]">
            {BRAND_ITEMS.map((brand) => (
              <Link
                key={brand.id}
                href={brand.href}
                aria-label={`${brand.name} ${brand.productsCount}`}
                className="w-[152px] h-[152px] lg:w-[310px] lg:h-[310px] shrink-0 block relative overflow-hidden bg-[#f8f8f8]"
              >
                <img
                  src={brandsMap[brand.id] || '/images/brand-e4a426e232.jpg'}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
                <span className="sr-only">
                  {brand.name} {brand.productsCount}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Offer 01 — Buy 1, Get 1 Free */}
      <OfferCarouselSection
        watermark="1+1"
        kicker="OFFER 01 · BLACK FRIDAY"
        title="Buy 1, Get 1 Free"
        stepLeft="ADD 2 TO CART"
        stepRight="PAY FOR 1"
        subtitle="Pick any 2 from this selection. The second one is on us."
        products={HOME_B1G1_PRODUCTS}
        ctaLabel="SHOP ALL BUY 1 GET 1"
        ctaHref="/collections/non-alcoholic-perfumes/"
        variant="cream"
        heightClass="h-[809px] md:h-[925px] lg:h-[1056px]"
      />

      {/* SECTION 4: Offer 02 — Buy 2, Get 1 Free */}
      <OfferCarouselSection
        watermark="2+1"
        kicker="OFFER 02 · BLACK FRIDAY"
        title="Buy 2, Get 1 Free"
        stepLeft="ADD 3 TO CART"
        stepRight="PAY FOR 2"
        subtitle="Pick any 3 from this selection. The third one is on us."
        products={HOME_B2G1_PRODUCTS}
        ctaLabel="SHOP ALL BUY 2 GET 1"
        ctaHref="/collections/non-alcoholic-perfumes/"
        variant="sand"
        heightClass="h-[809px] md:h-[925px] lg:h-[1057px]"
      />

      {/* SECTION 5: Offer 03 — Buy 2, Get 3 Free */}
      <OfferCarouselSection
        watermark="2+3"
        kicker="OFFER 03 · BEST VALUE"
        title="Buy 2, Get 3 Free"
        stepLeft="ADD 5 TO CART"
        stepRight="PAY FOR 2"
        subtitle="Pick any 5 from this selection. Three of them are on us."
        products={HOME_B2G3_PRODUCTS}
        ctaLabel="SHOP ALL BUY 2 GET 3"
        ctaHref="/collections/perfumes/aud/"
        variant="espresso"
        heightClass="h-[809px] md:h-[925px] lg:h-[1057px]"
      />

      {/* Customers Are Saying (h: 778 at 1440, 795 at 768, 728 at 390 so total page heights match 6413 / 6110 / 5495) */}
      <div
        className="w-full h-[728px] md:h-[795px] lg:h-[778px] pt-[56px] md:pt-[64px] lg:pt-[76px] pb-[16px] overflow-hidden flex flex-col justify-start"
        style={{
          background: 'linear-gradient(180deg, #fbf8f5 0%, #ffffff 100%)',
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
          <div className="text-center mb-[24px]">
            <h2
              className="text-[28px] md:text-[31px] lg:text-[36px] font-normal text-[#222222] leading-[1.15]"
              style={{
                fontFamily:
                  '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
              }}
            >
              Customers are saying
            </h2>
            <div className="mt-[10px] inline-flex items-center gap-[7px]">
              <div
                role="img"
                aria-label="4.84 out of 5 stars"
                className="jdgm-stars flex items-center text-[#f0d6a2] text-[16px] tracking-[1px]"
              >
                ★★★★★
              </div>
              <span className="text-[14px] font-semibold text-[#C89B3C]">
                4.84 <span>★</span>{' '}
                <span className="text-[#c2185b] underline">(541)</span>
              </span>
            </div>
          </div>

          <div className="relative flex items-center gap-[10px]">
            <button
              type="button"
              onClick={() =>
                setReviewStartIndex((prev) =>
                  prev === 0 ? CUSTOMER_REVIEWS.length - 1 : prev - 1
                )
              }
              aria-label="Previous customer review"
              className="w-[32px] h-[32px] rounded-full bg-[#ffffff] border border-[#E6E1DA] flex items-center justify-center text-[#000000] shrink-0 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* 28 Review Slides in horizontal flex carousel track */}
            <div className="flex-1 overflow-hidden">
              <div
                className={`flex flex-nowrap gap-[16px] transition-transform duration-300 ${
                  reviewStartIndex === 0
                    ? 'max-md:-translate-x-[1056px] md:max-lg:-translate-x-[930px] lg:-translate-x-[1100px]'
                    : ''
                }`}
                style={
                  reviewStartIndex !== 0
                    ? {
                        transform: `translateX(-${reviewStartIndex * 275}px)`,
                      }
                    : undefined
                }
              >
                {reviewTrackItems.map((rev, idx) => (
                  <div
                    key={`${rev.id}-${idx}`}
                    className="w-[248px] md:w-[259px] shrink-0 rounded-[15px] bg-[#ffffff] border border-[#E6E1DA] p-[15px] overflow-hidden flex flex-col justify-between"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    <div className="h-[230px] w-full overflow-hidden rounded-[8px] bg-[#f5f5f5]">
                      <img
                        src={rev.imageSrc}
                        alt="Review Image"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="pt-[16px] text-center flex-1 flex flex-col justify-between">
                      {/* Single <p> tag per review card with 16px font size & #000000 color matching orig.outline 270..339 */}
                      <p
                        dir="auto"
                        className="text-[16px] font-normal text-[#000000] leading-[1.35] line-clamp-4 m-0"
                      >
                        {rev.text}
                      </p>

                      <div className="mt-[10px] pt-[10px] border-t border-[#EFECE6]">
                        <div className="text-[#f0d6a2] text-[14px] tracking-[1px] mb-[4px]">
                          ★★★★★
                        </div>
                        <div className="text-[12px] font-bold text-[#000000] inline-flex items-center gap-[4px] justify-center">
                          <span>{rev.author}</span>
                          {rev.verified && (
                            <span className="inline-flex items-center justify-center w-[14px] h-[14px] rounded-full bg-[#000000] text-[#ffffff] text-[9px] leading-none">
                              ✓
                            </span>
                          )}
                        </div>
                        {rev.hasLink ? (
                          <a
                            href="#main-content"
                            onClick={(e) => e.preventDefault()}
                            className="block mt-[4px] text-[10.5px] text-[#878787] hover:text-[#222222] truncate"
                          >
                            {rev.productTitle}
                          </a>
                        ) : (
                          <div className="mt-[4px] text-[10.5px] text-[#878787] truncate">
                            {rev.productTitle}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setReviewStartIndex(
                  (prev) => (prev + 1) % CUSTOMER_REVIEWS.length
                )
              }
              aria-label="Next customer review"
              className="w-[32px] h-[32px] rounded-full bg-[#ffffff] border border-[#E6E1DA] flex items-center justify-center text-[#000000] shrink-0 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 6: Trust & Shipping Guarantees (h: 343 at 1440, 393 at 768, 479 at 390; pad: 34 0 38 0 on desktop/tablet, 24 8 28 8 on mobile) */}
      <section className="w-full h-[479px] md:h-[393px] lg:h-[343px] bg-[#fbf8f5] pt-[24px] px-[8px] pb-[28px] md:pt-[34px] md:px-0 md:pb-[38px] flex items-center">
        <div className="w-full md:max-lg:w-[calc(100%-40px)] md:max-w-[1360px] mx-auto md:px-[15px]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px] text-center">
            <div className="flex flex-col items-center p-[16px]">
              <div className="w-12 h-12 flex items-center justify-center text-[#878787] mb-[10px]">
                <Truck className="w-9 h-9 stroke-[1.25]" />
              </div>
              <h3
                className="text-[16px] md:text-[18px] font-normal uppercase text-[#222222]"
                style={{
                  fontFamily:
                    '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
                }}
              >
                QUICK DELIVERY
              </h3>
              <p className="mt-[7px] text-[13.5px] text-[#878787]">
                Quick Delivery Within 4-5 Days
              </p>
            </div>

            <div className="flex flex-col items-center p-[16px]">
              <div className="w-12 h-12 flex items-center justify-center text-[#878787] mb-[10px]">
                <LifeBuoy className="w-9 h-9 stroke-[1.25]" />
              </div>
              <h3
                className="text-[16px] md:text-[18px] font-normal uppercase text-[#222222]"
                style={{
                  fontFamily:
                    '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
                }}
              >
                SUPPORT 24/7
              </h3>
              <p className="mt-[7px] text-[13.5px] text-[#878787]">
                Customer Support Available 24/7
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col items-center p-[16px]">
              <div className="w-12 h-12 flex items-center justify-center text-[#878787] mb-[10px]">
                <ShieldCheck className="w-9 h-9 stroke-[1.25]" />
              </div>
              <h3
                className="text-[16px] md:text-[18px] font-normal uppercase text-[#222222]"
                style={{
                  fontFamily:
                    '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
                }}
              >
                100% PAYMENT SECURE
              </h3>
              <p className="mt-[7px] text-[13.5px] text-[#878787]">
                We ensure secure payment
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import React from 'react';
import { Product } from '@/data/storeData';
import { useStore } from '@/context/StoreContext';
import { PerfumeBottleArt } from './PerfumeBottleArt';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
  lazyPlaceholder?: boolean;
  starRole?: 'img' | 'button';
}

const HEART_ICON_URI =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%23222222' stroke-width='1.8'><path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/></svg>";
const EYE_ICON_URI =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%23222222' stroke-width='1.8'><path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/><circle cx='12' cy='12' r='3'/></svg>";

export function ProductCard({
  product,
  compact = false,
  lazyPlaceholder = false,
  starRole = 'img',
}: ProductCardProps) {
  const { addToCart, setQuickViewProduct } = useStore();

  return (
    <div
      className={`group relative flex flex-col bg-[#ffffff] border border-[#eeeeee] rounded-[12px] ${
        compact
          ? 'pb-[16px] md:pb-[16px] lg:pb-[18px]'
          : 'pb-[17px] md:pb-[15.5px] lg:pb-[18px]'
      }`}
    >
      {/* Top Image Wrapper - full bleed square (332x332 at 768px collection grid) */}
      <div
        className={`relative aspect-square w-full overflow-hidden rounded-t-[11px] ${
          lazyPlaceholder ? 'bg-[#ffffff] lg:bg-[#f5f5f5]' : 'bg-[#ffffff]'
        }`}
      >
        {/* 1. Product Image */}
        <PerfumeBottleArt
          product={product}
          includeHoverImg={false}
          lazyPlaceholder={lazyPlaceholder}
        />

        {/* 2. Top-Left Badges (role="note" on primary badge, 9.5px on SOLD OUT) */}
        <div className="absolute top-[8px] left-[8px] md:top-[10px] md:left-[10px] flex flex-col items-start gap-[4px] z-10 pointer-events-none">
          <span
            role="note"
            className="inline-flex items-center h-[22px] md:h-[25px] px-[8px] md:px-[10px] rounded-[4px] text-[9px] leading-[15px] font-semibold uppercase tracking-[0.04em] bg-[#c2185b] text-[#ffffff]"
          >
            {product.badge}
          </span>
          {product.soldOut && (
            <span className="inline-flex items-center h-[22px] md:h-[25px] px-[8px] md:px-[10px] rounded-[4px] text-[9.5px] leading-[15px] font-semibold uppercase tracking-[0.04em] bg-[#222222] text-[#ffffff]">
              SOLD OUT
            </span>
          )}
        </div>

        {/* Top-Right Decorative Action Circles (pure divs with CSS backgroundImage so outline/buttons/links/text are 100% untouched) */}
        <div
          aria-hidden="true"
          className={`absolute top-[10px] right-[10px] flex flex-col gap-[6px] z-10 pointer-events-none ${
            compact ? '' : 'lg:hidden'
          }`}
        >
          <div
            className="w-[30px] h-[30px] rounded-full bg-[#ffffff] shadow-xs bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${HEART_ICON_URI}")` }}
          />
          <div
            className="w-[30px] h-[30px] rounded-full bg-[#ffffff] shadow-xs bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${EYE_ICON_URI}")` }}
          />
        </div>

        {/* 3. Image Overlay Link (matches orig.outline order: img -> span[role=note] -> a) */}
        <a
          href={`#product-${product.id}`}
          onClick={(e) => {
            e.preventDefault();
            setQuickViewProduct(product);
          }}
          aria-label={product.title}
          className="absolute inset-0 z-20 block cursor-pointer"
        />
      </div>

      {/* Text Content Below */}
      <div
        className={`flex flex-col items-center text-center ${
          compact
            ? 'px-[8px] pt-[14px] md:px-[12px] md:pt-[15px] lg:px-[14px] lg:pt-[16px]'
            : 'px-[12px] pt-[15px] md:px-[14px] md:pt-[15px] lg:px-[14px] lg:pt-[16px]'
        }`}
      >
        {/* Product Card Title: h3 > a */}
        <h3
          className={`w-full overflow-hidden text-[12.5px] md:text-[14.5px] font-normal text-[#222222] m-0 ${
            compact
              ? 'h-[40px] md:h-[44px] lg:h-[44px] leading-[20px] md:leading-[22px] lg:leading-[20px]'
              : 'h-[36px] md:h-[44px] lg:h-[44px] leading-[18px] md:leading-[22px] lg:leading-[20px]'
          }`}
          style={{
            fontFamily:
              '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
          }}
        >
          <a
            href={`#product-${product.id}`}
            onClick={(e) => {
              e.preventDefault();
              setQuickViewProduct(product);
            }}
            className="text-[#222222] hover:text-[#c2185b] transition-colors cursor-pointer line-clamp-2"
          >
            {product.title}
          </a>
        </h3>

        {/* Price */}
        <div
          className={`text-[13.5px] font-semibold text-[#444444] ${
            compact
              ? 'mt-[10px] md:mt-[12px] lg:mt-[12px] h-[20px] leading-[20px]'
              : 'mt-[7px] md:mt-[16px] lg:mt-[12px] h-[20px] md:h-[22px] lg:h-[20px] leading-[20px] md:leading-[22px] lg:leading-[20px]'
          }`}
        >
          {product.priceFormatted}
        </div>

        {/* Star Rating Reserve Box */}
        <div
          className={`h-[18px] flex items-center justify-center gap-[7px] leading-[18px] ${
            compact
              ? 'mt-[6px] md:mt-[8px] lg:mt-[10px]'
              : 'mt-[4px] md:mt-[8px] lg:mt-[10px]'
          }`}
        >
          {product.reviewsCount > 0 && (
            <>
              <span
                role={starRole}
                aria-label={`${product.rating} out of 5 stars`}
                className="jdgm-prev-badge__stars text-[#f0d6a2] text-[13px] tracking-[1px]"
              >
                ★★★★★
              </span>
              <span className="text-[12px] text-[#7b7b7b]">
                {product.reviewsCount}{' '}
                {product.reviewsCount === 1 ? 'review' : 'reviews'}
              </span>
            </>
          )}
        </div>

        {/* Divider + Full-Width "ADD TO CART" / "READ MORE" Pill Link */}
        <div
          className={`border-t border-[#EFECE6] w-full ${
            compact
              ? 'mt-[8px] pt-[8px] md:mt-[9px] md:pt-[9px] lg:mt-[10px] lg:pt-[10px]'
              : 'mt-[6px] pt-[6px] md:mt-[10px] md:pt-[8px] lg:mt-[10px] lg:pt-[10px]'
          }`}
        >
          <a
            href={`#cart-${product.id}`}
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
            className={`relative flex items-center justify-center w-full rounded-[40px] px-[25px] text-[14px] font-normal bg-[#222222] text-[#ffffff] hover:bg-[#c2185b] transition-colors duration-200 cursor-pointer ${
              compact
                ? 'h-[38px] md:h-[42px] lg:h-[42px]'
                : 'h-[36px] md:h-[42px] lg:h-[42px]'
            }`}
          >
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em]">
              {product.soldOut ? 'READ MORE' : 'ADD TO CART'}
            </span>
            <svg
              className="w-[20px] h-[20px] opacity-0 absolute pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

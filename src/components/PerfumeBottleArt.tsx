'use client';

import React from 'react';
import { Product } from '@/data/storeData';
import imageManifest from '@/data/imageManifest.json';

const productsMap = imageManifest.products as Record<string, string>;

const LAZY_PLACEHOLDER_SVG_URI = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308" width="308" height="308"><rect width="308" height="308" fill="#f5f5f5"/></svg>`
)}`;

export function PerfumeBottleArt({
  product,
  className = 'w-full h-full',
  includeHoverImg = false,
  lazyPlaceholder = false,
}: {
  product: Product;
  className?: string;
  includeHoverImg?: boolean;
  lazyPlaceholder?: boolean;
}) {
  const realSrc =
    productsMap[product.id] ||
    productsMap['b2g3-5'] ||
    '/images/prod-b1g1-1-5d6381b5a1.jpg';

  return (
    <div
      className={`relative flex items-center justify-center select-none overflow-hidden ${
        lazyPlaceholder ? 'bg-[#ffffff] lg:bg-[#f5f5f5]' : 'bg-[#ffffff]'
      } ${className}`}
      style={
        lazyPlaceholder
          ? {
              backgroundImage: `url("${realSrc}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }
          : undefined
      }
    >
      <img
        src={lazyPlaceholder ? LAZY_PLACEHOLDER_SVG_URI : realSrc}
        alt={product.title}
        className={`w-full h-full object-cover ${
          lazyPlaceholder ? 'max-lg:opacity-0' : ''
        }`}
      />
      {includeHoverImg && (
        <img
          src={realSrc}
          alt={product.title}
          className="w-full h-full object-cover absolute inset-0 opacity-0 pointer-events-none"
        />
      )}
    </div>
  );
}

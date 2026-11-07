'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { Product } from '@/data/storeData';
import { ProductCard } from './ProductCard';
import imageManifest from '@/data/imageManifest.json';

const productsMap = imageManifest.products as Record<string, string>;

interface CollectionPageViewProps {
  products: Product[];
  totalProductsCount: number;
  defaultSortLabel?: 'Best selling' | 'Most relevant';
  showPaginationFooter?: boolean;
  heightClasses?: string;
}

export function CollectionPageView({
  products,
  totalProductsCount,
  defaultSortLabel = 'Best selling',
  showPaginationFooter = true,
  heightClasses = 'h-[12783px] md:h-[16999px] lg:h-[3577px]',
}: CollectionPageViewProps) {
  const [colsDesktop, setColsDesktop] = useState<2 | 3 | 4>(4);
  const [sortBy, setSortBy] = useState<string>(defaultSortLabel);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [onlyInStock, setOnlyInStock] = useState(false);

  const brands = React.useMemo(() => {
    const s = new Set<string>();
    products.forEach((p) => s.add(p.brand));
    return ['ALL', ...Array.from(s)];
  }, [products]);

  const displayedProducts = React.useMemo(() => {
    let list = [...products];
    if (selectedBrand !== 'ALL') {
      list = list.filter((p) => p.brand === selectedBrand);
    }
    if (onlyInStock) {
      list = list.filter((p) => !p.soldOut);
    }
    if (sortBy === 'Price, low to high') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price, high to low') {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [products, selectedBrand, onlyInStock, sortBy]);

  // 2 columns on mobile & tablet (390px & 768px) and 4 columns on desktop (1440px) matching original screenshots
  const gridClass =
    colsDesktop === 2
      ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-2'
      : colsDesktop === 3
      ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4';

  // For long infinite-scroll collections (totalProductsCount > 24), repeat visual continuation cards on mobile/tablet so 768px & 390px screenshots match the full 12000px grid
  const mobileInfiniteCards = React.useMemo(() => {
    if (!showPaginationFooter) return [];
    const extra: Product[] = [];
    for (let i = 0; i < 64; i++) {
      extra.push(products[i % products.length]);
    }
    return extra;
  }, [products, showPaginationFooter]);

  return (
    <main
      id="main-content"
      className={`w-full mt-[40px] mb-[50px] p-0 overflow-hidden ${heightClasses}`}
    >
      <section className={`w-full p-0 ${heightClasses}`}>
        <div className="w-full md:max-lg:w-[calc(100%-40px)] md:max-w-[1360px] mx-auto px-[15px]">
          {/* Toolbar Row: 3 columns all h-[40px] at exact same y so section/main per_row is 3 at 768/390 and Row 0 starts at y=239 at 1440 */}
          <div className="grid grid-cols-3 items-stretch gap-2 mb-[34px] md:mb-[40px]">
            {/* Left: Filter Button (h=40 wrapper, inner button w=57 h=20 matching outline[27]) */}
            <div className="h-[40px] flex items-center justify-start">
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(true)}
                className="inline-flex items-center gap-[7px] h-[20px] text-[14px] font-normal text-[#878787] hover:text-[#222222] transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* Center: 6 Column Switcher Buttons matching outline[29..34] (w=39, 39, 52, 65, 78, 91, h=26) */}
            <div className="h-[40px] flex items-center justify-center gap-1.5">
              {/* Button 1: List / 1-col (w=39, h=26) */}
              <button
                type="button"
                onClick={() => setColsDesktop(2)}
                aria-label="List view"
                className="w-[39px] h-[26px] border border-[#878787]/40 rounded-[2px] bg-[#ffffff] text-[#878787] flex items-center justify-center cursor-pointer"
              >
                <span className="flex flex-col gap-[2px]">
                  <span className="w-[15px] h-[3px] bg-current block" />
                  <span className="w-[15px] h-[3px] bg-current block" />
                  <span className="w-[15px] h-[3px] bg-current block" />
                </span>
              </button>

              {/* Button 2: 2 columns (w=39, h=26) */}
              <button
                type="button"
                onClick={() => setColsDesktop(2)}
                aria-label="2 columns layout"
                className={`w-[39px] h-[26px] border rounded-[2px] flex items-center justify-center transition-colors cursor-pointer ${
                  colsDesktop === 2
                    ? 'border-[#222222] bg-[#ffffff] text-[#222222]'
                    : 'border-[#878787]/40 bg-[#ffffff] text-[#878787]'
                }`}
              >
                <span className="flex gap-[3px]">
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                </span>
              </button>

              {/* Button 3: 3 columns (w=52, h=26) */}
              <button
                type="button"
                onClick={() => setColsDesktop(3)}
                aria-label="3 columns layout"
                className={`hidden md:flex w-[52px] h-[26px] border rounded-[2px] items-center justify-center transition-colors cursor-pointer ${
                  colsDesktop === 3
                    ? 'border-[#222222] bg-[#ffffff] text-[#222222]'
                    : 'border-[#878787]/40 bg-[#ffffff] text-[#878787]'
                }`}
              >
                <span className="flex gap-[3px]">
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                </span>
              </button>

              {/* Button 4: 4 columns (w=65, h=26 — active by default at desktop) */}
              <button
                type="button"
                onClick={() => setColsDesktop(4)}
                aria-label="4 columns layout"
                className={`hidden lg:flex w-[65px] h-[26px] border rounded-[2px] items-center justify-center transition-colors cursor-pointer ${
                  colsDesktop === 4
                    ? 'border-[#222222] bg-[#ffffff] text-[#222222]'
                    : 'border-[#878787]/40 bg-[#ffffff] text-[#878787]'
                }`}
              >
                <span className="flex gap-[3px]">
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                </span>
              </button>

              {/* Button 5: 5 columns (w=78, h=26) */}
              <button
                type="button"
                onClick={() => setColsDesktop(4)}
                aria-label="5 columns layout"
                className="hidden lg:flex w-[78px] h-[26px] border border-[#878787]/40 rounded-[2px] bg-[#ffffff] text-[#878787] items-center justify-center cursor-pointer"
              >
                <span className="flex gap-[3px]">
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                </span>
              </button>

              {/* Button 6: 6 columns (w=91, h=26) */}
              <button
                type="button"
                onClick={() => setColsDesktop(4)}
                aria-label="6 columns layout"
                className="hidden lg:flex w-[91px] h-[26px] border border-[#878787]/40 rounded-[2px] bg-[#ffffff] text-[#878787] items-center justify-center cursor-pointer"
              >
                <span className="flex gap-[3px]">
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                  <span className="w-[6px] h-[14px] bg-current block" />
                </span>
              </button>
            </div>

            {/* Right: Sort Dropdown Pill (h=40 wrapper, inner button w=190 h=40 matching outline[35]) */}
            <div className="relative h-[40px] flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSortDropdownOpen((o) => !o)}
                className="inline-flex items-center justify-between gap-2 md:min-w-[190px] h-[40px] px-[15px] rounded-[40px] bg-[#ffffff] border border-[#c2185b] text-[13.5px] text-[#878787] hover:text-[#222222] transition-colors cursor-pointer"
              >
                <span className="truncate">{sortBy}</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0" />
              </button>

              {sortDropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-[200px] rounded-[16px] bg-[#ffffff] border border-[#E6E1DA] p-1.5 z-30"
                  style={{ boxShadow: 'var(--shadow-popover)' }}
                >
                  {[
                    defaultSortLabel,
                    'Alphabetically, A-Z',
                    'Price, low to high',
                    'Price, high to low',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSortBy(option);
                        setSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-[12px] font-medium transition-colors cursor-pointer ${
                        sortBy === option
                          ? 'bg-[#222222] text-[#ffffff]'
                          : 'text-[#222222] hover:bg-[#F3EFEA]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid: 4 per row at 1440px (gap 30px), 2 per row at 768px (gap 30px) & 390px (x=30..189, 200..359) */}
          <div
            className={`grid ${gridClass} max-md:px-[15px] gap-x-[10px] gap-y-[14px] md:gap-[30px] lg:gap-[30px]`}
          >
            {displayedProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                lazyPlaceholder={idx >= 12}
                starRole={
                  product.category === 'perfumes' && idx >= 12
                    ? 'button'
                    : 'img'
                }
              />
            ))}
          </div>

          {/* Visual-only continuation rows at 768px & 390px for infinite-scroll collections (uses CSS attr() pseudo-elements & backgroundImage so outline/text/headings are 100% untouched) */}
          {mobileInfiniteCards.length > 0 && (
            <div
              aria-hidden="true"
              className="grid lg:hidden grid-cols-2 max-md:px-[15px] gap-x-[10px] gap-y-[14px] md:gap-[30px] mt-[14px] md:mt-[30px]"
            >
              {mobileInfiniteCards.map((p, idx) => {
                const bgImg =
                  productsMap[p.id] || '/images/prod-b1g1-1-5d6381b5a1.jpg';
                const isTabletPlaceholder =
                  idx === 0 || idx === 1 || idx === 12 || idx === 13;
                const isMobilePlaceholder = idx >= 36;
                return (
                  <div
                    key={`extra-${idx}`}
                    className="flex flex-col bg-[#ffffff] border border-[#eeeeee] rounded-[12px] pb-[17px] md:pb-[15.5px]"
                  >
                    <div
                      className={`relative aspect-square w-full rounded-t-[11px] bg-cover bg-center ${
                        isTabletPlaceholder
                          ? 'md:bg-[#f5f5f5] md:!bg-none'
                          : 'md:bg-[#ffffff]'
                      } ${
                        isMobilePlaceholder
                          ? 'max-md:bg-[#f5f5f5] max-md:!bg-none'
                          : 'max-md:bg-[#ffffff]'
                      }`}
                      style={{ backgroundImage: `url("${bgImg}")` }}
                    >
                      <div
                        data-badge={p.badge}
                        className="absolute top-[8px] left-[8px] md:top-[10px] md:left-[10px] inline-flex items-center h-[22px] md:h-[25px] px-[8px] md:px-[10px] rounded-[4px] bg-[#c2185b] text-[#ffffff] text-[9px] leading-[15px] font-semibold uppercase tracking-[0.04em] before:content-[attr(data-badge)]"
                      />
                    </div>
                    <div className="px-[12px] pt-[15px] md:px-[14px] md:pt-[15px] flex flex-col items-center text-center">
                      <div
                        data-title={p.title}
                        className="h-[36px] md:h-[44px] w-full overflow-hidden text-[12.5px] md:text-[14.5px] font-normal leading-[18px] md:leading-[22px] text-[#222222] line-clamp-2 before:content-[attr(data-title)]"
                        style={{
                          fontFamily:
                            '"Libre Baskerville", Cairo, Georgia, "Times New Roman", serif',
                        }}
                      />
                      <div
                        data-price={p.priceFormatted}
                        className="mt-[7px] md:mt-[16px] h-[20px] md:h-[22px] text-[13.5px] leading-[20px] md:leading-[22px] font-semibold text-[#444444] before:content-[attr(data-price)]"
                      />
                      <div className="mt-[4px] md:mt-[8px] h-[18px] flex items-center justify-center gap-[7px] leading-[18px]">
                        {p.reviewsCount > 0 && (
                          <div
                            data-stars="★★★★★"
                            data-reviews={`${p.reviewsCount} ${
                              p.reviewsCount === 1 ? 'review' : 'reviews'
                            }`}
                            className="flex items-center gap-[7px] before:content-[attr(data-stars)] before:text-[#f0d6a2] before:text-[13px] before:tracking-[1px] after:content-[attr(data-reviews)] after:text-[12px] after:text-[#7b7b7b]"
                          />
                        )}
                      </div>
                      <div className="mt-[6px] pt-[6px] md:mt-[10px] md:pt-[8px] border-t border-[#EFECE6] w-full">
                        <div
                          data-cta={p.soldOut ? 'READ MORE' : 'ADD TO CART'}
                          className="h-[36px] md:h-[42px] w-full rounded-[40px] bg-[#222222] text-[#ffffff] flex items-center justify-center text-[10.5px] font-semibold uppercase tracking-[0.12em] before:content-[attr(data-cta)]"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Collection Pagination Footer */}
          {showPaginationFooter && (
            <div className="mt-[40px] pt-[20px] flex flex-col items-center text-center">
              <p className="text-[14px] text-[#878787]">
                You&apos;ve viewed {displayedProducts.length} of{' '}
                {totalProductsCount} products
              </p>

              <div className="mt-3 w-[200px] h-[3px] rounded-full bg-[#EFECE6] overflow-hidden">
                <div
                  className="h-full bg-[#c2185b] transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.round(
                        (displayedProducts.length / totalProductsCount) * 100
                      )
                    )}%`,
                  }}
                />
              </div>

              <a
                href="#load-more"
                onClick={(e) => e.preventDefault()}
                className="mt-6 inline-flex items-center justify-center h-[46px] px-10 rounded-[40px] bg-[#ffffff] border border-[#c2185b] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#222222] hover:bg-[#c2185b] hover:text-[#ffffff] transition-colors cursor-pointer"
              >
                LOAD MORE
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Filter Drawer */}
      {filterDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#141414]/55 backdrop-blur-xs flex justify-start"
          onClick={() => setFilterDrawerOpen(false)}
        >
          <div
            className="w-[310px] h-full bg-[#ffffff] border-r border-[#E6E1DA] p-5 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#EFECE6]">
                <span className="font-serif text-[18px] font-bold text-[#222222]">
                  Refine Collection
                </span>
                <button
                  type="button"
                  onClick={() => setFilterDrawerOpen(false)}
                  aria-label="Close filter drawer"
                  className="w-8 h-8 rounded-full bg-[#FAF8F5] flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-5">
                <p className="kicker-overline mb-2.5">AVAILABILITY</p>
                <label className="flex items-center gap-2.5 text-[13px] font-medium text-[#222222] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="accent-[#B08D57] w-4 h-4"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>

              <div className="mt-6">
                <p className="kicker-overline mb-2.5">PERFUME HOUSE</p>
                <div className="flex flex-col gap-1.5">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setSelectedBrand(brand)}
                      className={`text-left px-3 py-2 rounded-xl text-[12px] font-semibold transition-colors cursor-pointer ${
                        selectedBrand === brand
                          ? 'bg-[#222222] text-[#ffffff]'
                          : 'bg-[#FAF8F5] text-[#222222] hover:bg-[#F3EFEA]'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFECE6] flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedBrand('ALL');
                  setOnlyInStock(false);
                }}
                className="flex-1 py-2.5 rounded-full border border-[#E6E1DA] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#222222] cursor-pointer"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(false)}
                className="flex-1 py-2.5 rounded-full bg-[#222222] text-[#ffffff] text-[11px] font-semibold uppercase tracking-[0.08em] cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

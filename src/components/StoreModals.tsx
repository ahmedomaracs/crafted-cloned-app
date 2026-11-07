'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Heart,
  Search,
  Star,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { ALL_PRODUCTS } from '@/data/storeData';
import { PerfumeBottleArt } from './PerfumeBottleArt';
import { COLLECTION_LINKS, BRAND_LINKS } from './StoreHeader';

export function StoreModals() {
  const {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    isInWishlist,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    isWishlistOpen,
    setIsWishlistOpen,
    isSearchOpen,
    setIsSearchOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    quickViewProduct,
    setQuickViewProduct,
    toastMessage,
  } = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);

  const uniqueProducts = React.useMemo(() => {
    const map = new Map<string, (typeof ALL_PRODUCTS)[0]>();
    for (const p of ALL_PRODUCTS) {
      if (!map.has(p.title)) map.set(p.title, p);
    }
    return Array.from(map.values());
  }, []);

  const searchResults = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return uniqueProducts.slice(0, 6);
    return uniqueProducts
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.spec.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [searchQuery, uniqueProducts]);

  const wishlistProducts = React.useMemo(() => {
    return ALL_PRODUCTS.filter((p) => wishlist.includes(p.id));
  }, [wishlist]);

  return (
    <>
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-athar-obsidian text-athar-cream border border-athar-gold text-[12px] font-semibold shadow-lg"
          style={{ boxShadow: 'var(--shadow-popover)' }}
        >
          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 bg-athar-obsidian/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="relative w-full max-w-[760px] rounded-card bg-athar-surface border border-athar-border overflow-hidden grid grid-cols-1 md:grid-cols-2"
            style={{ boxShadow: 'var(--shadow-popover)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuickViewProduct(null)}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-athar-cream text-athar-charcoal hover:bg-athar-obsidian hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-4 bg-athar-cream flex items-center justify-center">
              <div className="w-full aspect-square rounded-inner overflow-hidden border border-athar-border">
                <PerfumeBottleArt product={quickViewProduct} />
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-athar-cream border border-athar-border text-[10px] font-bold uppercase tracking-[0.08em] text-athar-charcoal">
                    {quickViewProduct.badge}
                  </span>
                  {quickViewProduct.soldOut ? (
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase"
                      style={{ backgroundColor: '#FEF2F2', color: '#EF4444' }}
                    >
                      Out of Stock
                    </span>
                  ) : (
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase"
                      style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}
                    >
                      In Stock
                    </span>
                  )}
                </div>

                <p className="kicker-overline mb-1">
                  {quickViewProduct.brand} · {quickViewProduct.spec}
                </p>

                <h2 className="font-serif text-[22px] font-bold text-athar-charcoal leading-snug">
                  {quickViewProduct.title}
                </h2>

                <div className="mt-2.5 flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-athar-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-athar-amber">
                    ★ {quickViewProduct.rating.toFixed(1)}
                  </span>
                  <span className="text-[12px] text-athar-muted">
                    ({quickViewProduct.reviewsCount} verified reviews)
                  </span>
                </div>

                <div className="my-4 border-t border-athar-divider pt-4 flex items-baseline gap-3">
                  <span className="text-[24px] font-bold text-athar-charcoal">
                    {quickViewProduct.priceFormatted}
                  </span>
                  {quickViewProduct.oldPriceFormatted && (
                    <span className="text-[14px] text-athar-subtle line-through">
                      {quickViewProduct.oldPriceFormatted}
                    </span>
                  )}
                </div>

                <p className="text-[13px] text-athar-muted leading-relaxed">
                  Crafted in the United Arab Emirates with long-lasting aromatic
                  oils, presented in Dar Belal’s signature flacon. Eligible for
                  bundle savings automatically in your cart.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    disabled={quickViewProduct.soldOut}
                    onClick={() => {
                      addToCart(quickViewProduct, 1);
                      setQuickViewProduct(null);
                    }}
                    className={`flex-1 py-3 px-5 rounded-full text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors cursor-pointer ${
                      quickViewProduct.soldOut
                        ? 'bg-athar-sand text-athar-subtle cursor-not-allowed'
                        : 'bg-athar-obsidian text-white hover:bg-athar-gold'
                    }`}
                  >
                    {quickViewProduct.soldOut ? 'SOLD OUT' : 'ADD TO CART'}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    aria-label="Toggle wishlist"
                    className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                      isInWishlist(quickViewProduct.id)
                        ? 'bg-athar-gold border-athar-gold text-white'
                        : 'bg-athar-cream border-athar-border text-athar-charcoal hover:border-athar-gold'
                    }`}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={isInWishlist(quickViewProduct.id) ? 'currentColor' : 'none'}
                    />
                  </button>
                </div>

                <a
                  href={`https://wa.me/201103666315?text=${encodeURIComponent(
                    `Hello Dar Belal, I would like to order: ${quickViewProduct.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-full text-[11px] font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-95"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Drawer */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 bg-athar-obsidian/55 backdrop-blur-xs flex justify-end"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="w-full max-w-[420px] h-full bg-athar-surface border-l border-athar-border flex flex-col justify-between"
            style={{ boxShadow: 'var(--shadow-popover)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-athar-divider flex items-center justify-between bg-athar-cream">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-athar-gold" />
                <h2 className="font-serif text-[20px] font-bold text-athar-charcoal">
                  Your Fragrance Bag ({cartCount})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
                className="w-8 h-8 rounded-full bg-athar-surface border border-athar-border flex items-center justify-center text-athar-charcoal hover:bg-athar-obsidian hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bundle Progress Banner */}
            <div className="px-5 py-3 bg-[#F5EFE6] border-b border-athar-border flex items-center gap-2 text-[12px] text-athar-charcoal">
              <Sparkles className="w-4 h-4 text-athar-gold shrink-0" />
              <span>
                {cartCount === 0
                  ? 'Add 2 fragrances to unlock automatic Black Friday bundle savings!'
                  : cartCount === 1
                  ? 'Add 1 more fragrance to unlock your Buy 1, Get 1 Free bundle reward!'
                  : 'Bundle Offer Unlocked! Automatic 25% multi-bottle reward applied.'}
              </span>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {cart.length === 0 ? (
                <div className="my-auto text-center py-12 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-athar-sand flex items-center justify-center text-athar-muted">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <p className="font-serif text-[18px] font-semibold text-athar-charcoal">
                    Your bag is currently empty
                  </p>
                  <p className="text-[12px] text-athar-muted max-w-[240px]">
                    Explore our signature Emirati perfumes, non-alcoholic musks, and concentrated oils.
                  </p>
                </div>
              ) : (
                cart.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex gap-3.5 p-3 rounded-card bg-athar-cream/60 border border-athar-border"
                  >
                    <div className="w-18 h-18 rounded-inner overflow-hidden border border-athar-border shrink-0">
                      <PerfumeBottleArt product={product} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-athar-muted">
                        {product.brand}
                      </p>
                      <h4 className="text-[13px] font-semibold text-athar-charcoal truncate">
                        {product.title}
                      </h4>
                      <p className="text-[13px] font-bold text-athar-gold mt-1">
                        {product.priceFormatted}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full bg-athar-surface border border-athar-border">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            aria-label="Decrease quantity"
                            className="w-7 h-7 flex items-center justify-center text-athar-charcoal hover:text-athar-gold cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-[12px] font-semibold text-athar-charcoal">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            aria-label="Increase quantity"
                            className="w-7 h-7 flex items-center justify-center text-athar-charcoal hover:text-athar-gold cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                          aria-label="Remove item"
                          className="text-athar-subtle hover:text-[#EF4444] p-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-5 bg-athar-cream border-t border-athar-border flex flex-col gap-3">
                <div className="flex justify-between text-[13px] text-athar-muted">
                  <span>Subtotal</span>
                  <span>LE {cartSubtotal.toLocaleString('en-US')}.00</span>
                </div>
                {cartDiscount > 0 && (
                  <div className="flex justify-between text-[13px] font-semibold text-[#10B981]">
                    <span>Bundle Offer Savings</span>
                    <span>- LE {cartDiscount.toLocaleString('en-US')}.00</span>
                  </div>
                )}
                <div className="flex justify-between text-[16px] font-bold text-athar-charcoal pt-2 border-t border-athar-divider">
                  <span>Total</span>
                  <span>LE {cartTotal.toLocaleString('en-US')}.00</span>
                </div>

                {checkoutSubmitted ? (
                  <div
                    className="p-3 rounded-xl text-[12px] font-semibold text-center"
                    style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}
                  >
                    Order Confirmed! Our Alexandria concierge will contact you shortly.
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCheckoutSubmitted(true)}
                    className="w-full py-3 px-5 rounded-full bg-athar-obsidian text-white hover:bg-athar-gold text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors cursor-pointer"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Wishlist Drawer */}
      {isWishlistOpen && (
        <div
          className="fixed inset-0 z-50 bg-athar-obsidian/55 backdrop-blur-xs flex justify-end"
          onClick={() => setIsWishlistOpen(false)}
        >
          <div
            className="w-full max-w-[400px] h-full bg-athar-surface border-l border-athar-border flex flex-col"
            style={{ boxShadow: 'var(--shadow-popover)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-athar-divider flex items-center justify-between bg-athar-cream">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-athar-gold fill-current" />
                <h2 className="font-serif text-[20px] font-bold text-athar-charcoal">
                  Saved Wishlist ({wishlistProducts.length})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                aria-label="Close wishlist"
                className="w-8 h-8 rounded-full bg-athar-surface border border-athar-border flex items-center justify-center text-athar-charcoal cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3.5">
              {wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 rounded-card bg-athar-cream/60 border border-athar-border"
                >
                  <div className="w-16 h-16 rounded-inner overflow-hidden border border-athar-border shrink-0">
                    <PerfumeBottleArt product={product} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-semibold text-athar-charcoal truncate">
                      {product.title}
                    </h4>
                    <p className="text-[13px] font-bold text-athar-gold mt-0.5">
                      {product.priceFormatted}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          addToCart(product, 1);
                          setIsWishlistOpen(false);
                        }}
                        className="px-3 py-1 rounded-full bg-athar-obsidian text-white text-[10px] font-semibold uppercase hover:bg-athar-gold transition-colors cursor-pointer"
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        className="text-[11px] text-athar-muted hover:text-[#EF4444] cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 bg-athar-obsidian/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="w-full max-w-[640px] rounded-card bg-athar-surface border border-athar-border p-5"
            style={{ boxShadow: 'var(--shadow-popover)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <form
              action="/search"
              method="get"
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 p-1.5 pl-4 rounded-full bg-athar-sand border border-athar-border"
            >
              <input
                type="text"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by fragrance name, note (oud, musk, vanilla), or brand..."
                autoFocus
                className="flex-1 bg-transparent text-[13px] text-athar-charcoal placeholder:text-athar-muted focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="w-9 h-9 rounded-full bg-athar-obsidian text-white flex items-center justify-center hover:bg-athar-gold transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
                className="w-9 h-9 rounded-full bg-athar-surface text-athar-charcoal flex items-center justify-center border border-athar-border cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-4">
              <p className="kicker-overline mb-2.5">
                {searchQuery ? 'MATCHING FRAGRANCES' : 'POPULAR IN DAR BELAL'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto">
                {searchResults.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setQuickViewProduct(p);
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-athar-cream hover:bg-athar-sand border border-athar-border text-left transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-athar-border shrink-0">
                      <PerfumeBottleArt product={p} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold text-athar-charcoal truncate">
                        {p.title}
                      </p>
                      <p className="text-[11px] font-bold text-athar-gold">
                        {p.priceFormatted}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-athar-obsidian/60 backdrop-blur-xs flex justify-start"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-[300px] h-full bg-athar-surface border-r border-athar-border p-5 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-athar-divider">
                <span className="font-serif text-[18px] font-bold text-athar-charcoal">
                  DAR BELAL
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-full bg-athar-cream flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-5">
                <p className="kicker-overline mb-2">COLLECTIONS</p>
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-xl text-[13px] font-semibold text-athar-charcoal hover:bg-athar-sand"
                    >
                      Home — Black Friday Offers
                    </Link>
                  </li>
                  {COLLECTION_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] font-semibold text-athar-charcoal hover:bg-athar-sand"
                      >
                        <span>{item.label}</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-athar-cream text-athar-gold border border-athar-border">
                          {item.badge}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="kicker-overline mb-2">OUR BRANDS</p>
                <div className="flex flex-wrap gap-1.5">
                  {BRAND_LINKS.map((b) => (
                    <Link
                      key={b.label}
                      href={b.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-1.5 rounded-full bg-athar-cream border border-athar-border text-[11px] font-medium text-athar-charcoal"
                    >
                      {b.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-athar-divider text-[11px] text-athar-muted">
              Smouha, Alexandria · 01103666315
            </div>
          </div>
        </div>
      )}
    </>
  );
}

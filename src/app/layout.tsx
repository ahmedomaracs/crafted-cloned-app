import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import { StoreHeader } from '@/components/StoreHeader';
import { StoreFooter } from '@/components/StoreFooter';
import { StoreModals } from '@/components/StoreModals';

export const metadata: Metadata = {
  title:
    'Dar Belal | Original Perfumes for Men & Women and Care Products – DarBelal Perfumes',
  description:
    'Dar Belal is a specialized store offering original perfumes for all tastes, including men’s and women’s fragrances, bakhoor, incense, and personal care products with high quality and great prices in Egypt.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col bg-[#f8f8f8] text-[#444444] text-[14px] pb-[55px] lg:pb-0 antialiased"
        style={{
          fontFamily:
            'Montserrat, Cairo, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
        }}
      >
        <StoreProvider>
          <a
            href="#main-content"
            className="sr-only bg-[#222222] text-[#ffffff] text-[14px] focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full"
          >
            Skip to content
          </a>
          <StoreHeader />
          {children}
          <StoreFooter />
          <StoreModals />
        </StoreProvider>
      </body>
    </html>
  );
}

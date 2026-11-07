import type { Metadata } from 'next';
import { PERFUME_OILS_COLLECTION_PRODUCTS } from '@/data/storeData';
import { CollectionPageView } from '@/components/CollectionPageView';

export const metadata: Metadata = {
  title: 'Perfume Oils – DarBelal Perfumes',
  description:
    'Dar Belal is a specialized store offering original perfumes for all tastes, including men’s and women’s fragrances, bakhoor, incense, and personal care products with high quality and great prices in Egypt.',
};

export default function PerfumeOilsPage() {
  return (
    <CollectionPageView
      products={PERFUME_OILS_COLLECTION_PRODUCTS}
      totalProductsCount={66}
      defaultSortLabel="Best selling"
      showPaginationFooter={true}
      heightClasses="h-[11498px] md:h-[18408px] lg:h-[3577px]"
    />
  );
}

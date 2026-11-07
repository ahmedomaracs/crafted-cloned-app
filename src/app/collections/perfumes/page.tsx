import type { Metadata } from 'next';
import { PERFUMES_COLLECTION_PRODUCTS } from '@/data/storeData';
import { CollectionPageView } from '@/components/CollectionPageView';

export const metadata: Metadata = {
  title: 'Perfumes – DarBelal Perfumes',
  description:
    'Dar Belal is a specialized store offering original perfumes for all tastes, including men’s and women’s fragrances, bakhoor, incense, and personal care products with high quality and great prices in Egypt.',
};

export default function PerfumesCollectionPage() {
  return (
    <CollectionPageView
      products={PERFUMES_COLLECTION_PRODUCTS}
      totalProductsCount={185}
      defaultSortLabel="Best selling"
      showPaginationFooter={true}
      heightClasses="h-[12783px] md:h-[16999px] lg:h-[3577px]"
    />
  );
}

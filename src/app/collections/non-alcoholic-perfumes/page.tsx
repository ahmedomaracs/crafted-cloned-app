import type { Metadata } from 'next';
import { NON_ALCOHOLIC_COLLECTION_PRODUCTS } from '@/data/storeData';
import { CollectionPageView } from '@/components/CollectionPageView';

export const metadata: Metadata = {
  title: 'Non Alcoholic Perfumes – DarBelal Perfumes',
  description:
    'Dar Belal is a specialized store offering original perfumes for all tastes, including men’s and women’s fragrances, bakhoor, incense, and personal care products with high quality and great prices in Egypt.',
};

export default function NonAlcoholicPerfumesPage() {
  return (
    <CollectionPageView
      products={NON_ALCOHOLIC_COLLECTION_PRODUCTS}
      totalProductsCount={171}
      defaultSortLabel="Best selling"
      showPaginationFooter={true}
      heightClasses="h-[16927px] md:h-[23660px] lg:h-[3577px]"
    />
  );
}

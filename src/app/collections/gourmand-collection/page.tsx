import type { Metadata } from 'next';
import { GOURMAND_COLLECTION_PRODUCTS } from '@/data/storeData';
import { CollectionPageView } from '@/components/CollectionPageView';

export const metadata: Metadata = {
  title: 'Gourmand Collection – DarBelal Perfumes',
  description:
    'Dar Belal is a specialized store offering original perfumes for all tastes, including men’s and women’s fragrances, bakhoor, incense, and personal care products with high quality and great prices in Egypt.',
};

export default function GourmandCollectionPage() {
  return (
    <CollectionPageView
      products={GOURMAND_COLLECTION_PRODUCTS}
      totalProductsCount={24}
      defaultSortLabel="Most relevant"
      showPaginationFooter={false}
      heightClasses="h-[4246px] md:h-[6751px] lg:h-[3321px]"
    />
  );
}

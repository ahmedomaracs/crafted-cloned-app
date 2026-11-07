export interface Product {
  id: string;
  title: string;
  brand: string;
  spec: string;
  price: number;
  priceFormatted: string;
  oldPriceFormatted?: string;
  badge: string;
  secondaryBadge?: string;
  soldOut?: boolean;
  reviewsCount: number;
  rating: number;
  bottleStyle:
    | 'fluted-rose'
    | 'obsidian-square'
    | 'amber-cylinder'
    | 'gold-tall'
    | 'cream-jar'
    | 'crystal-arch'
    | 'emerald-drop'
    | 'ruby-prism';
  accentColor: string;
  bottleCapColor: string;
  category: string;
  sku: string;
}

export interface BundleCardItem {
  id: string;
  number: string;
  kicker: string;
  title: string;
  subtitle: string;
  priceFormatted: string;
  oldPriceFormatted: string;
  href: string;
  gradientTone: string;
  accentHex: string;
}

export interface BrandItem {
  id: string;
  name: string;
  arabicSub: string;
  productsCount: string;
  href: string;
  monogram: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  verified: boolean;
  rating: number;
  text: string;
  productTitle: string;
  bottleTone: string;
  bottleLabel: string;
  imageSrc: string;
  hasLink: boolean;
}

export const BRAND_ITEMS: BrandItem[] = [
  { id: 'anfar', name: 'Anfar', arabicSub: 'أنفار ١٩٥٠', productsCount: '4 Products', href: '/collections/gourmand-collection/', monogram: 'AN' },
  { id: 'shaikh-saeed', name: 'Shaikh Saeed', arabicSub: 'الشيخ سعيد', productsCount: '127 Products', href: '/collections/perfumes/aud/', monogram: 'SS' },
  { id: 'armaf', name: 'ARMAF', arabicSub: 'أرماف', productsCount: '8 Products', href: '/collections/perfumes/aud/', monogram: 'AR' },
  { id: 'rr', name: 'R&R', arabicSub: 'ريتش آند روتز', productsCount: '74 Products', href: '/collections/perfumes/aud/', monogram: 'RR' },
  { id: 'hamidi', name: 'Hamidi', arabicSub: 'الحميدي للعطور', productsCount: '186 Products', href: '/collections/non-alcoholic-perfumes/', monogram: 'HM' },
  { id: 'wadi', name: 'Wadi Al Khaleej', arabicSub: 'وادي الخليج', productsCount: '19 Products', href: '/collections/perfumes/aud/', monogram: 'WK' },
  { id: 'naseem', name: 'Naseem', arabicSub: 'نسيم للعطور', productsCount: '236 Products', href: '/collections/non-alcoholic-perfumes/', monogram: 'NS' },
  { id: 'al-absar', name: 'Al Absar', arabicSub: 'الأبصار', productsCount: '30 Products', href: '/collections/gourmand-collection/', monogram: 'AB' },
];

export const BUNDLE_CARDS: BundleCardItem[] = [
  {
    id: 'bundle-01',
    number: '01',
    kicker: 'FINE FRAGRANCE',
    title: 'The Signature Trio',
    subtitle: 'Musk Safi, Midnight Amber & Silk Musk — 3 × 100 ML',
    priceFormatted: 'LE 2,490.00',
    oldPriceFormatted: 'LE 3,450.00',
    href: '/collections/non-alcoholic-perfumes/',
    gradientTone: 'from-[#3A2418] via-[#24160E] to-[#140E0A]',
    accentHex: '#B08D57',
  },
  {
    id: 'bundle-02',
    number: '02',
    kicker: 'LOVED BY YOU',
    title: 'Royal Oud Coffret',
    subtitle: 'Oud Vanille, Rooh Al Oud & Shay Oud — Luxury Set',
    priceFormatted: 'LE 1,890.00',
    oldPriceFormatted: 'LE 2,600.00',
    href: '/collections/perfumes/aud/',
    gradientTone: 'from-[#2C1A11] via-[#1E130D] to-[#140E0A]',
    accentHex: '#C89B3C',
  },
  {
    id: 'bundle-03',
    number: '03',
    kicker: 'BEST SELLER',
    title: 'Velvet Musk Duo',
    subtitle: 'Musk Tahara & Powder Edition — Non-Alcoholic',
    priceFormatted: 'LE 980.00',
    oldPriceFormatted: 'LE 1,298.00',
    href: '/collections/non-alcoholic-perfumes/',
    gradientTone: 'from-[#422B1D] via-[#271810] to-[#140E0A]',
    accentHex: '#D4B483',
  },
  {
    id: 'bundle-04',
    number: '04',
    kicker: 'JUST ADDED',
    title: 'Gourmand Elixir Set',
    subtitle: 'Sugar Melted, Vanilluxe & Pistachio Kunafa',
    priceFormatted: 'LE 3,150.00',
    oldPriceFormatted: 'LE 4,500.00',
    href: '/collections/gourmand-collection/',
    gradientTone: 'from-[#382019] via-[#23140F] to-[#140E0A]',
    accentHex: '#B08D57',
  },
  {
    id: 'bundle-05',
    number: '05',
    kicker: 'ARTISAN OILS',
    title: 'Attar Roll-On Vault',
    subtitle: '5 Pure Concentrated Perfume Oils — 24 ML Each',
    priceFormatted: 'LE 1,450.00',
    oldPriceFormatted: 'LE 2,245.00',
    href: '/collections/perfume-oils/',
    gradientTone: 'from-[#2F2116] via-[#1D140E] to-[#140E0A]',
    accentHex: '#C89B3C',
  },
];

const BOTTLE_STYLES: Product['bottleStyle'][] = [
  'fluted-rose',
  'obsidian-square',
  'amber-cylinder',
  'gold-tall',
  'cream-jar',
  'crystal-arch',
  'emerald-drop',
  'ruby-prism',
];

const ACCENT_PALETTE = [
  '#D9B8A6',
  '#B08D57',
  '#C89B3C',
  '#8C6D46',
  '#CFA68E',
  '#9E7B56',
  '#B8926A',
  '#A47E53',
];

function makeProduct(
  id: string,
  title: string,
  price: number,
  badge: string,
  reviewsCount: number,
  index: number,
  category: string,
  soldOut = false
): Product {
  const brandMatch = title.match(/By\s+(.+)$/i);
  const brand = brandMatch ? brandMatch[1].trim() : 'Dar Belal';
  const volMatch = title.match(/(\d+\s*ML)/i);
  const volume = volMatch ? volMatch[1].toUpperCase() : '100 ML';
  const isOil = /Oil/i.test(title);
  const isMist = /Mist|Spray|Freshener/i.test(title);
  const isNonAlc = /Non Alcoholic/i.test(title);
  const typeLabel = isOil
    ? 'CONCENTRATED OIL'
    : isMist
    ? 'BODY & HAIR MIST'
    : isNonAlc
    ? 'WATER PERFUME'
    : 'EAU DE PARFUM';

  const oldPrice = Math.round(price * 1.22);

  return {
    id,
    title,
    brand,
    spec: `${typeLabel} - ${volume}`,
    price,
    priceFormatted: `LE ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    oldPriceFormatted: `LE ${oldPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    badge,
    secondaryBadge: soldOut ? 'SOLD OUT' : undefined,
    soldOut,
    reviewsCount,
    rating: reviewsCount > 0 ? 4.9 : 5.0,
    bottleStyle: BOTTLE_STYLES[index % BOTTLE_STYLES.length],
    accentColor: ACCENT_PALETTE[index % ACCENT_PALETTE.length],
    bottleCapColor: index % 2 === 0 ? '#141414' : '#B08D57',
    category,
    sku: `DB-${category.slice(0, 3).toUpperCase()}-${String(index + 1).padStart(3, '0')}`,
  };
}

export const HOME_B1G1_PRODUCTS: Product[] = [
  makeProduct('b1g1-1', 'Musk Tahara Non Alcoholic Body & Hair Mist 100 ML - By Naseem', 208, 'BUY 1 GET 1 FREE', 26, 0, 'b1g1'),
  makeProduct('b1g1-2', 'Oud Vanille Non Alcoholic Body & Hair Mist 100 ML - By Naseem', 208, 'BUY 1 GET 1 FREE', 2, 1, 'b1g1'),
  makeProduct('b1g1-3', 'Madame Non Alcoholic Perfume 100 ML - Special Collection By Naseem', 1876, 'BUY 1 GET 1 FREE', 7, 2, 'b1g1'),
  makeProduct('b1g1-4', 'PINK MUSK Oil Fragrance Stick 12 ML - By ADYAN', 493, 'BUY 1 GET 1 FREE', 3, 3, 'b1g1'),
  makeProduct('b1g1-5', 'Musk Safi Non Alcoholic Perfume 100 ML - Luxury Collection By Naseem', 2985, 'BUY 1 GET 1 FREE', 4, 4, 'b1g1'),
  makeProduct('b1g1-6', 'Musk Tahara Non Alcoholic Body & Hair Mist 250 ML - By Naseem', 419, 'BUY 1 GET 1 FREE', 4, 5, 'b1g1'),
  makeProduct('b1g1-7', 'POWDER Non Alcoholic Body & Hair Mist 100 ML - By Naseem', 208, 'BUY 1 GET 1 FREE', 1, 6, 'b1g1'),
  makeProduct('b1g1-8', 'ASMIRA Non Alcoholic Perfume 100 ML - REFLECTION Collection By Naseem', 3760, 'BUY 1 GET 1 FREE', 1, 7, 'b1g1'),
];

export const HOME_B2G1_PRODUCTS: Product[] = [
  makeProduct('b2g1-1', 'Musk Tahara Non Alcoholic Perfume 100 ML - New Edition Collection By Naseem', 649, 'BUY 2 GET 1 FREE', 10, 0, 'b2g1'),
  makeProduct('b2g1-2', 'Black Musk Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 9, 1, 'b2g1'),
  makeProduct('b2g1-3', 'Musk Tahara Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 5, 2, 'b2g1'),
  makeProduct('b2g1-4', 'POWDER Non Alcoholic Perfume 100 ML - New Edition Collection By Naseem', 649, 'BUY 2 GET 1 FREE', 5, 3, 'b2g1'),
  makeProduct('b2g1-5', 'Mukhallat Musk Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 4, 4, 'b2g1'),
  makeProduct('b2g1-6', 'POMEGRANATE Non Alcoholic Perfume 50 ML - MUSK Collection By Naseem', 479, 'BUY 2 GET 1 FREE', 4, 5, 'b2g1'),
  makeProduct('b2g1-7', 'Laila Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 5, 6, 'b2g1'),
  makeProduct('b2g1-8', 'Silk Musk Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 5, 7, 'b2g1'),
];

export const HOME_B2G3_PRODUCTS: Product[] = [
  makeProduct('b2g3-1', 'Mirage Brown Deodorant Perfumed Body Spray 200 ML - By Rich & Ruitz', 129, 'BUY 2 GET 3 FREE', 1, 0, 'b2g3'),
  makeProduct('b2g3-2', "VERY SEXY NOW VICTORIA'S SACRET Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower", 638, 'BUY 2 GET 3 FREE', 1, 1, 'b2g3'),
  makeProduct('b2g3-3', 'LIBER Perfume 90 ML - YSL COLLECTION By SAINT MARIO LOUIS', 992, 'BUY 2 GET 3 FREE', 1, 2, 'b2g3'),
  makeProduct('b2g3-4', 'SISTER PINK Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 1, 3, 'b2g3'),
  makeProduct('b2g3-5', 'Raes Al Oud Home Freshener 300 ML - By Arabi', 165, 'BUY 2 GET 3 FREE', 0, 4, 'b2g3'),
  makeProduct('b2g3-6', 'In Bleu Deodorant Perfumed Body Spray 200 ML - By Mural De Ruitz', 129, 'BUY 2 GET 3 FREE', 0, 5, 'b2g3'),
  makeProduct('b2g3-7', 'Man Silver Perfume 100 ML - Man Metalic Collection By Bernard Dimitri', 531, 'BUY 2 GET 3 FREE', 2, 6, 'b2g3'),
  makeProduct('b2g3-8', 'Ramz Khaliji Home Freshener 300 ML - By Arabi', 165, 'BUY 2 GET 3 FREE', 0, 7, 'b2g3'),
];

export const PERFUMES_COLLECTION_PRODUCTS: Product[] = [
  makeProduct('perf-1', 'MAY WAY Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 2, 0, 'perfumes', true),
  makeProduct('perf-2', 'LIBER Perfume 90 ML - YSL COLLECTION By SAINT MARIO LOUIS', 992, 'BUY 2 GET 3 FREE', 1, 1, 'perfumes'),
  makeProduct('perf-3', "VERY SEXY NOW VICTORIA'S SACRET Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower", 638, 'BUY 2 GET 3 FREE', 1, 2, 'perfumes'),
  makeProduct('perf-4', 'La Rose Perfume 100 ML - By Maison Amara', 640, 'BUY 2 GET 3 FREE', 2, 3, 'perfumes'),
  makeProduct('perf-5', 'GOLD GIRL Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 0, 4, 'perfumes'),
  makeProduct('perf-6', 'SUEVACE Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 1, 5, 'perfumes'),
  makeProduct('perf-7', 'SISTER PINK Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 1, 6, 'perfumes'),
  makeProduct('perf-8', 'Man Gold Perfume 100 ML - Man Metalic Collection By Bernard Dimitri', 531, 'BUY 2 GET 3 FREE', 1, 7, 'perfumes'),
  makeProduct('perf-9', 'Hot Black Women Perfume 100 ML - Hot Special Collection By Bernard Dimitri', 750, 'BUY 2 GET 3 FREE', 0, 8, 'perfumes'),
  makeProduct('perf-10', 'Man Silver Perfume 100 ML - Man Metalic Collection By Bernard Dimitri', 531, 'BUY 2 GET 3 FREE', 2, 9, 'perfumes'),
  makeProduct('perf-11', 'ITS YOU Perfume 100 ML - Coated Bottle Collection By Eiffel Tower', 764, 'BUY 2 GET 3 FREE', 0, 10, 'perfumes'),
  makeProduct('perf-12', 'Black Out Perfume 100 ML - Blue Black Collection By Bernard Dimitri', 531, 'BUY 2 GET 3 FREE', 1, 11, 'perfumes'),
  makeProduct('perf-13', 'Shell Oro Perfume 100 ML - By Rich & Ruitz', 1020, 'BUY 2 GET 3 FREE', 0, 12, 'perfumes'),
  makeProduct('perf-14', 'Blu Perfume 100 ML - Blue Black Collection By Bernard Dimitri', 531, 'BUY 2 GET 3 FREE', 1, 13, 'perfumes'),
  makeProduct('perf-15', 'BLUE DE CHAGEL Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 0, 14, 'perfumes'),
  makeProduct('perf-16', 'Slices Perfume 65 ML - By Rich & Ruitz', 1020, 'BUY 2 GET 3 FREE', 0, 15, 'perfumes'),
  makeProduct('perf-17', 'Ameeraat Perfume 100 ML - Royal Collection By Arabi', 1382, 'BUY 1 GET 1 FREE', 0, 16, 'perfumes'),
  makeProduct('perf-18', '121 MEN Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 0, 17, 'perfumes'),
  makeProduct('perf-19', 'CLUB @9PM Perfume 100 ML - NINE COLLECTION By Bernard Dimitri', 1062, 'BUY 2 GET 3 FREE', 0, 18, 'perfumes'),
  makeProduct('perf-20', 'CRAET AVENTURE Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 0, 19, 'perfumes'),
  makeProduct('perf-21', 'INVITUS Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 0, 20, 'perfumes'),
  makeProduct('perf-22', 'Eclat D Rose Perfume 100 ML - X Collection By Bernard Dimitri', 718, 'BUY 2 GET 3 FREE', 0, 21, 'perfumes'),
  makeProduct('perf-23', 'Cote Blanche Perfume 90 ML - By Mural De Ruitz', 798, 'BUY 2 GET 3 FREE', 1, 22, 'perfumes'),
  makeProduct('perf-24', 'BLACK XLS Perfume 100 ML - Eiffel Tower Bottle Collection By Eiffel Tower', 638, 'BUY 2 GET 3 FREE', 1, 23, 'perfumes'),
];

export const NON_ALCOHOLIC_COLLECTION_PRODUCTS: Product[] = [
  makeProduct('na-1', 'Musk Tahara Non Alcoholic Perfume 100 ML - New Edition Collection By Naseem', 649, 'BUY 2 GET 1 FREE', 10, 0, 'non-alcoholic'),
  makeProduct('na-2', 'Black Musk Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 9, 1, 'non-alcoholic'),
  makeProduct('na-3', 'Musk Tahara Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 5, 2, 'non-alcoholic'),
  makeProduct('na-4', 'Madame Non Alcoholic Perfume 100 ML - Special Collection By Naseem', 1876, 'BUY 1 GET 1 FREE', 7, 3, 'non-alcoholic'),
  makeProduct('na-5', 'Musk Safi Non Alcoholic Perfume 100 ML - Luxury Collection By Naseem', 2985, 'BUY 1 GET 1 FREE', 4, 4, 'non-alcoholic'),
  makeProduct('na-6', 'POMEGRANATE Non Alcoholic Perfume 50 ML - MUSK Collection By Naseem', 479, 'BUY 2 GET 1 FREE', 4, 5, 'non-alcoholic'),
  makeProduct('na-7', 'Mukhallat Musk Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 4, 6, 'non-alcoholic'),
  makeProduct('na-8', 'ASMIRA Non Alcoholic Perfume 100 ML - REFLECTION Collection By Naseem', 3760, 'BUY 1 GET 1 FREE', 1, 7, 'non-alcoholic'),
  makeProduct('na-9', 'CANDY Non Alcoholic Perfume 50 ML - MUSK Collection By Naseem', 479, 'BUY 2 GET 1 FREE', 1, 8, 'non-alcoholic'),
  makeProduct('na-10', 'RASPBERRY Non Alcoholic Perfume 50 ML - MUSK Collection By Naseem', 479, 'BUY 2 GET 1 FREE', 2, 9, 'non-alcoholic'),
  makeProduct('na-11', 'TUTTI BERRY Non Alcoholic Perfume 50 ML - MUSK Collection By Naseem', 479, 'BUY 2 GET 1 FREE', 2, 10, 'non-alcoholic'),
  makeProduct('na-12', 'CARAMEL Non Alcoholic Perfume 50 ML - MUSK Collection By Naseem', 479, 'BUY 2 GET 1 FREE', 2, 11, 'non-alcoholic'),
  makeProduct('na-13', 'BLUE BERRY Non Alcoholic Perfume 50 ML - MUSK Collection By Naseem', 479, 'BUY 2 GET 1 FREE', 2, 12, 'non-alcoholic'),
  makeProduct('na-14', 'Laila Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 5, 13, 'non-alcoholic'),
  makeProduct('na-15', 'Oud Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 1, 14, 'non-alcoholic'),
  makeProduct('na-16', 'Vanilla Elixir Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 3, 15, 'non-alcoholic'),
  makeProduct('na-17', 'Daliya Non Alcoholic Perfume 50 ML - khalta Collection By Naseem', 335, 'BUY 1 GET 1 FREE', 2, 16, 'non-alcoholic', true),
  makeProduct('na-18', 'WATERMELON Non Alcoholic Perfume 50 ML - MUSK Collection By Naseem', 479, 'BUY 2 GET 1 FREE', 3, 17, 'non-alcoholic'),
  makeProduct('na-19', 'POWDER Non Alcoholic Perfume 100 ML - New Edition Collection By Naseem', 649, 'BUY 2 GET 1 FREE', 5, 18, 'non-alcoholic'),
  makeProduct('na-20', 'Silk Musk Non Alcoholic Perfume 100 ML - Natural Collection By Hamidi', 588, 'BUY 2 GET 1 FREE', 5, 19, 'non-alcoholic'),
  makeProduct('na-21', 'Sumayyah Non Alcoholic Perfume 100 ML - New Edition Collection Special Package By Naseem', 688, 'BUY 2 GET 1 FREE', 3, 20, 'non-alcoholic', true),
  makeProduct('na-22', 'Forever Bloom Non Alcoholic Perfume 50 ML - Deluxe Collection By Hamidi', 370, 'BUY 1 GET 1 FREE', 0, 21, 'non-alcoholic'),
  makeProduct('na-23', 'Lamsa Non Alcoholic Perfume 100 ML - khalta Collection By Naseem', 546, 'BUY 2 GET 1 FREE', 0, 22, 'non-alcoholic', true),
  makeProduct('na-24', 'Hessa Non Alcoholic Perfume 100 ML - New Edition Collection Special Package By Naseem', 688, 'BUY 2 GET 1 FREE', 1, 23, 'non-alcoholic', true),
];

export const PERFUME_OILS_COLLECTION_PRODUCTS: Product[] = [
  makeProduct('oil-1', 'CANDY Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 2, 0, 'oils'),
  makeProduct('oil-2', 'Pure White MUSK Oil Fragrance Stick 15 ML - Round Collection By Hamidi', 274, 'BUY 2 GET 1 FREE', 1, 1, 'oils'),
  makeProduct('oil-3', 'CARAMEL Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 2, 2, 'oils'),
  makeProduct('oil-4', 'Amani Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 0, 3, 'oils'),
  makeProduct('oil-5', 'PINK MUSK Oil Fragrance Stick 12 ML - By ADYAN', 493, 'BUY 1 GET 1 FREE', 3, 4, 'oils'),
  makeProduct('oil-6', 'RASPBERRY Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 0, 5, 'oils'),
  makeProduct('oil-7', 'Red Coral Oil Fragrance Roll On 6 ML - By Naseem', 192, 'BUY 1 GET 1 FREE', 0, 6, 'oils', true),
  makeProduct('oil-8', 'Musk Tahara Oil Fragrance Stick 15 ML - Round Collection By Hamidi', 274, 'BUY 2 GET 1 FREE', 1, 7, 'oils'),
  makeProduct('oil-9', 'Mukhallat Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 0, 8, 'oils'),
  makeProduct('oil-10', 'TUTTI BERRY Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 2, 9, 'oils'),
  makeProduct('oil-11', 'Lamsa Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 0, 10, 'oils'),
  makeProduct('oil-12', 'BLUE BERRY Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 0, 11, 'oils'),
  makeProduct('oil-13', 'WATERMELON Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 2, 12, 'oils'),
  makeProduct('oil-14', 'Rooh Al Oud Oil Fragrance Roll On 24 ML - Deluxe Collection By Hamidi', 504, 'BUY 1 GET 1 FREE', 0, 13, 'oils'),
  makeProduct('oil-15', 'Musk Al Tahara Oil Fragrance Stick 12 ML - Solo Collection By Hamidi', 272, 'BUY 1 GET 1 FREE', 0, 14, 'oils', true),
  makeProduct('oil-16', 'Shay Oud Oil Fragrance Aluminium Package 100 ML - By Naseem', 739, 'BUY 1 GET 1 FREE', 0, 15, 'oils'),
  makeProduct('oil-17', 'Warda Oil Fragrance Roll On 24 ML - Deluxe Collection By Hamidi', 504, 'BUY 1 GET 1 FREE', 0, 16, 'oils'),
  makeProduct('oil-18', 'Musk Safi Oil Fragrance Stick 6 ML - Niche Collection By Naseem', 1558, 'BUY 1 GET 1 FREE', 1, 17, 'oils', true),
  makeProduct('oil-19', 'FAKHAR AL JAMAL Oil Fragrance Stick 12 ML - By ADYAN', 493, 'BUY 1 GET 1 FREE', 0, 18, 'oils'),
  makeProduct('oil-20', 'Pink Bubble Oil Fragrance Roll On 24 ML - Deluxe Collection By Hamidi', 504, 'BUY 1 GET 1 FREE', 0, 19, 'oils'),
  makeProduct('oil-21', 'Thaljee Oil Fragrance Aluminium Package 100 ML - By Naseem', 739, 'BUY 1 GET 1 FREE', 0, 20, 'oils', true),
  makeProduct('oil-22', 'Blue Horizon Oil Fragrance Aluminium Package 100 ML - By Naseem', 739, 'BUY 1 GET 1 FREE', 1, 21, 'oils'),
  makeProduct('oil-23', 'Thaljee Oil Fragrance Roll On 24 ML - By Naseem', 449, 'BUY 2 GET 1 FREE', 0, 22, 'oils'),
  makeProduct('oil-24', 'Amani Oil Fragrance Aluminium Package 100 ML - By Naseem', 739, 'BUY 1 GET 1 FREE', 0, 23, 'oils', true),
];

export const GOURMAND_COLLECTION_PRODUCTS: Product[] = [
  makeProduct('gour-1', 'SUGAR Perfume 100 ML - Melted Collection By AL ABSAR', 1468, 'BUY 1 GET 1 FREE', 6, 0, 'gourmand'),
  makeProduct('gour-2', 'Red Sugar Perfume 100 ML - Treats Collection By AL ABSAR', 1896, 'BUY 1 GET 1 FREE', 4, 1, 'gourmand'),
  makeProduct('gour-3', 'Vanilluxe Perfume 100 ML - Soft Collection By AL ABSAR', 1627, 'BUY 1 GET 1 FREE', 0, 2, 'gourmand'),
  makeProduct('gour-4', 'SPELL Perfume 100 ML - Melted Collection By AL ABSAR', 1468, 'BUY 1 GET 1 FREE', 0, 3, 'gourmand'),
  makeProduct('gour-5', 'GLAZE Perfume 100 ML - Melted Collection By AL ABSAR', 1468, 'BUY 1 GET 1 FREE', 2, 4, 'gourmand'),
  makeProduct('gour-6', 'Strawbae Perfume 100 ML - Soft Collection By AL ABSAR', 1627, 'BUY 1 GET 1 FREE', 1, 5, 'gourmand'),
  makeProduct('gour-7', 'Caramel Rush Perfume 100 ML - Treats Collection By AL ABSAR', 1896, 'BUY 1 GET 1 FREE', 0, 6, 'gourmand'),
  makeProduct('gour-8', 'Choco Craze Perfume 100 ML - Treats Collection By AL ABSAR', 1896, 'BUY 1 GET 1 FREE', 0, 7, 'gourmand'),
  makeProduct('gour-9', 'Berry Buzz Perfume 100 ML - Treats Collection By AL ABSAR', 1896, 'BUY 1 GET 1 FREE', 0, 8, 'gourmand'),
  makeProduct('gour-10', 'DESIRE Perfume 100 ML - Melted Collection By AL ABSAR', 1468, 'BUY 1 GET 1 FREE', 0, 9, 'gourmand'),
  makeProduct('gour-11', 'COTTON CANDY Perfume 80 ML - Gourmand Collection By ANFAR 1950', 2016, 'BUY 1 GET 1 FREE', 0, 10, 'gourmand'),
  makeProduct('gour-12', 'Passionnova Perfume 100 ML - Soft Collection By AL ABSAR', 1627, 'BUY 1 GET 1 FREE', 0, 11, 'gourmand'),
  makeProduct('gour-13', 'BLUE BERRY FOREST Perfume 80 ML - Gourmand Collection By ANFAR 1950', 2016, 'BUY 1 GET 1 FREE', 0, 12, 'gourmand'),
  makeProduct('gour-14', 'BISCOTTI TRUFFLE Perfume 80 ML - Gourmand Collection By ANFAR 1950', 2016, 'BUY 1 GET 1 FREE', 0, 13, 'gourmand'),
  makeProduct('gour-15', 'SHIRIN SUCRE MALLOW Non Alcoholic Perfume 100 ML - Melted Collection By Hamidi', 1920, 'BUY 1 GET 1 FREE', 0, 14, 'gourmand'),
  makeProduct('gour-16', 'CANDY SCOOP Perfume 100 ML - Ice Cream Collection By ADYAN', 1904, 'BUY 1 GET 1 FREE', 0, 15, 'gourmand'),
  makeProduct('gour-17', 'BUTTERSCOTCH Perfume 100 ML - Ice Cream Collection By ADYAN', 1904, 'BUY 1 GET 1 FREE', 0, 16, 'gourmand'),
  makeProduct('gour-18', 'PISTACHIO KUNAFA Perfume 80 ML - Gourmand Collection By ANFAR 1950', 2016, 'BUY 1 GET 1 FREE', 0, 17, 'gourmand'),
  makeProduct('gour-19', 'SHIRIN VANILLA ADDICT Non Alcoholic Perfume 100 ML - Melted Collection By Hamidi', 1920, 'BUY 1 GET 1 FREE', 0, 18, 'gourmand'),
  makeProduct('gour-20', 'SHIRIN YUM PISTACHIO Non Alcoholic Perfume 100 ML - Melted Collection By Hamidi', 1920, 'BUY 1 GET 1 FREE', 0, 19, 'gourmand'),
  makeProduct('gour-21', 'CANDY LOVE Oil Fragrance Stick 20 ML - DUBAI DELIGHTS By Hamidi', 1088, 'BUY 1 GET 1 FREE', 0, 20, 'gourmand'),
  makeProduct('gour-22', 'CHOCO LAVA Oil Fragrance Stick 20 ML - DUBAI DELIGHTS By Hamidi', 1088, 'BUY 1 GET 1 FREE', 0, 21, 'gourmand'),
  makeProduct('gour-23', 'SHIRIN CANDY CLOUD Non Alcoholic Perfume 100 ML - Melted Collection By Hamidi', 1920, 'BUY 1 GET 1 FREE', 0, 22, 'gourmand'),
  makeProduct('gour-24', 'DUBAI DELICACY Non Alcoholic Perfume 100 ML - Octets Luxury Collection By Hamidi', 1872, 'BUY 1 GET 1 FREE', 0, 23, 'gourmand'),
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-19',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'تحفه',
    productTitle: 'WATERMELON Oil Fragrance Roll On 24 ML - By Naseem',
    bottleTone: '#C2185B',
    bottleLabel: 'WATERMELON',
    imageSrc: '/images/rev-18-d294f4c830.jpg',
    hasLink: true,
  },
  {
    id: 'rev-20',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'Exactly like the fresh Musk Tahara Smell and the staying power is amazing ريحتهم ثابته و فريش نفس ريحة مسك الطهارة و احلي حاجة ان مافيهوش اي كحول و الثبات هاايل Thank You.',
    productTitle: 'Musk Tahara Non Alcoholic Gift Set 3 PCS - New Edition Collection By Naseem',
    bottleTone: '#B08D57',
    bottleLabel: 'MUSK SET',
    imageSrc: '/images/rev-19-bbb6bdb350.png',
    hasLink: false,
  },
  {
    id: 'rev-1',
    author: 'Dr. Ebtissam',
    verified: true,
    rating: 5,
    text: 'رهييييبة بجد 😍 دي أول حاجة طلبتها من هنا وطلعت ريحتها خيال، ناعمة وهادية بس في نفس الوقت فواحة جدا وتشميها عن بعد وبوضوح، مختلفة ومش شبه أي عطر شميته قبل كدا وثبات بالأيام وشكل الإزازة شيك وألوانها تجنن🩵🩷 حقيقي كل حاجة فيها حلوة وأنصح بيها وبشدة💕',
    productTitle: 'Purple Blue Non Alcoholic Perfume 75 ML - N Series Collection By Naseem',
    bottleTone: '#5C3A58',
    bottleLabel: 'N SERIES',
    imageSrc: '/images/rev-4-1cd071910a.jpg',
    hasLink: true,
  },
  {
    id: 'rev-2',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'انتعاش',
    productTitle: 'SUNSET GLOW Non Alcoholic Perfume 50 ML - Deluxe Collection By Hamidi',
    bottleTone: '#C89B3C',
    bottleLabel: 'SUNSET GLOW',
    imageSrc: '/images/rev-5-dd2575c4cc.jpeg',
    hasLink: true,
  },
  {
    id: 'rev-3',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'ريحه انتعاش ✨',
    productTitle: 'SUNSET GLOW Non Alcoholic Perfume 50 ML - Deluxe Collection By Hamidi',
    bottleTone: '#B08D57',
    bottleLabel: 'HAMIDI LUXE',
    imageSrc: '/images/rev-6-66fa097adb.jpeg',
    hasLink: true,
  },
  {
    id: 'rev-4',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'حلو جدا و عود نظيف بس مش ثابت اوي ديه مشكلته',
    productTitle: 'Oud Bushra Non Alcoholic Perfume 100 ML - khalta Collection By Naseem',
    bottleTone: '#2C1A11',
    bottleLabel: 'OUD BUSHRA',
    imageSrc: '/images/rev-7-175eaa38c9.jpg',
    hasLink: true,
  },
  {
    id: 'rev-5',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'السيت دي تحفة انصح بها أي بنت حقيقي جميلة اوي',
    productTitle: 'Musk Tahara Non Alcoholic Gift Set 3 PCS - New Edition Collection By Naseem',
    bottleTone: '#8C6D46',
    bottleLabel: 'MUSK TAHARA',
    imageSrc: '/images/rev-0-e004c2b276.jpg',
    hasLink: false,
  },
  {
    id: 'rev-6',
    author: 'A.Ashraf',
    verified: true,
    rating: 5,
    text: 'السيت بتاعت نسيم تحفة وكمان جربت مسك بودر من نسيم كانت جميلة جدا شكرا ليكم',
    productTitle: 'Musk Tahara Non Alcoholic Gift Set 3 PCS - New Edition Collection By Naseem',
    bottleTone: '#9E7B56',
    bottleLabel: 'NASEEM',
    imageSrc: '/images/rev-1-a4a104e08b.jpg',
    hasLink: false,
  },
  {
    id: 'rev-7',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'بصراحة بوكس نسيم ده كان تحفة جربته هو و مسك بودر من نسيم الاتنين حلوين جدا شكرا ليكم',
    productTitle: 'Musk Tahara Non Alcoholic Gift Set 3 PCS - New Edition Collection By Naseem',
    bottleTone: '#7B5E3B',
    bottleLabel: 'GIFT SET',
    imageSrc: '/images/rev-2-fb6fd10541.jpg',
    hasLink: false,
  },
  {
    id: 'rev-8',
    author: 'Aziza Altahan',
    verified: true,
    rating: 5,
    text: 'تحفه جدا',
    productTitle: 'Blu Perfume 100 ML - Blue Black Collection By Bernard Dimitri',
    bottleTone: '#3B526E',
    bottleLabel: 'BLU PERFUME',
    imageSrc: '/images/rev-3-234428021a.jpg',
    hasLink: true,
  },
  {
    id: 'rev-9',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'تحفه❣️',
    productTitle: 'Daliya Non Alcoholic Perfume 100 ML - khalta Collection By Naseem',
    bottleTone: '#9A634E',
    bottleLabel: 'DALIYA',
    imageSrc: '/images/rev-8-9b3cd8ba4f.jpeg',
    hasLink: true,
  },
  {
    id: 'rev-10',
    author: 'ندى خلف الله',
    verified: true,
    rating: 5,
    text: 'احلى بيرفيوم استخدمته هو الكراميل مسك',
    productTitle: 'POWDER Non Alcoholic Perfume 100 ML - New Edition Collection By Naseem',
    bottleTone: '#B08D57',
    bottleLabel: 'POWDER',
    imageSrc: '/images/rev-9-ffe33eb9a6.jpg',
    hasLink: true,
  },
  {
    id: 'rev-11',
    author: 'Asmaabdelrhmn',
    verified: true,
    rating: 5,
    text: 'المسك تحفة بجد صيف شتا تحفه خلصت ازازة وهجيب اتنين تاني لانه بصراحه بيتحط في اي وقت ومش بيضايق خالص',
    productTitle: 'Musk Tahara Non Alcoholic Perfume 100 ML - New Edition Collection By Naseem',
    bottleTone: '#8C6D46',
    bottleLabel: 'MUSK TAHARA',
    imageSrc: '/images/rev-10-feb0cb8853.jpeg',
    hasLink: true,
  },
  {
    id: 'rev-12',
    author: 'الشيماء عبدالمنعم',
    verified: true,
    rating: 5,
    text: 'Fresh set ✨️💐...the packaging was very good 👌 and I love it so much.. thanks 😍',
    productTitle: 'MUSK POWDER Non Alcoholic Gift Set 3 PCS - New Edition Collection By Naseem',
    bottleTone: '#A47E53',
    bottleLabel: 'MUSK POWDER',
    imageSrc: '/images/rev-11-f581aa8513.jpg',
    hasLink: false,
  },
  {
    id: 'rev-13',
    author: 'Marwa Derbala',
    verified: true,
    rating: 5,
    text: 'I love your products and thank you for cautious packaging.',
    productTitle: 'DarBelal Perfumes',
    bottleTone: '#2C1A11',
    bottleLabel: 'DAR BELAL',
    imageSrc: '/images/rev-12-8fd9a10ff8.jpeg',
    hasLink: true,
  },
  {
    id: 'rev-14',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'I love it. I re-ordered it because I love it.',
    productTitle: 'Musk Tahara Non Alcoholic Perfume 100 ML - khalta Collection By Naseem',
    bottleTone: '#B08D57',
    bottleLabel: 'KHALTA',
    imageSrc: '/images/rev-13-3af7f5a899.jpeg',
    hasLink: false,
  },
  {
    id: 'rev-15',
    author: 'Nada ahmed',
    verified: true,
    rating: 5,
    text: 'تحفة بجد رماااان رماااان لعشاق الرمان🤣🤍',
    productTitle: 'POMEGRANATE Oil Fragrance Roll On 24 ML - By Naseem',
    bottleTone: '#881140',
    bottleLabel: 'POMEGRANATE',
    imageSrc: '/images/rev-14-0c6db69aed.jpg',
    hasLink: false,
  },
  {
    id: 'rev-16',
    author: 'Anonymous',
    verified: true,
    rating: 5,
    text: 'شبه برفان قديم اسمه Ricci Ricci',
    productTitle: 'Dana Non Alcoholic Perfume 100 ML - New Edition Collection Special Package By Naseem',
    bottleTone: '#7B5E3B',
    bottleLabel: 'DANA',
    imageSrc: '/images/rev-15-48699b869d.jpg',
    hasLink: true,
  },
  {
    id: 'rev-17',
    author: 'Yasmine Youssef',
    verified: true,
    rating: 5,
    text: 'Good',
    productTitle: 'Musk Tahara Non Alcoholic Perfume 100 ML - khalta Collection By Naseem',
    bottleTone: '#B08D57',
    bottleLabel: 'MUSK TAHARA',
    imageSrc: '/images/rev-16-5782409bab.jpg',
    hasLink: false,
  },
  {
    id: 'rev-18',
    author: 'Hadeel El-Khateeb',
    verified: true,
    rating: 5,
    text: 'برفيوم راقي ونضيف بس مش ريحة صابون خالص بالعكس ورقيق جداً مليان أنوثة راقية مش صارخة عطر الأميرات مناسب جداً لكل يوم صيفي وينفع كمان شتوي ثابت بيدي إحساس لطيف ☺️ ملهوش صلة بريحة مسك الطهارة',
    productTitle: 'SILK MUSK Perfume 100 ML - Oud & Musk Collection By WADI AL KAHLEEJ',
    bottleTone: '#9E7B56',
    bottleLabel: 'SILK MUSK',
    imageSrc: '/images/rev-17-c46ceddf9a.jpg',
    hasLink: false,
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...HOME_B1G1_PRODUCTS,
  ...HOME_B2G1_PRODUCTS,
  ...HOME_B2G3_PRODUCTS,
  ...PERFUMES_COLLECTION_PRODUCTS,
  ...NON_ALCOHOLIC_COLLECTION_PRODUCTS,
  ...PERFUME_OILS_COLLECTION_PRODUCTS,
  ...GOURMAND_COLLECTION_PRODUCTS,
];

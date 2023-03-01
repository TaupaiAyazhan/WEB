export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  rating : number;
  category : string;
  like : number;
}

export const products = [
  {
    id: 1,
    name: 'Кофеварка CENTEK CT-1164',
    price: 60.785,
    description: 'Кофеварка CENTEK CT-1164 серебристый, черный',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h18/51251427639326/centek-ct-1164-serebristyj-100358682-1-Container.jpg',
    link: "https://kaspi.kz/shop/p/kofevarka-centek-ct-1164-serebristyi-chernyi-100358682/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item",
    rating: 5,
    category : "kitchen appliances",
    like : 0
  },
  {
    id: 2,
    name: 'Кофеварка Maxwell MW-1657',
    price: 11.950 ,
    description: 'Кофеварка Maxwell MW-1657 черный',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h78/31584897957918/maxwell-mw-1657-black-4400322-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/kofevarka-maxwell-mw-1657-chernyi-4400322/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item",
    rating: 5,
    category : "kitchen appliances",
    like : 0
  },
  {
    id: 3,
    name: 'Кофеварка Delonghi ECP 33.21',
    price: 83.990,
    description: 'Кофеварка Delonghi ECP 33.21 серебристый, черный',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h2b/31604845314078/delonghi-ecp-33-21-serebristyj-cernyj-4400250-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/kofevarka-delonghi-ecp-33-21-serebristyi-chernyi-4400250/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item",
    rating: 5,
    category : "kitchen appliances",
    like : 0
  },
  {
    id: 4,
    name: 'Посудомоечная машина',
    price: 599.990,
    description: `Посудомоечная машина Bosch SMS8ZDI48Q серебристый`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/h88/47802684145694/bosch-sms8zdi48q-serebristyj-103197871-1.jpg",
    link : "https://kaspi.kz/shop/p/bosch-sms8zdi48q-serebristyi-103197871/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item",
    rating: 4.5,
    category : "kitchen appliances",
    like : 0
  },
  {
    id: 5,
    name: 'Вафельница',
    price: 15.950,
    description: `Вафельница Haley HY-1023 черный`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/ha7/46398851121182/haley-hy-1023-cernaa-102517051-1.jpg",
    link : "https://kaspi.kz/shop/p/vafel-nitsa-haley-hy-1023-chernyi-102517051/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item",
    rating: 4.5,
    category : "kitchen appliances",
    like : 0
  },




  {
    id: 6,
    name: 'Медиаплеер Xiaomi',
    price: 36.990 ,
    description: `Медиаплеер Xiaomi Mi Box S 2/8Gb`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h25/31569249828894/xiaomi-mi-box-s-cernyj-22300003-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/xiaomi-mi-box-s-2-8gb-22300003/?c=750000000#!/item",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 7,
    name: 'Телевизор Samsung',
    price: 618.980,
    description: `Телевизор Samsung UE75AU7100UXCE 191 см черный`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/he5/34209576779806/samsung-ue75au7100uxce-190-sm-cernyj-101496170-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/samsung-ue75au7100uxce-191-sm-chernyi-101496170/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 8,
    name: 'Кондиционер',
    price: 225000,
    description: `Кондиционер ALMACOM ACH-09LC черный + монтажный комплект`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h58/31488378011678/almacom-ach-09lc-cernyj-montaznyj-komplekt-100354850-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/almacom-ach-09lc-chernyi-montazhnyi-komplekt-100354850/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 9,
    name: 'Tелесуфлер Ulanzi',
    price: 39.990 ,
    description: `Телесуфлер Ulanzi SuteFoto Т1`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h74/68754449367070/ulanzi-sutefoto-t1-105344594-1.jpg",
    link : "https://kaspi.kz/shop/p/ulanzi-sutefoto-t1-105344594/?c=750000000#!/item",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 10,
    name: 'Домашний кинотеатр',
    price: 194948,
    description: `Домашний кинотеатр LG LHB655NK`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hf7/31583642517534/lg-lhb655nk-cernyj-2100099-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/lg-lhb655nk-2100099/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/itemб",
    rating: 5,
    category : "home technics",
    like : 0
  },



  {
    id: 11,
    name: 'GUCCI Guilty Intense ',
    price: 40.995,
    description: 'GUCCI Guilty Intense Pour Femme парфюмерная вода EDP 30 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h78/49087957467166/guilty-intense-pour-femme-parfumirovannaa-voda-30-ml-103939788-1.jpg",
    link: "https://kaspi.kz/shop/p/gucci-guilty-intense-pour-femme-parfjumernaja-voda-edp-30-ml-103939788/?c=750000000#!/item",
    rating: 1,
    category : "parfum",
    like : 0
  },
  {
    id: 12,
    name: 'GUCCI Bloom Ambrosia ',
    price: 62.990,
    description: 'GUCCI Bloom Ambrosia Di Fiori парфюмерная вода EDP 50 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/hda/31997212819486/gucci-bloom-ambrosia-di-fiori-edp-50-ml-100825058-1.jpg",
    link: "https://kaspi.kz/shop/p/gucci-bloom-ambrosia-di-fiori-parfjumernaja-voda-edp-50-ml-100825058/?c=750000000#!/item",
    rating: 5,
    category : "parfum",
    like : 0
  },
  {
    id: 13,
    name: "Yves Saint Laurent Libre",
    price: 55.000,
    description: 'Yves Saint Laurent Libre парфюмерная вода EDP 50 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/hbc/32018235260958/yves-saint-laurent-libre-edp-50-ml-100013874-1.jpg",
    link: "https://kaspi.kz/shop/p/yves-saint-laurent-libre-parfjumernaja-voda-edp-50-ml-100013874/?c=750000000#!/item",
    rating: 5,
    category : "parfum",
    like : 0
  },
  {
    id: 14,
    name: 'Yves Saint Laurent Black Opium ',
    price: 49.692,
    description: 'Yves Saint Laurent Black Opium парфюмерная вода EDP 50 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h01/31790623719454/yves-saint-laurent-black-opium-edp-50-ml-17301512-1.jpg",
    link: "https://kaspi.kz/shop/p/yves-saint-laurent-black-opium-parfjumernaja-voda-edp-50-ml-17301512/?c=750000000#!/item",
    rating: 5,
    category : "parfum",
    like : 0
  },
  {
    id: 15,
    name: 'Yves Saint Laurent Mon Paris',
    price: 43.848,
    description: 'Yves Saint Laurent Mon Paris парфюмерная вода EDP 30 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h2c/32019093880862/yves-saint-laurent-mon-paris-edp-30-ml-100014376-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/yves-saint-laurent-mon-paris-parfjumernaja-voda-edp-30-ml-100014376/?c=750000000#!/item",
    rating: 5,
    category : "parfum",
    like : 0
  },




  {
    id: 16,
    name: 'LANEIGE маска',
    price: 975,
    description: 'LANEIGE маска Lip Sleeping 3 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/h40/32919816405022/laneige-lip-sleeping-mask-set-3-g-100697657-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/laneige-maska-lip-sleeping-3-ml-100697657/?c=750000000#!/item",
    rating: 5,
    category : "face care",
    like : 0
  },
  {
    id: 17,
    name: 'The Ordinary AHA',
    price: 6.655,
    description: 'The Ordinary AHA 30% + BHA 2% Peeling Solution 30 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/hb3/32702030970910/the-ordinary-aha-30-bha-2-peeling-solution-30-ml-100306807-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/the-ordinary-aha-30-bha-2-peeling-solution-30-ml-100306807/?c=750000000#!/item",
    rating: 5,
    category : "face care",
    like : 0
  },
  {
    id: 18,
    name: 'The Ordinary пилинг',
    price: 4.999,
    description: 'The Ordinary пилинг Lactic Acid 5% + HA 2% 30 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/hf8/33122530033694/the-ordinary-lactic-acid-5-ha-syvorotka-30-ml-100841246-1.jpg",
    link: "https://kaspi.kz/shop/p/the-ordinary-piling-lactic-acid-5-ha-2-30-ml-100841246/?c=750000000#!/item",
    rating: 5,
    category : "face care",
    like : 0
  },
  {
    id: 19,
    name: 'Etude House Baking',
    price: 280,
    description: 'Etude House Baking Powder скраб для лица 7 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h28/49919794315294/etude-house-baking-powder-crunch-pore-scrub-7-g-h-24-st-101388184-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/etude-house-baking-powder-skrab-dlja-litsa-7-ml-100922463/?c=750000000#!/item",
    rating: 5,
    category : "face care",
    like : 0
  },
  {
    id: 20,
    name: 'Elemis пилинг',
    price: 57.000,
    description: 'Elemis пилинг для лица Pro-Collagen Tri-Acid Peel 30 мл',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2c/h34/44019035078686/elemis-pro-collagen-tri-acid-peel-30-ml-101964390-1.jpg",
    link: "https://kaspi.kz/shop/p/elemis-piling-dlja-litsa-pro-collagen-tri-acid-peel-30-ml-101964390/?c=750000000#!/item",
    rating: 5,
    category : "face care",
    like : 0
  }

];

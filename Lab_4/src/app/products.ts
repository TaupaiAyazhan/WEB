export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image1: string;
  image2: string;
  image3: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Кофеварка CENTEK CT-1164',
    price: 60.785,
    description: `Кофеварка CENTEK CT-1164 серебристый, черный`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h18/51251427639326/centek-ct-1164-serebristyj-100358682-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h32/51251427868702/centek-ct-1164-serebristyj-100358682-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/hc5/51251428098078/centek-ct-1164-serebristyj-100358682-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/kofevarka-centek-ct-1164-serebristyi-chernyi-100358682/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 5.0,
  },

  {
    id: 2,
    name: 'Кофеварка Maxwell MW-1657 ',
    price: 11.950 ,
    description: `Кофеварка Maxwell MW-1657 черный`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h78/31584897957918/maxwell-mw-1657-black-4400322-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h79/h9e/51465439445022/kofevarka-maxwell-mw-1657-4400322-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/hdd/51465439903774/kofevarka-maxwell-mw-1657-4400322-3.jpg',
    link: 'https://kaspi.kz/shop/p/kofevarka-maxwell-mw-1657-chernyi-4400322/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 5.0,
  },

  {
    id: 3,
    name: 'Кофеварка Delonghi ECP 33.21',
    price: 83.990 ,
    description: `Кофеварка Delonghi ECP 33.21 серебристый, черный`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h2b/31604845314078/delonghi-ecp-33-21-serebristyj-cernyj-4400250-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h03/31604865728542/delonghi-ecp-33-21-serebristyj-cernyj-4400250-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0e/h90/31604886208542/delonghi-ecp-33-21-serebristyj-cernyj-4400250-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/kofevarka-delonghi-ecp-33-21-serebristyi-chernyi-4400250/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 5.0,
  },

  {
    id: 4,
    name: 'Телевизор Samsung',
    price: 618.980,
    description: `Телевизор Samsung UE75AU7100UXCE 191 см черный`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/he5/34209576779806/samsung-ue75au7100uxce-190-sm-cernyj-101496170-1-Container.jpg',
    image2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/h46/34209580744734/samsung-ue75au7100uxce-190-sm-cernyj-101496170-2-Container.jpg',
    image3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h68/34209584840734/samsung-ue75au7100uxce-190-sm-cernyj-101496170-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-ue75au7100uxce-191-sm-chernyi-101496170/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 5.0,
  },

  {
    id: 5,
    name: 'Робот-пылесос',
    price: 210.965,
    description: `Робот-пылесос ROIDMI EVE Plus Robot Vacuum белый`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h8d/33199726657566/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb4/h4a/50297461637150/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-3-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/hff/62032640016414/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-4.jpg',
    link: 'https://kaspi.kz/shop/p/roidmi-eve-plus-robot-vacuum-belyi-101000358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 4.0,
  },
  {
    id: 6,
    name: 'Yandex Station Mini 2Dyson HS05 Airwrap',
    price: 499.990 ,
    description: `Dyson HS05 Airwrap Complete фен-щетка 1300 W`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h63/63083544772638/dyson-hs05-airwrap-complete-fen-setka-1300-w-106790035-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h9f/63083545231390/dyson-hs05-airwrap-complete-fen-setka-1300-w-106790035-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/hcc/69147230699550/stailer-dyson-hs05-blue-rose-108483916-1.jpg',
    link: 'https://kaspi.kz/shop/p/dyson-hs05-fen-schetka-1300-w-108483916/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 5.0,
  },
  {
    id: 7,
    name: 'Посудомоечная машина ',
    price: 599.990,
    description: `Посудомоечная машина Bosch SMS8ZDI48Q серебристый`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/h88/47802684145694/bosch-sms8zdi48q-serebristyj-103197871-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/haa/47802689028126/bosch-sms8zdi48q-serebristyj-103197871-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h8f/47802689257502/bosch-sms8zdi48q-serebristyj-103197871-3.jpg',
    link: 'https://kaspi.kz/shop/p/bosch-sms8zdi48q-serebristyi-103197871/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 3.5,
  },
  {
    id: 8,
    name: 'Пылесос Dyson V15',
    price: 584.990,
    description: `Пылесос Dyson V15 Detect Absolute серебристый`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h50/67795766706206/dyson-v15-detect-absolute-serebristyi-102269286-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/hd1/67795766968350/dyson-v15-detect-absolute-serebristyi-102269286-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h83/67795767230494/dyson-v15-detect-absolute-serebristyi-102269286-3.jpg',
    link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 4.5,
  },
  {
    id: 9,
    name: 'Утюг Philips ',
    price: 152.000 ,
    description: `Утюг Philips Azur Performer Plus GC4506/20 синий`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/hb0/62028962005022/philips-azur-performer-plus-utug-106220610-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h5c/62028962529310/philips-azur-performer-plus-utug-106220610-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/hd3/62028963250206/philips-azur-performer-plus-utug-106220610-3.jpg',
    link: 'https://kaspi.kz/shop/p/philips-azur-performer-plus-gc4506-20-sinii-106220610/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 2.5,
  },
  {
    id: 10,
    name: 'Вафельница',
    price: 15.950,
    description: `Вафельница Haley HY-1023 черный`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/ha7/46398851121182/haley-hy-1023-cernaa-102517051-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h95/51240661483550/haley-hy-1023-cernaa-102517051-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/h35/51240661942302/haley-hy-1023-cernyj-102517051-3.jpg',
    link: 'https://kaspi.kz/shop/p/vafel-nitsa-haley-hy-1023-chernyi-102517051/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI9qLC5uio_QIVAzcYCh2E8Q6GEAAYASAAEgKqFvD_BwE#!/item',
    rating: 4.5,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
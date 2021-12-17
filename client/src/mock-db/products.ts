import { IProduct } from '../typings';
import { novel, product_1, ryzen_9, sauce, background_1, t_shirt } from '../assets';

export const products: IProduct[] = [
  {
    _id: 'ryzen-processor',
    name: 'Ryzen 9 9700X',
    price: 1500,
    img: ryzen_9,
    desc: 'This is Ryzen 9 9700X 96 core super powered processor to take your computing experience to the next level. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    cats: ['computers', 'accessories'],
    shop_id: 'sifatuls-shop',
    discount: 10,
    disc_price: 1350,
  },
  {
    _id: 'mac-book-pro',
    name: 'Mac Book pro 2021',
    price: 2200,
    img: product_1,
    desc: "This is Apple's Mac Book Pro 2021 with m1 chip. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    cats: ['computers', 'accessories'],
    shop_id: 'sifatuls-shop',
  },
  {
    _id: 'hello-novel',
    name: "Hello Novel from 90's",
    price: 200,
    img: novel,
    desc: "This is Hello Novel an story of two souls. This book gives you a peek of 90's relationships. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    cats: ['book', 'novel'],
    shop_id: 'siams-shop',
    discount: 5,
    disc_price: 180,
  },
  {
    _id: 'pasta-sauce',
    name: 'Special pasta sauce',
    price: 27.99,
    img: sauce,
    desc: 'This a sauce that will turn your boring pasta into something wonderful and tasty. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    cats: ['foods', 'cooking'],
    shop_id: 'anols-shop',
  },
  {
    _id: 'cotton-hoodie',
    name: 'Cotton Hoodie',
    price: 57.99,
    img: background_1,
    desc: 'A cotton hoodie to make you look amazing also keep you warm in the winter. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    cats: ['accessories', 'clothes'],
    shop_id: 'rabbis-shop',
  },
  {
    _id: 'j-ames-t-shirt',
    name: 'J-Ames T-shirt',
    price: 37.99,
    img: t_shirt,
    desc: 'Premium J-Ames T-Shirt. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    cats: ['accessories', 'clothes'],
    shop_id: 'rabbis-shop',
    discount: 10,
    disc_price: 34.19,
  },
];

export async function findProduct(productId: string): Promise<IProduct | undefined> {
  const product = await products.find((product) => product._id === productId);

  return product;
}

export const products: {
  _id: string;
  name: string;
  price: number;
  desc: string;
  cats: string[];
  shop_id: string;
  discount?: number;
  disc_price?: number;
}[] = [
  {
    _id: 'ryzen-processor',
    name: 'Ryzen 9 9700X 96 core processor',
    price: 1500,
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
    desc: "This is Apple's Mac Book Pro 2021 with m1 chip. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    cats: ['computers', 'accessories'],
    shop_id: 'sifatuls-shop',
  },
  {
    _id: 'hello-novel',
    name: "Hello Novel from 90's",
    price: 200,
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
    desc: 'This a sauce that will turn your boring pasta into something wonderful and tasty. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    cats: ['foods', 'cooking'],
    shop_id: 'anols-shop',
  },
  {
    _id: 'cotton-hoodie',
    name: 'Cotton Hoodie',
    price: 57.99,
    desc: 'A cotton hoodie to make you look amazing also keep you warm in the winter. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    cats: ['accessories', 'clothes'],
    shop_id: 'rabbis-shop',
  },
  {
    _id: 'j-ames-t-shirt',
    name: 'J-Ames T-shirt',
    price: 37.99,
    desc: 'Premium J-Ames T-Shirt. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    cats: ['accessories', 'clothes'],
    shop_id: 'rabbis-shop',
    discount: 10,
    disc_price: 34.19,
  },
];

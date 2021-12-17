export const shops: {
  _id: string;
  name: string;
  email: string;
  owner_id: string;
  desc?: string;
  cats: string[];
}[] = [
  {
    _id: 'sifatuls-shop',
    name: "Sifatul's Shop",
    desc: 'Hello this is my ultimate shop',
    email: 'sifatul@email.com',
    owner_id: 'sifatul',
    cats: ['technologies', 'accessories'],
  },
  {
    _id: 'rabbis-shop',
    name: "Rabbi's Shop",
    desc: 'Hello this is my awesome shop',
    email: 'rabbi@email.com',
    owner_id: 'rabbi',
    cats: ['accessories', 'clothes'],
  },
  {
    _id: 'anols-shop',
    name: "anols's Shop",
    desc: 'Hello this is my Bacon shop',
    email: 'anol@email.com',
    owner_id: 'anol',
    cats: ['foods', 'cooking'],
  },
  {
    _id: 'siams-shop',
    name: "Siam's Shop",
    desc: 'Hello this is my Book shop',
    email: 'siam@email.com',
    owner_id: 'siam',
    cats: ['books', 'novels'],
  },
];

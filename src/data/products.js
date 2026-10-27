import roseLatte from "../assets/cafe5.jpg";
import caramelLatte from "../assets/rest9.jpg";
import matcha from "../assets/cafe2.jpg";
import vcap from "../assets/rest4.jpg";
import tea from "../assets/caffe4.jpg";
import drinsk from "../assets/caffe.jpg";
import croissant from "../assets/cor1.jpg";
import brown from "../assets/brownese.jpg";
import cheese from "../assets/cheese.jpg";
import flowers from "../assets/flowers.jpg";
import books1 from "../assets/book1.jpg";
import books2 from "../assets/books2.jpg";

export const products = [
  {
    id: 1,
    name: "Rose Latte",
    category: "Coffee",
    price: 5.5,
    description: "A smooth latte infused with delicate rose flavor.",
    icon: "coffee",
    image: roseLatte,
    sizes: ["Small", "Medium", "Large"],
    popular: true,
  },
  {
    id: 2,
    name: "Iced Caramel Latte",
    category: "Coffee",
    price: 5,
    description: "Espresso, cold milk, ice, and sweet caramel.",
    icon: "coffee",
    image: caramelLatte,
    sizes: ["Small", "Medium", "Large"],
    popular: true,
  },
  {
    id: 3,
    name: "Vanilla Cappuccino",
    category: "Coffee",
    price: 4.5,
    description: "Rich espresso with steamed milk and vanilla.",
    icon: "coffee",
    sizes: ["Small", "Medium", "Large"],
    popular: false,
    image: vcap,

  },
  {
    id: 4,
    name: "Strawberry Matcha",
    category: "Drinks",
    price: 6,
    description: "Creamy matcha with fresh strawberry sweetness.",
    icon: "cup",
    image: matcha,
    sizes: ["Regular", "Large"],
    popular: true,
  },
  {
    id: 5,
    name: "Peach Iced Tea",
    category: "Drinks",
    price: 4,
    description: "Refreshing black tea with sweet peach notes.",
    icon: "cup",
    sizes: ["Regular", "Large"],
    popular: false,
    image: tea,

  },
  {
    id: 6,
    name: "Butter Croissant",
    category: "Bakery",
    price: 3.5,
    description: "Flaky, golden pastry baked fresh every morning.",
    icon: "bakery",
    sizes: [],
    popular: true,
    image: croissant,

  },
  {
    id: 7,
    name: "Strawberry Cheesecake",
    category: "Bakery",
    price: 6.5,
    description: "Creamy cheesecake topped with strawberries.",
    icon: "bakery",
    sizes: [],
    popular: false,
    image: cheese,

  },
  {
    id: 8,
    name: "Chocolate Brownie",
    category: "Bakery",
    price: 4,
    description: "A rich chocolate brownie with a soft center.",
    icon: "bakery",
    sizes: [],
    popular: false,
    image: brown,

  },
  {
    id: 9,
    name: "Blush Rose Bouquet",
    category: "Flowers",
    price: 25,
    description: "An elegant bouquet of fresh blush pink roses.",
    icon: "flower",
    sizes: [],
    popular: true,
    image: flowers,

  },
  
{
  id: 10,
  name: "Fresh Tropical Juice",
  category: "Drinks",
  price: 6.5,
  description: "A refreshing blend of freshly squeezed seasonal fruits, bursting with natural sweetness.",
  icon: "cup",
  sizes: ["Small", "Medium", "Large"],
  popular: false,
  image: drinsk,
},

  {
    id: 11,
    name: "The Midnight Library",
    category: "Books",
    price: 16,
    description: "A thought-provoking novel about life's possibilities.",
    icon: "book",
    sizes: [],
    popular: true,
    image: books1,

  },
  {
    id: 12,
    name: "Little Women",
    category: "Books",
    price: 14,
    description: "A beloved classic about family, dreams, and growing up.",
    icon: "book",
    sizes: [],
    popular: false,
    image: books2,

  },
];

export const categories = [
  "All",
  "Coffee",
  "Drinks",
  "Bakery",
  "Flowers",
  "Books",
];

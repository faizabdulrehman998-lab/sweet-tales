export const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const MENU_CATEGORIES = [
  {
    id: "platters",
    name: "Platters",
    items: [
      {
        id: "chicken-platter",
        name: "Chicken Platter",
        desc: "Marinated grilled chicken over yellow rice with lettuce, tomato, pita, white & hot sauce",
        price: 11.99,
        image: "chicken-platter.png",
        popular: true,
      },
      {
        id: "gyro-platter",
        name: "Beef Gyro Platter",
        desc: "Sliced beef & lamb gyro over yellow rice with lettuce, tomato, pita, white & hot sauce",
        price: 12.49,
        image: "gyro-platter.png",
        popular: true,
      },
      {
        id: "combo-platter",
        name: "Combo Platter",
        desc: "Half chicken, half gyro — both proteins, all the fixings, both sauces",
        price: 12.99,
        image: "combo-platter.png",
      },
      {
        id: "falafel-platter",
        name: "Falafel Platter",
        desc: "Crispy chickpea falafel over yellow rice with lettuce, tomato, pita & tahini",
        price: 10.99,
        image: "falafel-platter.png",
        vegetarian: true,
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    items: [
      {
        id: "chicken-sandwich",
        name: "Chicken Sandwich",
        desc: "Grilled chicken wrapped in warm pita with lettuce, tomato, white & hot sauce",
        price: 8.49,
        image: "chicken-wrap.png",
        popular: true,
      },
      {
        id: "gyro-sandwich",
        name: "Beef Gyro Sandwich",
        desc: "Sliced beef & lamb gyro in warm pita with lettuce, tomato, white & hot sauce",
        price: 8.99,
        image: "gyro-wrap.png",
      },
      {
        id: "combo-sandwich",
        name: "Combo Sandwich",
        desc: "Chicken and gyro together in one pita with the works",
        price: 9.49,
        image: "combo-wrap.png",
      },
      {
        id: "falafel-sandwich",
        name: "Falafel Sandwich",
        desc: "Crispy falafel in warm pita with lettuce, tomato & tahini sauce",
        price: 7.99,
        image: "falafel-wrap.png",
        vegetarian: true,
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      {
        id: "falafel-side",
        name: "Falafel (2 pieces)",
        desc: "Crispy chickpea falafel, made from scratch daily",
        price: 3.49,
        image: "falafel.png",
        vegetarian: true,
      },
      {
        id: "hummus",
        name: "Hummus & Pita",
        desc: "Creamy chickpea hummus served with warm pita bread",
        price: 4.49,
        image: "hummus.png",
        vegetarian: true,
      },
      {
        id: "fries",
        name: "Seasoned Fries",
        desc: "Crispy fries with our signature seasoning — great with white sauce",
        price: 3.99,
        image: "fries.png",
        vegetarian: true,
      },
    ],
    extras: [
      {
        id: "extra-white",
        name: "Extra White Sauce",
        desc: "The legendary creamy sauce (2 oz)",
        price: 1.0,
      },
      {
        id: "extra-hot",
        name: "Extra Hot Sauce",
        desc: "The famous red hot sauce — proceed with care (2 oz)",
        price: 1.0,
      },
      {
        id: "pita",
        name: "Extra Pita",
        desc: "Warm, fluffy pita bread",
        price: 1.5,
        vegetarian: true,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "baklava",
        name: "Baklava",
        desc: "Flaky filo layered with pistachios and honey syrup",
        price: 3.49,
        image: "baklava.png",
        vegetarian: true,
      },
      {
        id: "cookie",
        name: "Chocolate Chip Cookie",
        desc: "Baked fresh, soft in the middle, crisp at the edges",
        price: 2.49,
        image: "cookie.png",
        vegetarian: true,
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [],
    extras: [
      {
        id: "soda",
        name: "Fountain Soda",
        desc: "Coke, Diet Coke, Sprite, Fanta",
        price: 2.49,
      },
      {
        id: "water",
        name: "Bottled Water",
        desc: "500 ml spring water",
        price: 1.99,
      },
      {
        id: "ayran",
        name: "Ayran",
        desc: "Traditional salted yogurt drink — the perfect cooler for hot sauce",
        price: 3.49,
      },
    ],
  },
];

export const SIGNATURE = [
  {
    id: "chicken-platter",
    name: "Chicken Platter",
    desc: "Marinated grilled chicken, yellow rice, salad, pita, white & hot sauce",
    price: 11.99,
    image: "chicken-platter.png",
  },
  {
    id: "gyro-platter",
    name: "Beef Gyro Platter",
    desc: "Beef & lamb gyro sliced off the spit, yellow rice, salad, pita",
    price: 12.49,
    image: "gyro-platter.png",
  },
  {
    id: "combo-platter",
    name: "Combo Platter",
    desc: "Half chicken, half gyro — the best of both worlds on one plate",
    price: 12.99,
    image: "combo-platter.png",
  },
  {
    id: "falafel-platter",
    name: "Falafel Platter",
    desc: "Crispy falafel, yellow rice, salad, pita and tahini sauce",
    price: 10.99,
    image: "falafel-platter.png",
  },
];

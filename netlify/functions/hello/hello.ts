import { HandlerEvent, HandlerContext } from "@netlify/functions";

type Pizza = {
  type: "pizza";
  toppings: string[];
};

type HotDog = {
  type: "hotdog";
  sauce: string;
};

type Taco = {
  type: "taco";
  isSpicy: boolean;
};

type Sandwich = Pizza | HotDog | Taco;

function serveSandwich(sandwich: Sandwich) {
  switch (sandwich.type) {
    case "hotdog":
      return `One hotdog with ${sandwich.sauce} sauce, coming right up`;
    case "pizza":
      return `Here's your pizza with ${sandwich.toppings.join(
        ", ",
      )}, why would you eat that?!`;
    case "taco":
      return `Behold, a ${sandwich.isSpicy ? "spicy" : "non-spicy"} taco`;
  }
}

const sandwiches: Sandwich[] = [
  { type: "hotdog", sauce: "BBQ" },
  { type: "pizza", toppings: ["pineapple", "sausage", "banana"] },
  { type: "taco", isSpicy: true },
];

const handler = async (event: HandlerEvent, context: HandlerContext) => {
  return {
    statusCode: 200,
    body: serveSandwich(
      sandwiches[Math.floor(Math.random() * sandwiches.length)],
    ),
  };
};

export { handler };

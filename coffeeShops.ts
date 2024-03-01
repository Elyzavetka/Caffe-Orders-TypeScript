import { PriceBracket } from "./orders";

export const coffeeShops = [
    {
        name: "Silver Rice Sushi 🍣",
        priceBracket: PriceBracket.Medium,
        deliveryTimeMinutes: 40,
        openHour: "12",
        closeHour: "23",
        distance: "5",
    },
    {
        name: "Nikko's Rotisserie Chicken 🍗",
        priceBracket: PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: "12",
        closeHour: "21",
        distance: "8",
    },
    {
        name: "Aita Trattoria 🍝",
        priceBracket: PriceBracket.High,
        deliveryTimeMinutes: 60,
        openHour: "18",
        closeHour: "22",
        distance: "1",
    },
    {
        name: "Lula Bagel 🥯",
        priceBracket: PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: "0",
        closeHour: "12",
        distance: "2",
    },
    {
        name: "Golden Chopstick 🥢",
        priceBracket: PriceBracket.Medium,
        deliveryTimeMinutes: 20,
        openHour: "15",
        closeHour: "23",
        distance: "12",
    },
];

export type CoffeeShop = typeof coffeeShops[0][0];
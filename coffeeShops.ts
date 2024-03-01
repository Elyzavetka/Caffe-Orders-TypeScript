import { PriceBracket } from "./orders";

export const coffeeShops = [
    {
        name: "Sugar Rush Bakery 🍩",
        priceBracket: PriceBracket.Medium,
        deliveryTimeMinutes: 40,
        openHour: "12",
        closeHour: "23",
        distance: "5",
    },
    {
        name: "Candy Coated Café 🍬",
        priceBracket: PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: "12",
        closeHour: "21",
        distance: "8",
    },
    {
        name: "ChocoDelight Bistro 🍫",
        priceBracket: PriceBracket.High,
        deliveryTimeMinutes: 60,
        openHour: "18",
        closeHour: "22",
        distance: "1",
    },
    {
        name: "Vanilla Dreams Café 🍦",
        priceBracket: PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: "0",
        closeHour: "12",
        distance: "2",
    },
    {
        name: "Sweet Tooth Treats 🍭",
        priceBracket: PriceBracket.Medium,
        deliveryTimeMinutes: 20,
        openHour: "15",
        closeHour: "23",
        distance: "12",
    },
];

export type CoffeeShop = typeof coffeeShops[0][0];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coffeeShops = void 0;
const orders_1 = require("./orders");
exports.coffeeShops = [
    {
        name: "Sugar Rush Bakery 🍩",
        priceBracket: orders_1.PriceBracket.Medium,
        deliveryTimeMinutes: 40,
        openHour: "12",
        closeHour: "23",
        distance: "5",
    },
    {
        name: "Candy Coated Café 🍬",
        priceBracket: orders_1.PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: "12",
        closeHour: "21",
        distance: "8",
    },
    {
        name: "ChocoDelight Bistro 🍫",
        priceBracket: orders_1.PriceBracket.High,
        deliveryTimeMinutes: 60,
        openHour: "18",
        closeHour: "22",
        distance: "1",
    },
    {
        name: "Vanilla Dreams Café 🍦",
        priceBracket: orders_1.PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: "0",
        closeHour: "12",
        distance: "2",
    },
    {
        name: "Sweet Tooth Treats 🍭",
        priceBracket: orders_1.PriceBracket.Medium,
        deliveryTimeMinutes: 20,
        openHour: "15",
        closeHour: "23",
        distance: "12",
    },
];

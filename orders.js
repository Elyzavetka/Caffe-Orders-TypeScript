"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = exports.PriceBracket = void 0;
var PriceBracket;
(function (PriceBracket) {
    PriceBracket[PriceBracket["Low"] = 0] = "Low";
    PriceBracket[PriceBracket["Medium"] = 1] = "Medium";
    PriceBracket[PriceBracket["High"] = 2] = "High";
})(PriceBracket || (exports.PriceBracket = PriceBracket = {}));
exports.orders = [
    [
        {
            name: "Chocolate Cake",
            price: 15.99,
        },
        {
            name: "Blueberry Muffin",
            price: 7.99,
        },
        {
            name: "Croissant",
            price: 13.99,
        },
    ],
    [
        {
            name: "Cheesecake Slice",
            price: 9.99,
        },
        {
            name: "Strawberry Tart",
            price: 8.99,
        },
        {
            name: "Cinnamon Roll",
            price: 11.99,
        },
    ],
    [
        {
            name: "Red Velvet Cupcake",
            price: 24,
        },
        {
            name: "Lemon Drizzle Cake",
            price: 20,
        },
        {
            name: "Chocolate Chip Cookie",
            price: 22,
        },
    ],
    [
        {
            name: "Apple Pie",
            price: 6.99,
        },
        {
            name: "Pecan Brownie",
            price: 9.99,
        },
        {
            name: "Raspberry Pie",
            price: 7.99,
        },
    ],
    [
        {
            name: "Xiao Long Bao",
            price: 14.99,
        },
        {
            name: "Red Bean Buns",
            price: 12.49,
        },
        {
            name: "Kurobuta Pork Shao Mai",
            price: 14.99,
        },
    ],
];

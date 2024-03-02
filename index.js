"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffeeShops_1 = require("./coffeeShops");
const orders_1 = require("./orders");
const getMaxPrice = (price) => {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10;
        case orders_1.PriceBracket.Medium:
            return 20;
        case orders_1.PriceBracket.High:
            return 30;
    }
};
const getOrders = (price, orders) => {
    let filteredOrders = [];
    orders[0].filter((order) => order.price <= getMaxPrice(price));
    orders.forEach((coffeeShop) => {
        const result = coffeeShop.filter((order) => order.price <= getMaxPrice(price));
        filteredOrders.push(result);
    });
    return filteredOrders;
};
const printOrders = (coffeeShops, orders) => {
    coffeeShops.forEach((coffeeShop, index) => {
        if (orders[index].length > 0) {
            console.log(coffeeShop.name);
            orders[index].forEach((order) => {
                console.log(`-${order.name}: ${order.price}`);
            });
        }
    });
};
const eligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(coffeeShops_1.coffeeShops, eligibleOrders);

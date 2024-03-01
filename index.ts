import { coffeeShops, CoffeeShop } from "./coffeeShops";
import { orders, Order, PriceBracket } from "./orders";

const getMaxPrice = (price: PriceBracket) => {
    switch (price) {
        case PriceBracket.Low:
            return 10;
        case PriceBracket.Medium:
            return 20;
        case PriceBracket.High:
            return 30;

    }
}
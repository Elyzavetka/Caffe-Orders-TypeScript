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
const getOrders = (price: PriceBracket, orders: Order[][]) => {
    let filteredOrders: Order[][] = []
    orders[0].filter((order:Order) => order.price <= getMaxPrice(price))
    orders.forEach((coffeeShop: Order[]) => {
        const result = coffeeShop.filter((order:Order) => order.price <= getMaxPrice(price));
        filteredOrders.push(result)
    });
    return filteredOrders;
}

const printOrders = (coffeeShops: CoffeeShop[], orders: Order[][]) => {
    coffeeShops.forEach((coffeeShop: CoffeeShop, index: number) => {
        if (orders[index].length > 0) {
            console.log(coffeeShop.name)
            orders[index].forEach((order) => {
            console.log(`-${order.name}: ${order.price}`);
            })
        }
    })

}

const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(coffeeShops, eligibleOrders);


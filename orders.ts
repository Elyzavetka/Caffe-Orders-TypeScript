export enum PriceBracket {
        Low, // $0 - $10
        Medium, // $10 - $20
        High, // $20 - $30
    }

    export const orders = [
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

export type Order = typeof orders[0][0];


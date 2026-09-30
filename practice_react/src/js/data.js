import imageImg from "../assets/react.svg";
const products = [
    {
        id: 1,
        name: "Dell Inspiron 15",
        image: "../src/assets/hero.png",
        description: "15.6-inch laptop with Intel Core i5 processor, 8GB RAM, and 512GB SSD.",
        stock: 12
    },
    {
        id: 2,
        name: "Samsung Galaxy S25",
        image: "../src/assets/react.svg",
        description: "Powerful smartphone with a high-resolution display, excellent camera, and long-lasting battery.",
        stock: 25
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        image: "../src/assets/vite.svg",
        description: "Wireless noise-cancelling headphones with premium sound quality and comfortable design.",
        stock: 8
    },
    {
        id: 4,
        name: "Logitech MX Master 3S",
        image: "../src/assets/react.svg",
        description: "Wireless ergonomic mouse designed for productivity with precise tracking and customizable buttons.",
        stock: 18
    },
    {
        id: 5,
        name: "Keychron K2 Mechanical Keyboard",
        image: imageImg,
        description: "Compact wireless mechanical keyboard with RGB backlighting and comfortable typing experience.",
        stock: 6
    }
];

export default products;
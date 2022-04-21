import { OrderItemCreationAttributes } from "./orderItem-model";

// Mock data for order items
const orderItemsMock: OrderItemCreationAttributes[] = [
    {
        userId: 1,
        productId: 1
    },
    {
        userId: 1,
        productId: 2
    },
    {
        userId: 1,
        productId: 3
    },
    {
        userId: 1,
        productId: 4,
        orderId: 1,
        label: `"La joconde"'s photo`,
        quantity: 1,
        price: 122_486.5
    },
    {
        userId: 1,
        productId: 5,
        orderId: 1,
        label: "A gorgeous baby's portrait",
        quantity: 2,
        price: 60
    },
    {
        userId: 1,
        productId: 6,
        orderId: 1,
        label: "A magnificient Milky Way shot",
        quantity: 4,
        price: 20
    },
    {
        userId: 2,
        productId: 1,
        label: "Chromebook",
        quantity: 1,
        price: 299.9
    },
    {
        userId: 2,
        productId: 2,
        label: "Master React within 30 days - Udemy",
        quantity: 2,
        price: 50
    },
    {
        userId: 2,
        productId: 3,
        label: "Adobe After Effects 2020",
        quantity: 1,
        price: 170
    },
    {
        userId: 2,
        productId: 4
    },
    {
        userId: 2,
        productId: 5
    },
    {
        userId: 2,
        productId: 6
    },
    {
        userId: 3,
        productId: 1,
        label: "Chromebook",
        quantity: 1,
        price: 299.9
    },
    {
        userId: 3,
        productId: 2
    },
    {
        userId: 3,
        productId: 3,
        label: "Adobe After Effects 2020",
        quantity: 1,
        price: 170
    },
    {
        userId: 3,
        productId: 4
    },
    {
        userId: 3,
        productId: 5,
        orderId: 1,
        label: "A gorgeous baby's portrait",
        quantity: 2,
        price: 60
    },
    {
        userId: 3,
        productId: 6
    }
];

export default orderItemsMock;
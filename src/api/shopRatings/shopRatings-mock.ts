import { ShopRatingCreationAttributes } from "./shopRating-model";

// Mock data for the shop ratings
const shopRatingsMock: ShopRatingCreationAttributes[] = [
    {
        userId: 2,
        shopId: 1,
        score: 5,
        comment: "Your udemy courses about videography were fantastic, I appreciated it!"
    },
    {
        userId: 3,
        shopId: 1,
        score: 4,
        comment: null
    },
    {
        userId: 1,
        shopId: 2,
        score: 5,
        comment: null
    },
    {
        userId: 3,
        shopId: 2,
        score: 4,
        comment: "Great portrait! I love your work."
    }
];

export default shopRatingsMock;
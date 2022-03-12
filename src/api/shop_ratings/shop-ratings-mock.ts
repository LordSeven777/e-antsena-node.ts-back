import { ShopRatingCreationAttributes } from "./shop-rating-model";

// Mock data for the shop ratings
const shopRatingsMock: ShopRatingCreationAttributes[] = [
    {
        user_id: 2,
        shop_id: 1,
        score: 5,
        comment: "Your udemy courses about videography were fantastic, I appreciated it!"
    },
    {
        user_id: 3,
        shop_id: 1,
        score: 4,
        comment: null
    },
    {
        user_id: 1,
        shop_id: 2,
        score: 5,
        comment: null
    },
    {
        user_id: 3,
        shop_id: 2,
        score: 4,
        comment: "Great portrait! I love your work."
    }
];

export default shopRatingsMock;
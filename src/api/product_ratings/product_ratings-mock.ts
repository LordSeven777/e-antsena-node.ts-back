import { ProductRatingCreationAttributes } from "./product_rating-model";

// Mock data for product ratings
const productRatingsMock: ProductRatingCreationAttributes[] = [
    {
        user_id: 2,
        product_id: 1,
        score: 5,
        comment: "Very practical device! I can now use it everywhere."
    },
    {
        user_id: 3,
        product_id: 2,
        score: 4,
        comment: "Great content! I think it will help me land a job quickly"
    },
    {
        user_id: 2,
        product_id: 3,
        score: 5,
        comment: "Freshly original software. I got all I needed."
    },
    {
        user_id: 3,
        product_id: 4,
        score: 4,
        comment: "Sublime art work"
    },
    {
        user_id: 1,
        product_id: 5,
        score: 5,
        comment: "I appreciated all the original drawing of those artists."
    },
    {
        user_id: 3,
        product_id: 6,
        score: 4,
        comment: "Mesmerizing photos that make me dreaming"
    }
];

export default productRatingsMock;
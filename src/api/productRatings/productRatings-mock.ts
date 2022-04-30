import { ProductRatingCreationAttributes } from "./productRating-model";

// Mock data for product ratings
const productRatingsMock: ProductRatingCreationAttributes[] = [
    {
        userId: 2,
        productId: 1,
        score: 5,
        comment: "Very practical device! I can now use it everywhere."
    },
    {
        userId: 3,
        productId: 2,
        score: 4,
        comment: "Great content! I think it will help me land a job quickly"
    },
    {
        userId: 2,
        productId: 3,
        score: 5,
        comment: "Freshly original software. I got all I needed."
    },
    {
        userId: 3,
        productId: 4,
        score: 4,
        comment: "Sublime art work"
    },
    {
        userId: 1,
        productId: 5,
        score: 5,
        comment: "I appreciated all the original drawing of those artists."
    },
    {
        userId: 3,
        productId: 6,
        score: 4,
        comment: "Mesmerizing photos that make me dreaming"
    }
];

export default productRatingsMock;
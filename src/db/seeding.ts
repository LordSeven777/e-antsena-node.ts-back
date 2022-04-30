// All models and mock data
import { UserModel, usersMock } from "../api/users";
import { ShopModel, shopsMock } from "../api/shops";
import { ShopRatingModel, shopRatingsMock } from "../api/shop_ratings";
import { CategoryModel, categoriesMock } from "../api/categories";
import { Shop_Category_model, shops_categories_mock } from "../api/shops_categories";
import { ProductModel, productsMock } from "../api/products";
import { ProductsCategoriesModel, productsCategoriesMock } from "../api/products_categories";
import { ProductPhotoModel, productPhotosMock } from "../api/product_photos";
import { ProductRatingModel, productRatingsMock } from "../api/product_ratings";
import { OrderModel, ordersMock } from "../api/orders";
import { OrderItemModel, orderItemsMock } from "../api/orderItems";

// Seeds all tables with mock data
const seedTables = async () => {
    await UserModel.bulkCreate(usersMock);
    await ShopModel.bulkCreate(shopsMock);
    await ShopRatingModel.bulkCreate(shopRatingsMock);
    await CategoryModel.bulkCreate(categoriesMock);
    await Shop_Category_model.bulkCreate(shops_categories_mock);
    await ProductModel.bulkCreate(productsMock);
    await ProductsCategoriesModel.bulkCreate(productsCategoriesMock);
    await ProductPhotoModel.bulkCreate(productPhotosMock);
    await ProductRatingModel.bulkCreate(productRatingsMock);
    await OrderModel.bulkCreate(ordersMock);
    await OrderItemModel.bulkCreate(orderItemsMock);
}

export default seedTables;
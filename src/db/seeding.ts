// All models and mock data
import { UserModel, usersMock } from "../api/users";
import { ShopModel, shopsMock } from "../api/shops";
import { ShopRatingModel, shopRatingsMock } from "../api/shop_ratings";
import { CategoryModel, categoriesMock } from "../api/categories";
import { ShopsCategoriesModel, shopsCategoriesMock } from "../api/shops_categories";
import { ProductModel, productsMock } from "../api/products";
import { ProductsCategoriesModel, productsCategoriesMock } from "../api/products_categories";
import { ProductPhotoModel, productPhotosMock } from "../api/product_photos";

// Seeds all tables with mock data
const seedTables = async () => {
    await UserModel.bulkCreate(usersMock);
    await ShopModel.bulkCreate(shopsMock);
    await ShopRatingModel.bulkCreate(shopRatingsMock);
    await CategoryModel.bulkCreate(categoriesMock);
    await ShopsCategoriesModel.bulkCreate(shopsCategoriesMock);
    await ProductModel.bulkCreate(productsMock);
    await ProductsCategoriesModel.bulkCreate(productsCategoriesMock);
    await ProductPhotoModel.bulkCreate(productPhotosMock);
}

export default seedTables;
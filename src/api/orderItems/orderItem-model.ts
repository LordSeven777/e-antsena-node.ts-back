import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// The sequelize database connection instance
import sequelize from "../../db/connection";

// Other models for associations
import { UserModel } from "../users";
import { OrderModel } from "../orders";
import { ProductModel } from "../products";

// Attributes for an order item
interface OrderItemAttributes {
    itemId: number;
    userId: number;
    productId: number;
    orderId: number | null;
    label: string;
    price: number;
    quantity: number;
}

// Attributes for an order item at creation time
interface OrderItemCreationAttributes extends Optional<OrderItemAttributes, "itemId" | "orderId" | "label" | "price" | "quantity"> {}

// Class for the order item model
class OrderItemModel extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
    public itemId!: number;
    public userId!: number;
    public productId!: number;
    public orderId!: number | null;
    public label!: string;
    public price!: number;
    public quantity!: number;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Order item model initialization
const orderItemModelSchema: ModelAttributes<OrderItemModel, OrderItemAttributes> = {
    itemId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        unique: "UQ_orderItems_users_products_orders",
        references: {
            model: "users",
            key: "user_id"
        }
    },
    productId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        unique: "UQ_orderItems_users_products_orders",
        references: {
            model: "products",
            key: "product_id"
        }
    },
    orderId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        unique: "UQ_orderItems_users_products_orders",
        allowNull: true, // When null, the order item is in the shopping cart
        defaultValue: null,
        references: {
            model: "orders",
            key: "order_id"
        }
    },
    label: {
        type: DataTypes.STRING(60),
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT(8).UNSIGNED,
        allowNull: true
    },
    quantity: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: true
    }
}
OrderItemModel.init(orderItemModelSchema, {
    sequelize,
    tableName: "order_items",
    modelName: "OrderItem",
    underscored: true
});

// Associating the order item model with the user, shop, and order models
UserModel.hasMany(OrderItemModel, {
    as: "orderItems",
    foreignKey: "user_id"
});
OrderItemModel.belongsTo(UserModel, {
    as: "orderer",
    foreignKey: "user_id"
});
ProductModel.hasMany(OrderItemModel, {
    as: "orderItems",
    foreignKey: "product_id"
});
OrderItemModel.belongsTo(ProductModel, {
    as: "product",
    foreignKey: "product_id"
});
OrderModel.hasMany(OrderItemModel, {
    as: "orderItems",
    foreignKey: "order_id"
});
OrderItemModel.belongsTo(OrderModel, {
    as: "order",
    foreignKey: "order_id",
    onDelete: "CASCADE"
});

export default OrderItemModel;
export { OrderItemAttributes, OrderItemCreationAttributes, orderItemModelSchema };
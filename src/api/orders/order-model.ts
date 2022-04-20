import { timeStamp } from "console";
import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// The sequelize database connection instance
import sequelize from "../../db/connection";

// Interface for an order's attributes
interface OrderAttributes {
    orderId: number;
}

// Interface for an order's attributes at creation time
interface OrderCreationAttributes extends Optional<OrderAttributes, "orderId"> {}

// Class for the order model
class OrderModel extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
    public orderId!: number;
}

// Initiliazing the order model schema
const orderModelSchema: ModelAttributes<OrderModel, OrderAttributes> = {
    orderId: {
        field: "order_id",
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        autoIncrement: true,
        primaryKey: true,
    }
}
OrderModel.init(orderModelSchema, {
    sequelize,
    tableName: "orders",
    timestamps: true,
    modelName: "Order"
});

export default OrderModel;
export { OrderAttributes, OrderCreationAttributes, orderModelSchema };
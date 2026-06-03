const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Payment = sequelize.define("Payment", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Payment;
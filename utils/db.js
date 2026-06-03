const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "bus_booking_system",
    "root",
    "Yashav@3528",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error);
    }
})();

module.exports = sequelize;
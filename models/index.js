const User = require("./User");
const Bus = require("./Bus");
const Booking = require("./Booking");
const Payment = require("./Payment");

/* User → Booking */

User.hasMany(Booking, {
    foreignKey: "userId"
});

Booking.belongsTo(User, {
    foreignKey: "userId"
});

/* Bus → Booking */

Bus.hasMany(Booking, {
    foreignKey: "busId"
});

Booking.belongsTo(Bus, {
    foreignKey: "busId"
});

module.exports = {
    User,
    Bus,
    Booking,
    Payment
};
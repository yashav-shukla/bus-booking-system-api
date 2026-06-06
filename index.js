const express = require("express");
const sequelize = require("./utils/db");

require("./models");

const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);

sequelize.sync({ alter: true })
.then(() => {

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });

})
.catch((err) => {
    console.log(err);
});
const express = require("express");
const sequelize = require("./utils/db");

require("./models/User");
require("./models/Bus");
require("./models/Booking");
require("./models/Payment");

const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/buses", busRoutes);

sequelize.sync()
.then(() => {

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });

})
.catch((err) => {
    console.log(err);
});
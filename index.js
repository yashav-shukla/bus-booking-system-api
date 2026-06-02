const express = require("express");

const app = express();

app.use(express.json());

const userRoutes =
require("./routes/userRoutes");

const busRoutes =
require("./routes/busRoutes");

app.use("/users",userRoutes);

app.use("/buses",busRoutes);

const PORT = 3000;

app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );
});
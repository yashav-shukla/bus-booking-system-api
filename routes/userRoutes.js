const express = require("express");

const router = express.Router();

const {
    addUser,
    getUsers,
    getUserBookings
} = require("../controllers/userController");

router.post("/", addUser);

router.get("/", getUsers);

router.get("/:id/bookings", getUserBookings);

module.exports = router;
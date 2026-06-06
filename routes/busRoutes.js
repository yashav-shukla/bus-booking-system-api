const express = require("express");

const router = express.Router();

const {
    addBus,
    getAvailableBuses,
    getBusBookings
} = require("../controllers/busController");

router.post("/", addBus);

router.get("/available/:seats", getAvailableBuses);

router.get("/:id/bookings", getBusBookings);

module.exports = router;
const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
    try {

        const {
            userId,
            busId,
            seatNumber
        } = req.body;

        const booking = await Booking.create({
            userId,
            busId,
            seatNumber
        });

        res.status(201).json({
            message: "Booking Created Successfully",
            booking
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    createBooking
};
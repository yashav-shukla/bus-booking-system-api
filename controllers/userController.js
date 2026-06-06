const User = require("../models/User");
const Booking = require("../models/Booking");
const Bus = require("../models/Bus");

const addUser = async (req, res) => {
    try {

        const { name, email } = req.body;

        await User.create({
            name,
            email
        });

        res.status(201).json({
            message: "User Added Successfully"
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUsers = async (req, res) => {
    try {

        const users = await User.findAll();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserBookings = async (req, res) => {
    try {

        const user = await User.findByPk(req.params.id, {
            include: {
                model: Booking,
                include: [Bus]
            }
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user.Bookings);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    addUser,
    getUsers,
    getUserBookings
};
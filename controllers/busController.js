const Bus = require("../models/Bus");
const Booking = require("../models/Booking");
const User = require("../models/User");
const { Op } = require("sequelize");

const addBus = async (req, res) => {
    try {

        const {
            busNumber,
            totalSeats,
            availableSeats
        } = req.body;

        await Bus.create({
            busNumber,
            totalSeats,
            availableSeats
        });

        res.status(201).json({
            message: "Bus Added Successfully"
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAvailableBuses = async (req, res) => {
    try {

        const seats = Number(req.params.seats);

        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seats
                }
            }
        });

        res.status(200).json(buses);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getBusBookings = async (req, res) => {
    try {

        const bus = await Bus.findByPk(req.params.id, {
            include: {
                model: Booking,
                include: [User]
            }
        });

        if (!bus) {
            return res.status(404).json({
                message: "Bus not found"
            });
        }

        res.status(200).json(bus.Bookings);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    addBus,
    getAvailableBuses,
    getBusBookings
};
const Bus = require("../models/Bus");
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

module.exports = {
    addBus,
    getAvailableBuses
};
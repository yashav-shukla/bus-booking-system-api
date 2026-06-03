const User = require("../models/User");

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

module.exports = {
    addUser,
    getUsers
};
const db = require("../utils/db");

const addBus = (req,res)=>{

    const {
        busNumber,
        totalSeats,
        availableSeats
    } = req.body;

    const query =
    `INSERT INTO Buses
    (busNumber,totalSeats,availableSeats)
    VALUES(?,?,?)`;

    db.execute(
        query,
        [
            busNumber,
            totalSeats,
            availableSeats
        ],
        (err,result)=>{

            if(err){
                return res.status(500).send(err.message);
            }

            console.log("Bus Added");

            res.status(201).json({
                message:"Bus Added Successfully"
            });
        }
    );
};

const getAvailableBuses = (req,res)=>{

    const seats = req.params.seats;

    const query =
    "SELECT * FROM Buses WHERE availableSeats > ?";

    db.execute(query,[seats],(err,result)=>{

        if(err){
            return res.status(500).send(err.message);
        }

        res.json(result);
    });
};

module.exports = {
    addBus,
    getAvailableBuses
};
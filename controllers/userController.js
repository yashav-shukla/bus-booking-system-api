const db = require("../utils/db");

const addUser = (req,res)=>{

    const {name,email} = req.body;

    const query =
    "INSERT INTO Users(name,email) VALUES (?,?)";

    db.execute(query,[name,email],(err,result)=>{

        if(err){
            return res.status(500).send(err.message);
        }

        console.log("User Added");

        res.status(201).json({
            message:"User Added Successfully"
        });
    });
};

const getUsers = (req,res)=>{

    const query =
    "SELECT * FROM Users";

    db.execute(query,(err,result)=>{

        if(err){
            return res.status(500).send(err.message);
        }

        res.json(result);
    });
};

module.exports = {
    addUser,
    getUsers
};
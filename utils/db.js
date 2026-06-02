const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Yashav@3528",
    database: "bus_booking_system"
});

connection.connect((err)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log("Database Connected");
});

module.exports = connection;
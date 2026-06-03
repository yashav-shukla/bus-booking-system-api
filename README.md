

<p align="center">
  <h1 align="center">🚌 Bus Booking System API using Sequelize ORM</h1>
</p>

<p align="center">
  <h3 align="center">RESTful API built with Node.js, Express.js, MySQL & Sequelize ORM</h3>
</p>

<p align="center">
  Manage Users, Buses, Bookings, and Payments using Sequelize ORM with MySQL.
</p>

<p align="center">
  <a href="https://github.com/yashav-shukla">
    <img src="https://img.shields.io/badge/Author-Yashav%20Shukla-181717?style=for-the-badge&logo=github" />
  </a>
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mysql,javascript,git,github,vscode" />
</p>

---

## 🚀 Features

* 👤 Add New Users
* 📋 Retrieve All Users
* 🚌 Add New Buses
* 🔎 Filter Buses by Available Seats
* 📦 Sequelize ORM Integration
* 🗄️ MySQL Database Connectivity
* ⚡ Automatic Table Synchronization
* 🛡️ Error Handling
* 📁 Modular MVC Architecture

---

## 🛠️ Tech Stack

| Technology   | Purpose              |
| ------------ | -------------------- |
| Node.js      | Runtime Environment  |
| Express.js   | Backend Framework    |
| MySQL        | Database             |
| Sequelize    | ORM                  |
| mysql2       | MySQL Driver         |
| JavaScript   | Programming Language |
| Git & GitHub | Version Control      |

---

## 📁 Project Structure

```text
bus-booking-system-api/
│
├── controllers/
│   ├── userController.js
│   └── busController.js
│
├── models/
│   ├── User.js
│   ├── Bus.js
│   ├── Booking.js
│   └── Payment.js
│
├── routes/
│   ├── userRoutes.js
│   └── busRoutes.js
│
├── utils/
│   └── db.js
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/yashav-shukla/bus-booking-system-api.git
```

### Navigate to Project Folder

```bash
cd bus-booking-system-api
```

### Install Dependencies

```bash
npm install
```

### Install Sequelize

```bash
npm install sequelize mysql2
```

---

## 🗄️ Database Setup

Create Database:

```sql
CREATE DATABASE bus_booking_system;
```

Verify:

```sql
SHOW DATABASES;
```

---

## 🔌 Configure Database Connection

File:

```text
utils/db.js
```

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "bus_booking_system",
    "root",
    "YOUR_PASSWORD",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;
```

---

## 📄 Sequelize Models

### User Model

```javascript
id
name
email
```

### Bus Model

```javascript
id
busNumber
totalSeats
availableSeats
```

### Booking Model

```javascript
id
seatNumber
```

### Payment Model

```javascript
id
amount
status
```

---

## ▶️ Run Application

```bash
node index.js
```

Expected Output:

```bash
Database Connected Successfully
Server running on port 3000
```

---

## 📮 API Endpoints

### 👤 Add User

```http
POST /users
```

Request Body:

```json
{
  "name": "Yashav Shukla",
  "email": "yashav@gmail.com"
}
```

Response:

```json
{
  "message": "User Added Successfully"
}
```

---

### 📋 Get All Users

```http
GET /users
```

Uses:

```javascript
User.findAll()
```

---

### 🚌 Add Bus

```http
POST /buses
```

Request Body:

```json
{
  "busNumber": "UP101",
  "totalSeats": 50,
  "availableSeats": 25
}
```

Response:

```json
{
  "message": "Bus Added Successfully"
}
```

---

### 🔎 Get Available Buses

```http
GET /buses/available/:seats
```

Example:

```http
GET /buses/available/10
```

Uses Sequelize filtering:

```javascript
Bus.findAll({
  where: {
    availableSeats: {
      [Op.gt]: seats
    }
  }
})
```

Returns all buses having available seats greater than the specified value.

---

## 🧪 Sample Data

### User 1

```json
{
  "name": "Yashav",
  "email": "yashav@gmail.com"
}
```

### User 2

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com"
}
```

### User 3

```json
{
  "name": "Amit",
  "email": "amit@gmail.com"
}
```

### Bus 1

```json
{
  "busNumber": "UP101",
  "totalSeats": 50,
  "availableSeats": 25
}
```

### Bus 2

```json
{
  "busNumber": "UP102",
  "totalSeats": 40,
  "availableSeats": 8
}
```

---

## 🎯 Assignment Deliverables Covered

✅ Define Sequelize Models

* User
* Bus
* Booking
* Payment

✅ Insert Data Using Sequelize

* User.create()
* Bus.create()

✅ Retrieve Data Using Sequelize

* User.findAll()

✅ Filter Data Using Sequelize

* Bus.findAll()
* Sequelize where condition

✅ API Endpoints

* POST /users
* GET /users
* POST /buses
* GET /buses/available/:seats

---

## 🚀 Future Improvements

* User Authentication
* Seat Booking Functionality
* Payment Gateway Integration
* Booking History
* Admin Dashboard
* Sequelize Associations
* JWT Authentication

---
---

## 👨‍💻 Author

<p align="center">
  <a href="https://github.com/yashav-shukla">
    <img src="https://skillicons.dev/icons?i=github" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/yashav-shukla">
    <b>Yashav Shukla</b>
  </a>
</p>

<p align="center">
  GitHub: https://github.com/yashavshukla
</p>

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

<p align="center">
  Made with ❤️ by Yashav Shukla
</p>

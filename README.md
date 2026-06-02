<p align="center">
  <h1 align="center">🚌 Bus Booking System API</h1>
</p>


<p align="center">
  <h3 align="center">RESTful API built with Express.js & MySQL</h3>
</p>

<p align="center">
  Manage users and buses with MySQL database integration and seat availability filtering.
</p>

<p align="center">
  <a href="https://github.com/yashavshukla">
    <img src="https://img.shields.io/badge/Author-Yashav%20Shukla-181717?style=for-the-badge&logo=github" />
  </a>
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mysql,javascript,git,github,vscode" />
</p>

---

## 🚀 Features

* Add New Users
* Retrieve All Users
* Add New Buses
* Filter Buses by Available Seats
* MySQL Database Integration
* RESTful API Architecture
* Error Handling
* Modular Folder Structure

---

## 🛠️ Tech Stack

| Technology   | Purpose              |
| ------------ | -------------------- |
| Node.js      | Runtime Environment  |
| Express.js   | Backend Framework    |
| MySQL        | Database             |
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
├── routes/
│   ├── userRoutes.js
│   └── busRoutes.js
│
├── utils/
│   └── db.js
│
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Database Schema

### Users

```sql
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
```

### Buses

```sql
CREATE TABLE Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(255),
    totalSeats INT,
    availableSeats INT
);
```

### Bookings

```sql
CREATE TABLE Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
);
```

### Payments

```sql
CREATE TABLE Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10,2),
    paymentStatus VARCHAR(255)
);
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yashavshukla/bus-booking-system-api.git
```

Move into the project folder:

```bash
cd bus-booking-system-api
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
node index.js
```

Expected Output:

```bash
Database Connected
Server running on port 3000
```

---

## 📮 API Endpoints

### Add User

```http
POST /users
```

Request Body:

```json
{
  "name": "Virat Kohli",
  "email": "virat@gmail.com"
}
```

---

### Get All Users

```http
GET /users
```

---

### Add Bus

```http
POST /buses
```

Request Body:

```json
{
  "busNumber": "UP32AB1234",
  "totalSeats": 40,
  "availableSeats": 25
}
```

---

### Get Available Buses

```http
GET /buses/available/:seats
```

Example:

```http
GET /buses/available/10
```

Returns all buses having more than 10 available seats.

---

## 🧪 SQL Queries

### Retrieve All Users

```sql
SELECT * FROM Users;
```

### Retrieve Buses with More Than 10 Available Seats

```sql
SELECT *
FROM Buses
WHERE availableSeats > 10;
```

---

## 📋 Sample Data

### User

```json
{
  "name": "Virat Kohli",
  "email": "virat@gmail.com"
}
```

### Bus

```json
{
  "busNumber": "UP32AB1234",
  "totalSeats": 40,
  "availableSeats": 25
}
```

---

## 🚀 Future Improvements

* User Authentication
* Bus Booking Functionality
* Payment Integration
* Seat Selection System
* Booking History
* Admin Dashboard

---

## 👨‍💻 Author

<p align="center">
  <a href="https://github.com/yashavshukla">
    <img src="https://skillicons.dev/icons?i=github" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/yashavshukla">
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

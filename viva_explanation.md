# Viva Preparation Guide: Travel Budgeting Tool

This document explains how your project works in simple terms, helping you answer questions during your viva.

## 1. Project Architecture
This is a **Full-Stack Application** following the **Client-Server Architecture**.

- **Frontend (Client)**: Built using HTML, CSS, and Vanilla JavaScript. It handles the User Interface (UI) and sends requests to the backend using the `fetch` API.
- **Backend (Server)**: Built with Node.js and Express.js. It handles the business logic, communicates with the database, and provides RESTful APIs.
- **Database**: MongoDB is used to store data in a JSON-like format (BSON).

---

## 2. Key Technologies & Why We Used Them
- **Node.js**: Allows us to run JavaScript on the server. It's fast and uses an event-driven, non-blocking I/O model.
- **Express.js**: A minimal framework for Node.js that makes it easy to handle routes (like `/api/trips`).
- **MongoDB**: A NoSQL database which is flexible and easy to use with JavaScript objects.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js. It helps us define "Schemas" (rules) for our data.
- **JWT (JSON Web Token)**: Used for secure authentication. Instead of sessions, we use a token stored in the browser's `localStorage`.
- **Bcrypt.js**: Used to hash passwords. We never store plain passwords in the database for security reasons.

---

## 3. Data Flow (How it works)
1. **User Login**: The user enters their email and password. The frontend sends this to `/api/auth/login`.
2. **Authentication**: The backend checks if the user exists and if the hashed password matches. If yes, it generates a **JWT token** and sends it back.
3. **Storage**: The frontend saves this token in `localStorage`.
4. **Authorized Requests**: When the user views their trips, the frontend sends the token in the "Authorization Header" (`Bearer <token>`).
5. **Middleware Check**: The backend `protect` middleware verifies the token before allowing access to trip data.

---

## 4. Database Schema (The Models)
- **User**: Name, Email, Password.
- **Trip**: UserID (to link to the user), Destination, Start/End Dates, Total Budget.
- **Expense**: UserID, TripID (to link to a specific trip), Category, Amount, Date, Notes.

---

## 5. Potential Viva Questions & Answers

**Q: What is the purpose of `.env` file?**
**A:** It stores sensitive configuration like database URLs and secret keys. We don't upload this to GitHub to keep our secrets safe.

**Q: Why use `bcrypt` instead of storing passwords directly?**
**A:** Storing plain passwords is dangerous. If the database is hacked, every user's password is stolen. `bcrypt` turns the password into a complex hash that cannot be reversed easily.

**Q: What is a REST API?**
**A:** REST stands for Representational State Transfer. It is a set of rules for creating web services. We use HTTP methods like GET (read), POST (create), PUT (update), and DELETE (remove) to manage our data.

**Q: How do you link a trip to a specific user?**
**A:** In the `Trip` model, we store a `userId` which is the `_id` of the user from the `Users` collection. This is called a **Reference** in MongoDB.

**Q: What happens if the backend server stops?**
**A:** The frontend will still load, but any action that requires data (like logging in or adding a trip) will fail because the `fetch` request won't find the server.

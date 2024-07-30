// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(cors());

// app.get('/api',(req,res)=>{
//     return res.json({message:"success from backend"})
// })
// app.listen(5000,()=>{
//     console.log("listening")
// })


// // server.js
// const express = require('express');
// const cors = require('cors');
// const { connect, sql } = require('./db');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// connect();

// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const result = await sql.query`INSERT INTO Users (username, password) VALUES (${username}, ${password})`;
//         res.status(201).send("User created successfully");
//     } catch (err) {
//         res.status(500).send("Error creating user");
//     }
// });

// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const result = await sql.query`SELECT * FROM Users WHERE username = ${username} AND password = ${password}`;
//         if (result.recordset.length > 0) {
//             res.status(200).send("Login successful");
//         } else {
//             res.status(401).send("Invalid credentials");
//         }
//     } catch (err) {
//         res.status(500).send("Error logging in");
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// const { connect, sql } = require('./db');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// connect();

// // User Signup
// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         await sql.query`INSERT INTO Users (username, password) VALUES (${username}, ${password})`;
//         res.status(201).send("User created successfully");
//     } catch (err) {
//         res.status(500).send("Error creating user");
//     }
// });

// // User Login
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const result = await sql.query`SELECT * FROM Users WHERE username = ${username} AND password = ${password}`;
//         if (result.recordset.length > 0) {
//             res.status(200).send("Login successful");
//         } else {
//             res.status(401).send("Invalid credentials");
//         }
//     } catch (err) {
//         res.status(500).send("Error logging in");
//     }
// });

// // CRUD for Items

// // Create an Item
// app.post('/items', async (req, res) => {
//     const { name, description } = req.body;
//     try {
//         await sql.query`INSERT INTO Items (name, description) VALUES (${name}, ${description})`;
//         res.status(201).send("Item created successfully");
//     } catch (err) {
//         res.status(500).send("Error creating item");
//     }
// });

// // Read all Items
// app.get('/items', async (req, res) => {
//     try {
//         const result = await sql.query`SELECT * FROM Items`;
//         res.status(200).json(result.recordset);
//     } catch (err) {
//         res.status(500).send("Error fetching items");
//     }
// });

// // Update an Item
// app.put('/items/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, description } = req.body;
//     try {
//         await sql.query`UPDATE Items SET name = ${name}, description = ${description} WHERE id = ${id}`;
//         res.status(200).send("Item updated successfully");
//     } catch (err) {
//         res.status(500).send("Error updating item");
//     }
// });

// // Delete an Item
// app.delete('/items/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         await sql.query`DELETE FROM Items WHERE id = ${id}`;
//         res.status(200).send("Item deleted successfully");
//     } catch (err) {
//         res.status(500).send("Error deleting item");
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// index.js

// const express = require('express');
// const cors = require('cors');
// const { sql, poolPromise } = require('./config/db');

// const app = express();
// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON bodies

// // Route for login
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const pool = await poolPromise;
//     const result = await pool.request()
//       .input('username', sql.VarChar, username)
//       .query('SELECT * FROM Users WHERE username = @username');
//     const user = result.recordset[0];
//     if (user && user.password === password) {
//       res.json({ message: 'Login successful', user });
//     } else {
//       res.status(401).json({ message: 'Invalid username or password' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// });

// // Route for signup
// app.post('/signup', async (req, res) => {
//   const { username, password, email } = req.body;
//   try {
//     const pool = await poolPromise;
//     const result = await pool.request()
//       .input('username', sql.VarChar, username)
//       .query('SELECT * FROM Users WHERE username = @username');
//     const userExists = result.recordset[0];
//     if (userExists) {
//       res.status(400).json({ message: 'Username already exists' });
//     } else {
//       await pool.request()
//         .input('username', sql.VarChar, username)
//         .input('password', sql.VarChar, password)
//         .input('email', sql.VarChar, email)
//         .query('INSERT INTO Users (username, password, email) VALUES (@username, @password, @email)');
//       res.json({ message: 'User created successfully' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // db.js
// const sql = require('mssql/msnodesqlv8');

// const dbConfig = {
//   USER: 'root',
//   SERVER: 'DESKTOP-EI5C8QU\\SQLEXPRESS',
//   DATABASE: 'cridentials',
//   DRIVER:'msNodeSqlV8',
//   HOST:'localhost',
//   options: {
//     // encrypt: true, // For Azure
//     trustServerCertificate: true ,// Change to true for local dev / self-signed certs
//     trustedConnection:true,
//   }
// };

// const poolPromise = new sql.ConnectionPool(dbConfig)
//   .connect()
//   .then(pool => {
//     console.log('Connected to MSSQL');
//     return pool;
//   })
//   .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

// module.exports = {
//   sql, poolPromise
// };


// const sql = require('mssql/msnodesqlv8');
// //database configuration

// var config={
//     database:'auth',
//     server:'DESKTOP-EI5C8QU\\SQLEXPRESS',
//     driver:'msnodesqlv8',
//     options:{
//         trustedConnection:true
//     }
// }

// sql.connect(config,function(err){
//     if(err){
//         console.log(err);
//     }
//     // create the request object
//     var request = new sql.Request();
//     // database query
//     request.query('select * from Users',function(err,recordSet){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(recordSet)
//         }
//     })
// })

// const express = require('express');
// const sql = require('mssql');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json()); // Parse application/json

// const config = {
//     user: "hks",
//     password: "1234",
//     server: "DESKTOP-EI5C8QU",
//     database: "auth",
//     options: {
//         trustServerCertificate: true,
//         trustedConnection: false ,
//         enableArithAbort: true,
//         instanceName: "SQLEXPRESS",
//     },
//     port: 1433
// };

// app.get('/Users', async (req, res) => {
//     try {
//         const pool = await sql.connect(config);
//         const result = await pool.request().query('SELECT * FROM Users');
//         res.json(result.recordset);
//         sql.close(); // Ensure the connection is closed after the query
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('An error occurred while querying the database');
//         sql.close(); // Ensure the connection is closed in case of an error
//     }
// });

// app.post('/signup', async (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).send('Name, email, and password are required');
//     }

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

//         const pool = await sql.connect(config);
//         await pool.request()
//             .input('name', sql.NVarChar, name)
//             .input('email', sql.NVarChar, email)
//             .input('password', sql.NVarChar, hashedPassword)
//             .query('INSERT INTO Users (name, email, password) VALUES (@name, @email, @password)');

//         res.status(201).send('User created successfully');
//         sql.close();
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('An error occurred while inserting the user');
//         sql.close();
//     }
// });


// app.get('/',(req, res) => {
//     return res.json('hi backend');
// })
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// const express = require('express');
// const sql = require('mssql');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const config = {
//     user: "hks",
//     password: "1234",
//     server: "DESKTOP-EI5C8QU",
//     database: "auth",
//     options: {
//         trustServerCertificate: true,
//         trustedConnection: true,
//         instanceName: "SQLEXPRESS",
//     },
//     port: 1433
// };

// app.get('/Users', async (req, res) => {
//     try {
//         const pool = await sql.connect(config);
//         const result = await pool.request().query('SELECT * FROM Users');
//         res.json(result.recordset);
//         sql.close();
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'An error occurred while querying the database' });
//         sql.close();
//     }
// });

// app.post('/signup', async (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({ error: 'Name, email, and password are required' });
//     }

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const pool = await sql.connect(config);
//         await pool.request()
//             .input('name', sql.NVarChar, name)
//             .input('email', sql.NVarChar, email)
//             .input('password', sql.NVarChar, hashedPassword)
//             .query('INSERT INTO Users (name, email, password) VALUES (@name, @email, @password)');

//         res.status(201).json({ message: 'User created successfully' });
//         sql.close();
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'An error occurred while inserting the user' });
//         sql.close();
//     }
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mssql = require('mssql');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database configuration
 const config = {
     user: "hks",
     password: "1234",
     server: "DESKTOP-EI5C8QU",
     database: "auth",
     options: {
         trustServerCertificate: true,
         trustedConnection: true,
         instanceName: "SQLEXPRESS",
     },
     port: 1433
 };

// Connect to MSSQL database
mssql.connect(config, (err) => {
  if (err) console.error('Database connection error:', err);
  else console.log('Database connected successfully');
});

// Routes

// Create a new user
// app.post('/users', (req, res) => {
//   const { name, email } = req.body;
//   const query = `INSERT INTO Users (name, email ,password) VALUES ('${name}', '${email}',${password})`;

//   mssql.query(query, (err, result) => {
//     if (err) {
//       console.error('Error creating user:', err);
//       res.status(500).json({ error: 'Error creating user' });
//     } else {
//       console.log('User created successfully');
//       res.status(201).json({ message: 'User created successfully' });
//     }
//   });
// });

app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    const query = `INSERT INTO Users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
  
    mssql.query(query, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Error creating user' });
      } else {
        console.log('User created successfully');
        res.status(201).json({ message: 'User created successfully' });
      }
    });
  });


// Get all users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM Users';

  mssql.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.json(result.recordset);
    }
  });
});

// Update user by ID
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = `UPDATE Users SET name = '${name}', email = '${email}' WHERE id = ${id}`;

  mssql.query(query, (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Error updating user' });
    } else {
      console.log('User updated successfully');
      res.status(200).json({ message: 'User updated successfully' });
    }
  });
});

// Delete user by ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM Users WHERE id = ${id}`;

  mssql.query(query, (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ error: 'Error deleting user' });
    } else {
      console.log('User deleted successfully');
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM Users WHERE email = '${email}' AND password = '${password}'`;

  mssql.query(query, (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).json({ error: 'Error logging in' });
    } else if (result.recordset.length === 0) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      console.log('Login successful');
      res.status(200).json({ message: 'Login successful' });
    }
  });
});

// Logout (not really necessary in this case)
app.get('/logout', (req, res) => {
  console.log('Logout successful');
  res.status(200).json({ message: 'Logout successful' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// const express = require('express');
// const sql = require('mssql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON bodies

// const config = {
//     user: "hks",
//     password: "1234",
//     server: "DESKTOP-EI5C8QU",
//     database: "auth",
//     options: {
//         trustServerCertificate: true,
//         trustedConnection: false,
//         enableArithAbort: true,
//         instanceName: "SQLEXPRESS",
//     },
//     port: 1433
// };

// // Function to connect to the database
// const connectToDB = async () => {
//     try {
//         const pool = await sql.connect(config);
//         console.log('Connected to MSSQL');
//         return pool;
//     } catch (err) {
//         console.error('Database connection failed:', err);
//     }
// };

// // Route to get all users
// app.get('/users', async (req, res) => {
//     try {
//         const pool = await connectToDB();
//         const result = await pool.request().query('SELECT * FROM Users');
//         res.json(result.recordset);
//         sql.close(); // Ensure the connection is closed after the query
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('An error occurred while querying the database');
//     }
// });

// // Route for login
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const pool = await connectToDB();
//         const result = await pool.request()
//             .input('username', sql.VarChar, username)
//             .query('SELECT * FROM Users WHERE username = @username');
//         const user = result.recordset[0];
//         if (user && user.password === password) {
//             res.json({ message: 'Login successful', user });
//         } else {
//             res.status(401).json({ message: 'Invalid username or password' });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error', error: err.message });
//     }
// });

// // Route for signup
// app.post('/signup', async (req, res) => {
//     const { username, password, email } = req.body;
//     try {
//         const pool = await connectToDB();
//         const result = await pool.request()
//             .input('username', sql.VarChar, username)
//             .query('SELECT * FROM Users WHERE username = @username');
//         const userExists = result.recordset[0];
//         if (userExists) {
//             res.status(400).json({ message: 'Username already exists' });
//         } else {
//             await pool.request()
//                 .input('username', sql.VarChar, username)
//                 .input('password', sql.VarChar, password)
//                 .input('email', sql.VarChar, email)
//                 .query('INSERT INTO Users (username, password, email) VALUES (@username, @password, @email)');
//             res.json({ message: 'User created successfully' });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error', error: err.message });
//     }
// });

// // Test route to check if server is running
// app.get('/', (req, res) => {
//     return res.json('hi backend');
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


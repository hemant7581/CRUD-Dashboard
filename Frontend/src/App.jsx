// // src/App.js
// import { useEffect, useState } from 'react';
// import axios from 'axios';


// const App = () => {
  //   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api')
//       .then((response) => {
//         setData(response.data.message);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []);

//   return (
  //     <div>
//       {data ? (
//         <p>{data}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default App;


// src/App.js

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUp from './Signup';
// import Login from './Login';



// import  { useEffect } from "react";

// const App = () => {

  
  
//   const handleClick = () =>{
//   fetch('http://localhost:3000/Users')
//     .then(response => response.json())
//     .then(data => console.table(data))
//     .catch(error => console.error('Error fetching data:', error));

// }
//   return (
//     <>
//     <h1>Signup</h1>

//     <button onClick={handleClick}>GET USERS</button>

    
    
//     </>
//   );
// }

// export default App;


// import  { useState } from 'react';
// import './App.css';

// function App() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data:', form);
//     // Add your form submission logic here
//     fetch('http://localhost:3000/Users')
//      .then(response => response.json())
//      .then(data => console.table(data))
//      .catch(error => console.error('Error fetching data:', error));

//   };

//   return (
//     <div className="App">
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data:', form);
//     // Add your form submission logic here
//     fetch('http://localhost:3000/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         // Handle success response
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         // Handle error response
//       });
      
//   };

//   return (
//     <div className="App">
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data:', form);
//     // Add your form submission logic here
//     fetch('http://localhost:3000/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text(); // Assuming the server might send text
//       })
//       .then(text => {
//         try {
//           const data = JSON.parse(text); // Try parsing as JSON
//           console.log('Success:', data);
//           // Handle success response
//         } catch (error) {
//           console.log('Response is not JSON:', text);
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         // Handle error response
//       });
//   };

//   return (
//     <div className="App">
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;



// src/App.js

// src/App.js


// src/App.js

// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

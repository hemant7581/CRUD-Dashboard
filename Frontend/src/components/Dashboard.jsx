// // src/components/Dashboard.js

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/users');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         alert('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <h3>User List:</h3>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>{user.name} - {user.email}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// src/components/Dashboard.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('Error fetching users');
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditFormData({ name: user.name, email: user.email });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${editUserId}`, editFormData);
      setUsers(users.map(user => (user.id === editUserId ? { ...user, ...editFormData } : user)));
      setEditUserId(null);
      alert('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user');
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>User List:</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {editUserId === user.id ? (
                <form onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditChange}
                    required
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditUserId(null)}>Cancel</button>
                </form>
              ) : (
                <>
                  {user.name} - {user.email}
                  <button onClick={() => handleEditClick(user)}>Edit</button>
                  <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

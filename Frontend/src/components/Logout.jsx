// src/components/Logout.js

import  { useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.get('http://localhost:3000/logout');
        alert('Logout successful');
        // Redirect to login page or perform any other action upon successful logout
      } catch (error) {
        console.error('Error logging out:', error);
        alert('Error logging out');
      }
    };

    logout();
  }, []);

  return (
    <div>
      <h2>Logout</h2>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;

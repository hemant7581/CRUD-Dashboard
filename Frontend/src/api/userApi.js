// src/api/userApi.js

import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:3000';

// Function to handle login
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

// Function to handle signup
export const signup = async (username, password, email) => {
  const response = await axios.post(`${API_URL}/signup`, { username, password, email });
  return response.data;
};

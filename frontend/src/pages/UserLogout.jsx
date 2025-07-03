import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false); //  Prevents double execution in React Strict Mode

  useEffect(() => {
    if (hasLoggedOut.current) return; // Skip if already run once
    hasLoggedOut.current = true;

    const token = localStorage.getItem('token');

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        localStorage.removeItem('token'); 
        navigate('/login');               
      })
      .catch((error) => {
        console.error('Logout failed:', error); 
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, []); 

  return <div>Logging you out...</div>;
};

export default UserLogout;

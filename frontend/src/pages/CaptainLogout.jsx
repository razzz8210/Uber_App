import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false); //  Prevents double execution in React Strict Mode

  useEffect(() => {
    if (hasLoggedOut.current) return; // Skip if already run once
    hasLoggedOut.current = true;

    const token = localStorage.getItem('token');

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        localStorage.removeItem('token'); 
        navigate('/captain-login');               
      })
      .catch((error) => {
        console.error('Logout failed:', error); 
        localStorage.removeItem('token');
        navigate('/captain-login');
      });
  }, []); 

  return <div>Logging you out...</div>;
};

export default CaptainLogout;

import React, { useContext, useEffect, useState } from 'react'
import { CaptainContext } from '../context/CaptainProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (!token) {
      navigate('/captain-login');
      return;
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setCaptain(response.data.captain);
        }
      } catch (error) {
        console.error('Error fetching captain profile:', error);
        localStorage.removeItem('token');
        navigate('/captain-login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainProfile();
  }, [navigate, setCaptain]);

  if (isLoading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default CaptainProtectWrapper;

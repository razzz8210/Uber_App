import React, {  useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({children})=> {
     const token =localStorage.getItem('token');
    const navigate = useNavigate();

    console.log(token);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);
  return (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper
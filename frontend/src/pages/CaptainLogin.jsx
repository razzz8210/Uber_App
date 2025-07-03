
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainContext } from '../context/CaptainProvider';

function CaptainLogin() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {captain,setCaptain} = useContext(CaptainContext);
    const navigate = useNavigate();
  
    const submitHandler = async (e)=>{
      e.preventDefault();
      const captainData = {
        email: email,
        password: password
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', JSON.stringify(data.token)); // Store captain data in localStorage
        navigate('/captain-home');
      } else {
        console.error('Error logging in:', response.data);
      }
        // Clear the input fields after submission
      
        setEmail('');
        setPassword('');  
    };


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber-logo" />
        <form onSubmit={(e) => {submitHandler(e)}}>
          <h3 className='text-lg font-medium mb-2'>What's your Email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='email@example.com'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='********'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
          />
          <button className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>

          <p className="text-center">
            <span className="font-bold">Join a fleet?</span>
            <Link to="/captain-signup" className="text-blue-950 font-bold"> Register as a captain</Link>
          </p>


        </form>
      </div>
      <div>
        <Link to={'/login'} className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
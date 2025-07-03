
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler =async (e)=>{
    e.preventDefault();
    const userData = {  
      email: email,
      password: password
    };

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token); // Store user data in localStorage
      navigate('/home');
    } 
      // Reset the form fields after submission   
      setEmail('');
      setPassword('');  
  
  };

  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-5' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="uber-logo" />
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
            <span className="font-bold">Don't have an account?</span>
            <Link to="/signup" className="text-blue-950"> Sign up</Link>
          </p>


        </form>
      </div>
      <div>
        <Link to={'/captain-login'} className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
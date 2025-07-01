import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainSignup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
     
    const newUser ={
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    };
    console.log(newUser);
    setCaptainData(newUser);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber-logo" />
        <form onSubmit={(e) => {submitHandler(e)}}>
          <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
          <div className='flex gap-4 mb-7'>
            <input
            required
            type="text"
            placeholder='First name'
            className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base '
          />
          <input
            required
            type="text"
            placeholder='Last name'
            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base '
          />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input
            required
            type="email"
            placeholder='email@example.com'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            type="password"
            placeholder='********'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
          />
          <button className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>

          <p className="text-center">
            <span className="font-bold">Already a account?</span>
            <Link to="/captain-login" className="text-blue-950"> Login here</Link>
          </p>


        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
        This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and Terms of Service apply.
        </p>
      </div>
      
    </div>
  )
}

export default CaptainSignup
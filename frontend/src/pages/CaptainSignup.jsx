import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newUser)
    if (response.status === 201) {  
      const data = response.data;
      setCaptain(data.captain)
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    } else {
      console.error('Error creating captain account:', response.data);
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setColor('');
    setPlate(''); 
    setCapacity('');
    setVehicleType('');

  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber-logo" />
        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              type="text"
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base '
            />
            <input
              required
              type="text"
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base '
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input
            required
            type="email"
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            type="password"
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
          />

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              type="text"
              placeholder='Vehicle-Color'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base '
            />
            <input
              required
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base '
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              type="text"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base '
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            >
              <option value="">Select Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Create Captain Account</button>

          <p className="text-center">
            <span className="font-bold">Already a account?</span>
            <Link to="/captain-login" className="text-blue-950"> Login here</Link>
          </p>


        </form>
      </div>
      <div>
        <p className='text-[10px] leadinteg-tight mt-3'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and Terms of Service apply.
        </p>
      </div>

    </div>
  )
}

export default CaptainSignup
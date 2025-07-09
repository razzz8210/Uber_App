import React, { use, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel.jsx';
import VehiclePanel from '../components/VehiclePanel.jsx';
import ConfirmedRide from '../components/ConfirmedRide.jsx';
import LookingForDriver from '../components/LookingForDriver.jsx';
import WaitingForDriver from '../components/WaitingForDriver.jsx';

function Home() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelClosedRef = useRef(null);
  const confirmedRidePanelRef = useRef(null); 
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmedRidePanelOpen, setConfirmedRidePanelOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null)

  const WaitingForDriverRef = useRef(null)
  const[waitingForDriver,setWaitingForDriver]=useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelClosedRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelClosedRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen, panelClosedRef])

  useEffect(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen])

  useEffect(() => {
    if (confirmedRidePanelOpen) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmedRidePanelOpen])

  useEffect(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicleFound])

  useEffect(() => {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="uber-logo" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="temporary image" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelClosedRef}
            onClick={() => setPanelOpen(false)}
            className='absolute opacity-0 top-7 right-7 text-xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }} >
            <div className='line absolute h-20 w-1 top-[42%] left-14 bg-gray-800 rounded-full'></div>
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              placeholder='Add a pickup location'
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
            />
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              placeholder='Add a drop location'
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
            />
          </form>
        </div>
        <div ref={panelRef} className=' bg-white  h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <VehiclePanel setConfirmedRidePanelOpen={setConfirmedRidePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={confirmedRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <ConfirmedRide setConfirmedRidePanelOpen={setConfirmedRidePanelOpen} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={WaitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver}  />
      </div>
  
    </div>
  )
}

export default Home
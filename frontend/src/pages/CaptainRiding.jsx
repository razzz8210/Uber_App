import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useEffect(() => {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)',
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)',
            })
        }
    }, [finishRidePanel])

    return (
        <div className='h-screen relative'>
            <div className='fixed  top-0 p-2 flex items-center justify-between w-screen'>
                <img className='w-16 absolute left-5 top-5 m-2 p-2' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="uber-logo" />
                <Link to='/home' className='h-10 w-10  bg-white flex items-center justify-center rounded-full m-1 '>
                    <i className="text-lg font-medium  ri-logout-box-r-line"></i>
                </Link>

            </div>
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map-image" />
            </div>
            <div className='h-1/5 p-6 flex items-center relative justify-between bg-green-200 '> 
                <h5 className='p-3 text-center absolute top-0 right-0 w-screen' onClick={() => {
                    setFinishRidePanel(true)
                }}><i className="text-2xl ri-arrow-down-wide-fill"></i></h5>
                <h4 className='text-xl font-semibold'>
                    4 KM Away 
                </h4>
                <button className='mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div> 

        </div>
    )
}

export default CaptainRiding
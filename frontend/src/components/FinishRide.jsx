import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div >
            <h5 className='p-3 text-center absolute top-0 right-0 w-full' onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className="text-2xl ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-3'>Finish this Ride!</h3>

            <div className='flex items-center justify-between p-4 border-2 bg-yellow-200 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt="user-profile" />
                    <h2 className='text-lg font-medium'>Akanksha Jaiswal</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            <div className='flex justify-between gap-3 flex-col items-center'>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap -5 p-3 border-b-2'>
                        <i className="texy-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap -5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap -5 p-3 '>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>$29.10 </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-full'>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <input
                            type="text" 
                            className='bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3'
                            placeholder='Enter OTP' />
                        <Link to='/captain-home' className='w-full mt-5 flex justify-center bg-green-600 text-lg text-white font-semibold p-2 rounded-lg '>Finish Ride
                        </Link>

                     
                    </form>
                </div>
            </div>
        </div> 
  )
}

export default FinishRide

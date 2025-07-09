import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full m-1 right-2 top-2'>
                <i className="text-lg font-medium ri-home-4-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map-image" />
            </div>
            <div className='h-1/2 p-4'>

                <div className='flex items-center justify-between'>
                    <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="car-logo" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP 04 KH 0223</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>


                <div className='flex justify-between gap-3 flex-col items-center'>


                    <div className='w-full '>
                        
                        <div className='flex items-center gap -5 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-user-fill m-3"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A </h3>
                                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                            </div>
                        </div>
                        <div className='flex items-center gap -5 p-3 '>
                            <i className=" text-lg ri-currency-line m-3"></i>
                            <div>
                                <h3 className='text-lg font-medium'>$29.10 </h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>

                </div>
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg '>Make a Payment</button>

            </div>
        </div>
    )
}

export default Riding
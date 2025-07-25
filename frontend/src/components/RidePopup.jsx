import React from 'react'

const RidePopup = (props) => {
    return (
        <div>
            <h5 className='p-3 text-center absolute top-0 right-0 w-full' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-2xl ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-3'>New Ride Available!</h3>

            <div className='flex items-center justify-between p-3 bg-yellow-200 rounded-lg mt-4'>
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
                <div className='w-full flex mt-5 items-center justify-between'>
                    <button
                        onClick={() => {
                            props.setRidePopupPanel(false)
                        }}
                        className=' mt-1 bg-gray-400 text-gray-700 font-semibold p-3 px-10 rounded-lg '>Ignore
                    </button>
                    <button
                        onClick={() => {
                            props.setConfirmRidePopupPanel(true)
                        }}
                        className=' mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg '>Accept
                    </button>

                </div>
            </div>
        </div>
    )
}

export default RidePopup
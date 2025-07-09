import React from 'react'

const ConfirmedRide = (props) => {
  return ( 
    <div>
      <h5 className='p-3 text-center absolute top-0 right-0 w-full' onClick={() => {
        props.setVehiclePanelOpen(false);
      }}><i className="text-2xl ri-arrow-down-wide-fill"></i></h5>
      <h3 className='text-2xl font-semibold mb-3'>Confirm your Ride</h3>

      <div className='flex justify-between gap-3 flex-col items-center'>
        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="car-logo" />
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
        <button
        onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmedRidePanelOpen(false)
        }}
        className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg '>Confirm</button>
      </div>
      
    </div>
  )
}

export default ConfirmedRide
import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center absolute top-0 right-0 w-full' onClick={() => {
        props.setVehicleFound(false);
      }}><i className="text-2xl ri-arrow-down-wide-fill"></i></h5>
      <h3 className='text-2xl font-semibold mb-3'>Looking for Driver</h3>

      <div className='flex justify-between gap-3 flex-col items-center'>
        <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="car-logo" />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-fill"></i>
            <div> 
              <h3 className='text-lg font-medium'>Pickup</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div> 
              <h3 className='text-lg font-medium'>Destination</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
            <div> 
              <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash</p>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default LookingForDriver
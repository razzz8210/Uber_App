import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center absolute top-0 right-0 w-full' onClick={() => {
        props.setVehiclePanelOpen(false);
      }}><i className="text-2xl ri-arrow-down-wide-fill"></i></h5>

      <div className='flex items-center justify-between'>
        <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="car-logo" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Sarthak</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP 04 KH 0223</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>
      

      <div className='flex justify-between gap-3 flex-col items-center'>
       

        <div className='w-full mt-5'>
          <div className='flex items-center gap -5 p-3 border-b-2'>
            <i className="texy-lg ri-map-pin-fill m-3"></i>
            <div> 
              <h3 className='text-lg font-medium'>562/11-A </h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
            </div>
          </div>
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
      
    </div>
  )
}

export default WaitingForDriver
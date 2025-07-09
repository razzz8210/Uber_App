import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-3 text-center absolute top-0 right-0 w-full' onClick={() => {
                props.setVehiclePanelOpen(false);
            }}><i className="text-2xl ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
            <div
                onClick={() => {
                    props.setConfirmedRidePanelOpen(true);
                }}
                className='flex w-full p-2 border-2 mb-2 active:border-black rounded-xl  items-center justify-between'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="car-logo" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"></i>4</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$22.10</h2>
            </div>
            <div
                onClick={() => {
                    props.setConfirmedRidePanelOpen(true);
                }}
                className='flex w-full p-2 border-2 mb-2 active:border-black rounded-xl  items-center justify-between'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="bike-logo" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"></i>1</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, MotorCycle Rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$12.10</h2>
            </div>
            <div
                onClick={() => {
                    props.setConfirmedRidePanelOpen(true);
                }}
                className='flex w-full p-2 border-2 mb-2 active:border-black rounded-xl  items-center justify-between'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="auto-logo" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill"></i>3</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$16.10</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
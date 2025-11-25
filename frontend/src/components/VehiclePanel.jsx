import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-3 text-center absolute top-0 right-0 w-full' onClick={() => {
                props.setVehiclePanel(false);
            }}><i className="text-2xl ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
            <div
                onClick={() => {
                    props.selectVehicle('car')
                    props.setConfirmRidePanel(true);
                    props.setVehiclePanel(false)
                }}
                className='flex w-full p-2 border-2 mb-2 active:border-black rounded-xl  items-center justify-between'>
                <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="car-logo" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"></i>4</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹{props.fare?.car}</h2>
            </div>
            <div
                onClick={() => {
                    props.selectVehicle('motorcycle')
                    props.setConfirmRidePanel(true);
                    props.setVehiclePanel(false)
                }}
                className='flex w-full p-2 border-2 mb-2 active:border-black rounded-xl  items-center justify-between'>
                <i className="ri-motorbike-fill text-5xl"></i>
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"></i>1</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, MotorCycle Rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹{props.fare?.motorcycle}</h2>
            </div>
            <div
                onClick={() => {
                    props.selectVehicle('auto')
                    props.setConfirmRidePanel(true);
                    props.setVehiclePanel(false)
                }}
                className='flex w-full p-2 border-2 mb-2 active:border-black rounded-xl  items-center justify-between'>
                <i className="ri-taxi-fill text-5xl"></i>
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill"></i>3</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹{props.fare?.auto}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
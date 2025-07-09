import React from 'react'

const LocationSearchPanel = (props)=> {

    //sample array of location
    const location = [
        "24C, 2nd Floor, Sector 3, Noida, Uttar Pradesh 201301, India",
        "12B, 3rd Floor, Sector 5, Noida, Uttar Pradesh 201301, India",
        "34A, 1st Floor, Sector 6, Noida, Uttar Pradesh 201301, India",
        "56D, 4th Floor, Sector 7, Noida, Uttar Pradesh 201301, India",

    ]; 

    return (
        <div>
            {
                location.map( (element,index)=> {
                    return <div 
                    key={index}
                    onClick={()=>{
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }} className='flex p-3 border-2 border-gray-50 active:border-black rounded-xl items-center justify-start gap-4 my-2'>
                        <h2 className='bg-[#eee] h-7 w-12 flex items-center justify-center rounded-full'> <i className="ri-map-pin-fill text-xl"></i></h2>
                        <h4 className='font-medium'>
                            {element}
                        </h4>
                    </div>
                })
            }


        </div>

    )
}

export default LocationSearchPanel
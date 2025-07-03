import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
      <div className="
  h-screen w-full
  bg-[url('https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww')]
  md:bg-[url('https://images.unsplash.com/photo-1729860649963-d94cc3f5f5ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHViZXJ8ZW58MHwwfDB8fHww')]
  bg-cover
  bg-no-repeat
  bg-center
  md:bg-bottom
  pt-5
  flex
  justify-between
  flex-col
">
        <img className='w-16 ml-8' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
        <div className='bg-white py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4' >Continue</Link>

        </div>

      </div>
    </div>
  )
}

export default Start;
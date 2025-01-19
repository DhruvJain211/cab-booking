import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1564694202225-cc1920e206ed?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-7 flex justify-between flex-col w-full'>
          <img className='w-16 ml-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="logo" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5'>Coninue</Link>
            </div>
        </div>   
    </div>
  )
}

export default home
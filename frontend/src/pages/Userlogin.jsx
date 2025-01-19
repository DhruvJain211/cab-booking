import React from 'react'
import { Link, Links } from 'react-router-dom'
import { useState } from 'react'

const Userlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userdata, setUserdata] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserdata({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between gap-4'>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="logo" />
      <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>What's Your Email</h3>
        <input required 
        value={email}
        onChange={(
          e
        ) => setEmail(
          e.target.value
        )}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" placeholder="email@example.com" />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3> 
        <input 
        value={password}
        onChange={(
          e
        ) => setPassword(
          e.target.value
        )}
        required
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
        type="password" placeholder="Password" />
        <button
        className='font-semibold bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Login</button>
      </form>
      <p className='text-center'>New Here? <Link to='/signup' className='text-blue-600 '>Create New Account</Link></p>
      </div>
      <div className='mt-auto'>
        <Link to='/captainlogin'
                className='font-semibold bg-[#10b461] flex items-center justify-center text-white mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >
        Sign in as Captain 
        </Link>
      </div>
    </div>
  )
}

export default Userlogin
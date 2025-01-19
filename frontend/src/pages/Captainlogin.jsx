import React from 'react'
import { Link, Links } from 'react-router-dom'
import { useState } from 'react'


const Captainlogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})
  
  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 min-h-screen flex flex-col justify-start gap-4'>
        <img className='w-16 mb-3' src="https://pngimg.com/d/uber_PNG24.png" alt="logo" />
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
          <p className='text-center mb-6'>Join a Fleet? <Link to='/captainsignup' className='text-blue-600 '>Register as a Captain</Link></p>
          </div>
          <div className='mt-auto'>
            <Link to='/login'
                className='font-semibold bg-[#d5622d] flex items-center justify-center mb-5 text-white rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            >
            Sign in as User 
            </Link>
          </div>
    </div>
  )
}

export default Captainlogin
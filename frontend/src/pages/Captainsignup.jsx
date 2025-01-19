import React from 'react'
import { Link, Links } from 'react-router-dom'
import { useState } from 'react'

const Captainsignup = () => {

      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userdata, setUserdata] = useState({})
    
      const submitHandler = (e) => {
        e.preventDefault()
        setUserdata({
          fullName: {
            first: firstName,
            last: lastName
          },
          email: email,
          password: password
        })
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
      }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <img className='w-16 mb-3' src="https://pngimg.com/d/uber_PNG24.png" alt="logo" />
      <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>What's Your Name</h3>
        <div className='flex gap-4 mb-7'>
        <input required
        value={firstName}
        onChange={(
          e
        ) => setFirstName(
          e.target.value
        )}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        type="text" placeholder="First Name" />

        <input required
        value={lastName}
        onChange={(
          e
        ) => setLastName(
          e.target.value
        )}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        type="text" placeholder="Last Name" />
        </div>
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
        required
        value={password}
        onChange={(
          e
        ) => setPassword(
          e.target.value
        )}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
        type="password" placeholder="Password" />
        <button
        className='font-semibold bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Create account</button>
      </form>
      <p className='text-center'>Already a Captain? <Link to='/captainlogin' className='text-blue-600 '>Login here</Link></p>
      </div>
      <div className='mt-auto'>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default Captainsignup
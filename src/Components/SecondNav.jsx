import React from 'react'
import logo from '../assets/images/logo.png'


function SecondNav() {
  return (
    <div className="nav2 w-full h-auto bg-[#e5eef6] flex justify-center items-center py-0">
        <div className="logoArea w-[50%]"> <img src={logo} className='w-[20%] h-[65px] object-contain
        '/> </div>
        <div className="tabsArea flex gap-8">
            <p className='font-semibold hover:underline hover:decoration-[#4c80b1] underline-offset-8 decoration-2 hover:text-red-800 hover:font-bold'>HOME</p>
            <p className='font-semibold hover:underline hover:decoration-[#4c80b1] underline-offset-8 decoration-2 hover:text-red-800 hover:font-bold'>ABOUT US</p>
            <p className='font-semibold hover:underline hover:decoration-[#4c80b1] underline-offset-8 decoration-2 hover:text-red-800 hover:font-bold'>COURSES</p>
            <p className='font-semibold hover:underline hover:decoration-[#4c80b1] underline-offset-8 decoration-2 hover:text-red-800 hover:font-bold'>COLLEGES</p>
            <p className='font-semibold hover:underline hover:decoration-[#4c80b1] underline-offset-8 decoration-2 hover:text-red-800 hover:font-bold'>SERVICES</p>
            <p className='font-semibold hover:underline hover:decoration-[#4c80b1] underline-offset-8 decoration-2 hover:text-red-800 hover:font-bold'>CONTACT US</p>


        </div>
    </div>
  )
}

export default SecondNav
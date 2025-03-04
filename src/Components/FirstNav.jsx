import React from 'react'

import { FaLocationDot } from "react-icons/fa6";
import EmailIcon from '@mui/icons-material/Email';import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

import ScheduleIcon from "@mui/icons-material/Schedule";
import { FaFacebookF } from "react-icons/fa";

function FirstNav() {

  return ( 
    
    <div className="nav1 bg-[#1e2637] w-full h-auto py-3 flex items-center px-4 justify-between hidden lg:flex">
    {/* Right Area */}
    <div className="rightArea flex gap-8 w-full h-full items-center">
      {/* Location */}
      <div className="locationArea flex flex-row gap-2">
        <FaLocationDot className="text-white" size={18}/>
        <p className="text-gray-300 font-semibold text-sm">
          2nd floor, City Centre, Perinthalmanna, Malappuram
        </p>
      </div>
  
      {/* Email */}
      <div className="emailArea flex gap-2">
        <EmailIcon sx={{ color: "white", fontSize: 18 }} />
        <p className="text-gray-300 font-semibold text-sm">
          aljaitrainternational@gmail.com
        </p>
      </div>
    </div>
  
    {/* Left Area */}
    <div className="leftArea flex gap-8 w-full h-full items-center justify-end">
      {/* Office Hours */}
      <div className="timeArea flex gap-2">
        <ScheduleIcon sx={{ color: "white", fontSize: 18 }} />
        <p className="text-gray-300 font-semibold text-sm">
          Office Hour: 08:00am - 6:00pm
        </p>
      </div>
  
      {/* Social Icons */}
      <div className="iconArea flex gap-4">
        <FaFacebookF className="text-white" size={16} />
        <FaXTwitter className="text-white" size={16} />
        <GrInstagram className="text-white" size={16} />
        <FaLinkedinIn className="text-white" size={16} />
      </div>
    </div>
  </div>
  

  )
  
  
}

export default FirstNav

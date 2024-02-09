"use client"
import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import { Reveal } from '../utils/Reveal';

const EnterEmail = () => {
  return (
  
    <div id='emailForm'>
        <form action="" className='w-[80%] relative'>
          
            <div className='relative text-black'>
                  <input type="email" placeholder='Enter Your Email' className='w-full p-3 
                  rounded-full bg-emailbg'/>
                  <button className='absolute right-[1px] top-1/2 -translate-y-1/2 p-3.5 text-xl
                  rounded-full bg-accent text-black'>
                      <GrLinkNext />
                  </button>
              </div>
          
           

        </form>
        
    </div>
  )
}

export default EnterEmail
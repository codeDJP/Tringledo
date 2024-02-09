"use client"
import React from 'react'


import { motion } from "framer-motion";
import TeamCard from './TeamCard';
import { Reveal } from '../utils/Reveal';

const Team = () => {

  return (
    <>
        <section className='mt-20 max-w-full bg-navg '>
            <div className='max-w-6xl mx-auto py-20'>
                <div className='circlePosition w-[40%] h-[55%] bg-accent 
                rounded-[100%] absolute z-1 top[50%]   
                translate-y-[50%] blur-[300px] opacity-10'>

                </div>
                <div>
                    <div className='flex flex-col items-center justify-center text-center px-4'>
                        <Reveal>
                            <h1 className='text-4xl text-heading font-semibold mb-5 grd' >Our Team</h1>
                        </Reveal>
                        <Reveal>
                            <p className='text-para font-sans font-light'>
                            Our success is a testament to the dedicated individuals who form the backbone of our company. Together, we&apos;ve cultivated a culture of mutual respect, where each team member is committed to delivering their best, ensuring the creation of unparalleled services for our valued customers.
                            </p>
                        </Reveal>      
                    </div>
                    <div>

                    </div>
                </div>
                <TeamCard/>
                
            </div>
        </section>
    </>
  )
}

export default Team
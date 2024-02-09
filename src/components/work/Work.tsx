"use client"
import React from 'react'
import MySlider from './MySlider'
import { Reveal } from '../utils/Reveal'
import ProjectDetails from './ProjectDetails'
import Image from 'next/image'

const Work = () => {
  return (
    <>
        <section id='work' className='max-w-full  '>
            <div className=' py-20'>
                <div className='circlePosition w-[40%] h-[35%] bg-accent 
                rounded-[100%] absolute z-1 top[40%]  
                translate-y-[50%] blur-[300px] opacity-40'>

                </div>
                <div className='flex-auto gap-20 ' >
                    <div className='max-w-6xl p-4 mx-auto py-10'>
                        <Reveal>
                        <h1 className=' text-4xl text-heading font-semibold mb-5 grd'>Our Latest Works</h1>
                        </Reveal>
                        <Reveal>
                            <p className='text-para font-sans font-light'>
                                In every project, we dedicate our best efforts. Witness our rapid growth and commitment to shaping a 
                                brighter future by learning from the past. Choose us, and anticipate nothing but success for your project. 
                            </p>
                        </Reveal>

                    </div>
                    <div  className='md:flex flex-auto gap-20 flex p-4 '>
                        <div id='CardDiv' className=''>
                            <div>
                                <Image src={ProjectDetails.imgData[1].imgDiv} alt=''></Image>       
                            </div>
                            <div className='text-para font-sans font-light text-center'>
                                <p>
                                {ProjectDetails.imgData[1].title}
                                </p>
                            </div>
                        </div>
                        <MySlider/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Work
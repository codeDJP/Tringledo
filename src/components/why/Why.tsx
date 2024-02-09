"use client"
import React from 'react'
import Image from 'next/image'
import image_1 from "@/assets/why/image_1.jpg"
import image_2 from "@/assets/why/image_2.jpg"
import image_3 from "@/assets/why/image_3.jpg"
import image_4 from "@/assets/why/image_4.jpg"

import { motion } from "framer-motion";
import { Reveal } from '../utils/Reveal'

const Why = () => {

    const images = [
        {
            src: image_1,
            alt: ''
        },
        {
            src: image_2,
            alt: ''
        },
        {
            src: image_3,
            alt: ''
        },
        {
            src: image_4,
            alt: ''
        },
    ]
  return (
    <>
        <section id='about' className='mt-20 max-w-full bg-navg '>
            <div className='max-w-6xl mx-auto p-4 py-20'>
                <div className='circlePosition w-[40%] h-[55%] bg-accent 
                rounded-[100%] absolute z-1 top[50%]   
                translate-y-[50%] blur-[300px] opacity-20'>

                </div>
                <div className='md:flex flex-auto gap-20 ' >
                    <div className='basis-1/3 md:w-[30%] md:mt-[10%] py-10'>
                        <Reveal>
                        <h1 className='text-4xl text-heading font-semibold mb-5 grd '>Why Tringledo?</h1>
                        </Reveal>
                        <Reveal>
                            <p className='text-para font-sans font-light'>
                            Our diverse range of services is designed to elevate your brand and captivate your audience. From visually striking graphic designs to cutting-edge web development, we are here to bring your ideas to life. Explore our comprehensive suite of offerings, 
                            </p>
                        </Reveal>
                        
                    </div>
                    <div className='basis-2/3'>
                        <div className="container mx-auto ">
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 ">
                                {images.map((image, index) => (
                                <div key={index} className="relative overflow-hidden ">
                                    <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover rounded-lg "
                                    />
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Why
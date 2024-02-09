"use client";
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { Reveal } from '../utils/Reveal';

const tech = [
<FaHtml5 key="html" />,
  <FaCss3 key="css" />,
  <FaJs key="js" />,
  <FaReact key="react" />,
  <SiNextdotjs key="next" />,
  <SiFramer key="framer" />,
  <FaWordpress key="wordpress" />,
  <FaHtml5 key="html2" />,
  <SiAdobexd key="adobexd" />,
  <SiAdobephotoshop key="photoshop" />,
  <FaReact key="react2" />,
  <SiNextdotjs key="next2" />,
  <SiFramer key="framer2" />,
  <FaFigma key="figma" />,
//  <Image src={ReactIcon} alt=''/>

]

const Technologies = () => {

  const [index1, setIndex] = useState<number | null>();
  const [index2, setIndex2] = useState<number | null>();

  return (
      <section className='mt-20 bg-navg '>
        <div className=' mx-auto '>
            {/* <div className='circlePosition w-[590px] h-[400px] bg-accent 
            rounded-[100%] absolute z-1 top[50%]  translate-x-[50%] 
            translate-y-[50%] blur-[300px] opacity-40'>

            </div> */}
            
            <div className='gap-20 ' >
                <div className='flex flex-col items-center justify-center text-center pt-10 px-4'>
                  <Reveal>
                    <h1 className='text-4xl text-heading font-semibold mb-5 grd  '>
                        Technologies We Use.
                    </h1>
                  </Reveal>
                  <Reveal>
                    <p className='text-para font-sans font-light'>
                      Our diverse range of services is designed to elevate your brand and captivate <br /> your audience. From visually striking graphic designs to cutting-edge web.
                    </p>
                  </Reveal>
                    
                </div>
                <div className='py-10'>
                  <Marquee direction='right'  pauseOnHover  className='gap-4 w-10 mb-10'>
                    <div className='flex gap-6 text-techCol fill-techCol'>
                      {tech.map((item, itemIndex1) => {
                        return (
                          <div 
                            key={`${itemIndex1}`}
                            className={`${
                              index1 === itemIndex1 && 'text-accent transition-colors duration-300'
                            } w-28 h-28 md:h-44 md:w-44 bg-techbg   rounded-xl grid place-content-center `}
                            onMouseEnter={() => setIndex(itemIndex1)}
                            onMouseLeave={() => setIndex(null)}
                            >
                              <div className='text-4xl md:text-7xl  text-center justify-center items-center'>
                                {item}
                                
                              </div>
                          </div>
                        );
                      })}
                    </div>  
                  </Marquee>
                  <Marquee direction='left'  pauseOnHover  className='gap-4 w-10 mb-6'>
                    <div className='flex gap-6  text-techCol '>
                      {tech.map((item, itemIndex) => {
                        return (
                          <div 
                            key={`${itemIndex}`}
                            className={`${
                              index2 === itemIndex && 'text-accent transition-colors duration-300'
                            } w-28 h-28 md:h-44 md:w-44 bg-techbg rounded-xl  grid place-content-center `}
                            onMouseEnter={() => setIndex2(itemIndex)}
                            onMouseLeave={() => setIndex2(null)}
                            >
                              <div className='text-4xl md:text-7xl   text-center justify-center items-center'>
                                {item}
                              </div>
                          </div>
                        );
                      })}
                    </div>  
                  </Marquee>
                </div>
            </div>
          </div>
        </section>
  )
}

export default Technologies
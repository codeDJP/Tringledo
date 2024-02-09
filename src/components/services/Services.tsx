"use client";
import React, { useState } from 'react'
import { Reveal } from '../utils/Reveal';

  const aboutData = [
    {
      title: 'Designing',
      info: [
        {
          title: 'Used by Apple Computer, Inc. from 1997 to 2002, but we are creating unimaginable things with our Designing services. Whether it\'s crafting memorable logos, flyers, eye-catching banners, intuitive UI/UX designs, or delving into the world of 3D Modeling and architecture, our seasoned team brings over 6 years of experience to breathe life into your visual aspirations',
        }
      ],
    },
    {
      title: 'Developing',
      info: [
        {
          title: 'It\'s your decision to make the right choice for your company with our development service. From dynamic websites to versatile web applications and feature-rich software applications for mobiles and custom devices, we navigate the digital landscape to simplify and enhance your company\'s functionalities. Count on us for solutions that are not just easy but also more reliable than any other comparators in the industry.',
        }
      ],
    },
    {
      title: 'IOT Systems',
      info: [
        {
          title: 'Step into the future with our IOT Systems solutions. We analyze your needs and deliver human-free services tailored to the Internet of Things era. Our comprehensive package includes applications, software, and web applications, ensuring the seamless integration of IoT into your company or personal space. Experience efficiency redefined with our innovative solutions.',
        }
      ],
    },
    {
      title: 'Other Services',
      info: [
        {
          title: 'Why look elsewhere? Beyond digital realms, we cater to your tangible needs. From printing and embroidery to branding merchandise, find everything you need under one roof. Simplify your choices and elevate your brand presence with our all-encompassing suite of services.',
        }   
      ],
    },
  ];

  

const Services = () => {

    const [index, setIndex] = useState(0);
    

    
    
    
  return (
    < >
        <section  className='mt-20 max-w-6xl mx-auto p-4' id='services'>
            <div className='circlePosition w-[40%] h-[55%] bg-accent 
            rounded-[100%] absolute z-1 top[50%]  translate-x-[50%] 
            translate-y-[50%] blur-[300px] opacity-10'>

            </div>
            <div className='md:flex flex-auto gap-20 ' >     
                <div className='basis-2/3 text-para px-0'>
                    <div className='gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) =>{
                            return (
                                <div
                                    key={`${itemIndex}`}
                                    // className={`${
                                    //     index === itemIndex && 
                                    //     ' text-accent before:bg-accent before:w-[40%] before:transition-all before:duration-700 transition-all duration-700 '
                                    // } cursor-pointer capitalize xl:text-lg relative before:w-[90%] before:h-[2px] before:bg-white before:absolute before:left-0 before:-top-2 my-16 mx-4 text-lg flex flex-wrap gap-8`}
                                    onMouseEnter={() => setIndex(itemIndex)}
                                    className={`${index === itemIndex ? 'transition-all text-accent before:bg-accent before:w-[40%] before:transition-all before:duration-700 duration-700 cursor-pointer capitalize xl:text-lg relative before:h-[2px]  before:absolute before:left-0 before:-top-2 my-16 mx-4 text-lg flex flex-wrap gap-8' 
                                    : "cursor-pointer capitalize xl:text-lg relative before:w-[80%] before:h-[2px] before:bg-white before:absolute before:left-0 before:-top-2 my-16 mx-4 text-lg flex flex-wrap gap-8"} `}

                                    
                                >
                                    <Reveal>
                                      <div className={`${index === itemIndex ? 'text-white transition-all duration-700 ' : "text-accent"} `}>
                                          0
                                          {itemIndex+1}
                                      </div>
                                    </Reveal>
                                    <Reveal>
                                      <div className='font-medium'>
                                          {item.title}
                                      </div>
                                    </Reveal>
                                    
                                    <div className={`${index === itemIndex ? ' text-white w-[100%] inline-block opacity-80 transition-all duration-700 ease-in-out ' : "opacity-0 absolute left-{9999px} top-{9999px} "} `}>
                                        {aboutData[index].info.map((item, itemIndex) => {
                                            return (
                                            
                                            <div key={`${itemIndex}`}>
                                              <Reveal>
                                                <div className='font-sans'>{item.title}</div>
                                              </Reveal>
                                            </div>
                                            );
                                        })}
                                    </div>   
                                </div>
                            );
                        }

                        )

                        }
                    </div>
                </div>
                <div className='basis-1/3 md:w-[30%] md:mt-[10%]'>
                  <Reveal>
                    <h1 className='text-4xl text-heading font-semibold mb-5 grd'>Services We Offer.</h1>
                  </Reveal>
                  <Reveal>
                  <p className='text-para font-sans font-light'>
                    Our diverse range of services is designed to elevate your brand and captivate your audience. 
                    From visually striking graphic designs to cutting-edge web development, we are here to bring your 
                    ideas to life. Explore our comprehensive suite of offerings, meticulously crafted to meet your 
                    unique needs. Whether you&apos;re looking to establish a strong online presence, create compelling 
                    multimedia content, or redefine your brand identity, our dedicated team is ready to turn your 
                    vision into reality. Discover the power of design and storytelling with our Services We Offer.
                    </p>
                  </Reveal>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Services
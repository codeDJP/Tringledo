"use client"
import React from 'react'
import { Reveal } from '../utils/Reveal'

const NumOf = () => {
  return (
    <>
        <section className='mt-20 max-w-full'>
            <div className='max-w-6xl mx-auto p-4 py-20'>
                {/* <div className='circlePosition w-[40%] h-[55%] bg-accent 
                rounded-[100%] absolute z-1 top[50%]   
                translate-y-[50%] blur-[300px] opacity-20'>

                </div> */}
                <div className='md:flex flex-auto gap-20 ' >
                    
                    <div className='basis-2/3 md:w-[30%]  pb-10'>
                        <Reveal>
                            <h1 className='text-4xl text-heading font-semibold mb-5 grd center'>Clients and Projects</h1>
                        </Reveal>
                        <Reveal>
                            <p className='text-para font-sans font-light'>
                            Bringing the client&apos;s expectations to reality is our key strength. For each and every client, 
                            we ensure they get precisely what they&apos;ve come to us for. We take immense pride in every project, 
                            and we are genuinely delighted to have each client take a step forward with us. At our company, 
                            we cherish every client and their projects on a personal level. We extend our heartfelt thanks to each 
                            one of them for being a valuable part of our journey. Thank you&#33;
                            </p>
                        </Reveal>
                        
                    </div> 
                    <div className='flex flex-col basis-1/3 text-white place-content-center items-center justify-center text-center gap-20 md:mt-[3%]'>
                        <Reveal>
                            <div>
                                <Reveal>
                                    <h1 className='text-6xl font-bold text-center'> +150 </h1>
                                </Reveal>

                                    <p className='items-center text-center justify-center'>Clients</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className=''>
                                <Reveal>
                                    <h1 className='text-6xl font-bold'> +10000 </h1>
                                </Reveal>
                                    <p className='items-center text-center justify-center'>Projects</p>

                            </div>
                        </Reveal>
                        
                       
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NumOf
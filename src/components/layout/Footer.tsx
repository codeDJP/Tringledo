"use client"
import React from 'react'
import FootPara from './FootPara'
import FootList from './FootList'
import EnterEmail from './EnterEmail'
import { Reveal } from '../utils/Reveal'

const Footer = () => {
  return (
    <div id='footer' className='text-para bg-navg py-10'>
        <div className='max-w-6xl mx-auto '>
            <div className='md:flex '>
                
                <div className='flex-1 border-r border-border'>
                    <div className='flex-col '>
                        <div className='border-b border-border'>
                            <FootPara/>
                        </div>
                        <div className='mt-5 '>
                            <FootList/>
                        </div>
                        
                    </div>
                    

                </div>
                <div className='flex-1'>
                        <div>
                            <div className='m-7 text-5xl leading-tight'>
                                <Reveal>
                                <h1>Let&apos;s Discuss <br /> Your Project.</h1>

                                </Reveal>
                            </div>  
                            <div className='m-7'>
                                <EnterEmail/>
                            </div> 
                        </div>
            
                    
                    
                </div>
            </div>
            <div className='mt-16 ml-4 '>
                <p>Copyright@2023 Tringledo.</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Footer
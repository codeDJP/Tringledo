"use client"
import React, { useEffect, useRef } from "react"
import tringledo from "@/assets/tringledo.png"
import Image from "next/image"
import { BiSolidPhone, BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import { MdOutlineMailOutline, MdOutlineFacebook, MdMail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { motion, useAnimation, useInView } from "framer-motion";
import { Reveal } from "../utils/Reveal";
import Link from "next/link";

const Hero = () => {

    const phone = "+94701080720"
    const email = "Tringledo@outlook.com"

    const ref = useRef(null);
    // const isInView = useInView(ref, {once: true});

    // const mainControls = useAnimation();

    // useEffect(() => {
    //     //console.log(isInView)
    //     if(isInView){
    //         mainControls.start("visible");
    //     }else{
    //         mainControls.start("hidden");
    //     }
    // }, [isInView]);
  return (
    <>
    <div className="max-w-6xl mx-auto p-4">
        <Reveal>
            <div className="circlePosition w-[40%] h-[55%] bg-accent 
            rounded-[100%] absolute z-1 top[50%]  translate-x-[50%] 
            translate-y-[50%] blur-[300px] opacity-20">

            </div>
        </Reveal>
        
        <div className="gap-16 text-white mx-auto justify-center text-center">
            
            {/* Logo */}
            
            <div className=" relative">
                <div className="ringtri p-0 mx-auto absolute">
                    <i className="text-accent"></i>
                    <i className="text-accent"></i>
                    <i className="text-accent"></i>
                </div>
                
                    <Image src={tringledo} alt="Tringledo logo" priority={true} className="w-1/3 mx-auto absolute md:top-20 top-12 left-0 right-0 "></Image>
                
            </div>
            <div>
                
                    <motion.div ref={ref} className={`text-5xl md:text-6xl  font-bold text-heading justify-center text-center text p-1 grd`}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0},
                            
                        }}
                        initial= "hidden"
                        animate = "visible"
                        transition={{ duration: 0.30, delay: 0}}
                    >
                            We Design, We Develop
                    </motion.div>
                
                    
                    <motion.div ref={ref} className="mt-5 text-para font-sans font-light justify-center text-center"
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0},
                            
                        }}
                        initial= "hidden"
                        animate = "visible"
                        transition={{ duration: 0.30, delay: 0.2}}
                    >
                        At Tringledo, we&apos;re passionate about bringing ideas to life. We develop and <br />design, using diverse tools and languages for innovation.
                    </motion.div>
                
            </div>

            <div className="md:flex  text-accent mt-10 font-semibold justify-center text-center md:gap-8 ">
                
                <div className="mb-5 " >    
                        <div className="flex gap-2 text-center justify-center">
                            <Reveal>
                                <BiSolidPhone className="text-2xl"/>
                            </Reveal>
                            <Reveal>
                                <a href={`tel:${phone}`} className="">
                                    070 1080 720
                                </a >
                            </Reveal> 
                        </div>
                </div>
                <div className="mb-5" >
                    
                        <div className="flex gap-2 text-center justify-center">
                            <Reveal>
                                <MdOutlineMailOutline className="text-2xl"/>
                            </Reveal>                         
                            <Reveal>
                                <a href={`mailto:${email}`} className="">
                                    Tringledo@outlook.com
                                </a >
                            </Reveal>
                        </div>
                    
                    
                </div>

                <div className=" mb-5">
                        <div className="flex gap-2 text-center justify-center">
                            <Reveal>
                                <Link href={{}}>
                                    <RiWhatsappFill className="text-2xl"/>
                                </Link>    
                            </Reveal>
                            <Reveal>
                                <Link href={{}}>
                                    <MdOutlineFacebook className="text-2xl"/>
                                </Link> 
                            </Reveal>
                            <Reveal>
                                <Link href={{}}>
                                    <BiLogoLinkedinSquare className="text-2xl"/>
                                </Link>  
                            </Reveal>
                            <Reveal>
                                <Link href={{}}>
                                    <BiLogoInstagramAlt className="text-2xl"/>
                                </Link>
                            </Reveal>
                            <Reveal>
                                <Link href={{}}>
                                    <MdMail className="text-2xl"/>
                                </Link>
                            </Reveal>
                                
                        </div>

                    
                </div>
                
            </div>
        </div>
    </div >
    </>
  )
}

export default Hero
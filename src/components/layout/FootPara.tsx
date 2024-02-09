"use client"
import React from 'react'
import tringledo from "@/assets/tringledo.png"
import Image from "next/image"
import { BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import { MdOutlineFacebook, MdMail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import Link from 'next/link';
import { Reveal } from '../utils/Reveal';

const FootPara = () => {
  return (
    <div>
        <div className=''>
            <Reveal>
                <div className='m-5'>
                    <Image 
                        src={tringledo}
                        width={50}
                        height={50}
                        alt="Tringledo Logo"
                    ></Image>
                </div>
            </Reveal>
            <Reveal>
                <div className='px-4 md:pr-32 text-para font-sans font-light '>
                    <p>
                    At Tringledo, &quot;We Develop, We Design.&quot; We are a passionate team of designers and developers dedicated to bringing your ideas to life. With expertise in a wide range of designing tools, 3D modeling, and an extensive array of programming languages, we deliver innovative solutions tailored to your unique need.
                    </p>
                </div>
            </Reveal>
            <Reveal>
                <div className="text-accent my-6">
                        <div className="flex gap-2 ml-4">
                            <Link href="">
                                <RiWhatsappFill className="text-2xl"/>
                            </Link>
                            <Link href="">
                                <MdOutlineFacebook className="text-2xl"/>
                            </Link>
                            <Link href="">
                                <BiLogoLinkedinSquare className="text-2xl"/>
                            </Link>
                            <Link href="">
                                <BiLogoInstagramAlt className="text-2xl"/>
                            </Link>
                            <Link href="">
                                <MdMail className="text-2xl"/>
                            </Link>    
                        </div>
                </div>
            </Reveal>
            
        </div>
    </div>
  )
}

export default FootPara
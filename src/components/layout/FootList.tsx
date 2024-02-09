"use client"
import React from 'react'
import Link from 'next/link'
import { Reveal } from '../utils/Reveal'

const about = [
    {
        id: 1,
        title: "About",
        url: "/about"
    },
    {
        id: 2,
        title: "About",
        url: "/about"
    },
    {
        id: 3,
        title: "About",
        url: "/about"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    }
]

const services = [
    {
        id: 1,
        title: "Services",
        url: "/Services"
    },
    {
        id: 2,
        title: "Services",
        url: "/Services"
    },
    {
        id: 3,
        title: "Services",
        url: "/Services"
    },
    {
        id: 4,
        title: "Services",
        url: "/Services"
    }
]

const work = [
    {
        id: 1,
        title: "Work",
        url: "/work"
    },
    {
        id: 2,
        title: "Work",
        url: "/work"
    },
    {
        id: 3,
        title: "Work",
        url: "/work"
    },
    {
        id: 4,
        title: "Work",
        url: "/work"
    }
]

const navStyle = "hover:text-accent-700";

const FootList = () => {
  return (
    <div>
        <div className='flex gap-28 ml-4 '>
            <Reveal>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-semibold'>About</h2>
                    <div className='flex flex-col gap-2'>
                        {about.map((link, index)=>(
                                //<Link className='p-4' key={link.id} href={link.url}>{link.title}</Link>
                                <div key={`${link.id}+${index}`}>
                                    <Link  href={link.url} className={`${navStyle}`}  >{link.title}</Link>
                                </div>
                                
                        ))}
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-semibold'>Services</h2>
                    <div className='flex flex-col gap-2'>
                        {services.map((link, index)=>(
                                //<Link className='p-4' key={link.id} href={link.url}>{link.title}</Link>
                                <div key={`${link.id}+${index}`}>
                                    <Link  href={link.url} className={`${navStyle}`}  >{link.title}</Link>
                                </div>
                                
                        ))}
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-semibold'>Work</h2>
                    <div className='flex flex-col gap-2'>
                        {work.map((link, index)=>(
                                //<Link className='p-4' key={link.id} href={link.url}>{link.title}</Link>
                                <div key={`${link.id}+${index}`}>
                                    <Link  href={link.url} className={`${navStyle}`}  >{link.title}</Link>
                                </div>
                                
                        ))}
                    </div>
                </div>
            </Reveal>
            
        </div>
    </div>
  )
}

export default FootList
"use client";
import Link from 'next/link'
import React, {  useState, useEffect } from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Header = () => {
    const [animationParent] = useAutoAnimate()
    const [showMenu, setshowMenu] = useState(false);

    function toggleMenu(){
        setshowMenu(!showMenu);
    }

    useEffect( () => {

        const closeDropdown = () => {
          setshowMenu(false)
        }

        document.body.addEventListener('click', closeDropdown)

        return () => document.body.removeEventListener('click', closeDropdown)
    }, []);

    const navStyle = "hover:text-accent-700";

    const links = [
        {
            id: 1,
            title: "Portfolio",
            url: "/portfolio"
        },
        {
            id: 2,
            title: "About",
            url: "#about"
        },
        {
            id: 3,
            title: "Services",
            url: "#services"
        },
        {
            id: 4,
            title: "Work",
            url: "#work"
        }
    ]
  return (
    <div className='max-w-6xl mx-auto p-4 ' id='Services'>
        <header className=" max-w-6xl flex items-center justify-between pt-2">
        <Link className="text-white font-semibold text-2xl" href= "./">
          Tringle
          <span className="text-accent">do</span>
        </Link>

        <nav className="">
          <div className="text-white items-center hidden lg:inline-flex gap-8 font-semibold">
            {links.map(link=>(
                        //<Link className='p-4' key={link.id} href={link.url}>{link.title}</Link>
                        <Link key={link.id} href={link.url} className={`${navStyle}`}  >{link.title}</Link>
            ))}
            <Link href= "#footer" className=" bg-accent text-black hover:bg-accent-700 px-4 py-1 rounded-xl">
                Contact
            </Link>
          </div>

          {showMenu && <div className="fixed inset-x-0 top-24 mx-8 flex flex-col items-center rounded-xl bg-navg lg:hidden text-white z-50">
            
            <section className="my-8 flex flex-col items-center gap-6">
              {links.map(link=>(
                          //<Link className='p-4' key={link.id} href={link.url}>{link.title}</Link>
                          <Link key={link.id} href={link.url} className={`${navStyle}`}  >{link.title}</Link>
              ))}
              <Link href= "#footer" className=" bg-accent text-black hover:bg-accent-700 px-4 py-1 rounded-xl">
                  Contact
              </Link>
            </section>
          </div>
          }

            <button 
                ref={animationParent}
                onClick= {toggleMenu}
                className="text-3xl lg:hidden text-white"
            >
                {showMenu ? <AiOutlineClose/> :<AiOutlineMenu/> }
            </button>    
        
        </nav>
      </header>
    </div>
  )
}

export default Header
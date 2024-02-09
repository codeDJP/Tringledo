"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
//Images
import Image from 'next/image';
import img1 from '@/assets/team/img1.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '@/app/globals.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function TeamCard() {

    const cardData = [
        {
            id: 1,
            img: img1,
            name: "Isuru Shanaka",
            title: "Full Stack Developer"
        },
        {
            id: 1,
            img: img1,
            name: "Isuru Shanaka",
            title: "Full Stack Developer"
        },
        {
            id: 1,
            img: img1,
            name: "Isuru Shanaka",
            title: "Full Stack Developer"
        },
        {
            id: 1,
            img: img1,
            name: "Isuru Shanaka",
            title: "Full Stack Developer"
        },
        {
            id: 1,
            img: img1,
            name: "Isuru Shanaka",
            title: "Full Stack Developer"
        },
        {
            id: 1,
            img: img1,
            name: "Isuru Shanaka",
            title: "Full Stack Developer"
        }
    ]
    
  return (
    <>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        autoplay = {
          {
            delay:1000
          }
        }
        id="mySwiper"
      >
        {cardData.map((item, itemIndex) =>(
            <SwiperSlide key={itemIndex} id='swiper-slide' >
                
                    <Image src={item.img} alt={item.name} className='hover:opacity-100 opacity-70 transition-all ease-in-out duration-500'/>
                    <div className='font-sans text-center p-1 text-para font-semibold opacity-90 bg-techbg rounded-b-2xl'>
                        <p className=''>{item.name}</p>
                        <p>{item.title}</p>
                    </div>
                    
                  
            </SwiperSlide>
        ))}
        
        
      </Swiper>
    </>
  );
}

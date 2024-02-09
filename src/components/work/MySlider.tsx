"use client";
import React, { Component } from 'react'
import Card from './Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectDetails from './ProjectDetails';

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';


export default class MySlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow : <NextArrow onClick={undefined}/>,
      prevArrow: <PrevArrow onClick={undefined} />,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
          }
        }
      ]

    };

    return (
      <div className='max-w-2xl lg:mt-10'>
        
        <Slider {...settings} >
        {ProjectDetails.imgData.map((el, index) => <Card key={index} img={el.img} title={el.title}/>)}
        </Slider>
      </div>
    );
  }
}
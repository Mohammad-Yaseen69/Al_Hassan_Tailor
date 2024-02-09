import React, { useEffect, useRef } from 'react';
import FeaturedImg from '../assets/FeaturedImg.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';

const CraftedElegance = () => { 
  return (
    <div className='flex max-sm:justify-center gap-7  max-sm:flex-col overflow-x-hidden  justify-between items-center px-5 w-full h-[100vh]'>
      <div  className='w-[40%] max-sm:hidden '>
        <img src={FeaturedImg} className='object-cover rounded-3xl' alt="" />
      </div>

      <div  className='w-[40%] items-center justify-center max-sm:w-[90%]'>
        <h1 className='font-bold text-center max-sm:text-[5vw] text-[3vw] w-full'>
          "Where Tradition Meets Innovation: Your Destination for Tailored Fashion"
        </h1>
      </div>
    </div>
  );
};

export default CraftedElegance;

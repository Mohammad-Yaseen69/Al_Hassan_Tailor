import React, { useEffect, useRef } from 'react';
import FeaturedImg from '../assets/FeaturedImg.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CraftedElegance = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const containerBounds = containerRef.current.getBoundingClientRect();
    const imgBounds = imgRef.current.getBoundingClientRect();
    const textBounds = textRef.current.getBoundingClientRect();

    gsap.from(imgRef.current, {
      x: '-=90',
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: `top-=${300} center`,
        end: `bottom-=${textBounds.height / 4} center`,
        scrub: true,
        once: true, // Animation sirf ek baar hi chalegi
      }
    });

    gsap.from(textRef.current, {
      x: '+=90',
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: `top-=${300} center`,
        end: `bottom center`,
        scrub: true,
        once: true, // Animation sirf ek baar hi chalegi
      }
    });
  }, []);

  return (
    <div ref={containerRef} className='flex justify-between items-center px-5 w-full h-[100vh]'>
      <div ref={imgRef} className='w-[40%]'>
        <img src={FeaturedImg} className='object-cover rounded-3xl' alt="" />
      </div>

      <div ref={textRef} className='w-[40%]'>
        <h1 className='font-bold text-center text-[3vw] w-[90%]'>
          "Where Tradition Meets Innovation: Your Destination for Tailored Fashion"
        </h1>
      </div>
    </div>
  );
};

export default CraftedElegance;

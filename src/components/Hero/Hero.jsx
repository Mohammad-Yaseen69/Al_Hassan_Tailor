import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useSelector } from 'react-redux';

const Hero = () => {
    const refrence = useRef(null)
    const { completed } = useSelector(state => state.Animation)

    useLayoutEffect(() => {
        if (completed) {
            const context = gsap.context(() => {
                const tl = gsap.timeline()
                tl.to(['#tx1', '#tx2', '#btn'], {
                    y: '-=30',
                    stagger: 0.3,
                    opacity: 1,
                    delay: 0.3
                })
            }, refrence)

            return () => {
                context.revert();
            };
        }
    }, [completed])
    return (
        <div ref={refrence} className='w-full  h-[100vh] flex flex-col gap-5 items-center justify-center'>
            <div className='gap-5 items-center justify-center flex flex-col relative top-[10%]'>
                <h1
                    id='tx1'
                    className='text-white opacity-0 max-ss:text-[6vw] max-sm:text-[5.5vw]  font-bold font-Montserrat text-[4vw]'>
                    AL-Hassan Tailor
                </h1>

                <p
                    id='tx2'
                    className='w-[50%] max-sm:text-[2.5vw] max-ss:text-[3vw]  max-sm:w-[80%] max-ss:w-[90%]  opacity-0  text-[1.5vw] text-center text-gray-300'>
                    Transforming Fabric into Fashion, Crafting Unique Designs That Define Style, Elegance, and Personality, One Stitch at a Time. Experience Tailoring Excellence, Where Every Garment Tells a Story of Timeless Sophistication
                </p>

                <button id='btn' className="btn-12 opacity-0 "><span>Products</span></button>
            </div>
        </div>
    )
}

export default Hero
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import gsap from "gsap"
import { useRef, useLayoutEffect } from "react"
import App from '../App'
import { useDispatch } from 'react-redux'
import { toggleComplete } from '../store/AnimationSlice'

const IntroAnimation = () => {
    const refrence = useRef(null)
    const dispatch = useDispatch()
    const { completed } = useSelector(state => state.Animation)


    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const context = gsap.context(() => {
            const tl = gsap.timeline()
            tl.from("#intro-slider", {
                xPercent: '-100',
                duration: 0.8,
                delay: 0.8,
            }).from(['#tx1', '#tx2', '#tx3'], {
                y: '+=30',
                stagger: 0.3,
                opacity: 0
            }).to(['#tx1', '#tx2', '#tx3'], {
                y: '-=30',
                stagger: 0.3,
                opacity: 0,
                delay: 0.3
            }).to('#intro-slider', {
                xPercent: '-100',
                duration: 0.8,
                delay: 0.3,
            }).from('#welcome', {
                y: '+=30',
                opacity: 0,
                duration: 0.6,
                delay: 0.3,
            }).to('#main-container', {
                y: '-1000',
                duration: 1.4,
                delay: 0.3,
                onComplete: () => {
                    // Re-enable scrolling after animation completes
                    refrence.current.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    dispatch(toggleComplete())
                }
            })
        }, refrence)

        return () => {
            context.revert();
        };
    }, [refrence])

    return (
    
            <div className={`relative z-50 ${completed && 'hidden'}`} ref={refrence}>
                <div id="intro-slider" className="w-full h-screen flex flex-col justify-center bg-gray-100 gap-4 tracking-tight z-20 p-16 absolute left-0 top-0">
                    <h1 className="text-[5vw]  max-ss:text-[7vw] max-sm:text-[6vw] font-bold italic font-SpaceGrotesk " id="tx1"> Tailor </h1>
                    <h1 className="text-[5vw]  max-ss:text-[7vw] max-sm:text-[6vw] font-bold italic  font-SpaceGrotesk " id="tx2"> Dressmaker </h1>
                    <h1 className="text-[5vw]  max-ss:text-[7vw] max-sm:text-[6vw] font-bold italic  font-SpaceGrotesk " id="tx3"> Fashion </h1>
                </div>
                <div id="main-container" className="w-full flex relative items-center justify-center z-10 h-screen bg-[#030713]">
                    <h1 id="welcome" className="text-[5vw]  max-ss:text-[7vw] max-sm:text-[6vw]  font-bold font-RussoOne text-white">
                        Welcome
                    </h1>
                </div>
            </div>
        
    )
}

export default IntroAnimation
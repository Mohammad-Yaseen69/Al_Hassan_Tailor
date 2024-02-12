import React, { useEffect } from 'react'
import { Navbar, Footer, ContactInfoCard } from '../components'
import icon from '../assets/icon.png'
import icon2 from '../assets/icon2.png'
import gsap from 'gsap'
import { useSelector } from 'react-redux'

const Contact = () => {
  const {completed} = useSelector(state => state.Animation)

  useEffect(() => {
    if(completed){
      gsap.from(['#box1' , '#box2' , '#box3'] , {
        opacity: 0 ,
        duration: 1 ,
        stagger: 0.5 ,
      })
    }
  },[completed])

  return (
    <>
      <Navbar />
      <div className='w-full relative'>
        <div className='w-full max-sm:h-[95vh] h-[80vh] gap-6 flex-col flex items-center justify-center  max-xs:justify-end max-xs:pb-11  bg-[#005153]'>
          <div>
            <h1 className='text-[3.3vw] max-md:text-[4vw] max-sm:text-[5vw] max-ss:text-[7vw] font-bold text-white'>Get In Touch</h1>
          </div>

          <div className='flex max-xs:gap-x-11  gap-6 flex-wrap h-auto items-center justify-center'>
            <ContactInfoCard id='box1' icon={icon} text="+92 322 2141806" />
            <ContactInfoCard id='box2' className="max-xs:order-3" icon="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
              text="mohammaduzaif.tailor@gmail.com" />
            <ContactInfoCard id='box3' href={"https://www.instagram.com/al_hassan_tailor/"} icon={icon2} text="al_hassan_tailor" />
          </div>

        </div>

        <div className="max-w-[400px] max-xs:max-w-[350px] my-11 w-full text-white mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-gray-50" htmlFor="name"> Name </label>
              <input
                placeholder="Your Name"
                className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-50" htmlFor="email"> Email </label>
              <input
                placeholder="Your Email"
                className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-50" htmlFor="message"> Message </label>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                rows="4"
                name="message"
                id="message"
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                className="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact
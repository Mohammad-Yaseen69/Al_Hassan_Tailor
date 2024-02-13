import React, { useEffect } from 'react'
import { Navbar, Footer, ProfileCard } from '../components'
import gsap from 'gsap'
import { useSelector } from 'react-redux'


const About = () => {
  const { completed } = useSelector(state => state.Animation)

  useEffect(() => {
    if (completed) {
      gsap.from(['#title', '#content'], {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
      })
    }
  }, [completed])

  return (
    <div>
      <Navbar />
      <div className='h-[95vh] bg-[#005153] w-full gap-7 flex flex-col justify-center items-center'>
        <h1 id='title' className='text-[3.3vw] max-md:text-[4vw] max-sm:text-[5vw] max-ss:text-[7vw] font-bold text-white'>About Us</h1>
        <p
          id='content'
          className='w-[80%] max-sm:text-[2.8vw] max-ss:text-[3vw] max-sm:w-full text-[1.8vw] text-center text-gray-300'>
          Discover Al Hassan Tailor, premier destination for bespoke tailoring since 2005. Led by Uzaif, son of Mohammad Hussain, our shop near New Kumbharwara offers personalized service and craftsmanship. From suits to elegant sherwanis, each garment reflects our commitment to quality and style. Experience the epitome of tailoring excellence at Al Hassan Tailor today.
        </p>
      </div>

      <div className='h-screen max-sm:h-auto max-sm:py-40 max-sm:flex-col justify-center gap-y-8 gap-x-20 w-full flex  px-7 items-center'>
        <div className=' '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d226.22663034039266!2d67.00485223656588!3d24.876617187869375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1707844659134!5m2!1sen!2s" width="400" height="320" style={{ border: "0", borderRadius: "20px" }} className='mapdiv' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <ProfileCard />
      </div>
      <Footer />
    </div>
  )
}

export default About
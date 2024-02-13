import React, { useEffect } from 'react'
import { Navbar, Footer, ContactInfoCard, ContactForm } from '../components'
import icon from '../assets/icon.png'
import icon2 from '../assets/icon2.png'
import gsap from 'gsap'
import { useSelector } from 'react-redux'

const Contact = () => {
  const { completed } = useSelector(state => state.Animation)
  const [showMessage , setShowMessage] = React.useState(false)
  let interval = null

  useEffect(() => {
    if (completed) {
      gsap.from(['#box1', '#box2', '#box3'], {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
      })
    }
  }, [completed])

  if(showMessage){
    interval = setInterval(() => {
      setShowMessage(false)
    } , 5000)
  }

  return (
    <>
      <Navbar />
      <div className='w-full relative'>
        <div className='w-full max-sm:h-[95vh] h-[80vh] gap-6 flex-col flex items-center justify-center   max-xs:justify-end max-xs:pb-11  bg-[#005153]'>
          <div>
            <h1 className='text-[3.3vw] max-md:text-[4.3vw] max-sm:text-[5.2vw] max-ss:text-[7.3vw] font-bold text-white'>Get In Touch</h1>
          </div>

          <div className='flex max-xs:gap-x-11  gap-6 flex-wrap h-auto items-center justify-center'>
            <ContactInfoCard id='box1' icon={icon} text="+92 322 2141806" />
            <ContactInfoCard id='box2' className="max-xs:order-3" icon="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
              text="mohammaduzaif.tailor@gmail.com" />
            <ContactInfoCard id='box3' href={"https://www.instagram.com/al_hassan_tailor/"} icon={icon2} text="al_hassan_tailor" />
          </div>

        </div>

        <ContactForm setShowMessage={setShowMessage}/>

        {showMessage && <p className='my-6 font-bold font-Montserrat text-xl text-green-700 relative w-full text-center'>Message Sent Succesfully</p>}
      </div>
      <Footer />
    </>
  )
}

export default Contact
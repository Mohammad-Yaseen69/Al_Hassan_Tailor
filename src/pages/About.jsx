import React from 'react'
import { Navbar, Footer, ProfileCard } from '../components'


const About = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full flex justify-center items-center'>
        <ProfileCard />
      </div>
      <Footer />
    </>
  )
} 

export default About
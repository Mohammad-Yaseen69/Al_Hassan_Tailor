import React from 'react'
import homeImg from '../assets/homeImg.jpg'
import { Navbar , CraftedElegance ,Hero, Services, Footer} from '../components'



const Home = () => {
    return (
        <div>
            <div className='w-full h-screen relative'>
                <img src={homeImg} alt="" class='w-full -z-10 h-full object-cover absolute' />
                <div class="absolute inset-0 bg-black -z-10 opacity-70"></div>
                <Navbar />
                <Hero />
                <Services />
                <CraftedElegance />
                <Footer />
            </div>
        </div>
    )
}

export default Home
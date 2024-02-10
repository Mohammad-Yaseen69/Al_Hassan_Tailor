import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpg'

const Services = () => {

    return (
        <div className='h-[100vh]  max-md:h-full max-md:my-44 flex justify-center items-center'>
            <div className='w-full  rounded-full  p-8 '>
                <h2 className='text-3xl font-bold mb-8 text-center'>Our Services</h2>
                <div className='flex max-md:flex-col justify-center gap-11  items-center'>
                    <ServiceCard
                        id='card1'
                        title='Custom Tailoring'
                        imageSrc={service1}
                        description='Get personalized clothing tailored to your measurements and preferences.'
                    />
                    <ServiceCard
                        id='card2'
                        title='Fabric Selection'
                        imageSrc={service2}
                        description='Choose from a wide range of quality fabrics for your custom-made garments.'
                    />
                    <ServiceCard
                        id='card3'
                        title='Virtual Fittings'
                        imageSrc={service3}
                        description='Try on clothing virtually and see how it looks before making a purchase.'
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;

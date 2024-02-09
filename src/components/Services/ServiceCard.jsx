import React from 'react';

const ServiceCard = ({ title , imageSrc , description , id}) => {
  return (
    <div id={id} className='bg-white flex max-md:min-w-[60%] items-center justify-center flex-col rounded-lg p-6 shadow-md'>
      <div className="bg-gray-200 rounded-full overflow-hidden w-24 h-24 flex items-center justify-center mb-4 mx-auto">
        <img src={imageSrc} alt={title} className='object-cover' />
      </div>
      <h3 className='text-xl font-semibold mb-4'>{title}</h3>
      <p className='text-gray-700 text-center'>{description}</p>
    </div>
  );
};

export default ServiceCard;

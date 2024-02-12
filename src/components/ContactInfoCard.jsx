 import React from 'react'

const ContactInfoCard = ({ icon, text, href , className , id}) => {
  return (
    <div id={id} className={`flex flex-col  items-center justify-center ${className} gap-4`}>
      {href ?
        <a href={href} target='_blank'><img src={icon} className='size-20 max-md:size-14 hover:cursor-pointer ' alt="" /></a>
        : <img src={icon} className='size-20 max-md:size-14 hover:cursor-pointer ' alt="" />}

      <p className='font-bold text-2xl max-md:text-xl max-sm:text-sm text-gradient'>{text}</p>
    </div>
  )
}

export default ContactInfoCard
import React from 'react'
import ButtonSmall from './ButtonSmall'

const Footer = () => {
  return (
    <div className='flex justify-between barlow-condensed-light border-t-[0.5px] text-white border-[#1a1919] pb-44 pt-28'>
        <div className='ml-8 sm:ml-16 xl:ml-24'>
            <div className='flex items-center gap-1.5'>
               <div className='w-6 h-6 bg-[lightblue] rounded-lg'>
                    
               </div> 
               <span className='text-3xl font-semibold tracking-wider'>
                    Releaf
               </span>
            </div>
            <p className='text-[#828282] mt-4'>
                A product by <a href="/">
                    <span className='text-[#0d9cdb] cursor-pointer'>
                        Punia Badmaash
                </span>
                </a>
            </p>
            <p className='text-[#828282]'>
                Building in public at <a href="/">
                    <span className='text-[#0d9cdb] cursor-pointer'>
                        githubIcon
                </span>
                </a>
            </p>
        </div>
        <div className='flex gap-6 mr-8 sm:mr-20 xl:mr-32'>   
            <div className='flex-row space-y-1.5'>
                <ButtonSmall title={"terms and conditions"}></ButtonSmall>
                <ButtonSmall title={"refund policy"}></ButtonSmall>
                <ButtonSmall title={"contact us"}></ButtonSmall>
                <ButtonSmall title={"about"}></ButtonSmall>
            </div>
            <div className='flex-row space-y-1.5'>
                <ButtonSmall title={"twitter"} />
                <ButtonSmall title={"discord"} />
            </div>
        </div>
    </div>
  )
}

export default Footer
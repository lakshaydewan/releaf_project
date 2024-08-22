import React from 'react'
import ButtonSmall from './ButtonSmall'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
  return (
    <div className='sm:flex-row sm:justify-between flex flex-col space-y-2 barlow-condensed-light border-t-[0.5px] text-white border-[#1a1919] pb-44 pt-28 mt:10 md:mt-20 lg:mt-36'>
        <div className='ml-8 sm:ml-16 xl:ml-24 sm:flex-col flex justify-between items-center sm:items-start'>
            <div className='flex items-center gap-1.5'>
               <div className='w-10 h-10  rounded-lg'>
                <img src="\images\logo2.png" alt="" />
                    
               </div> 
               <span className='text-3xl font-semibold tracking-wider'>
                    Releaf
               </span>
            </div>
            <div className='mr-6 sm:mr-0 pt-6 sm:pt-0'>
            <p className='text-[#828282] mt-4'>
                A product by <a href="/">
                    <span className='text-[#0d9cdb] cursor-pointer'>
                        <p>DEVELOPER TEAM (RE-LEAF) </p>
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
        </div>
        <div className='flex gap-6 mr-8 sm:mr-20 xl:mr-32 sm:ml-0 ml-6'>   
            <div className='flex-row space-y-1.5'>
                <ButtonSmall title={"terms and conditions"} onClick={() => {
                    navigate("/termsandconditions")
                }}></ButtonSmall>
                <ButtonSmall title={"refund policy"} onClick={() => {
                    navigate("/refundpolicy")
                }}></ButtonSmall>
                <ButtonSmall title={"contact us"} onClick={() => {
                    navigate("/contactus")
                }}></ButtonSmall>
                <ButtonSmall title={"about"} onClick={() => {
                    navigate("/aboutus")
                }}></ButtonSmall>
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
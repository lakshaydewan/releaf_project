import React, { useState } from 'react';
import { easeOut, motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (e.g., API call)
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      }); // <-- This is where the input fields are cleared
      setIsLoading(false);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="text-white custom-container flex flex-col md:flex-row md:space-x-8 sm:space-y-8 md:space-y-0 p-4 md:gap-5 sm:pag-4 barlow-condensed-normal lg:mb-72">
      <div className="w-full md:w-1/2 p-4 overflow-auto md:order-2">
        <h1 className="text-3xl mb-4 barlow-condensed-semibold">
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Want a new Feature.",
        800, // wait 1s before replacing "Mice" with "Hamsters"
        'Report a Bug',
        800,
        "Or just wanna say Hi!",
        800, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={60}
      style={{ display: 'inline-block' }}
      className='text-white sm:text-2xl text-xl'
      repeat={Infinity}
      deletionSpeed={0}
    />
        </h1>
        <p className='barlow-condensed-light sm:text-xl text-md'>
        Whatever is in your mind, feel free to write to us. We will definitely address your concerns. 
        </p>
        <div className='flex space-x-4 mt-7'>
        <div>
        <FaXTwitter className='size-6 '/>
        </div>
        <div>
        <FaDiscord  className='size-6'/>
        </div>
        <div>
        <FaGithub className='size-6'/>
        </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-2 md:order-1 relative">
        {showSuccessMessage && (
          <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity:[0, 1 ,1, 0]}}
            transition={{ duration: 4, ease: easeOut }}
            className="mb-3 bg-[lightblue] w-fit rounded-md p-2 px-3 mx-auto md:mx-0 absolute top-[-15px] left-0"
          >
            Your Message has been received!!
          </motion.div>
        )}
        <form className='pt-8 barlow-condensed-regular' onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center mb-4 w-full space-y-4 md:space-y-0 md:space-x-4">
              <input
                className="bg-[#27272a] rounded-lg border border-[#2d2d2d] text-[#888] px-4 py-2 hover:border-[#888] focus:outline-none focus:border-[#888] w-full text-xl"
                type="text"
                placeholder="Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="border border-[#2d2d2d] rounded-lg bg-[#27272a] text-[#888] px-4 py-2 hover:border-[#888] focus:outline-none focus:border-[#888] w-full text-xl"
                type="email"
                placeholder="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center mb-4 w-full">
              <input
                className="border border-[#2d2d2d] rounded-lg bg-[#27272a] text-[#888] px-4 py-2 hover:border-[#888] focus:outline-none focus:border-[#888] w-full text-xl"
                type="tel"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center mb-4 w-full">

              <textarea
                className="border border-[#2d2d2d] rounded-lg bg-[#27272a] text-[#888] px-4 py-2 hover:border-[#888] focus:outline-none focus:border-[#888] w-full text-xl"
                rows="4"
                placeholder="Message *"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="border border-[#2d2d2d] rounded-lg text-md bg-[#27272a] hover:border-[#888] hover:text-[white] text-[#888] px-8 py-2 mb-8 transition-all duration-700 ease-in-out w-full"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'SENDING .....' : 'SEND MESSAGE'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;

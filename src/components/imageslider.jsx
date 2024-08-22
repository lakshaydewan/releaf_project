import { useEffect, useRef } from "react";
import { Section1 } from "./sectionnew"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'



const Imageslider = () => {

    const sliderRef = useRef(null);
    const slidesref = useRef(null);


    return(
        <Section1  classname="pt-0 sm:mt-[0rem] mt-[-8.25rem] lg:mb-36 md:mb-20 mb-10 flex flex-col items-center"
        id="image slider">
            <div className="flex-col justify-center items-center w-9/12">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl px-8 text-center barlow-condensed-semibold mb-2 ">
                EVENT CALLENDER
                </h1>
                <div className="text-white font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl px-8 text-center barlow-condensed-semibold mb-20"> STAY UPDATED WITH LATEST EVENTS, COLLEGE FESTS AND HACKATHONS</div>
            </div>
            <div className="flex mb-12 overflow-hidden " id="container">
                <div id="slider" ref={sliderRef} className="pl-[50%] pr-[50%] relative flex overflow-hidden snap-x snap-mandatory space-x-20 ">
                    <div ref={slidesref} className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[1024/490] sm:aspect-[1024/690] aspect-[3/4] "><img className="w-full h-full brightness-125 contrast-125 saturate-125 object-cover "  src="\images\imagesforslider\image1.png" alt="" /></div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[1024/490] sm:aspect-[1024/690] aspect-[3/4] "><img className="w-full h-full brightness-125 contrast-125 saturate-125 object-cover "  src="\images\imagesforslider\image2.png" alt="" /></div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[1024/490] sm:aspect-[1024/690] aspect-[3/4]"><img className="w-full h-full brightness-125 contrast-125 saturate-125 object-cover "  src="\images\imagesforslider\image3.png" alt="" /></div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[1024/490] sm:aspect-[1024/690] aspect-[3/4]"><img className="w-full h-full brightness-125 contrast-125 saturate-125 object-cover "  src="\images\imagesforslider\image4.png" alt="" /></div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[1024/490] sm:aspect-[1024/690] aspect-[3/4]"><img className="w-full h-full brightness-125 contrast-125 saturate-125 object-cover "  src="\images\imagesforslider\image5.png" alt="" /></div>
                </div>
            </div>
            <div className="flex w-full justify-center space-x-4 h-12">
                <button onClick={() => {
                    const slider = sliderRef.current
                    const scrollAmount = slidesref.current.offsetWidth
                    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }} className="bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              
              </button>
                <button  onClick={() => {
                    const slider = sliderRef.current
                    const scrollAmount = slidesref.current.offsetWidth
                    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }} className="bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              </button>
            </div>
            <div className="absolute top-[-180%] left-[100%] lg:top-[20%] md:left-[130%] sm:left-[100%] md:top-[-100%] sm:top-[-180%] w-[100%] -translate-x-1/2 md:w-[100%] flex justify-center">
                <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px]  border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                </div>
                <div className="absolute top-[10%] lg:top-[100%] left-[-40%] w-[100%] -translate-x-1/2 md:w-[100%] flex justify-center">
                    <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px]  border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                    <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                    <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                </div>
                <div className="absolute top-[10%] lg:top-[50%] left-[49%] w-[100%] -translate-x-1/2 md:w-[100%] flex justify-center">
                    <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[50px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     
                </div>
        </Section1>
    )
}

const TypeWriter = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "COLLEGE FESTS",
          800, // wait 1s before replacing "Mice" with "Hamsters"
          'EVENTS',
          800,
          "HACKATHONS",
          1000
        ]}
        wrapper="span"
        speed={60}
        style={{ display: 'inline-block' }}
        className="text-white font-bold text-xl md:text-4xl lg:text-4xl xl:text-6xl barlow-condensed-semibold mb-3"
        repeat={Infinity}
        deletionSpeed={0}
      />
    )
  }
  

export {Imageslider}
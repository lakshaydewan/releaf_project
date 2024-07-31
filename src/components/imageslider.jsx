import { useEffect, useRef } from "react";
import { Section1 } from "./sectionnew"



const Imageslider = () => {

    const sliderRef = useRef(null);
    const slidesref = useRef(null);


    return(
        <Section1  classname="pt-0 mt-[0rem] lg:mb-36 md:20 mb-10"
        id="image slider">
            <div className="flex mb-12 overflow-hidden " id="container">
                <div id="slider" ref={sliderRef} className="pl-[50%] pr-[50%] relative flex overflow-hidden snap-x snap-mandatory space-x-20">
                    <div ref={slidesref} className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 sm:aspect-[1024/490] aspect-[4/3] ">sds</div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500  sm:aspect-[1024/490] aspect-[4/3]">sfs</div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500  sm:aspect-[1024/490] aspect-[4/3]">sdf</div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500  sm:aspect-[1024/490] aspect-[4/3]">sfds</div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500  sm:aspect-[1024/490] aspect-[4/3]">sdfs</div>
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
        </Section1>
    )
}

export {Imageslider}
import { useEffect, useRef } from "react";
import { Section1 } from "./sectionnew"



const Imageslider = () => {

    const sliderRef = useRef(null);


    return(
        <Section1  classname="pt-0 mt-[0rem]"
        id="image slider">
            <div className="flex  mb-12 overflow-hidden " id="container">
                <div id="slider" ref={sliderRef} className="pl-[50%] relative flex overflow-hidden snap-x snap-mandatory space-x-8">
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[688/490] lg:aspect-[1024/490] aspect-[10/12]">sds</div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[688/490] lg:aspect-[1024/490] aspect-[33/40]">sfs</div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[688/490] lg:aspect-[1024/490] aspect-[33/40]">sdf</div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[688/490] lg:aspect-[1024/490]">sfds</div>
                    <div className="snap-center lg:min-w-[1024px] md:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-blue-500 md:aspect-[688/490] lg:aspect-[1024/490]">sdfs</div>
                </div>
            </div>
            <div className="flex w-full justify-center space-x-4 h-12">
                <button onClick={() => {
                    const slider = sliderRef.current
                    const scrollAmount = 1024
                    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }} className="bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              
              </button>
                <button  onClick={() => {
                    const slider = sliderRef.current
                    const scrollAmount = 1024
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
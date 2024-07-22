import { useEffect, useRef } from "react";
import { Section1 } from "./sectionnew"



const Imageslider = () => {

    const sliderRef = useRef(null);


    return(
        <Section1>
            <div className="flex h-[600px]  overflow-hidden " id="container">
                <div id="slider" ref={sliderRef} className="pl-[50%] relative flex overflow-hidden snap-x snap-mandatory space-x-4 transition-transform duration-[0.1s] ease-in-out">
                    <div className="snap-center w-[1024px] min-w-[1024px] bg-blue-500 h-[550px]">ds</div>
                    <div className="snap-center w-[1024px] min-w-[1024px] bg-blue-500 h-[550px]">sfs</div>
                    <div className="snap-center w-[1024px] min-w-[1024px] bg-blue-500 h-[550px]">sdf</div>
                    <div className="snap-center w-[1024px] min-w-[1024px] bg-blue-500 h-[550px]">sfds</div>
                    <div className="snap-center w-[1024px] min-w-[1024px] bg-blue-500 h-[550px]">sdfs</div>
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
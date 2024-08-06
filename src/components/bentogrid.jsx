import Section from "./section"
import { Section1 } from "./sectionnew"
import TypeWriter from "./TypeWriter"



const Bentogrid = () => {

    return(
<Section1 custompaddings="py-5" classname="sm:pt-[12rem] pt-[6rem] mt-32 mb-72" id="bent grid">
    <div className="w-full flex flex-col  items-center">
        <div className="relative z-[1] max-w-[62rem] mx-auto text-center mb-[3rem] md:mb-16 lg:mb-[4rem] w-10/12 ">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-6xl px-8 barlow-condensed-semibold mb-3">
                What we offer
            </h1>
                <TypeWriter></TypeWriter>
            </div>                        
        <div className="custom-container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 text-white w-full h-auto">
                <div className="group lg:row-span-2 border border-gray-100 rounded-[40px] p-4 flex flex-col items-left">
                <h1 className="group-hover:translate-x-2 text-2xl lg:text-3xl mt-4 lg:mt-6 transition duration-150 ease-linear">lorem ipsum</h1>
                <div className="my-4 lg:my-12 rounded-2xl overflow-hidden w-full group-hover:rotate-3 transition duration-150 ease-linear">
                    <img src="https://picsum.photos/300/300" alt="" className="w-full" />
                </div>
                <p className="mt-4 lg:mt-20 text-left group-hover:translate-x-2 transition duration-150 ease-linear">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
            </div>
                <div className="group lg:col-span-2 border border-gray-100 rounded-[40px] p-4 flex flex-col lg:flex-row items-center">
                <div className="flex flex-col mt-4 lg:mt-32 lg:ml-3 w-full lg:w-1/2 group-hover:translate-x-2 transition duration-150 ease-linear">
                    <h1 className="text-2xl lg:text-3xl mb-4 lg:mb-5">lorem ipsum</h1>
                    <p className="mb-4 lg:mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    voluptatem
                    </p>
                </div>
                <div className="overflow-hidden rounded-2xl mt-4 lg:mt-0 lg:ml-3 w-full lg:w-1/2 group-hover:-rotate-3 transition duration-150 ease-linear">
                    <img src="https://picsum.photos/700/500" alt="" className="w-full" />
                </div>
                </div>
                <div className="group lg:col-span-1 border border-gray-100 rounded-[40px] p-4 flex flex-col items-center">
                <div className="rounded-2xl overflow-hidden w-full group-hover:rotate-3 transition duration-150 ease-linear">
                    <img src="https://picsum.photos/300/130" alt="" className="w-full" />
                </div>
                <div className="mt-4 text-left group-hover:translate-x-2 transition duration-150 ease-linear">
                    <h1 className="text-2xl lg:text-3xl mb-4 ">lorem ipsum</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing reprehenderit nisi.
                    </p>
                </div>
                </div>
                <div className="group lg:col-span-1 border border-gray-100 rounded-[40px] p-4 flex flex-col items-center">
                <div className="mt-2 text-left group-hover:translate-x-2 transition duration-150 ease-linear">
                    <h1 className="text-2xl lg:text-3xl mb-4">lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="overflow-hidden rounded-2xl mt-4 lg:mt-3 w-full group-hover:rotate-3 transition duration-150 ease-linear">
                    <img src="https://picsum.photos/300/130" alt="" className="w-full" />
                </div>
                </div>
            </div>
        </div>
    </div>
</Section1>
    )
}

export {Bentogrid}
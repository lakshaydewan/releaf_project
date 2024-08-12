import Section from "./section"
import { Section1 } from "./sectionnew"
import TypeWriter from "./TypeWriter"



const Bentogrid = () => {

    return(
<Section1 custompaddings="py-5" classname="sm:pt-[12rem] pt-[6rem] mt-32 mb-72" id="bent grid">
    <div className="w-full flex flex-col  items-center z-[50]">
        <div className="relative z-[1] max-w-[62rem] mx-auto text-center mb-[3rem] md:mb-16 lg:mb-[4rem] w-10/12 ">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-6xl px-8 barlow-condensed-semibold mb-3">
                What we offer
            </h1>
                <TypeWriter></TypeWriter>
            </div>                        
        <div className="custom-container mx-auto p-4 z-40 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 text-white w-full h-auto">
                <div className="group lg:row-span-2 border border-gray-100 rounded-[40px] p-4 flex flex-col items-left bg-black">
                <h1 className="group-hover:translate-x-2 text-2xl lg:text-3xl mt-4 lg:mt-6 transition duration-150 ease-linear">Customize Your Learning</h1>
                <div className="my-4 lg:my-12 rounded-2xl overflow-hidden w-full group-hover:rotate-3 transition duration-150 ease-linear">
                    <img src="src\assets\images\syllabuspage.png" alt="" className="w-full" />
                </div>
                <p className="mt-4 lg:mt-0 text-left group-hover:translate-x-2 transition duration-150 ease-linear">
                Easily browse through your syllabus and select subjects to access videos, PDFs, and all the resources you need in one place.
                </p>
            </div>
                <div className="group lg:col-span-2 border border-gray-100 rounded-[40px] p-4 flex flex-col lg:flex-row items-center">
                <div className="flex flex-col mt-4 lg:mt-32 lg:ml-3 w-full lg:w-1/2 group-hover:translate-x-2 transition duration-150 ease-linear">
                    <h1 className="text-2xl lg:text-3xl mb-4 lg:mb-5">Integrated Learning Experience</h1>
                    <p className="mb-4 lg:mb-3">
                    Study smarter with our side-by-side video and PDF viewer. Dive deep into your subjects by watching videos and reading notes simultaneously, all on a single screen.
                    </p>
                    
                </div>
                <div className="overflow-hidden rounded-2xl mt-4 lg:mt-0 lg:ml-3 w-full lg:w-1/2 group-hover:-rotate-3 transition duration-150 ease-linear">
                    <img src="https://picsum.photos/700/500" alt="" className="w-full" />
                </div>
                </div>
                <div className="group lg:col-span-1 border border-gray-100 rounded-[40px] px-4 py-2 flex flex-col items-center">
                {/* <div className="rounded-2xl overflow-hidden w-full group-hover:rotate-3 transition duration-150 ease-linear">
                    <img src="https://picsum.photos/300/130" alt="" className="w-full" />
                </div> */}
                <div className="mt-4 text-left group-hover:translate-x-2 transition duration-150 ease-linear">
                    <h1 className="text-2xl lg:text-3xl mb-4 ">Your Study Hub</h1>
                    <div>
                    <p className="mb-5">All your study resources in one place. Watch, read, and revise without switching tabs. Our intuitive interface makes learning easier than ever.</p>
                    <p className="mb-1 flex">Seamless Integration <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ml-2 text-purple-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </p>
                    <p className="mb-1 flex">Customizable Dashboard <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ml-2 text-purple-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </p>
                    <p className="mb-1 flex">Effortless Navigation <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2 text-purple-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </p>
                    </div>
                </div>
                </div>
                <div className="group lg:col-span-1 border border-gray-100 rounded-[40px] p-4 flex flex-col items-center">
                <div className="mt-2 text-left group-hover:translate-x-2 transition duration-150 ease-linear">
                    <h1 className="text-2xl lg:text-3xl mb-4">Get Started Today</h1>
                    <p>Join our platform and dive into a world of tailored learning resources. Click the button below to explore more</p>
                </div>
                <div className="w-full mt-10 ">
                    <button className="w-full flex justify-center items-end bg-white hover:bg-purple-500 h-fit p-4 border-none rounded-2xl text-black text-2xl font-bold">Start Learning <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 flex items-end">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </button>
                </div>
                {/* <div className="overflow-hidden rounded-2xl mt-4 lg:mt-3 w-full group-hover:rotate-3 transition duration-150 ease-linear">
                    <img src="https://picsum.photos/300/130" alt="" className="w-full" />
                </div> */}
                </div>
            </div>
        </div>
    </div>
    <div className="z-[1] absolute top-[20%] left-[0%] sm:top-[50%] lg:top-[15%] sm:left-[-40%] w-[100%] md:top-[50%] -translate-x-1/2 md:w-[100%] flex justify-center">
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px]  h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                    </div>
    <div className="z-[1] absolute top-[70%] left-[80%] sm:top-[100%] lg:top-[100%] sm:left-[120%] w-[100%] md:top-[90%] -translate-x-1/2 md:w-[100%] flex justify-center">
        <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px]  border border-none rounded-full bg-purple-400 blur-[300px]"></div>
        <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
        <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
    </div>
</Section1>
    )
}

export {Bentogrid}
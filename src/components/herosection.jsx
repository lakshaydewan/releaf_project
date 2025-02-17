import { Loginbutton } from "./button"
import { Section1 } from "./sectionnew"
import {easeInOut, motion} from "framer-motion";


const Herosection = () => {
    return(
        <Section1 classname="sm:pt-[12rem] pt-[6rem] -mt-[5.25rem]" 
        id="hero">
            <div className="pt-44 relative">
                <div className="relative z-[1] max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[3rem]">
                    <h1 className="mb-6 text-white text-3xl md:text-5xl lg:text-5xl xl:text-7xl px-8 -mt-8 lg:mt-16 barlow-condensed-bold">
                        Unlock your academic potential and discover
                            <span className="inline-block relative mx-3 barlow-condensed-extrabold"
                            style={{
                                background: 'linear-gradient(45deg,#764BA2 ,#667EEA ,#764BA2)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'}}> 
                                Releaf 
                            </span> 
                        for course related resources and much more.     
                    </h1>
                    <p className="max-w-3xl mx-auto mb-6 lg:mb-8 text-white px-8 text-sm md:text-base lg:text-base xl:text-2xl barlow-condensed-light pt-10">
                        Ready to transform your learning experience. Click below to dive in
                    </p>
                    <Loginbutton content={"get started"}/>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-3xl lg:max-w-5xl xl:mb-24 sm:mt-72 mt-40 ">
                    <div className="relative z-[1] p-0.5 rounded-2xl bg-coinic-gradient">
                        <motion.div 
                        initial={{y: 50, opacity: 0.3}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1, ease: easeInOut, delay: 0.2}}
                        className="relative bg-black rounded-[1rem]">
                            <div className="h-[1.4rem] bg-gray-500 rounded-t-[0.9rem]"/>
                                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
        src="\images\syllabuspage.png"
        alt="Mobile Image"
        className="block md:hidden lg:hidden w-full h-auto"
      />
      
      <img
        src="\images\mdimage.png"
        alt="Medium Image"
        className="hidden md:block lg:hidden w-full h-auto"
      />
      
      {/* Image for large devices (lg) */}
      <img
        src="\images\lgimgae.png"
        alt="Large Image"
        className="hidden lg:block w-full h-auto"
      />
                                </div>
                            </motion.div>
                        </div>
                    {/* <div className="absolute top-[10%] lg:top-[20%] left-1/2 w-[200%] -translate-x-1/2 md:w-[150%] flex justify-center">
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[250px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                    </div>
                    <div className="absolute top-[10%] lg:top-[20%] left-1/2 w-[200%] -translate-x-1/2 md:w-[150%] flex justify-center">
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[250px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                    </div>
                    <div className="absolute top-[10%] lg:top-[20%] left-1/2 w-[200%] -translate-x-1/2 md:w-[150%] flex justify-center">
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[250px] border border-none rounded-full bg-purple-400 blur-[200px]"></div>
                    </div> */}
                    <div className="absolute top-[-280%] lg:top-[-240%] left-[49%] w-[100%] -translate-x-1/2 md:w-[100%] flex justify-center">
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px]  border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                    </div>
                    <div className="absolute top-[10%] lg:top-[20%] left-[49%] w-[100%] -translate-x-1/2 md:w-[100%] flex justify-center">
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[250px]  border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[250px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[250px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                    </div>
                </div>
            </div>
        </Section1>
    )
}

export {Herosection}
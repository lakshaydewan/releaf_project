import { Loginbutton } from "./button"
import { Section1 } from "./sectionnew"


const Herosection = () => {
    return(
        <Section1 classname="pt-[12rem] -mt-[5.25rem]"
        id="hero">
            <div className=" relative">
                <div className="relative z-[1] max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="mb-6 text-white font-bold text-3xl md:text-5xl lg:text-5xl xl:text-5xl px-8 -mt-8 lg:mt-16  ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing 
                        <span className="inline-block relative"  style={{
          background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'}} > special text</span>
                    </h1>
                    <p className="max-w-3xl  mx-auto mb-6 lg:mb-8 text-white px-8 text-sm md:text-base lg:text-base xl-text-base">subheading Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum c</p>
                    <Loginbutton  content={"get started"}/>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-3xl lg:max-w-5xl xl:mb-24 ">
                    <div className="relative z-[1] p-0.5 rounded-2xl bg-coinic-gradient">
                        <div className="relative bg-black rounded-[1rem]">
                            <div className="h-[1.4rem] bg-gray-500 rounded-t-[0.9rem]"/>
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img className="w-full" width={1024} height={490} src="src\assets\images\Screenshot 2024-07-04 230455.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[5%] left-1/2 w-[200%] -translate-x-1/2 md:w-[150%]">
                        {/* <img className="w-full" width={1440} height={1800} src="src\assets\images\Screenshot 2024-07-21 213233.png" alt="heor background" /> */}
                    </div>
                </div>
            </div>
        </Section1>
    )
}

export {Herosection}
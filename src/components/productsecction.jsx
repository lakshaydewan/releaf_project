import { PinContainer } from "./pin"
import PinComponent from "./PinComponent"
import { Section1 } from "./sectionnew"


const Productsection = () => {

    return(
        <Section1 custompaddings="pb-0 lg:pb-0 xl:pb-0" classname="sm:pt-[12rem] -mt-[5.25rem] lg:mt-[0rem] mb-72 ">
            <div className="flex justify-center">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl px-8 barlow-condensed-semibold mb-20">
                Some of Our Products
                </h1>
            </div>
                {/* <div className="relative z-[2] max-w-[62rem] mx-auto text-center mb-[6rem] md:mb-16 lg:mb-[8rem] ">
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl  px-8   ">
                        YOUR ONE STOP SOLOUTION FOR
                        <span className="inline-block relative"  style={{
                        background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'}} >ASSINMENTS EG-SHEETS AND PRACTICAL FILES</span>
                    </h1>
                </div> */}
                <div className="lg:w-10/12 md:w-11/12 lg:min-w-[1000px] md:min-w-[700px] w-10/12 grid grid-cols-1 px-5 mx-auto lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2">
                    <div className="w-4/12 h-60 flex items-center justify-center col-span-1  m-auto mb-[10rem]">
                    <PinContainer containerClassName="lg:w-[250px] md:w-[300px] w-[300px] h-80 " className="lg:w-[250px] md:w-[300px] h-80 w-[300px] flex justify-center  border-white border-2">
                    <div className="h-full w-full bg-black flex flex-col justify-center items-center "> <div className="text-white font-bold text-6xl">RE-LEAF</div>
                    <div className="text-white font-bold">Coming soon...</div></div>
                    </PinContainer>
                    </div>
                    <div className="w-4/12 h-60 flex items-center justify-center lg:col-span-1  m-auto mb-[10rem]">
                    <PinContainer containerClassName="lg:w-[250px] md:w-[300px] w-[300px] h-80" className="lg:w-[250px] md:w-[300px] md:min-w-[250px] w-[300px] h-80 flex justify-center   border-white border-2">
                    <div className="h-full w-full bg-black flex flex-col justify-center items-center "> <div className="text-white font-bold text-6xl">RE-LEAF</div>
                    <div className="text-white font-bold">Coming soon...</div></div>
                    </PinContainer>
                    </div>
                    <div className="w-4/12 h-60 flex items-center justify-center lg:col-span-1 md:col-span-2 m-auto mb-[10rem]">
                    <PinContainer containerClassName="lg:w-[250px] md:w-[300px] w-[300px] h-80" className="lg:w-[250px] md:w-[300px] w-[300px] h-80 flex justify-center  border-white border-2   ">
                        <div className="h-full w-full bg-black flex flex-col justify-center items-center "> <div className="text-white font-bold text-6xl">RE-LEAF</div>
                        <div className="text-white font-bold">Coming soon...</div></div>
                    </PinContainer>
                    </div>
                </div>
                <div className="absolute top-[10%] left-[0%] sm:top-[10%] lg:top-[80%] sm:left-[-35%] w-[100%] -translate-x-1/2 md:w-[100%] flex justify-center">
                <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px]  border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                <div className="lg:w-[700px] lg:h-[200px] w-[400px] md:h-[150px] h-[150px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                </div>
        </Section1>
    )
}

export {Productsection}
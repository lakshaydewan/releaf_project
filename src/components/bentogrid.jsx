import Section from "./section"
import { Section1 } from "./sectionnew"



const Bentogrid = () => {

    return(
        <Section1 custompaddings="py-5" classname="pt-[12rem] -mt-[5.25rem] " id="bent grid ">
            <div className="w-full flex flex-col  items-center">
            <div className="relative z-[1] max-w-[62rem] mx-auto text-center mb-[3rem] md:mb-16 lg:mb-[4rem] ">
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl  px-8   ">
                        YOUR ONE STOP SOLOUTION FOR
                        <span className="inline-block relative"  style={{
          background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'}} > STUDY MATERIAL</span>
                    </h1>
                </div>
                <div className="w-8/12 aspect-[512/1600] sm:aspect-[512/1024] md:aspect-[1024/600] gap-4 grid grid-cols-1 grid-rows-12 md:grid-cols-5 md:grid-rows-5  ">
                    <div className="row-start-1 row-end-6 md:col-start-1 md:col-end-4 bg-blue-500 border border-none rounded-3xl">czcz</div>
                    <div className="row-start-6 row-end-10 md:row-start-1 md:row-end-4 md:col-start-4 md:col-end-6 bg-red-500 border-none rounded-3xl">sfds</div>
                    <div className="row-start-10 row-end-12 md:row-start-4 md:row-end-6 md:col-start-4 md:col-end-6 bg-green-500 border-none rounded-3xl">sdfsd</div>
                </div>
                <div className="absolute top-[10%] lg:top-[75%] -left-[40%] w-[100%] -translate-x-1/2 md:w-[100%] flex justify-center">
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px]  border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px] border border-none rounded-full bg-purple-400 blur-[300px]"></div>
                </div>
                <div className="absolute top-[10%] lg:top-[25%] -right-[140%] w-[100%] -translate-x-1/2 md:w-[100%] flex justify-center ">
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px]  border border-none rounded-full bg-pink-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px] border border-none rounded-full bg-pink-400 blur-[300px]"></div>
                     <div className="lg:w-[700px] lg:h-[200px] w-[400px] h-[550px] border border-none rounded-full bg-pink-400 blur-[300px]"></div>
                </div>
            </div>
        </Section1>
    )
}

export {Bentogrid}
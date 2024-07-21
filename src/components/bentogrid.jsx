import Section from "./section"
import { Section1 } from "./sectionnew"



const Bentogrid = () => {

    return(
        <Section1 classname="pt-[12rem] -mt-[5.25rem]" id="bent grid ">
            <div className="w-full flex flex-col  items-center">
                <div className="mb-16 text-white font-bold text-3xl md:text-5xl lg:text-5xl xl:text-5xl -mt-6 px-8 ">YOUR ONE STOP FOR ALL STUDY MATERIAL</div>
                <div className="w-10/12 h-[750px] gap-4 grid grid-cols-5 grid-rows-6">
                    <div className="row-start-1 row-end-6 col-start-1 col-end-4 bg-blue-500 border border-none rounded-3xl">czcz</div>
                    <div className="row-start-1 row-end-4 col-start-4 col-end-6 bg-red-500 border-none rounded-3xl">sfds</div>
                    <div className="row-start-4 row-end-6 col-start-4 col-end-6 bg-green-500 border-none rounded-3xl">sdfsd</div>
                </div>
            </div>
        </Section1>
    )
}

export {Bentogrid}
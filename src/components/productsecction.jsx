import { PinContainer } from "./pin"
import PinComponent from "./PinComponent"
import { Section1 } from "./sectionnew"


const Productsection = () => {

    return(
        <Section1 custompaddings="py-5" classname="pt-[12rem] -mt-[5.25rem] lg:mt-[3rem] mb-[5.25rem]">
                <div className="lg:w-10/12 md:w-11/12 lg:min-w-[1000px] md:min-w-[700px] w-10/12 grid grid-cols-1 px-5 mx-auto lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2">
                    <div className="w-4/12 h-60 flex items-center justify-center col-span-1  m-auto mb-[10rem]">
                    <PinContainer className="lg:w-[250px] md:w-[300px] h-80 w-[300px] flex justify-center  ">
                        <div className="h-full w-full bg-blue-500"></div>
                    </PinContainer>
                    </div>
                    <div className="w-4/12 h-60 flex items-center justify-center lg:col-span-1  m-auto mb-[10rem]">
                    <PinContainer className="lg:w-[250px] md:w-[300px] md:min-w-[250px] w-[300px] h-80 flex justify-center  ">
                        <div className="h-full w-full bg-blue-500"></div>
                    </PinContainer>
                    </div>
                    <div className="w-4/12 h-60 flex items-center justify-center lg:col-span-1 md:col-span-2 m-auto mb-[10rem]">
                    <PinContainer className="lg:w-[250px] md:w-[300px] w-[300px] h-80 flex justify-center  ">
                        <div className="h-full w-full bg-blue-500"></div>
                    </PinContainer>
                    </div>
                </div>
        </Section1>
    )
}

export {Productsection}
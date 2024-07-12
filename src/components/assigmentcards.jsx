import { useAuth0 } from "@auth0/auth0-react";
import { PinContainer } from "./pin";
import exp from "constants";

function Assigenmentscards(){

    return <div className=" w-full space-y-8  flex justify-center h-[700px] md:h-[1100px] border border-white py-6">
       <div id="content div" className="w-10/12 flex  flex-col space-y-16">
            <div id="upper div" className="w-full flex justify-between">
                <div id="left section" className="w-1/2">
                    <div id="text" className="w-4/5">
                        <div className="text-5xl text-white font-bold">Your Source for Ready-made Assignments</div>
                    </div>
                    <div id="image or video "></div>
                </div>
                <div id="right section" className="w-1/2">
                    <div className="text-white text-2xl font-semibold">Get practical files, assignments, and EG sheets done for you, giving you more time to focus on what matters.</div>
                </div>
            </div>
            <div id="lower div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1 border w-[356px] h-[353px] py-16 border-white flex items-center"><PinContainer
                        title="/assignmets"
                        href="/assigment/assigment"
                        containerClassName="w-[300px] ml-[16px]"
                    ><div className=" relative w-[20rem] h-[20rem] ">
                        <img src="src\assets\images\Screenshot 2024-07-04 230455.png" alt="" />
                    </div>
                </PinContainer></div>
                <div className="col-span-1 border w-[356px] h-[353px] border-white "><PinContainer
                        title="/assignmets"
                        href="/assigment/assigment"
                    ><div className=" relative w-[20rem] h-[20rem] ">
                        <img src="src\assets\images\Screenshot 2024-07-04 230455.png" alt="" />
                    </div>
                </PinContainer></div>
                <div className="col-span-1 border w-[356px] h-[353px] border-white md:col-span-2 md:flex md:justify-center lg:col-span-1 "><PinContainer
                        title="/assignmets"
                        href="/assigment/assigment"
                    ><div className=" relative w-[20rem] h-[20rem] ">
                        <img src="src\assets\images\Screenshot 2024-07-04 230455.png" alt="" />
                    </div>
                </PinContainer></div>

                
            </div>
        </div>
    </div>
}

export {Assigenmentscards}
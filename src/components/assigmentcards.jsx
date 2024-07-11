import { useAuth0 } from "@auth0/auth0-react";
import { PinContainer } from "./pin";
import exp from "constants";

function Assigenmentscards(){

    return <div className=" w-full space-y-8  flex justify-center h-fit items-center">
       <div id="content div" className="w-10/12 flex  flex-col items-center space-y-8">
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
            <div id="lower div" className="flex w-full justify-between">
                <div className="w-4/12"><PinContainer
                    title="/assignmets"
                    href="/assigment/assigment"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Aceternity UI
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        Customizable Tailwind CSS and Framer Motion Components.
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    <img src="src\assets\images\Screenshot 2024-07-04 230455.png" alt="" />
                    </div>
                </PinContainer></div>
                <div className="w-4/12"><PinContainer
                    title="/practical-file"
                    href="/assigment/practicalfile"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Aceternity UI
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        Customizable Tailwind CSS and Framer Motion Components.
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    <img src="src\assets\images\Screenshot 2024-07-04 230455.png" alt="" />
                    </div>
                </PinContainer></div>
                <div className="w-4/12"><PinContainer
                    title="/EG-sheets"
                    href="/assigment/egsheets"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Aceternity UI
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        Customizable Tailwind CSS and Framer Motion Components.
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    <img src="src\assets\images\Screenshot 2024-07-04 230455.png" alt="" />
                    </div>
                </PinContainer></div>
            </div>
        </div>
    </div>
}

export {Assigenmentscards}
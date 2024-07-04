import { useAuth0 } from "@auth0/auth0-react";

function Assigenmentscards(){

    return <div className=" w-full space-y-8  flex justify-center">
       <div id="content div" className="w-10/12 flex flex-col items-center space-y-8">
            <div id="upper div" className="w-full flex justify-between">
                <div id="left section" className="w-1/2">
                    <div id="text" className="w-4/5">
                        <div className="text-3xl text-white font-bold">Your Source for Ready-made Assignments</div>
                    </div>
                    <div id="image or video "></div>
                </div>
                <div id="right section" className="w-1/2">
                    <div className="text-white text-2xl font-semibold">Get practical files, assignments, and EG sheets done for you, giving you more time to focus on what matters.</div>
                </div>
            </div>
            <div id="lower div" className="flex w-full justify-between">
                <div className="h-96 bg-blue-500 min-w-20% w-5/12 border border-none rounded-3xl" style={{transition : "width 0.3s ease"}}></div>
                <div className="h-96 bg-blue-700 min-w-20% w-3/12 border border-none rounded-3xl hover:w-3/5 hover:min-w-60%" style={{transition : "all 0.5s ease"}}></div>
                <div className="h-96 bg-blue-500 min-w-20% w-3/12 border border-none rounded-3xl hover:w-3/5 hover:min-w-60%" style={{transition : "all 0.5s ease"}}></div>
            </div>
       </div>
    </div>
}

export {Assigenmentscards}
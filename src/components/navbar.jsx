import { User, useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loginbutton } from "./button";

function Navbar(){
    const navigate = useNavigate()
    const { user, loginWithRedirect,logout } = useAuth0();
    const username = (user) ?
    (user.name.split("")[0]) : ("");

    return <div className="fixed top-0 w-full z-10 bg-[#0a0a0a]/85 backdrop-blur-xl border-b-[0.5px] border-white">
        <div className="flex justify-between h-0 items-center p-[32px]">
        <div className="flex w-48 h-full text-white items-center justify-center">LOGO</div>
        <div className="flex w-1/2 h-full items-center font-normal justify-center space-x-12">
            <div onClick={(e) => {
                navigate("/")
            }} className="hover:font-medium text-[#838383] text-sm hover:text-white cursor-pointer duration-200 hover:underline hover:underline-offset-[8px] hover:decoration-1 hover:scale-103 hover:bg-[#1f1f1f] px-2 py-1 rounded-sm">HOME</div>
            <div onClick={(e) => {
                navigate("/assigment")
            }} className="hover:font-medium text-white cursor-pointer duration-200">ASSIGENMENTS</div>
            <div onClick={(e) => {
                navigate("/studyresources")
            }} className="hover:font-medium text-white cursor-pointer duration-200">RESOURCES</div>
            <div className="hover:font-medium text-white cursor-pointer duration-200">STORE</div>
        </div>
        <div className="flex w-48 h-full items-center justify-center">
           {
            (user) ? (
                <>
                <div className="flex justify-center">
                    <button onClick={() => {
                        navigate("/mycart")
                    }} className="w-8 h-8 border border-none rounded-full bg-white flex justify-center items-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                </button>
                    <button onClick={() => {
                        navigate("/profilepage")
                    }} className="w-8 h-8 border border-none rounded-full bg-white">U</button>
                </div>
                </>
            ) : (
                <>
                <div>
                </div>
                </>
               )
           } {
            (user) ? (
                <>
                    <div>
                        {username}
                    </div>
                </>
            ) : (
                <>
                    <Loginbutton />
                </>
            )
           }
        </div>
    </div>
    </div>
}

export {Navbar}



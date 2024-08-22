import { User, useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loginbutton } from "./button";
import { useRecoilState } from "recoil";
import { SideBarAtom, WidthAtom, WidthAtom2 } from "../atoms/atoms";

function Navbar(){

    const [width, setWidth] = useRecoilState(WidthAtom);
    const [visible,setvisible] = useState(false);
    const [width2, setwidth2] = useRecoilState(WidthAtom2);
    const navigate = useNavigate()
    const { user, loginWithRedirect, logout, isLoading } = useAuth0();
    if (user){
        console.log("the user", user)

    }else{
        console.log("no user")
    }
    const username = (user) ?
    (user.name.split("")[0]) : ("");

    return <div className="sticky top-0 w-full z-50 bg-black barlow-condensed-bold">
        <div className="flex justify-between h-0 items-center py-8">
        <div className="flex w-48 h-full text-white items-center justify-center lg:hidden">
            <div className="flex justify-start w-28">
                <button className="w-fit" onClick={() => {
                    if (width == "w-0"){
                        console.log("hii")
                        setWidth("w-60")
                        setwidth2("w-0")
                    }else{
                        console.log("byee")
                        setWidth("w-0")
                    }
                    
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>
                </button>
            </div>
        </div>
        <div className="flex w-48 h-full text-white items-center justify-center">LOGO</div>
        <div className="font-normal hidden 
                        lg:flex lg:w-1/2 lg:h-full lg:items-center lg:justify-center lg:space-x-0 lg:visible ">
            <div onClick={(e) => {
                navigate("/")
            }} className="text-[#838383] text-lg hover:text-white cursor-pointer duration-200 hover:decoration-1 hover:scale-103 hover:bg-[#1f1f1f] px-4 py-1 rounded-lg font-normal">Home</div>
            <div onClick={(e) => {
                navigate("/studylayout")
            }} className="text-[#838383] text-lg hover:text-white cursor-pointer duration-200 hover:decoration-1 hover:scale-103 hover:bg-[#1f1f1f] px-4 py-1 rounded-lg font-normal">Playlists</div>
            <div onClick={(e) => {
                navigate("/studyresources")
            }} className="text-[#838383] text-lg hover:text-white cursor-pointer duration-200 hover:decoration-1 hover:scale-103 hover:bg-[#1f1f1f] px-4 py-1 rounded-lg font-normal">Resources</div>
            <div className="text-[#838383] text-lg hover:text-white cursor-not-allowed duration-200 hover:decoration-1 hover:scale-103 hover:bg-[#1f1f1f] px-4 py-1 rounded-lg font-normal ">Store</div>
            <div className="text-[#838383] text-lg hover:text-white cursor-not-allowed duration-200 hover:decoration-1 hover:scale-103 hover:bg-[#1f1f1f] px-4 py-1 rounded-lg font-normal ">Info</div>
        </div>
        <div className="flex w-48 h-full items-center justify-center ">
            {isLoading ? 
            (<div className="text-white">Loading...</div>) : (
                user ? (
                    <div className="flex justify-end w-32 mr-8 absolute">
                        {/* will be updated later */}
                    {/* <button onClick={() => {
                        navigate("/mycart")
                    }} className="w-8 h-8 border border-none rounded-full bg-white flex justify-center items-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                </button> */}
                    <button onClick={() => {
                        setvisible(true)
                    }} ><div className="w-8 h-8 border border-none rounded-full bg-white">{username}</div>
                    {visible && (<div className=" absolute left-1/2 transform  border z-[1] border-white rounded-md w-fit px-2 py-1 hover:bg-[#1f1f1f]  max-h-60 h-fit  bg-black">
                    <div className="h-fit py-1 flex items-center text-center justify-center bg-transparent  rounded-md text-white  cursor-pointer " onClick={() => {
                    setvisible(false)
                    logout()

           }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                </svg>
                <div>logout</div>
                </div>
                    </div>)}
                    </button>
                </div>
                ) : (
                    <div className="w-32 flex justify-end lg:w-48 lg:justify-center">
                        <Loginbutton content={"sign up"} ONClick={() => {
                    console.log("hello it reaches here")
                    loginWithRedirect()
                }} />
                </div>
                )
            )
        }
        </div>
    </div>
    </div>
}

export {Navbar}

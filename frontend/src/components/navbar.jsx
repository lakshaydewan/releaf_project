import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate()
    const { user, loginWithRedirect,logout } = useAuth0();

    return <div className="flex justify-between h-20 items-center bg-white p-10 ">
        <div className="flex w-48 h-full items-center justify-center">LOGO</div>
        <div className="flex w-1/2 h-full items-center font-normal justify-center space-x-20">
            <div className="hover:font-medium cursor-pointer duration-200">HOME</div>
            <div onClick={(e) => {
                navigate("/assigment")
            }} className="hover:font-medium cursor-pointer duration-200">ASSIGENMENTS</div>
            <div className="hover:font-medium cursor-pointer duration-200">RESOURCES</div>
            <div className="hover:font-medium cursor-pointer duration-200">STORE</div>
        </div>
        <div className="flex w-48 h-full items-center justify-center">
        <button onClick={() => {
                
                    console.log("the user", user )
                    logout()
                
            }} className="overflow-hidden border-0 bg-blue-500 h-14 w-44 border rounded-full">
                <div className="w-"></div>logout</button>
            <button onClick={() => {
                if(user){
                    console.log(user)
                }else{
                    console.log("the user", user )
                    loginWithRedirect()
                }
            }} className="overflow-hidden border-0 bg-blue-500 h-14 w-44 border rounded-full">
                <div className="w-"></div>login</button>
        </div>
    </div>
}

export {Navbar}
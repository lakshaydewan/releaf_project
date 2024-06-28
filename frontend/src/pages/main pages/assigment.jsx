import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Assigenmentpage(){
    const { user, loginWithRedirect,logout } = useAuth0();
    const navigate = useNavigate()
    useEffect(() => {
        if (user){
            console.log("hello user")
        }else{
            console.log("byee user")
            navigate("/")
        }
        
    })

    return <div>
        this is the ASSIGENMENTS pages
    </div>
}

export {Assigenmentpage}
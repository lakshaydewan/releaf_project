import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Assigmentpagebanner } from "../../components/assigmentpagebanner";
import { Productlist } from "../../components/assignment-page-productlist";
import { Sidemenubar } from "../../components/sidemenubar";

function Assigenmentpage(){
    const { user, loginWithRedirect,logout } = useAuth0();
    const navigate = useNavigate()
    useEffect(() => {
        if (user){
            return 
        }else{
            navigate("/")
        }
        
    })

    return <div className="">
        <Navbar />
        <Sidemenubar />
        <Assigmentpagebanner />
        <Productlist />

    </div>
}

export {Assigenmentpage}
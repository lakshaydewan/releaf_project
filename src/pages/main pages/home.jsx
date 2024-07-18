import { useEffect } from "react";
import { Assigenmentscards } from "../../components/assigmentcards";
import { Banner } from "../../components/banner";
import { FAQ } from "../../components/FAQs";
import { Navbar } from "../../components/navbar";
import { News } from "../../components/news";
import PinComponent from "../../components/PinComponent";
import Section from "../../components/section";
import { useAuth0 } from "@auth0/auth0-react";
import { Sidemenubar } from "../../components/sidemenubar";

//#755ae2
function Home(){

    const { user,getAccessTokenSilently} = useAuth0()

    useEffect(() => {
        const fetchdata = async() => {
                const token = await getAccessTokenSilently();
                console.log("hello")
                console.log(token)
        }
        fetchdata()
        
    },[])


    
    return <div className="bg-black space-y-8">
        <Navbar />
        <Sidemenubar />
        <Banner />
        <Section></Section>
        <Assigenmentscards />
        <News />
        <FAQ />
        <PinComponent />
    </div>
}

export {Home}
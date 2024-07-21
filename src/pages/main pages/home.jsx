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
import { Herosection } from "../../components/herosection";
import { Bentogrid } from "../../components/bentogrid";
import { Section1 } from "../../components/sectionnew";

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


    
    return <div className="bg-black ">
        <Navbar />
        <Sidemenubar />
        <Herosection />
        <Bentogrid />
        <Assigenmentscards />
        <News />
        <Section1 custompaddings="py-5" classname="pt-[12rem] -mt-[5.25rem]" id="faq ">
        <FAQ />
        </Section1>
        
        <PinComponent />
    </div>
}

export {Home}
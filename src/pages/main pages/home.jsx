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
import { Imageslider } from "../../components/imageslider";
import { Productsection } from "../../components/productsecction";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouch";

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
        <div className="overflow-x-hidden">
        <Sidemenubar />
        <Herosection />
        <Bentogrid />
        <div className="flex justify-center">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl px-8 barlow-condensed-semibold mb-0">
                Some of Our Products
            </h1>
        </div>
        <Productsection />
        <Imageslider />
        <Section1 custompaddings="py-10" classname="pt-0 mt-[4rem]" id="faq ">
        <div className="flex justify-center">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl px-8 barlow-condensed-semibold mb-20">
                Get In Touch
            </h1>
        </div>
        <GetInTouch />
        <FAQ />
        </Section1>
        <Footer></Footer>
        </div>
        
    </div>
}

export {Home}
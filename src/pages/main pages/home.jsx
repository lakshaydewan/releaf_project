import { Assigenmentscards } from "../../components/assigmentcards";
import { Banner } from "../../components/banner";
import { FAQ } from "../../components/FAQs";
import { Navbar } from "../../components/navbar";
import { News } from "../../components/news";
import PinComponent from "../../components/PinComponent";
import Section from "../../components/section";

//#755ae2
function Home(){

    return <div className="bg-[#0a0a0a] space-y-8">
        <Navbar />
        <Banner />
        <Section></Section>
        <Assigenmentscards />
        <News />
        <FAQ />
        <PinComponent />
    </div>
}

export {Home}
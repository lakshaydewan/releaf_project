import { Assigenmentscards } from "../../components/assigmentcards";
import { Banner } from "../../components/banner";
import { FAQ } from "../../components/FAQs";
import { Navbar } from "../../components/navbar";
import { News } from "../../components/news";
import Section from "../../components/section";


function Home(){

    return <div className="bg-[#11120D] space-y-8">
        <Navbar />
        <Banner />
        <Section></Section>
        <Assigenmentscards />
        <News />
        <FAQ />
    </div>
}

export {Home}
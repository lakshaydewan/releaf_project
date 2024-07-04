import { Assigenmentscards } from "../../components/assigmentcards";
import { Banner } from "../../components/banner";
import { FAQ } from "../../components/FAQs";
import { Navbar } from "../../components/navbar";
import { News } from "../../components/news";


function Home(){

    return <div className="bg-black space-y-8">
        <Navbar />
        <Banner />
        <Assigenmentscards />
        <News />
        <FAQ />
    </div>
}

export {Home}
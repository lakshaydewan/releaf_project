import { Assigenmentscards } from "../../components/assigmentcards";
import { Banner } from "../../components/banner";
import { Navbar } from "../../components/navbar";


function Home(){

    return <div>
        <Navbar />
        <Banner />
        <Assigenmentscards />
        <div>
            <div>checkout syllabus and resources</div>
        </div>
        <div>
            <div>checkout and browse store</div>
        </div>
        <div>
            contact us
        </div>
    </div>
}

export {Home}
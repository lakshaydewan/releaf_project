import Footer from "./Footer"
import { Navbar } from "./navbar"
import { Sidemenubar } from "./sidemenubar"



function Aboutsection(props){

    
    return <div>
        <Navbar />
        <Sidemenubar />
        <div id="content" className="text-white h-fit flex flex-col items-center py-10">
            <div className="w-10/12 text-5xl font-bold py-5  border-b-2 border-white mb-5">{props.heading}</div>
            <div className="w-10/12">{props.content}</div>
        </div>
        <Footer />

    </div>
}

export {Aboutsection}
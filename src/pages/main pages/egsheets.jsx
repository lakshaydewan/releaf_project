import { Navbar } from "../../components/navbar"
import { Product1 } from "../../components/product1"
import { Sidemenubar } from "../../components/sidemenubar"



function Egsheets(){


    return <div className="space-y-8 w-full h-full" style={{backgroundColor: "black",
        }}>
        <Navbar />
        <Sidemenubar />
        <Product1 />
        
    </div>
}

export {Egsheets}
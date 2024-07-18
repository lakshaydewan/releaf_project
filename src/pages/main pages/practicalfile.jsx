import { Navbar } from "../../components/navbar"
import { Product2 } from "../../components/product2"
import { Sidemenubar } from "../../components/sidemenubar"



function Practicalfilepage(){


    return <div className="space-y-8 w-full h-full" style={{backgroundColor: "black",
    }}>
    <Navbar />
    <Sidemenubar />
    <Product2 />
    
</div>
}

export {Practicalfilepage}
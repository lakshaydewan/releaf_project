import { Navbar } from "../../components/navbar";



function Mycart(){


    return <div>
        <Navbar />
        <div className="text-5xl font-bold text-white py-10 px-20">My Cart</div>
        <div className="flex">
            <div id="productlist"></div>
            <div id="checkout"></div>
            
        </div>
    </div>
}

export {Mycart}
import { Navbar } from "../../components/navbar"
import { Sidemenubar } from "../../components/sidemenubar"



function Profilepage(){


    return <div>
        <Navbar />
        <Sidemenubar />
        <div id="main" className="flex justify-center">
        <div id="content div" className="w-full flex flex-col justify-center " style={{
            backgroundColor : "transparent",
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,0.3),rgba(44, 62, 80 ,0.3)" }}>
            <div id="profile section" className="flex flex-col justify-center items-center w-full h-[450px] ">
                <div className="w-9/12 h-[250px] bg-blue-500 relative">
                <div className="absolute top-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-red-500 rounded-full shadow-2xl overflow-hidden"> <img src="src\assets\images\Screenshot 2024-07-04 230455.png" alt="" /></div>
                <div id="details" className="h-full flex flex-col justify-end">
                    <div className="h-[170px] flex flex-col space-y-2">
                    <div id="name" className="h-1/5 flex justify-center text-3xl font-bold">User</div>
                    <div id="details" className="h-4/5">
                        <div className="w-full h-[32px] border flex  justify-between px-2 ">
                            <div className="h-full flex flex-col justify-end text-lg font-medium">college</div>
                            <div className="h-full flex flex-col justify-end text-lg font-medium">xyz college</div>
                        </div>
                        <div className="w-full h-[32px] border flex  justify-between px-2 ">
                            <div className="h-full flex flex-col justify-end text-lg font-medium">contact</div>
                            <div className="h-full flex flex-col justify-end text-lg font-medium">9999xxx999</div>
                        </div>
                        <div className="w-full h-[64px] border flex  justify-between px-2 ">
                            <div className="h-full flex flex-col justify-end text-lg font-medium">delivery adrerss</div>
                            <div className="h-full flex flex-col justify-end text-lg font-medium">plot-no xyz </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>



            <div className="flex justify-center w-full p-6">
                <div id="history" className="w-full border border-none rounded-2xl bg-white flex flex-col p-3 ">
                    <div className="flex justify-between bg-white p-3">
                        <div className="w-10 text-center">S.no</div>
                        <div className="w-40 text-center">PRODUCT NAME</div>
                        <div className="w-40 text-center">AMOUNT</div>
                        <div className="w-40 text-center">PURCHASE DATE</div>
                        <div className="w-40 text-center">DELIVERED BY</div>
                        <div className="w-40 text-center">STATUS</div>
                    </div>
                    <div id="order component" className="flex justify-between bg-white px-3">
                        <div className="w-10 text-center" id="S.no">1.</div>
                        <div className="w-40 text-center" id="product-name">eg-sheets</div>
                        <div className="w-40 text-center" id="amount">500</div>
                        <div className="w-40 text-center" id="purchase date">15.7.2024</div>
                        <div className="w-40 text-center" id="delivery date">17.7.2024</div>
                        <div className="w-40 text-center" id="status">DELIVERED</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
}

export {Profilepage}
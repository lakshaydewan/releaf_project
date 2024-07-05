


function Product3(){
    const PRICE ="XXX"

    return <div id="main div" className="w-full flex justify-center">
        <div id="main content div" className="w-10/12 space-y-10">
            <div id="content div" className="w-full flex justify-between">
                <div id="left-section" className="flex w-7/12 space-x-4" style={{height : "576px"}}>
                    <div id="image carosoul" className="flex flex-col h-full justify-between ">
                        <div className="w-44 h-44 bg-blue-500 border border-none rounded-3xl"></div>
                        <div className="w-44 h-44 bg-blue-500 border border-none rounded-3xl"></div>
                        <div className="w-44 h-44 bg-blue-500 border border-none rounded-3xl"></div>
                    </div>
                    <div id="image" className="h-full bg-blue-500 w-4/5 border border-none rounded-3xl "></div>
                </div>
                <div id="right section" className="w-4/12 space-y-10">
                    <div id="text" className="space-y-4">
                        <div id="heading" className="text-5xl font-bold text-white">PRACTICAL FILE</div>
                        <div id="subheading" className="text-md font-semibold text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio enim consequatur explicabo, hic quia odio ab quod vero harum expedita eligendi ut commodi recusandae nulla cum odit dolor itaque velit? </div>
                    </div>
                    <div id="price" className="text-3xl font-bold text-white">RS. {PRICE}</div>
                    <button className="w-full h-12 bg-white text-black border border-none rounded-3xl">ADD TO CART</button>
                </div>

            </div>
            <div className="w-full h-40 bg-blue-500 border border-none rounded-3xl">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    </div>
}

export {Product3}
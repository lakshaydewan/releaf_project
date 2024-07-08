


function Profilepage(){


    return <div id="main" className="flex justify-center">
        <div id="content div" className="w-11/12 flex flex-col justify-center border border-none rounded-2xl" style={{
            backgroundColor : "transparent",
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,0.3),rgba(44, 62, 80 ,0.3)" }}>
            <div id="profile">
                <div id="left-section" className="p-20 space-y-2">
                    <div className="h-40 w-40 border border-none rounded-full bg-blue-500"></div>
                    <div className="w-40 text-center text-white font-semibold text-2xl">user name</div>
                </div>
                <div id="right-section"></div>
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
}

export {Profilepage}
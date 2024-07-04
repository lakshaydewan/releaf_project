


function News(){

    return <div className="w-full flex justify-center">
        <div className="w-10/12 space-y-8  ">
            <div className="space-y-8">
                <div className="w-full text-white flex justify-between items-center">
                    <div className="text-5xl font-bold">LATEST NEWS IN IPU</div>
                    <button className="border rounded-2xl bg-white text-black w-32 h-12">check out</button>
                </div>
                <div className="w-full border border-white"></div>
            </div>
            <div className="flex space-x-8">
                <div className="w-5/12 bg-blue-500 h-72"></div>
                <div className="w-3/12 bg-blue-500 h-72"></div>
                <div className="w-3/12 bg-blue-500 h-72"></div>
            </div>
            <div className="flex space-x-8">
                <div className="w-3/12 bg-blue-500 h-72"></div>
                <div className="w-3/12 bg-blue-500 h-72"></div>
                <div className="w-5/12 bg-blue-500 h-72"></div>
            </div>
        </div>
    </div>
}

export {News}
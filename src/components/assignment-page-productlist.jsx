import { useNavigate } from "react-router-dom"


function Productlist(){
    const navigate = useNavigate()


    return <div className="w-full  flex justify-center py-6 ">
        <div id="content div" className="w-10/12 space-y-20">
        <div id="heading" className="text-white font-bold text-5xl text-center"> what we make</div>
            <div id="subcontendiv" className=" h-[500px] flex flex-col items-center w-full space-x-4  p-8 border rounded-3xl border-none
            lg:flex-row lg:space-x-4 lg:p-8
            md:flex-row md:space-x-4 md:p-8" style={{
            backgroundColor : "transparent",
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,0.3),rgba(44, 62, 80 ,0.3)" }}>
                <div id="image section" className="w-full  flex justify-center
                lg:w-1/2
                md:w-1/2">
                    <div className=" h-[200px] min-w-[200px] w-[600px] bg-blue-500 
                    md:w-[300px] md:h-[300px] md:min-w-[300px] md:min-h-[300px]
                    lg:min-w-[400px] lg:min-h-[400px] lg:w-4/5 lg:h-96
                    sm:h-[200px]"></div>
                </div>
                <div id="text section" className="w-1/2 space-y-8 md:space-y-2">
                    <div id="heading" className="text-white text-5xl md:text-4xl font-bold "> Assignment</div>
                    <div id="sub-text" className="text-white w-full" > dfjlksd jflksdjfl sdjflksdjlfsjfkls   jflksjdflksjfjsdlfsajdflk sjflksadjf saldfjsadj fsdl</div>
                    <div id="sub headings">
                        <div className="text-white text-2xl">upload your assigment</div>
                        <div className="text-white text-2xl">fast delivery</div>
                        <div className="text-white text-2xl">neat and clean work</div>
                        <div className="text-white text-2xl">custome delivery dates</div>
                    </div>
                    <button onClick={() => {
                        navigate("/assigment/assigment")
                    }} className="flex itmes-center bg-white p-2 w-fit h-fit font-semibold border border-none rounded-xl">buy now</button>
                </div>
                
               
            </div>
            <div id="subcontendiv" className="flex w-full space-x-4 h-auto p-8 border rounded-3xl border-none" style={{
            backgroundColor : "transparent",
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,0.3),rgba(44, 62, 80 ,0.3)" }}>
                <div id="text section" className="w-1/2 space-y-8">
                    <div id="heading" className="text-white text-5xl font-bold "> Assignment</div>
                    <div id="sub-text" className="text-white w-full" >kasjfjhghjghghgj jhgjh gjhgjhg jhgjhgj sdfjsldjfl ksjfsjdklfjs dfjlksd jflksdjfl sdjflksdjlfsjfkls   jflksjdflksjfjsdlfsajdflk sjflksadjf saldfjsadj fsdl</div>
                    <div id="sub headings">
                        <div className="text-white text-2xl">upload your cusome assigment</div>
                        <div className="text-white text-2xl">fast delivery</div>
                        <div className="text-white text-2xl">neat and clean work</div>
                        <div className="text-white text-2xl">custome delivery dates</div>
                    </div>
                    <button onClick={() => {
                        navigate("/assigment/egsheets")
                    }} className="flex itmes-center bg-white p-2 w-fit h-fit font-semibold border border-none rounded-xl">buy now</button>
                </div>
                <div id="image section" className="w-1/2 flex justify-center">
                    <div className="w-4/5 h-96 bg-blue-500"></div>
                </div>
                
               
            </div>
            <div id="subcontendiv" className="flex w-full space-x-4 h-auto p-8 border rounded-3xl border-none" style={{
            backgroundColor : "transparent",
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,0.3),rgba(44, 62, 80 ,0.3)" }}>
                <div id="image section" className="w-1/2 flex justify-center">
                    <div className="w-4/5 h-96 bg-blue-500"></div>
                </div>
                <div id="text section" className="w-1/2 space-y-8">
                    <div id="heading" className="text-white text-5xl font-bold "> Assignment</div>
                    <div id="sub-text" className="text-white w-full" >kasjfjhghjghghgj jhgjh gjhgjhg jhgjhgj sdfjsldjfl ksjfsjdklfjs dfjlksd jflksdjfl sdjflksdjlfsjfkls   jflksjdflksjfjsdlfsajdflk sjflksadjf saldfjsadj fsdl</div>
                    <div id="sub headings">
                        <div className="text-white text-2xl">upload your cusome assigment</div>
                        <div className="text-white text-2xl">fast delivery</div>
                        <div className="text-white text-2xl">neat and clean work</div>
                        <div className="text-white text-2xl">custome delivery dates</div>
                    </div>
                    <button onClick={() => {
                        navigate("/assigment/practicalfile")
                    }} className="flex itmes-center bg-white p-2 w-fit h-fit font-semibold border border-none rounded-xl">buy now</button>
                </div>
                
               
            </div>
        </div>
    </div>
}

export {Productlist}
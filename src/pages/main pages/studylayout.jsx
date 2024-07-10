import { useRecoilState } from "recoil"
import { Navbar } from "../../components/navbar"
import { SideBarAtom, WidthAtom } from "../../atoms/atoms"



function Studylyout() {
    const [width, setWidth] = useRecoilState(WidthAtom);
    const [isopen, setIsopen] = useRecoilState(SideBarAtom)

    return <div className="flex flex-col">
        <Navbar />
        <div className="mt-[48px]">
        <div className={`h-screen ${width} bg-white fixed top-0 mt-[56px] flex transition-all ease-in-out duration-1000`}>
            <div>
                {
                    (isopen) ? (
                        <div>
                            <button onClick={()=> {
                                setWidth("w-12");
                                setIsopen(!isopen);
                            }}>Close</button>
                        </div>
                    ): (
                        <button onClick={()=> {
                            setWidth("w-44");
                            setIsopen(!isopen);
                        }}>icon</button>
                    )
                }
            </div>
        </div>
        <div className="flex justify-between">
        <div className="w-[900px] p-3 h-screen flex flex-col space-y-4">
            <iframe className="w-full h-[495px] border border-none rounded-3xl ml-[37px]" src="https://www.youtube.com/embed/z5yvZW8Ep-E?si=7SvG7BW7OH2n54nE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="w-full flex grow ">
                <div className="w-1/2"></div>
                <div className="w-1/2 space-y-2">
                    <button className="w-full bg-white text-black h-1/2 border text-2xl font-bold border-none rounded-3xl">CHECKOUT ALL VIDEOS</button>
                    <button className="w-full bg-white text-black h-1/2 border text-2xl font-bold border-none rounded-3xl">CHECKOUT ALL PDFs</button>
                </div>
            </div>
        </div>
        <div className="min-w-96 w-2/5 h-screen grow py-3 mt-0">
        <iframe src="src\assets\pdfs\Untitled document.pdf#toolbar=0&view=FitH" className="h-full w-full border-y-4 border-gray-700"></iframe>
        </div>
    </div>
    <div className="h-screen w-full p-3 flex justify-around ">
    <iframe src="src\assets\pdfs\Untitled document.pdf#toolbar=0&view=FitH" className="h-full w-2/5 border-y-4 border-gray-700"></iframe>
    <iframe src="src\assets\pdfs\Untitled document.pdf#toolbar=0&view=FitH" className="h-full w-2/5 border-y-4 border-gray-700"></iframe>
    </div>
    <div>

    </div>
    </div>
    </div>
}

export {Studylyout}
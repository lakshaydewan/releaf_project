import { useRecoilState } from "recoil"
import { Navbar } from "../../components/navbar"
import { SideBarAtom, SideBarAtom2, WidthAtom, WidthAtom2 } from "../../atoms/atoms"
import { Sidemenubar } from "../../components/sidemenubar";
import { Sidemenubar2 } from "../../components/sidemenubar2";
import { useEffect, useRef, useState } from "react";
import { pdflinks } from "../../components/links";
import { useLocation } from "react-router-dom";




function Studylyout() {
    const [width, setWidth] = useRecoilState(WidthAtom);
    const [isopen, setIsopen] = useRecoilState(SideBarAtom);
    const [width2, setwidth2] = useRecoilState(WidthAtom2);
    const [isopen2, setisopen2] = useRecoilState(SideBarAtom2);
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const videolink = queryParams.get('link') || '';
    const pdf = queryParams.get("pdflink" || "")
    console.log(pdf)
    
    function findObjectByTitle(title) {
            for (const subject of pdflinks) {
                console.log("program running")
              const foundLink = subject.links.find(link => link.title === title);
              if (foundLink) {
                console.log("linkfound")
                return foundLink.src;

              }
            }
            return null; // Return null if not found
          }

    
          const iframeref = useRef(null)

          useEffect(() => {
            const pdflink = findObjectByTitle(pdf);
            if (pdflink && iframeref.current) {
              iframeref.current.src = `${pdflink}#toolbar=0&view=FitH`;
            }
          }, [pdf]);
          console.log("page re-rendered")

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    


    return <div className="flex flex-col bg-fuchsia-50">
        <Navbar />
        <Sidemenubar />
        <Sidemenubar2 />
        <div className="w-full flex justify-end">hello , {pdf}</div>
        <div className="p-0 mt-[-9px]">
        <div className="flex justify-between">
        <div className="w-full">
        {(videolink == "") ? (<div className="w-full h-full">
            <button onClick={() => {
                    if (width2 == "w-0"){
                        setwidth2("w-96")
                    }else{
                        setwidth2("w-0")
                    }
                    
                }} className="w-10/12 h-20">Add video</button>
        </div>)    : <div className="w-3/5 p-3 h-screen flex flex-col space-y-2"><iframe className="w-full aspect-[16/9] border border-none rounded-lg" src={videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="w-full flex grow ">
                <div className="w-1/2"></div>
                <div className="w-1/2 space-y-2">
                    <button onClick={() => {
                    if (width2 == "w-0"){
                        setwidth2("w-96")
                    }else{
                        setwidth2("w-0")
                    }
                    
                }} className="w-full bg-white text-black h-1/2 border text-2xl font-bold border-none rounded-3xl">CHECKOUT ALL VIDEOS</button>
                    {/* this area is commented will be checked later */}
                    {/* <button className="w-full bg-white text-black h-1/2 border text-2xl font-bold border-none rounded-3xl">CHECKOUT ALL PDFs</button> */}
                </div>
            </div></div>}
        </div>
        <div className="min-w-96 w-2/5 h-screen grow py-3 mt-0">
        {(pdf == null) ? (<div className="w-full h-full">
            <button onClick={() => {
                    if (width2 == "w-0"){
                        setwidth2("w-96")
                    }else{
                        setwidth2("w-0")
                    }
                    
                }} className="w-10/12 h-20">Add pdf</button>
        </div>)  :  <iframe ref={iframeref}  className="h-full w-full border-y-4 border-gray-700"></iframe>}
        </div>
    </div>
    <div className="h-screen w-full p-3 flex justify-around ">
    <iframe src="src\assets\pdfs\TEAM - ZERO DEGREES (2).pdf#toolbar=0&view=FitH" className="h-full w-1/2 border-y-4 border-gray-700"></iframe>
    <iframe src="src\assets\pdfs\TEAM - ZERO DEGREES (2).pdf#toolbar=0&view=FitH" className="h-full w-1/2 border-y-4 border-gray-700"></iframe>
    </div>
    <div>

    </div>
    </div>
    </div>
}

export {Studylyout}
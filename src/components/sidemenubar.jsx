import { useRecoilState } from "recoil";
import { SideBarAtom, WidthAtom } from "../atoms/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Sidemenubar(){
    const [width, setWidth] = useRecoilState(WidthAtom);
    const [isopen, setIsopen] = useRecoilState(SideBarAtom)
    const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setWidth('w-0'); 
        setIsopen(false);
      } 
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth, setIsopen]);

    

    return <div className={`h-screen ${width} lg-hidden lg-w-0 bg-black fixed top-[56px] flex transition-all text-white ease-in-out duration-1000 z-[5] space-y-3 overflow-hidden`}>
        <div className="h-full w-full">
            <button onClick={() => {
                setWidth("w-0")
                navigate("/")
            }} className="w-full h-[40px] border-white border-b-2 flex items-end text-2xl font-semibold px-2 hover:bg-[#1f1f1f]">Home</button>
            <button onClick={() => {
                setWidth("w-0")
                navigate("/assigment")
            }} className="w-full h-[40px] border-white border-b-2 flex items-end text-2xl font-semibold px-2 hover:bg-[#1f1f1f]">ASSIGNMENT</button>
            <button onClick={() => {
                setWidth("w-0")
                navigate("/studyresources")
            }} className="w-full h-[40px] border-white border-b-2 flex items-end text-2xl font-semibold px-2 hover:bg-[#1f1f1f]">RESOURCES</button>
            <button onClick={() => {
                setWidth("w-0")
                navigate("/Home")
            }} className="w-full h-[40px] border-white border-b-2 flex items-end text-2xl font-semibold px-2 hover:bg-[#1f1f1f]">STUDYLAYOUT</button>
        </div>
    </div>
}

export {Sidemenubar}
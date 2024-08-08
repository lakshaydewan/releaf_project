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

    

    return <div className={`h-screen ${width} lg-hidden lg-w-0 bg-black fixed top-[56px] flex-col transition-all text-white ease-in-out duration-1000 z-[5] space-y-3 overflow-hidden `}>
        <div className="w-full flex justify-end pt-3 px-3 "><div className="relative group" onClick={() => {
        setWidth("w-0")
      }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 cursor-pointer transition-all ease-in-out duration-500 fill-black stroke:white hover:fill-white hover:stroke-black">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <div className="absolute z-[20] bottom-[-30px] mb-2 left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      close
      </div>

        </div></div>
        <div className="h-full w-full">
            <button onClick={() => {
                setWidth("w-0")
                navigate("/")
            }} className="w-full h-[40px]  flex items-end text-2xl font-semibold px-2 hover:bg-[#1f1f1f]">Home</button>
            <button onClick={() => {
                setWidth("w-0")
                navigate("/assigment")
            }} className="w-full h-[40px]  flex items-end text-2xl font-semibold px-2 hover:bg-[#1f1f1f]">ASSIGNMENT</button>
            <button onClick={() => {
                setWidth("w-0")
                navigate("/studyresources")
            }} className="w-full h-[40px]  flex items-end text-2xl font-semibold px-2 hover:bg-[#1f1f1f]">RESOURCES</button>
            <button onClick={() => {
                setWidth("w-0")
                navigate("/Home")
            }} className="w-full h-[40px]  flex items-end text-2xl font-semibold px-2 hover:bg-[#1f1f1f]">STUDYLAYOUT</button>
        </div>
    </div>
}

export {Sidemenubar}
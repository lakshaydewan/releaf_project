import { useRecoilState } from "recoil";
import { SideBarAtom, SideBarAtom2, WidthAtom, WidthAtom2 } from "../atoms/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Sidemenubar2(){
    const [width2, setwidth2] = useRecoilState(WidthAtom2);
    const [isopen2, setisopen2] = useRecoilState(SideBarAtom2)
    const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setwidth2('w-0'); 
        setisopen2(false);
      } 
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setwidth2, setisopen2]);

    

    return <div className={`h-screen ${width2} lg-hidden lg-w-0 bg-white fixed top-[56px] flex transition-all ease-in-out duration-1000 z-[5] space-y-3 overflow-hidden`}>
        <div className="h-full w-full">
            <button onClick={() => {
                setwidth2("w-0")
                navigate("/")
            }} className="w-full h-[40px] border-black border-b-2 flex items-end text-2xl font-semibold px-2 hover:text-white hover:bg-black">Home</button>
            <button onClick={() => {
                setwidth2("w-0")
                navigate("/assigment")
            }} className="w-full h-[40px] border-black border-b-2 flex items-end text-2xl font-semibold px-2 hover:text-white hover:bg-black">ASSIGNMENT</button>
            <button onClick={() => {
                setwidth2("w-0")
                navigate("/studyresources")
            }} className="w-full h-[40px] border-black border-b-2 flex items-end text-2xl font-semibold px-2 hover:text-white hover:bg-black">RESOURCES</button>
            <button onClick={() => {
                setwidth2("w-0")
                navigate("/Home")
            }} className="w-full h-[40px] border-black border-b-2 flex items-end text-2xl font-semibold px-2 hover:text-white hover:bg-black">STUDYLAYOUT</button>
        </div>
    </div>
}

export {Sidemenubar2}



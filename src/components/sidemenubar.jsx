import { useRecoilState } from "recoil";
import { SideBarAtom, WidthAtom } from "../atoms/atoms";



function Sidemenubar(){
    const [width, setWidth] = useRecoilState(WidthAtom);
    const [isopen, setIsopen] = useRecoilState(SideBarAtom)
    

    return <div className={`h-screen ${width} bg-white fixed top-[24px] flex transition-all ease-in-out duration-1000 z-[5]`}>
        <div className="h-full">
            <div>Home</div>
            <div>assigment</div>
            <div>studyresources</div>
            <div>studylatyout</div>
        </div>
    </div>
}

export {Sidemenubar}
import { useState } from "react"
import { useRecoilState } from "recoil";
import { branchatom, semesteratom } from "../atoms/atoms";



function Dropdown(props){


    const[visible,setvisible] = useState(false);
    const[content,setcontent] = useState(props.content);
    const[semester,setsemester] = useRecoilState(semesteratom);
    const[branch,setbranch] = useRecoilState(branchatom);



    return <div className="space-y-1 relative">
        <button className="w-28 h-fit p-1  border border-none rounded-md text-center bg-white
        lg:w-60 lg:p-3
        md:w-60 md:p-3
        sm:w-40 sm:p-3" onClick={() => {
            setvisible(!visible)
        }}>{content}</button>

        <div className={`${visible ? 'block' : 'hidden'} absolute border border-white rounded-md w-28 h-fit p-3 lg:w-60 md:w-60 sm:w-40`} style={{
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,1),rgba(44, 62, 80 ,1)" }}>
            {props.items.map(item => {
                return <div key={item} className="h-8 flex items-center justify-center bg-transparent border border-none rounded-md text-white  cursor-pointer hover:bg-gray-500" onClick={() => {
                    setvisible(false)
                    setcontent(item)
                    if(props.content == "SEMESTER"){
                        setsemester(item)
                    }else if(props.content == "BRANCH"){
                        setbranch(item);
                    }

                }}>{item}</div>
            })}
        </div>
    </div>
}

export {Dropdown}
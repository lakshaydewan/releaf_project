import { useState } from "react"
import { useRecoilState } from "recoil";
import { branchatom, semesteratom } from "../atoms/atoms";



function Dropdown(props){


    const[visible,setvisible] = useState(false);
    const[content,setcontent] = useState(props.content);
    const[semester,setsemester] = useRecoilState(semesteratom);
    const[branch,setbranch] = useRecoilState(branchatom);



    return <div className="space-y-1 relative">
        <button className="w-60 h-fit p-3  border border-none rounded-md text-center bg-white" onClick={() => {
            setvisible(!visible)
        }}>{content}</button>

        <div className={`${visible ? 'block' : 'hidden'} absolute border border-white rounded-2xl w-60 h-fit p-3`} style={{
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,1),rgba(44, 62, 80 ,1)" }}>
            {props.items.map(item => {
                return <div key={item} className="h-8 flex items-center justify-center bg-transparent border border-none rounded-md text-white text-black cursor-pointer hover:bg-gray-500" onClick={() => {
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
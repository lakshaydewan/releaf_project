import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import { branchatom, semesteratom } from "../atoms/atoms";



function Dropdown(props){


    const[visible,setvisible] = useState(false);
    //this commented area is first used before urls all the states have been removed in the code no state is used in the code else than visible which is used to set the visibility of the div

    // const[content,setcontent] = useState(props.content);
    // const[semester,setsemester] = useRecoilState(semesteratom);
    // const[branch,setbranch] = useRecoilState(branchatom);

    const returnValue = (item) => {
        props.onValueReturn(item);
      };


    return <div className="relative">
        <button className="w-28 h-fit p-1 text-sm border border-none rounded-md text-center bg-white
        lg:w-60 lg:p-3 lg:text-base
        md:w-60 md:p-3 md:text-base
        sm:w-40 sm:p-3 sm:text-base" onMouseEnter={() => {
            setvisible(true)
           }}
           onMouseLeave={() => {
            setvisible(false)
           }}>{props.content2? props.content2 : props.content }</button>

        <div onMouseEnter={() => {
                    setvisible(true)
                   }}
                   onMouseLeave={() => {
                    setvisible(false)
                   }} className={`${visible ? 'block' : 'hidden'} absolute border z-[1] border-white rounded-md w-28 h-fit p-3 lg:w-60 md:w-60 sm:w-40 bg-black`}>
            {props.items.map(item => {
                return <div key={item} className="h-8 flex items-center justify-center bg-transparent border border-none rounded-md text-white  cursor-pointer hover:bg-zinc-900" onClick={() => {
                    setvisible(false)
                    //this commented area is also previously used
                    // setcontent(item)
                    returnValue(item)
                    // if(props.content == "SEMESTER"){
                    //     setsemester(item)
                    // }else if(props.content == "BRANCH"){
                    //     setbranch(item);
                    // }

                }}>{item}</div>
            })}
        </div>
    </div>
}

export {Dropdown}
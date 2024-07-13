import { useRecoilValue } from "recoil";
import { Dropdown } from "../../components/dropdown";
import { Navbar } from "../../components/navbar";
import { branchatom, semesteratom } from "../../atoms/atoms";
import { useState } from "react";


function Studyresources(){

    const semester = useRecoilValue(semesteratom)
    const branch = useRecoilValue(branchatom)
    const [subject,setsubject] = useState("");
    const [visible,setvisible] = useState(false)

    const listofsubjects = [
        { id:1 ,semester:'1st', branch:'IT',  value:['APPLIED PHYSICS I', 'EVS', 'CHEMISTRY','evs','maths2','physics2','APPLIED PHYSICS I', 'EVS', 'CHEMISTRY','evs','maths2','physics2','APPLIED PHYSICS I', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'2nd', branch:'IT',  value:['APPLIED PHYSICS I2', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'3rd', branch:'IT',  value:['APPLIED PHYSICS I3', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'4th', branch:'IT',  value:['APPLIED PHYSICS I4', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'5th', branch:'IT',  value:['APPLIED PHYSICS I5', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'6th', branch:'IT',  value:['APPLIED PHYSICS I6', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},

    ]

    return <div>
        <Navbar />
        <div className="w-full flex flex-col items-center p-20 space-y-4"> 
        <div className="flex border border-white rounded-lg justify-around items-center w-[350px] h-12 
        lg:min-w-[700px] lg:w-8/12 lg:h-16
        md:w-[700px] md:h-16
        sm:w-[500px] sm:h-16">
            <div className="text-white text-xl text-bold h-full flex items-center
            lg:text-white lg:text-2xl lg:text-bold lg:h-full lg:flex lg:items-center
            md:text-white md:text-2xl md:text-bold md:h-full md:flex md:items-center
            sm:text-white sm:text-2xl sm:text-bold sm:h-full sm:flex sm:items-center"> BTECH</div>
            <Dropdown content={"SEMESTER"} items={['1st','2nd','3rd','4th','5th','6th','7th',]} />
            <Dropdown content={"BRANCH"} items={['cse','IT','IOT','CSE-AIML','CSE-AIDS','ECE','EEE',]}/>
        </div>

        <div className={`${!(semester == "" || branch == "") ? 'block' : 'hidden'} w-full flex justify-center overflow-hidden`}>
        <div id="subject div" className='border border-white rounded-lg w-8/12 h-72 overflow-hidden overflow-y-scroll'>
            <div id="text" className="text-white font-bold text-4xl px-10 py-5">Subjects</div>
            <div id="subjects">
                {listofsubjects.map(subject => {
                    if (subject.semester == semester && subject.branch == branch ){
                        return <div className="grid grid-cols-3 gap-8 px-10">
                            {subject.value.map(values => {
                            return <div className="bg-white w-60 h-10 flex items-center border border-none rounded-md">
                                <button className="w-full text-center" onClick={() => {
                                    setvisible(true)
                                    setsubject(values)
                                }
                                }>{values}</button>
                            </div>
                        })}
                        </div>
                    }
                })}
            </div>
        </div>
        </div>

        <div className={`${(visible) ? 'block' : 'hidden'} w-8/12 flex justify-between`}>
            <div className="border border-white rounded-lg w-8/12 h-72 overflow-hidden overflow-y-scroll flex flex-col items-center">
                <div className="text-white font-bold text-4xl w-full px-10 py-5">{subject}</div>
                <div id="buttons" className="w-11/12 bg-gray-500 flex justify-between border border-none rounded-md p-3">
                    <button className="text-white">THEORY</button>
                    <button className="text-white">LAB</button>
                    <button className="text-white">PRACTICALS</button>
                    <button className="text-white">PYQS</button>
                    <button className="text-white">BOOKS</button>
                </div>
                <div></div>
            </div>
            <div className="border border-white rounded-lg w-3/12 h-72 ">
            <div className="text-white font-bold text-2xl w-full px-10 py-5">SUBJECT DETAILS</div>

            </div>
        </div>
        
    </div>
    </div>
}

export {Studyresources}
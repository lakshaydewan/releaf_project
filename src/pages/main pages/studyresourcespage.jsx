import { useRecoilValue } from "recoil";
import { Dropdown } from "../../components/dropdown";
import { Navbar } from "../../components/navbar";
import { branchatom, semesteratom, SideBarAtom } from "../../atoms/atoms";
import { useState } from "react";
import { Sidemenubar } from "../../components/sidemenubar";


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
        <Sidemenubar />
        <div className="w-full flex flex-col items-center py-20 px-5 space-y-4"> 
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
        <div id="subject div" className='border border-white rounded-lg w-[350px] h-72 overflow-hidden overflow-y-scroll lg:min-w-[700px] lg:w-8/12 md:min-w-[700px] sm:w-[500px]'>
            <div id="text" className="text-white font-bold text-4xl sm:px-10 lg:px-10 md:px-10 px-5 py-5">Subjects</div>
            <div id="subjects">
                {listofsubjects.map(subject => {
                    if (subject.semester == semester && subject.branch == branch ){
                        return <div className="grid grid-cols-2 gap-6 px-5
                        sm:grid sm:grid-cols-2 sm:px-10
                        md:grid-cols-3 md:px-10
                        lg:grid-cols-3 lg:px-10">
                            {subject.value.map(values => {
                            return <div className="bg-white max-w-40 max-h-10 min-w-32 h-8 flex items-center border border-none rounded-md
                            lg:max-w-60 lg:max-h-10 lg:min-w-40 lg:min-h-10 
                            md:max-w-60 md:max-h-10 md:min-w-40 md:min-h-10
                            sm:max-w-60 sm:max-h-10 sm:min-w-40 sm:min-h-10">
                                <button className="w-full text-center text-sm 
                                sm:text-base
                                md:text-base
                                lg:text-base" onClick={() => {
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

        <div className={`${(visible) ? 'block' : 'hidden'} w-full flex justify-center`}>
            <div className="border border-white rounded-lg w-[350px] h-72 overflow-hidden overflow-y-scroll flex flex-col items-center lg:min-w-[700px] lg:w-8/12 md:min-w-[700px] sm:w-[500px]">
                <div className="text-white font-bold text-4xl w-full px-5 py-5">{subject}</div>
                <div id="buttons" className="w-11/12 grid grid-cols-3 h-fit lg:h-10 lg:grid-cols-6 bg-gray-500 border border-none rounded-md">
                    <div className="w-full flex justify-center"><button className="text-white">THEORY</button></div>
                    <div className="w-full flex justify-center"><button className="text-white">LAB</button></div>
                    <div className="w-full flex justify-center"><button className="text-white">PRACTICALS</button></div>
                    <div className="w-full flex justify-center"><button className="text-white">PYQS</button></div>
                    <div className="w-full flex justify-center"><button className="text-white">BOOKS</button></div>
                    <div className="w-full flex justify-center"><button className="text-white">PLAYLIST</button></div>
                </div>
                <div></div>
            </div>
        </div>
        
    </div>
    </div>
}

export {Studyresources}
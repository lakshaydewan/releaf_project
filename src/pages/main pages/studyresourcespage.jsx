import { useRecoilState, useRecoilValue } from "recoil";
import { Dropdown } from "../../components/dropdown";
import { Navbar } from "../../components/navbar";
import { branchatom, semesteratom, SideBarAtom } from "../../atoms/atoms";
import { useEffect, useState } from "react";
import { Sidemenubar } from "../../components/sidemenubar";
import { useLocation, useNavigate} from "react-router-dom"
import { playlistlinks } from "../../assets/links/links";
import { pdflinks, Theorycontent } from "../../components/links";




function Studyresources(){

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedsemester = queryParams.get('semester') || '';
    const selectedbranch = queryParams.get('branch') || '';
    const selcetedsubject =  queryParams.get('subject') || '';
    const section = queryParams.get('section') || 'default';
    
    
    const components = {
        Playlist: PLAYLIST,
        Lab: LAB,
        Pdf: PDF,
        Theory : THEORY,
        default : () => {
            return <div></div>
        }
      };

    const Selectedsection = components[section]

    //this commented area is also previously used

    // const [semester,setsemester] = useRecoilState(semesteratom)
    // const [branch,setbranch] = useRecoilState(branchatom)
    // const [subject,setsubject] = useState("");
    // const [visible,setvisible] = useState(false)

    const listofsubjects = [
        { id:1 ,semester:'1st', branch:'IT',  value:['APPLIED MATHS', 'EVS', 'CHEMISTRY','evs','maths2','physics2','APPLIED PHYSICS', 'EVS', 'CHEMISTRY','evs','maths2','physics2','APPLIED PHYSICS I', 'EVS', 'CHEMISTRY','evs','maths2','physics2',"MANUFACTURING PROCESS"]},
        { id:1 ,semester:'2nd', branch:'IT',  value:['APPLIED PHYSICS I2', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'3rd', branch:'IT',  value:['APPLIED PHYSICS I3', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'4th', branch:'IT',  value:['APPLIED PHYSICS I4', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'5th', branch:'IT',  value:['APPLIED PHYSICS I5', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
        { id:1 ,semester:'6th', branch:'IT',  value:['APPLIED PHYSICS I6', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},

    ]


    const handleValueReturnforsemster = (value) => {
        const semesterdisplay = value
        const newsemester = semesterdisplay;
        queryParams.set('semester', newsemester);
        navigate({ search: queryParams.toString() });
      };
    
      const handleValueReturnforbranch = (value) => {
        const branchdisplay = value
        const newbranch = branchdisplay;
        queryParams.set('branch', newbranch);
        navigate({ search: queryParams.toString() });
      };

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
            {/* onvaluereturn and content2 are new props added */}
            <Dropdown content={"SEMESTER"} items={['1st','2nd','3rd','4th','5th','6th','7th',]} onValueReturn={handleValueReturnforsemster} content2={selectedsemester}/>
            <Dropdown content={"BRANCH"} items={['cse','IT','IOT','CSE-AIML','CSE-AIDS','ECE','EEE',]} onValueReturn={handleValueReturnforbranch} content2={selectedbranch}/>
        </div>
        {/* here the state is used previously in place of selected semster and selected branch but now no state is used this part is basically to check which semester is selceted and which subjects to display */}
        <div className={`${!(selectedsemester == "" || selectedbranch == "") ? 'block' : 'hidden'} w-full flex justify-center overflow-hidden`}>
        <div id="subject div" className='border border-white rounded-lg w-[350px] h-60 overflow-hidden overflow-y-scroll lg:min-w-[700px] lg:w-8/12 md:min-w-[700px] sm:w-[500px]'>
            <div id="text" className="text-white font-bold text-4xl sm:px-10 lg:px-10 md:px-10 px-5 py-5">Subjects</div>
            <div id="subjects">
                {listofsubjects.map(subject => {
                    if (subject.semester == selectedsemester && subject.branch == selectedbranch ){
                        return <div className="grid grid-cols-2 gap-6 px-5 pb-3
                        sm:grid sm:grid-cols-2 sm:px-10
                        md:grid-cols-3 md:px-10
                        lg:grid-cols-3 lg:px-10">
                            {subject.value.map(values => {
                            return <div className="bg-white max-w-40 max-h-10 min-w-32  h-8 flex items-center border border-none rounded-md
                            lg:max-w-60 lg:max-h-10 lg:min-w-40 lg:min-h-10 
                            md:max-w-60 md:max-h-10 md:min-w-40 md:min-h-10
                            sm:max-w-60 sm:max-h-10 sm:min-w-40 sm:min-h-10">
                                <button className="w-full text-center text-sm 
                                sm:text-base
                                md:text-base
                                lg:text-base" onClick={() => {
                                    // setvisible(true)
                                    queryParams.set('subject', values);
                                    queryParams.set('section', "Playlist")
                                    navigate({ search: queryParams.toString() });
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
        {/* visible is removed from selected subject */}
        <div className={`${(selcetedsubject) ? 'block' : 'hidden'} w-full flex justify-center`}>
            <div className="border border-white rounded-lg w-[350px] h-80 overflow-hidden overflow-y-scroll flex flex-col items-center lg:min-w-[700px] lg:w-8/12 md:min-w-[700px] sm:w-[500px]">
                <div className="text-white w-11/12 font-bold text-4xl py-5">{selcetedsubject}</div>
                <div id="buttons" className="w-11/12 grid grid-cols-4 h-fit pt-2 pb-2 lg:h-10  bg-gray-500 border border-none rounded-md">
                    <div  onClick={() => {
                        const newsection ="Theory";
                        queryParams.set('section', newsection);
                        navigate({ search: queryParams.toString() });
                    }} className="w-full flex justify-center "><button className="text-white hover:bg-gray-900">THEORY</button></div>
                    <div onClick={() => {
                        const newsection ="Lab";
                        queryParams.set('section', newsection);
                        navigate({ search: queryParams.toString() });
                    }} className="w-full flex justify-center"><button className="text-white  hover:bg-gray-900">LAB</button></div>
                    <div onClick={() => {
                        const newsection ="Pdf";
                        queryParams.set('section', newsection);
                        navigate({ search: queryParams.toString() });
                    }} className="w-full flex justify-center"><button className="text-white  hover:bg-gray-900">Pdfs</button></div>
                    <div onClick={() => {
                        const newsection ="Playlist";
                        queryParams.set('section', newsection);
                        navigate({ search: queryParams.toString() });
                    }} className="w-full flex justify-center"><button className="text-white  hover:bg-gray-900">PLAYLIST</button></div>
                    </div>
                <div className=" w-10/12  pt-3">
                    <Selectedsection subject={selcetedsubject} semester={selectedsemester}/>
                </div>
            </div>
        </div>
        
    </div>
    </div>
}

function PLAYLIST(props){

    const navigate = useNavigate()
    const semester = props.semester
    const subject = props.subject
    console.log("semester for video playlist",semester)
    console.log("subject for video playlist,video",subject)
    console.log(playlistlinks[semester][subject],"hello")


    return(
        <div className="my-4">
            <div className="text-white">
                <div className="px-4 mb-4 cursor-default ">UNIT 1</div>
                        {playlistlinks?.[semester]?.[subject]?.["unit1"]? <div className=" w-full grid md:grid-cols-4 grid-cols-3 gap-4 ">
                            {playlistlinks[semester][subject].unit1.map((items) => {
                        return(
                            <div className="flex justify-center">
                                <button onClick={() => {
                                navigate("/studylayout" + "?link=" + items.src)
                            }} className="sm:h-[150px] sm:w-[150px] w-[100px] h-[100px] col-span-1">
                                <div className="h-4/5 w-full bg-orange-400"></div>
                                <div className="h-4 w-full text-center text-white">{items.title}</div>
                            </button>
                            </div>
                        )
                        })}
                        </div> : <div></div>}
            </div>
            <div className="text-white">
                <div>unit2</div>
                        {playlistlinks?.[semester]?.[subject]?.["unit2"]? <div className=" w-full grid md:grid-cols-4 grid-cols-3 gap-4 ">
                            {playlistlinks[semester][subject].unit1.map((items) => {
                        return(
                            <div className="flex justify-center">
                                <button onClick={() => {
                                navigate("/studylayout" + "?link=" + items.src)
                            }} className="sm:h-[150px] sm:w-[150px] w-[100px] h-[100px] col-span-1">
                                <div className="h-4/5 w-full bg-orange-400"></div>
                                <div className="h-4 w-20 text-white">{items.title}</div>
                            </button>
                            </div>
                        )
                        })}
                        </div> : <div></div>}
            </div>
            <div className="text-white">
                <div>unit3</div>
                        {playlistlinks?.[semester]?.[subject]?.["unit3"]? <div className=" w-full grid md:grid-cols-4 grid-cols-3 gap-4 ">
                            {playlistlinks[semester][subject].unit1.map((items) => {
                        return(
                            <div className="flex justify-center">
                                <button onClick={() => {
                                navigate("/studylayout" + "?link=" + items.src)
                            }} className="sm:h-[150px] sm:w-[150px] w-[100px] h-[100px] col-span-1">
                                <div className="h-4/5 w-full bg-orange-400"></div>
                                <div className="h-4 w-20 text-white">{items.title}</div>
                            </button>
                            </div>
                        )
                        })}
                        </div> : <div></div>}
            </div>
            <div className="text-white">
                <div>unit4</div>
                        {playlistlinks?.[semester]?.[subject]?.["unit4"]? <div className=" w-full grid md:grid-cols-4 grid-cols-3 gap-4 ">
                            {playlistlinks[semester][subject].unit1.map((items) => {
                        return(
                            <div className="flex justify-center">
                                <button onClick={() => {
                                navigate("/studylayout" + "?link=" + items.src)
                            }} className="sm:h-[150px] sm:w-[150px] w-[100px] h-[100px] col-span-1">
                                <div className="h-4/5 w-full bg-orange-400"></div>
                                <div className="h-4 w-20 text-white">{items.title}</div>
                            </button>
                            </div>
                        )
                        })}
                        </div> : <div></div>}
            </div>
            
        </div>
    )
}

function LAB(){

    const lablinks = []


    return(
        <div className="w-full text-white">
            {(lablinks.length > 0) ? <div className=" w-full grid md:grid-cols-4 grid-cols-3 gap-4 ">
                    {playlistlinks[0].semster1.applied_maths.unit1.map((items) => {
                    return(
                        <div className="flex justify-center">
                            <button onClick={() => {
                            navigate("/studylayout" + "?link=" + items.src)
                        }} className="h-[150px] w-[150px] col-span-1">
                            <div className="h-4/5 w-full bg-orange-400"></div>
                            <div className="h-4 w-20 text-white">{items.title}</div>
                        </button>
                        </div>
                    )
                    })}
                </div> : <div className="w-full pt-6 text-4xl font-bold flex justify-center ">
                    coming soon...
                    </div>}
        </div>
    )
}

function PDF(props){
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search);
    const selcetedsubject =  queryParams.get('subject') || '';
    const subject = pdflinks.find(pdf => pdf.subject === selcetedsubject);
    const links = subject ? subject.links : [];


    return(
        <div className=" w-full grid md:grid-cols-4 grid-cols-3 gap-4 text-white">
                    {links.length > 0 ? (links.map((items) => {
                    return(
                        <div key={items.id} className="flex justify-center">
                            <button onClick={() => {
                            navigate("/studylayout" + "?pdflink=" + (items.title))
                        }} className="h-[150px] w-[150px] col-span-1">
                            <div className="h-4/5 w-full bg-orange-400"></div>
                            <div className="h-4 w-20 text-white">{items.title}</div>
                        </button>
                        </div>
                    )
                    })) : (<div className="w-full pt-6 text-4xl font-bold flex justify-center col-span-4">
                        coming soon....
                    </div>)}
                    
                </div>
    )
}

function THEORY(props){

    const theorysubject = props.subject

    const list = Theorycontent.find(items => items.subject === theorysubject)
    const content = list ? list.content : [];
    const [itemslist,setitemlist] = useState(content)
    console.log(content)
    console.log(itemslist)


    return <div className="text-white mb-5">
        {(content.length > 0  ) ? (<div >
            {itemslist.map(items => {
                return ( <div>
                <button className="w-full h-fit p-3 border border-white rounded-md text-white flex flex-col items-start my-2 hover:border-purple-400" key={items.id} onClick={() => {
                    const id = items.id
                    setitemlist(itemslist.map(item => ({
                        ...item,
                        isExpanded: item.id === id ? !item.isExpanded : item.isExpanded
                    })));
                }}>
                    <div>{items.id}</div>
                    <div>
                        {items.isExpanded && (
                            <div>
                                <p>{items.content}</p>
                            </div>
                        )}
                    </div>

                </button> </div>)
            })}
        </div>) : <div>coming soon...</div>}
    </div> 
}


  

export {Studyresources}
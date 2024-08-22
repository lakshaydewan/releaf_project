import { useRecoilState, useRecoilValue } from "recoil";
import { Dropdown } from "../../components/dropdown";
import { Navbar } from "../../components/navbar";
import { branchatom, semesteratom, SideBarAtom } from "../../atoms/atoms";
import { useEffect, useState } from "react";
import { Sidemenubar } from "../../components/sidemenubar";
import { useLocation, useNavigate} from "react-router-dom"
import { playlistlinks } from "../../assets/links/links";
import { listofsubject, pdflinks, Theorycontent } from "../../components/links";




function Studyresources(){

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedsemester = queryParams.get('semester') || '';
    const selectedbranch = queryParams.get('branch') || '';
    const selcetedsubject =  queryParams.get('subject') || '';
    const section = queryParams.get('section');
    
    
    const components = {
        Playlist: PLAYLIST,
        Lab: LAB,
        Pdf: PDF,
        Theory : THEORY,
      };

    const Selectedsection = components[section]

    const listofsubjects = listofsubject;


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
            <Dropdown content={"BRANCH"} items={['CSE','IT','CSE-IOT','CSE-AIML','CSE-DS','ECE','EEE',]} onValueReturn={handleValueReturnforbranch} content2={selectedbranch}/>
        </div>
        {/* here the state is used previously in place of selected semster and selected branch but now no state is used this part is basically to check which semester is selceted and which subjects to display */}
        <div className={`${!(selectedsemester == "" || selectedbranch == "") ? 'block' : 'hidden'} w-full flex justify-center overflow-hidden`}>
        <div id="subject div" className='border border-white rounded-lg w-[350px] h-60 overflow-hidden overflow-y-scroll lg:min-w-[700px] lg:w-8/12 md:min-w-[700px] sm:w-[500px]'>
            <div id="text" className="text-white font-bold text-4xl sm:px-10 lg:px-10 md:px-10 px-5 py-5">Subjects</div>
            <div id="subjects">
                {listofsubjects.map(subject => {
                    if (subject.semester == selectedsemester && subject.branch == selectedbranch ){
                        return <div className="grid grid-cols-2 sm:gap-6 gap-x-4 gap-y-3 px-5 pb-3
                        sm:grid sm:grid-cols-2 sm:px-10
                        md:grid-cols-3 md:px-10
                        lg:grid-cols-3 lg:px-10
                        xl:grid-cols-4 xl:px-10">
                            {subject.value.map(values => {
                            return <div className="bg-white max-w-40 max-h-10  min-w-32 h-8 flex items-center border border-none rounded-md
                            lg:max-w-60 lg:max-h-10 lg:min-w-40 lg:min-h-10 
                            md:max-w-60 md:max-h-10 md:min-w-40 md:min-h-10
                            sm:max-w-60 sm:max-h-10 sm:min-w-40 sm:min-h-10">
                                <button className="w-full py-1 sm:py-0 text-center text-sm
                                sm:text-base
                                md:text-base
                                lg:text-base" onClick={() => {
                                    // setvisible(true)
                                    queryParams.set('subject', values);
                                    if (section){
                                        queryParams.set('section',section)
                                    }else{
                                        queryParams.set('section', "Theory")
                                    }
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
                <div id="buttons" className="w-11/12 grid grid-cols-4 h-fit lg:h-10  bg-gray-500 border border-none rounded-md">
                    <div  onClick={() => {
                        const newsection ="Theory";
                        queryParams.set('section', newsection);
                        navigate({ search: queryParams.toString() });
                    }} className="w-full  flex justify-center items-center  px-3 py-1 text-white hover:bg-[#1f1f1f] cursor-pointer sm:text-base text-sm">THEORY</div>
                    <div onClick={() => {
                        const newsection ="Lab";
                        queryParams.set('section', newsection);
                        navigate({ search: queryParams.toString() });
                    }} className="w-full flex justify-center items-center px-3 py-1 text-white hover:bg-[#1f1f1f] cursor-pointer sm:text-base text-sm">LAB</div>
                    <div onClick={() => {
                        const newsection ="Pdf";
                        queryParams.set('section', newsection);
                        navigate({ search: queryParams.toString() });
                    }} className="w-full flex justify-center items-center  px-3 py-1 text-white hover:bg-[#1f1f1f] cursor-pointer sm:text-base text-sm">Pdfs</div>
                    <div onClick={() => {
                        const newsection ="Playlist";
                        queryParams.set('section', newsection);
                        navigate({ search: queryParams.toString() });
                    }} className="w-full flex justify-center items-center  px-3 py-1 text-white hover:bg-[#1f1f1f] cursor-pointer sm:text-base text-sm">PLAYLIST</div>
                    </div>
                <div className=" w-10/12  pt-3">
                    {section && <Selectedsection  />}
                </div>
            </div>
        </div>
    </div>
    </div>
}

function PLAYLIST(props){

    const queryParams = new URLSearchParams(location.search);
    const selectedsemester = queryParams.get('semester') || '';
    const selectedbranch = queryParams.get('branch') || '';
    const selcetedsubject =  queryParams.get('subject') || '';
    const section = queryParams.get('section') || 'default';
    const navigate = useNavigate()
    const semester = props.semester
    const subject = props.subject
    console.log("semester for video playlist",semester)
    console.log("subject for video playlist,video",subject)

    return(
        <div className="my-4 space-y-4">
            <div className="text-white">
                <div className=" sm:mb-4 cursor-default md:text-3xl sm:text-2xl text-xl mb-2 font-bold ">UNIT 1</div>
                        {playlistlinks?.[semester]?.[subject]?.["unit1"]? <div className=" w-full grid md:grid-cols-4 grid-cols-3 sm:gap-4 gap-2 ">
                            {playlistlinks[semester][subject].unit1.map((items) => {
                        return(
                            <div className="flex justify-center">
                                <button onClick={() => {
                                navigate("/studylayout" + "?link=" + items.src)
                            }} className="md:h-[100px] md:w-[150px] w-[100px] h-[80px] col-span-1">
                                <div className=" w-full aspect-[16/9] border border-white hover:border-purple-400 rounded-xl bg-black flex justify-center items-center  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-12 md:size:16 hover:text-purple-400 w-full">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                                </svg>

                                </div>
                                <div className="h-4 w-full text-center text-white">{items.title}</div>
                            </button>
                            </div>
                        )
                        })}
                        </div> : <div className="flex justify-center text-xl font-semibold"> coming soon</div>}
            </div>
            <div className="text-white">
                <div className=" sm:mb-4 cursor-default md:text-3xl sm:text-2xl text-xl mb-2 font-bold ">UNIT 2</div>
                        {playlistlinks?.[semester]?.[subject]?.["unit2"]? <div className=" w-full grid md:grid-cols-4 grid-cols-3 sm:gap-4 gap-2 ">
                            {playlistlinks[semester][subject].unit2.map((items) => {
                        return(
                            <div className="flex justify-center">
                                <button onClick={() => {
                                navigate("/studylayout" + "?link=" + items.src)
                            }} className="md:h-[100px] md:w-[150px] w-[100px] h-[80px] col-span-1">
                                <div className=" w-full aspect-[16/9] border border-white hover:border-purple-400 rounded-xl bg-black flex justify-center items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-12 md:size:16 w-full hover:text-purple-400">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                                </svg>

                                </div>
                                <div className="h-4 w-full text-center text-white">{items.title}</div>
                            </button>
                            </div>
                        )
                        })}
                        </div> : <div className="flex justify-center text-xl font-semibold"> coming soon</div>}
            </div>
            <div className="text-white">
                <div className=" sm:mb-4 cursor-default md:text-3xl sm:text-2xl text-xl mb-2 font-bold ">UNIT 3</div>
                        {playlistlinks?.[semester]?.[subject]?.["unit3"]? <div className=" w-full grid md:grid-cols-4 grid-cols-3 sm:gap-4 gap-2 ">
                            {playlistlinks[semester][subject].unit3.map((items) => {
                        return(
                            <div className="flex justify-center">
                                <button onClick={() => {
                                navigate("/studylayout" + "?link=" + items.src)
                            }} className="md:h-[100px] md:w-[150px] w-[100px] h-[80px] col-span-1">
                                <div className=" w-full aspect-[16/9] border border-white hover:border-purple-400 rounded-xl bg-black flex justify-center items-center  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-12 md:size:16 w-full hover:text-purple-400">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                                </svg>

                                </div>
                                <div className="h-4 w-full text-center text-white">{items.title}</div>
                            </button>
                            </div>
                        )
                        })}
                        </div> : <div className="flex justify-center text-xl font-semibold">coming soon</div>}
            </div>
            <div className="text-white">
                <div className=" sm:mb-4 cursor-default md:text-3xl sm:text-2xl text-xl mb-2 font-bold ">UNIT 4</div>
                        {playlistlinks?.[semester]?.[subject]?.["unit4"]? <div className=" w-full grid md:grid-cols-4 grid-cols-3 sm:gap-4 gap-2 ">
                            {playlistlinks[semester][subject].unit4.map((items) => {
                        return(
                            <div className="flex justify-center">
                                <button onClick={() => {
                                navigate("/studylayout" + "?link=" + items.src)
                            }} className="md:h-[100px] md:w-[150px] w-[100px] h-[80px] col-span-1">
                                <div className=" w-full aspect-[16/9] border border-white hover:border-purple-400 rounded-xl bg-black flex justify-center items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-12 md:size:16 w-full  hover:text-purple-400">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                                </svg>

                                </div>
                                <div className="h-4 w-full text-center text-white">{items.title}</div>
                            </button>
                            </div>
                        )
                        })}
                        </div> : <div className="flex justify-center text-xl font-semibold"> coming soon</div>}
            </div>
            
        </div>
    )
}

function LAB(){

    const lablinks = []
    const queryParams = new URLSearchParams(location.search);
    const selectedsemester = queryParams.get('semester') || '';
    const selectedbranch = queryParams.get('branch') || '';
    const selcetedsubject =  queryParams.get('subject') || '';
    const section = queryParams.get('section') || 'default';


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
    useEffect(()=> {
        console.log("h9");
    })
    
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search);
    const selcetedsubject =  queryParams.get('subject') || '';
    const selectedsemester =  queryParams.get('semester') || '';
    const selectedbranch = queryParams.get('branch') || '';
    const subject = pdflinks.find(pdf => pdf.subject === selcetedsubject);
    const links = subject ? subject.links : [];


    return(
        <div className=" w-full grid md:grid-cols-4 grid-cols-3 gap-4 text-white">
                    {links.length > 0 ? (links.map((items) => {
                    return(
                        <div key={items.id} className="flex justify-center">
                            <button onClick={() => {
                            navigate("/studylayout" + "?pdflink=" + (items.title) +"&semester=" + (selectedsemester) + "&branch=" + (selectedbranch) + "&subject=" + (selcetedsubject) )
                        }} className="h-fit w-fit col-span-1">
                            <div className="h-fit p-1 w-full bg-black flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="md:size-28 size-16 hover:text-purple-400">
                            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                            </svg>
                            </div>
                            <div className="h-fit p-1 w-full text-white text-center">{items.title}</div>
                        </button>
                        </div>
                    )
                    })) : (<div className="w-full pt-6 text-4xl font-bold flex justify-center col-span-4">
                        coming soon...
                    </div>)}
                    
                </div>
    )
}

function THEORY(props){

    const queryParams = new URLSearchParams(location.search);
    const selectedsemester = queryParams.get('semester') || '';
    const selectedbranch = queryParams.get('branch') || '';
    const selcetedsubject =  queryParams.get('subject') || '';
    const section = queryParams.get('section') || 'default';
    const theorysubject = selcetedsubject

    const list = Theorycontent.find(items => items.subject === theorysubject)
    let content = list ? list.content : [];
    console.log(content)

    // useEffect(() => {
    //     console.log("ran!!")
    //     setitemlist(content);
    // }, [content])
    
    const [itemslist,setitemlist] = useState(content)

    return <div className="text-white mb-5">
        {(itemslist.length > 0  ) ? (<div >
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
        </div>) : <div className="w-full pt-6 text-4xl font-bold flex justify-center ">coming soon...</div>}
    </div> 
}



export {Studyresources}
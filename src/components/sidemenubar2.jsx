import { useRecoilState } from "recoil";
import { semesteratom, SideBarAtom, SideBarAtom2, WidthAtom, WidthAtom2 } from "../atoms/atoms";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "./dropdown";
import { playlistlinks } from "../assets/links/links";
import { pdflinks } from "./links";



function Sidemenubar2(){
    const [width2, setwidth2] = useRecoilState(WidthAtom2);
    const [isopen2, setisopen2] = useRecoilState(SideBarAtom2)
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const selectedsemester = queryParams.get('semester') || '';
    const selectedbranch = queryParams.get('branch') || '';
    const selectedsubject = queryParams.get('subject') || '';
    const [visible,setvisible] = useState(false);
    console.log(selectedbranch)
    console.log(selectedsemester)

    const listofsubjects = [
      { id:1 ,semester:'1st', branch:'IT',  value:['APPLIED MATHS', 'EVS', 'CHEMISTRY','evs','maths2','physics2','APPLIED PHYSICS I', 'EVS', 'CHEMISTRY','evs','maths2','physics2','APPLIED PHYSICS I', 'EVS', 'CHEMISTRY','evs','maths2','physics2',"MANUFACTURING PROCESS"]},
      { id:1 ,semester:'2nd', branch:'IT',  value:['APPLIED PHYSICS I2', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
      { id:1 ,semester:'3rd', branch:'IT',  value:['APPLIED PHYSICS I3', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
      { id:1 ,semester:'4th', branch:'IT',  value:['APPLIED PHYSICS I4', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
      { id:1 ,semester:'5th', branch:'IT',  value:['APPLIED PHYSICS I5', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},
      { id:1 ,semester:'6th', branch:'IT',  value:['APPLIED PHYSICS I6', 'EVS', 'CHEMISTRY','evs','maths2','physics2']},

  ]

  const selectedsubjectEntry = listofsubjects.find(subject => subject.semester === selectedsemester && subject.branch === selectedbranch);
  const subjectEntry = selectedsubjectEntry ? selectedsubjectEntry.value : [];
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

  
    

    return <div className={`h-screen ${width2} lg-hidden lg-w-0 bg-black text-white fixed top-[56px] flex flex-col transition-all ease-in-out duration-1000 z-[5] overflow-hidden overflow-y-scroll pb-32`}>
      <div className="w-full flex justify-end p-3 "><div className="relative group" onClick={() => {
        setwidth2("w-0")
      }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 cursor-pointer fill-black stroke:white hover:fill-white hover:stroke-black">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <div className="absolute z-[20] bottom-[-30px] mb-2 left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      close
      </div>

        </div></div>
       <div className="w-full bg-white text-black flex flex-col items-center border border-t-white">
       <Dropdown2 content={selectedsemester} defaultcontent={'SEMESTER'} urlsender={"semester"} check={true} itemlist={['1st','2nd','3rd','4th']}/>
       <Dropdown2 content={selectedbranch} defaultcontent={'BRANCH'} urlsender={"branch"} check={true} itemlist={['cse','IT','IOT','CSE-AIML','CSE-AIDS','ECE','EEE',]}/>
       <Dropdown2 content={selectedsubject} defaultcontent={'subject'} urlsender={"subject"} check={(selectedbranch && selectedsemester)} itemlist={subjectEntry}/>
       </div>
       {/* to be checked later */}
        
       <div className={`${(selectedsubject) ? 'block' : 'hidden'} mt-4 `}>
       <div className="">
        <div className="font-semibold text-lg border-b-2 border-white ">Playlist</div>
        <UNITSCOMPONENT content={"unit1"} subject={selectedsubject} semester={selectedsemester} list={playlistlinks} />
        <UNITSCOMPONENT content={"unit2"} subject={selectedsubject} semester={selectedsemester} list={playlistlinks} />
        <UNITSCOMPONENT content={"unit3"} subject={selectedsubject} semester={selectedsemester} list={playlistlinks} />
        <UNITSCOMPONENT content={"unit4"} subject={selectedsubject} semester={selectedsemester} list={playlistlinks} /> 
        <div>
           
        </div>

       </div>

       <div className="">
        <Pdfcomponent subject={selectedsubject} state={setwidth2} />
       </div>

       </div>
    </div>
}

function UNITSCOMPONENT(props){
  
  const navigate = useNavigate()
  const [visible2,setvisible2] = useState(false)
  const semester = props.semester;
  const unit = props.content;
  const subject = props.subject ? props.subject : "";
  console.log(semester)
  console.log(subject,"ddfksdkjfsldjfsd")
  const list = props.list;

  console.log(list)
  return  <div className="text-white border-t-0 border border-white ">
              <button onClick={() => {
              setvisible2(!visible2)
            }} className="flex justify-between w-full pl-5 hover:bg-[#1f1f1f]"><div>{props.content}</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 stroke-1">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
            </div>
              </button>

            <div className={`${(visible2) ? 'block' : 'hidden'} pl-8`}>
              {list?.[semester]?.[subject]?.[unit] ? <div>
                {list[semester][subject][unit].map(item => {
              return <div>
                <button onClick={() => {
                            const queryParams = new URLSearchParams(location.search);
                            queryParams.set('link', item.src );
                            navigate({ search: queryParams.toString() });
                        }} className="flex space-x-2 items-end hover:bg-[#1f1f1f] w-full"><div className="flex items-end">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                        </svg>

                        </div>
                        <div className="flex items-center overflow-hidden">{item.title}</div></button>
              </div>
            })} 
              </div> : <div>
                video not availaible
                </div>}
            </div>
            </div>
}

function Pdfcomponent(props){

  const subject = pdflinks.find(pdf => pdf.subject === props.subject);
  console.log("this is subject",subject)
  const links = subject ? subject.links : [];
  const [visible,setvisible] = useState(false)
  const navigate = useNavigate()
  const setwidth2 = props.state

  return <div>
    <button onClick={() => {
      setvisible(!visible)
    }} className="w-full flex justify-between hover:bg-[#1f1f1f] pt-2"><div>Pdfs</div>
    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 stroke-1">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg></div></button>
    <div className={`${(visible) ? 'block' : 'hidden'} pl-8 border border-white overflow-hidden`}>
    {links.length > 0 ? (links.map((items) => {
                    return(
                        <div key={items.id} className="w-full">
                            <button className="w-full" onClick={() => {
                            const queryParams = new URLSearchParams(location.search);
                            queryParams.set('pdflink', items.title );
                            navigate({ search: queryParams.toString() });
                        }} >
                            <div className="h-fit w-full space-x-2 hover:bg-[#1f1f1f] text-white  flex justify-start items-end"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" size-5 ">
                            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                            </svg></div>
                            <div>{items.title}</div></div>
                        </button>
                        </div>
                    )
                    })) : (<div className="w-full pt-6 text-4xl font-bold flex  justify-center p-3 col-span-4 ">
                        coming soon....
                    </div>)}
    </div>
  </div>

}

function Dropdown2(props){
  // check urlsender itemslist cheeck  content default content
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const[visible,setvisible] = useState(false)

  return       <div className={`${(props.check) ? 'block' : 'hidden'} w-full flex justify-center border border-white border-t-0 hover:bg-[#1f1f1f]`}>
  <div className="relative group w-full "
  onMouseEnter={() => {
   setvisible(true)
  }}
  onMouseLeave={() => {
   setvisible(false)
  }}>
   <button className="w-full h-fit p-3 hover:bg-[#1f1f1f]  text-sm text-center bg-black text-white">{props.content ? props.content : <div>{props.defaultcontent}</div>}</button>

   {visible && (<div className=" group-hover:block hidden absolute left-1/2 transform -translate-x-1/2  border z-[1] border-white rounded-md w-60 p-3  max-h-60 h-fit overflow-y-scroll bg-black">
       {(props.check) ? (<div className="border-white">{props.itemlist.map(item => {
           return <div key={item} className="h-fit py-1 flex items-center text-center justify-center bg-transparent  rounded-md text-white  cursor-pointer hover:bg-[#1f1f1f]" onClick={() => {
               setvisible(false)
               queryParams.set(`${props.urlsender}`, item);
               navigate({ search: queryParams.toString() });

           }}>{item}</div>
       })}</div>) : (<div></div>)}
   </div>)}
</div>
  
  </div>
}

export {Sidemenubar2}





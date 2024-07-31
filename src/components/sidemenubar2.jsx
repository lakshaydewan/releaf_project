import { useRecoilState } from "recoil";
import { semesteratom, SideBarAtom, SideBarAtom2, WidthAtom, WidthAtom2 } from "../atoms/atoms";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "./dropdown";
import { playlistlinks } from "../assets/links/links";
import { pdflinks } from "./links";



function Sidemenubar2(){
    const [width2, setwidth2] = useRecoilState(WidthAtom2);
    const [isopen2, setisopen2] = useRecoilState(SideBarAtom2)
    const navigate = useNavigate()
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

  const subjectEntry = listofsubjects.find(subject => subject.semester === selectedsemester && subject.branch === selectedbranch);
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

  
    

    return <div className={`h-screen ${width2} lg-hidden lg-w-0 bg-white fixed top-[56px] flex flex-col transition-all ease-in-out duration-1000 z-[5] space-y-3 overflow-hidden overflow-y-scroll pb-6`}>
       <div className="w-full flex flex-col items-center">
       <Dropdown content={"SEMESTER"} items={['1st','2nd','3rd','4th','5th','6th','7th',]} onValueReturn={handleValueReturnforsemster} content2={selectedsemester}/>
       <Dropdown content={"BRANCH"} items={['cse','IT','IOT','CSE-AIML','CSE-AIDS','ECE','EEE',]} onValueReturn={handleValueReturnforbranch} content2={selectedbranch}/>
       </div>
       {/* to be checked later */}
       <div className={`${(subjectEntry) ? 'block' : 'hidden'} bg-blue-500`}>
       <div className="space-y-1 relative">
        <button className="w-28 h-fit p-1 text-sm border border-none rounded-md text-center bg-white
        lg:w-60 lg:p-3 lg:text-base
        md:w-60 md:p-3 md:text-base
        sm:w-40 sm:p-3 sm:text-base" onClick={() => {
            setvisible(!visible)
        }}>{selectedsubject ? selectedsubject : <div>subject</div>}</button>

        <div className={`${visible ? 'block' : 'hidden'} absolute border z-[1] border-white rounded-md w-28 p-3 lg:w-60 md:w-60 sm:w-40 h-60 overflow-y-scroll`} style={{
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,1),rgba(44, 62, 80 ,1)" }}>
            {(subjectEntry) ? (<div>{subjectEntry.value.map(item => {
                return <div key={item} className="h-8 flex items-center justify-center bg-transparent border border-none rounded-md text-white  cursor-pointer hover:bg-gray-500" onClick={() => {
                    setvisible(false)
                    queryParams.set('subject', item);
                    navigate({ search: queryParams.toString() });

                }}>{item}</div>
            })}</div>) : (<div></div>)}
        </div>
    </div>
       
       </div>
       <div className={`${(selectedsubject) ? 'block' : 'hidden'} bg-blue-500`}>
       <div>
        <div>videos</div>
        <UNITSCOMPONENT content={"unit1"} subject={selectedsubject} semester={selectedsemester} list={playlistlinks} />
        <UNITSCOMPONENT content={"unit2"} subject={selectedsubject} semester={selectedsemester} list={playlistlinks} />
        <UNITSCOMPONENT content={"unit3"} subject={selectedsubject} semester={selectedsemester} list={playlistlinks} />
        <UNITSCOMPONENT content={"unit4"} subject={selectedsubject} semester={selectedsemester} list={playlistlinks} /> 
        <div>
           
        </div>

       </div>

       <div>
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
  return  <div>
              <button onClick={() => {
              setvisible2(!visible2)
            }}>{props.content}</button>
            <div className={`${(visible2) ? 'block' : 'hidden'}`}>
              {list?.[semester]?.[subject]?.[unit] ? <div>
                {list[semester][subject][unit].map(item => {
              return <div>
                <button onClick={() => {
                            const queryParams = new URLSearchParams(location.search);
                            queryParams.set('link', item.src );
                            navigate({ search: queryParams.toString() });
                        }}>{item.title}</button>
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
    }}>pdfs</button>
    <div className={`${(visible) ? 'block' : 'hidden'}`}>
    {links.length > 0 ? (links.map((items) => {
                    return(
                        <div key={items.id} className="flex justify-center">
                            <button onClick={() => {
                            const queryParams = new URLSearchParams(location.search);
                            queryParams.set('pdflink', items.title );
                            navigate({ search: queryParams.toString() });
                        }} >
                            <div className="h-4 w-20 text-white">{items.title}</div>
                        </button>
                        </div>
                    )
                    })) : (<div className="w-full pt-6 text-4xl font-bold flex justify-center col-span-4">
                        coming soon....
                    </div>)}
    </div>
  </div>

}
export {Sidemenubar2}





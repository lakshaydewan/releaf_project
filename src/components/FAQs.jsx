import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion";


function FAQ(){
    const [isExpanded ,setisexpanded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView( ref , {margin:"200px"})

    const initialItems = [
        { id: 1, question: 'How can i contribute to RE-LEAF?', content: 'Content for Question 1', isExpanded: false },
        { id: 2, question: 'What is the goal of RE-LEAF?', content: 'Content for Question 2', isExpanded: false },
        { id: 3, question: 'Is this application open-sourced ?', content: 'Content for Question 3', isExpanded: false },
        { id: 4, question: 'How to become a core team member?', content: 'Content for Question 4', isExpanded: false },
        { id: 5, question: 'How to become a core team member', content: 'Content for Question 5', isExpanded: false },
      ];

      const [items, setItems] = useState(initialItems);
      console.log(items);


    return <motion.div ref={ref} initial={{opacity:0, scale:0.8}} whileInView={{ opacity: 1, scale:1 }} transition={{
        duration : 0.5,
        delay : 0.3
    }} className="w-full flex items-center justify-center">
        <div id="content div" className="w-9/12 md:w-9/12 p-8 border rounded-3xl border-none space-y-4
                                        lg:flex lg:space-x-4 lg:h-auto ml-14" style={{
            backgroundColor : "transparent",
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,0.3),rgba(44, 62, 80 ,0.3)" }}>
            <div id="left-section" className="space-y-10 w-2/5
                                            lg:2/5" >
                <div id="upper-section" className="space-y-1">
                    <div className=" px-3 text-sm h-fit tracking-widest text-white font-semibold w-fit flex py-1.5 border rounded-full">FAQ</div>
                    <div className="text-white font-bold text-3xl w-fit
                                    md:text-3xl 
                                    lg:text-4xl">FREQUENTLY <br /> ASKED <br />QUESTION</div>
                </div>
               
            </div>

            <div id="right-section" className="w-full space-y-4
                                                lg:w-3/5">
                {items.map(item => (
                    <div id="right-section" key={item.id} onClick={() => {
                        const id = item.id
                        setItems(items.map(item => ({
                            ...item,
                            isExpanded: item.id === id ? !item.isExpanded : item.isExpanded
                          })));
                    }} className="bg-gray-700 w-full cursor-pointer text-white font-semibold text-xl h-fit border rounded-2xl space-y-4 p-6">
                        <div className="flex justify-between">
                            <div>{item.question}</div>
                            <div>+</div>
                        </div>
                        {item.isExpanded && (
                            <div  id="hidden content" className="font-normal text-base" style={{transition: 'Height 0.3s ease'}}>
                            <p>{item.content}</p>
                            </div>
                        )}
                    
                    </div>
                ))} 
            </div>

        </div>
    </motion.div>
}

export {FAQ}
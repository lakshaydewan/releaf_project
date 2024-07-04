import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion";


function FAQ(){
    const [isExpanded ,setisexpanded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView( ref , {margin:"200px"})

    const initialItems = [
        { id: 1, question: 'Question 1', content: 'Content for Question 1', isExpanded: false },
        { id: 2, question: 'Question 2', content: 'Content for Question 2', isExpanded: false },
        { id: 3, question: 'Question 3', content: 'Content for Question 3', isExpanded: false },
        { id: 4, question: 'Question 4', content: 'Content for Question 4', isExpanded: false },
        { id: 5, question: 'Question 5', content: 'Content for Question 5', isExpanded: false },
      ];

      const [items, setItems] = useState(initialItems);
      console.log(items);


    return <motion.div ref={ref} initial={{opacity:0, scale:0.8}} whileInView={{ opacity: 1, scale:1 }} transition={{
        duration : 0.5,
        delay : 0.3
    }} className="w-full h-screen flex items-center justify-center">
        <div className="flex w-10/12 space-x-4 h-auto p-8 border rounded-3xl border-none" style={{
            backgroundColor : "transparent",
            backgroundImage: "linear-gradient(120deg ,rgba(112,128,144,0.3),rgba(44, 62, 80 ,0.3)" }}>
            <div id="left-section" className="space-y-10 w-2/5" >
                <div id="upper-section" className="space-y-1">
                    <div className=" px-3 text-sm h-fit tracking-widest text-white font-semibold w-fit flex py-1.5 border rounded-full">FAQ</div>
                    <div className="text-white font-bold text-4xl">FREQUENTLY <br /> ASKED <br />QUESTION</div>
                </div>
               
            </div>

            <div id="right-section" className="w-3/5 space-y-4">
                {items.map(item => (
                    <div id="right-section" key={item.id} onClick={() => {
                        const id = item.id
                        setItems(items.map(item => ({
                            ...item,
                            isExpanded: item.id === id ? !item.isExpanded : item.isExpanded
                          })));
                    }} className="bg-gray-700 w-full cursor-pointer text-white font-semibold text-xl h-fit border border rounded-2xl space-y-4 p-6">
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
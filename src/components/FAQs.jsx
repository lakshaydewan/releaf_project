import { useRef, useState } from "react"
import { easeInOut, easeOut, motion, useInView, AnimatePresence } from "framer-motion";


function FAQ(){
    const [isExpanded ,setisexpanded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView( ref , {margin:"200px"})

    const initialItems = [
        { id: 1, question: 'How can i contribute to RE-LEAF?', content:'You can contribute by solving open issues at our Github repository or by joining the dev community on discord.', isExpanded: false },
        { id: 2, question: 'What is the goal of RE-LEAF?', content: "Releaf's goal is to make the studying experience as hassle-free and as rich as possible for university students.", isExpanded: false },
        { id: 3, question: 'Is this application open-source?', content: 'Yes, Releaf is completely open-sourced you can find the complete source-code of the application on our Github repository.', isExpanded: false },
        { id: 4, question: 'How to become a core team member?', content: 'Becoming a core team member is not easy. However, you can demonstrate your work and experience by contributing to our GitHub repository and being active on our dev community at discord.', isExpanded: false },
        { id: 5, question: 'What we really are?', content: 'Here on Releaf you can find everything you will ever need to score good marks at your university. But Releaf is more than that, we wish to provide students with opportunities to learn, network and to build crazy-awesome projects together.', isExpanded: false },
      ];

      const [items, setItems] = useState(initialItems);
      console.log(items);


    return <motion.div ref={ref} initial={{opacity:0, scale:0.8}} whileInView={{ opacity: 1, scale:1 }} transition={{
        duration : 0.5,
        delay : 0.3
    }} className="w-full flex items-center justify-center barlow-condensed-light tracking-wider">
        <div id="content div" className="w-9/12 md:w-9/12 p-8 border rounded-3xl border-none space-y-4
                                        lg:flex lg:space-x-4 lg:h-auto bg-[#18181b]">
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
                    }} className="w-full cursor-pointer text-white font-semibold text-xl h-fit border-[1px] border-gray-100 rounded-2xl space-y-4 p-6">
                        <div className="flex justify-between">
                            <div>{item.question}</div>
                            <div>+</div>
                        </div>
                <AnimatePresence>
                    {item.isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "min-content", opacity: 1 }}
                            exit={{ height: 0, opacity: 0}}
                            transition={{ duration: 0.7, ease: easeOut}}
                            id="hidden-content"
                            className="font-normal text-base"
                            >
                            <p>{item.content}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                    
                    </div>
                ))} 
            </div>

        </div>
    </motion.div>
}

export {FAQ}
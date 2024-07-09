import { motion, useInView } from "framer-motion";
import { Movingborderbutton } from "./movingborder";

function Banner(){
    return <motion.div initial={{
        opacity: 0,
        scale : 0
    }} 
    animate={{
        opacity: 1,
        scale : 1
    }}
    transition={{
        duration : 1,
    }}
    whileInView={{ opacity: 1 }}
    className=" h-screen w-full p-20 flex justify-center">
                <div className="flex w-1/2 text-4xl font-extrabold text-center text-white"><div><span className="text-blue-300">"Empowering</span> Your Academic Journey with Resources, News, and More!"</div>
                <Movingborderbutton />
                </div>
            </motion.div>
}

export {Banner}
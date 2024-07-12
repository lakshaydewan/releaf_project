import { motion, useInView } from "framer-motion";
import { Movingborderbutton } from "./movingborder";
import { GridBackground } from "./gridbackground";

function Banner(){
    return (<div className="h-screen relative">
        <GridBackground />
        <motion.div initial={{
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
    className=" h-full w-full relative z-5 flex justify-center items-center">
                <div className="flex w-1/2 text-4xl font-extrabold text-center text-white"><div><span className="text-blue-300">"Empowering</span> Your Academic Journey with Resources, News, and More!"</div>
                </div>
            </motion.div>
    </div>
    )
}

export {Banner}

<div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
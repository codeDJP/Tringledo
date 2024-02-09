
import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}
// Animation here
export const Reveal = ({ children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        
        if(isInView){
            mainControls.start("visible");
        }else{
            mainControls.start("hidden");
        }
    }, [isInView]);

    return(
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                    
                }}
                initial= "hidden"
                animate = {mainControls}
                transition={{ duration: 0.75, delay: 0.10}}
            > 
                {children}
            </motion.div>
        </div>
    )
}
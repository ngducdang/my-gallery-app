import React from "react";
import {motion} from "framer-motion";

const Modal = ({selectedImg, setselectedImg}) => {

    const handleClick = (e) =>{
        if(e.target.classList.contains('backdrop')){
            setselectedImg(null);
        }
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial = {{opacity:0}}
        animate ={{opacity:1}}>
            <img src={selectedImg} alt="enlarger pic" 
            initial ={{ y: "-100vh"}}
            animate={{ y: 0 }}/>
        </motion.div>
    )
}
export default Modal;
import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({setselectedImg}) => {
    const { docs } = useFirestore('images');


    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover = {{ opacity: 1}}
                onClick={() => setselectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="upload pic"
                    initial={{ opacity: 0}}
                    animate={{opacity: 1}}
                    transition = {{delay: 1}} />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;
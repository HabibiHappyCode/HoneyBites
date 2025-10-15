import { motion } from "framer-motion"

function Button({ children, myStyle, ...props }) {

    return (
        <motion.button
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className={myStyle} {...props}>
            {children}
        </motion.button>
    )
}

export default Button

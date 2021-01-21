import { motion } from 'framer-motion'
import display_picture from '../../assets/imgs/display_picture.png'
import styles from '../../styles/Header.module.scss'

function DisplayPicture() {
    return (
        <motion.img className={styles.displayPicture} src={display_picture} alt="face"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        />
    )
}

export default DisplayPicture

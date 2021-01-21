import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles/Header.module.scss'

function HeroText() {
    return (
        <motion.div className={styles.heroTextContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <p>Hey, I'm</p>
            <h1>Abdeali Waseef</h1>
            <h3>I build <span>awesome</span><br />Web Apps.</h3>
        </motion.div>
    )
}

export default HeroText

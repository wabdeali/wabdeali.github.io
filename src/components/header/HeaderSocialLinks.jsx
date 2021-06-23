import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles/Header.module.scss'
import githubIcon from '../../assets/imgs/github-icon.png'
import linkedinIcon from '../../assets/imgs/linkedin-icon.png'
import emailIcon from '../../assets/imgs/email-icon.png'

function HeaderSocialLinks() {
    return (
        <motion.div className={styles.socialLinksContainer}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <a href="https://github.com/wabdeali/" target="_blank" rel="noreferrer"><img src={githubIcon} alt="github link" className={styles.icon} /></a>
            <a href="https://www.linkedin.com/in/abdealiwaseef/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin link" className={styles.icon} /></a>
            <a href="mailto:wabdeali@gmail.com"><img src={emailIcon} alt="email link" className={styles.icon} /></a>
            <a
                className={styles.socialLinksButton}
                href="https://drive.google.com/file/d/18eWIihdOWzclfgtV6jVGKAE7mgyr3EHh/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                Resume
            </a>
        </motion.div>
    )
}

export default HeaderSocialLinks

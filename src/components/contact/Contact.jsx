import React from 'react'
import styles from '../../styles/Contact.module.scss'

function Contact() {
    return (
        <div className={styles.mainContactContainer}>
            <div className="main-container">
                <h2 className={styles.contactTitle}> Contact </h2>
                <p className={styles.contactBody}>I am currently looking for new exciting and challenging opportunities that will push me to be better and help me create an impact.</p>
                <div className={styles.contactButtons}>
                    <a href="mailto:wabdeali@gmail.com" target="_blank" rel="noreferrer">Get in touch</a>
                </div>
            </div>
            <p className={styles.footerText}>Built and Designed by Abdeali Waseef</p>
        </div>
    )
}

export default Contact

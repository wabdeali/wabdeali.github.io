import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from "../../styles/Projects.module.scss"

function ProjectCard({ img, title, body, websiteURL, sourceCodeURL, technologies }) {
    const controls = useAnimation()
    const { ref, inView } = useInView({ triggerOnce: true })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
            console.log("in-view")
        }
        if (!inView) {
            controls.start('hidden')
            console.log("out-of-view")
        }
    }, [inView, controls])

    const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }

    return (
        <motion.div className={styles.projectContainer}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationVariants}
        >
            <img src={img} alt="project screenshot" />
            <div className={styles.projectInfo}>
                <h3 className={styles.projectInfoTitle}>{title}</h3>
                <p className={styles.projectInfoBody}>{body}</p>
                <div className={styles.projectInfoButtons}>
                    {websiteURL && <a href={websiteURL} target="_blank" rel="noreferrer" className={styles.projectInfoButton}>Website</a>}
                    {sourceCodeURL && <a href={sourceCodeURL} target="_blank" rel="noreferrer" className={styles.projectInfoButton}>Source Code</a>}
                </div>
                <hr />
                <div className={styles.technologiesContainer}>
                    {
                        technologies.map((technology, technologyIndex) =>
                            <span className={styles.technology} key={technologyIndex}>{technology}</span>
                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard

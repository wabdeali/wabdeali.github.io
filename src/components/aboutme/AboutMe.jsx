import React from 'react'
import styles from '../../styles/AboutMe.module.scss'

function AboutMe() {
    const skills = ['React', 'Javascript', 'HTML & (S)CSS', 'Node.js', 'Firebase', 'Svelte']
    return (
        <div className={styles.aboutmeContainer}>
            <div className="main-container">
                <div className={styles.aboutme}>
                    <h2 className={styles.aboutmeTitle}>About Me</h2>
                    <p className={styles.aboutmeBody}>Hello! I'm Abdeali, A web developer based in Bangalore, India.</p>
                    <p className={styles.aboutmeBody}>I love creating things. Be it a website or a small tool, seeing something that I built in action, helping people or solving a problem gives me immense joy. My goal is to create products that are amazing both visually, and technically.</p>
                    <h3 className={styles.skillsTitle}>Some technologies I have been working with recently</h3>
                    <div className={styles.skillsContainer}>
                        {skills.map(skill => (
                            <span>{skill}</span>
                        ))}
                    </div>
                    <h3 className={styles.skillsTitle}>Work Experience</h3>
                    <p className={styles.aboutmeBody}>- Comportement Software Pvt. Ltd</p>
                    <p className={styles.aboutmeBody}>Worked as a Front End React Intern and built a web application integrating a complex API with the help of a wide array of technologies (React, Mapbox, AntDesign, Axios, React-Router). </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

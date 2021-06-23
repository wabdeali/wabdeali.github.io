import React from 'react'
import styles from '../../styles/Projects.module.scss'
import ekjanScreenshot from '../../assets/imgs/ekjanScreenshot.png';
import club88Screenshot from '../../assets/imgs/club88Screenshot.png';
import safinaScreenshot from '../../assets/imgs/safinaScreenshot.png';
import wapScreenshot from "../../assets/imgs/wapScreenshot.png"
import typeracerScreenshot from "../../assets/imgs/typeracerScreenshot.jpeg"

function Projects() {
    const projects = [
        {
            title: 'Ekjan Fountains Map',
            body: 'A web app that helps an organization display all of their completed projects on an interactive map, complete with all CRUD functionalities using firebase.',
            img: ekjanScreenshot,
            websiteURL: 'https://ekjanfountainsmap.netlify.app/',
            sourceCodeURL: 'https://github.com/wabdeali/ekjanfountainsmap',
            technologies: ['React', 'Firebase', 'Leaflet', 'Material UI'],
            display: true
        },
        {
            title: "Webapp Pentration Testing Practice Suite",
            body: "An intentionally vulnerable webapp that serves as a platform for beginners/hobbyists to learn basics of penetration testing easily.",
            img: wapScreenshot,
            websiteURL: "https://wapenetrationtesting.netlify.app/",
            sourceCodeURL: "https://github.com/wabdeali/webapppentesting",
            technologies: ["NextJS", "NodeJS", "Express", "PostgreSQL", "Sass"],
            display: true
        },
        {
            title: 'Club88',
            body: 'An e-commerce website I built with a team of classmates that let users see products in a 3D environment.',
            img: club88Screenshot,
            websiteURL: 'https://club88.netlify.app/',
            sourceCodeURL: 'https://github.com/wabdeali/club88',
            technologies: ['React', 'Firebase', '<model-viewer>', 'Router'],
            display: true,
        },
        {
            title: 'Safina Newsletter',
            body: 'An archive of newsletters published by an organization that helps with analytics about all their readers.',
            img: safinaScreenshot,
            websiteURL: 'https://blrjmt.com/www/safina/',
            technologies: ['React', 'Google Analytics', 'Sass'],
            display: false,
        },
        {
            title: 'Typeracer Clone',
            body: 'A clone of the popular speed typing game play.typeracer.com. Multiple people can join the game and race together, achieved using websockets.',
            img: typeracerScreenshot,
            sourceCodeURL: 'https://github.com/wabdeali/typeracer-clone/',
            technologies: ['React', 'NodeJS', 'SocketIO', 'Sass'],
            display: true,
        }
    ]

    return (
        <div className="main-container">
            <h2 className={styles.projectsTitle}> Some of my projects </h2>
            <div className={styles.projectsContainer}>
                {
                    projects.map(project =>
                        project.display && <div className={styles.projectContainer}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={project.img} alt="project screenshot" />
                            <div className={styles.projectInfo}>
                                <h3 className={styles.projectInfoTitle}>{project.title}</h3>
                                <p className={styles.projectInfoBody}>{project.body}</p>
                                <div className={styles.projectInfoButtons}>
                                    {project.websiteURL && <a href={project.websiteURL} target="_blank" rel="noreferrer" className={styles.projectInfoButton}>Website</a>}
                                    {project.sourceCodeURL && <a href={project.sourceCodeURL} target="_blank" rel="noreferrer" className={styles.projectInfoButton}>Source Code</a>}
                                </div>
                                <hr />
                                <div className={styles.technologiesContainer}>
                                    {
                                        project.technologies.map(technology =>
                                            <span className={styles.technology}>{technology}</span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Projects

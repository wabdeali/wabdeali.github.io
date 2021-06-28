import React from 'react'
import ProjectCard from './ProjectCard';

import styles from '../../styles/Projects.module.scss'
import ekjanScreenshot from '../../assets/imgs/ekjanScreenshot.png';
import club88Screenshot from '../../assets/imgs/club88Screenshot.png';
import safinaScreenshot from '../../assets/imgs/safinaScreenshot.png';
import wapScreenshot from "../../assets/imgs/wapScreenshot.png"
import typeracerScreenshot from "../../assets/imgs/typeracerScreenshot.jpeg"

function Projects() {

    return (
        <div className="main-container">
            <h2 className={styles.projectsTitle}> Some of my projects </h2>
            <div className={styles.projectsContainer}>
                {
                    projects.map((project, projectIndex) =>
                        project.display && <ProjectCard {...project} key={projectIndex} />
                    )
                }
            </div>
        </div>
    )
}

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
        title: 'Typeracer Clone',
        body: 'A clone of the popular speed typing game play.typeracer.com. Multiple people can join the game and race together, achieved using websockets.',
        img: typeracerScreenshot,
        sourceCodeURL: 'https://github.com/wabdeali/typeracer-clone/',
        technologies: ['React', 'NodeJS', 'SocketIO', 'Sass'],
        display: true,
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
]

export default Projects

import React from 'react'
import "../styles/Main.css"
import "../styles/Projects.css"
import { ProjectsCase } from './ProjectsCase'

export const Projects = () => {
    return (
        <>

            <div className="maia font fontColorPink langEn" data-aos="zoom-in" data-aos-duration="1000">
                <h1>Projects</h1>
            </div>
            <div className="maia font fontColorPink langEs hidden" data-aos="zoom-in" data-aos-duration="1000"  >
                <h1>Proyectos</h1>
            </div>

            <div className="font fontColorLightMode text langEn" data-aos="fade-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-duration="1500">
                <p>I want to show you my projects, some of them are from courses, others are personal work.</p>
                <p>Click below on each one to know more about it.</p>
            </div>

            <div className="font fontColorLightMode text langEs hidden" id="langEs" data-aos="fade-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-duration="1500">
                <p>Quiero mostrarte mis proyectos, algunos son de cursos que realicé, otros son trabajos personales.</p>
                <p>Haz click más abajo en cada uno de ellos para conocer un poco más de cada uno.</p>

            </div>

            <ProjectsCase/>
        </>
    )
}

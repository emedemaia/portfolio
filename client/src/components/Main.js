import React, { useEffect } from 'react'
import "../styles/Main.css"
import mujer from "../images/mujerProgramando250x250.png"
import AOS from "aos"
import "aos/dist/aos.css";
import { Projects } from './Projects';




export const Main = () => {


    const menuOut = () => {

        const hamburger = document.getElementById("hamburger")
        const menu = document.getElementById("menu")
        const ul = document.getElementById("ul")

        if (hamburger.classList.contains("is-active") && menu.classList.contains("menu-expanded") && ul.classList.contains("ul-expanded")) {
            hamburger.classList.toggle("is-active")
            menu.classList.toggle("menu-expanded")
            ul.classList.toggle("ul-expanded")
        }
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <>
            <main onMouseOver={menuOut}>


                <div className="maia font fontColorPink" data-aos="fade-up" data-aos-duration="2000">
                    <p className="dev fontColorLightMode">FullStack Developer</p>
                    <h1>Maia I. Elías</h1>
                    <img src={mujer} className="imgMujer" alt="Mujer Programando" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" />
                </div>

                <div className="font fontColorLightMode about langEn" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500">
                    <p>Hello! I'm a FullStack Developer from Argentina</p>
                    <p>I love challenges and giving my best in everything.</p>
                    <p>I learn fast and would love to work with you!</p>
                </div>

                <div className="font fontColorLightMode about langEs hidden" id="langEs" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500">
                    <p>¡Hola! Soy una Desarrolladora FullStack de Argentina.</p>
                    <p>Amo los desafíos y dar lo mejor de mí en todo.</p>
                    <p>Aprendo rápido y ¡me encantaría trabajar con vos!.</p>
                </div>

                <div className='arrowContainer'>
                    <div className="arrow">
                        <span className='lightModeArrow'></span>
                        <span className='lightModeArrow'></span>
                        <span className='lightModeArrow'></span>

                    </div>
                </div>


                <Projects />
               

            </main>
        </>
    )
}

import React, { useEffect } from 'react'
import "../styles/Main.css"
import mujer250 from "../images/mujerProgramando250x250.png"
import mujer560 from "../images/mujerProgramando560.png"
import AOS from "aos"
import "aos/dist/aos.css";
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Skills } from './Skills'




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

    const topPage = () => {
        const top = document.getElementById("topPage")
        if (document.documentElement.scrollTop > 150) {
           top.classList.add("topPageColor");
        }else{
            top.classList.remove("topPageColor");
           }
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        document.body.onscroll = () => {
            menuOut()
            topPage()
        }
      
    }, [])

    return (
        <>
            <main onMouseOver={menuOut} id="scrollingPage">

                <div className='container '>
                    <div className='row presentation'>
                        <div className="maia font fontColorPink col-12 col-md-4" data-aos="fade-up" data-aos-duration="1000" >
                            <p className="dev fontColorLightMode">FULL STACK DEVELOPER</p>
                            <p className='maiaTitle'>Maia I. Elías</p>
                            <img srcSet={`${mujer250}  250w,
                   ${mujer560} 560w`}

                                sizes='(max-width: 768px) 250px,
                    300px'

                                src={mujer250} className="imgMujer" alt="Mujer Programando" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" />
                        </div>

                        <div className="font fontColorLightMode about col-12 col-md-7 col-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                            <div className='langEn'>
                                <p>Hello! I'm a Full Stack Developer from Argentina.</p>
                                <p>I love challenges and giving my best in everything.</p>
                                <p>I'm a fast learner and would love to work with you!</p>
                            </div>

                            <div className='langEs hidden'>
                                <p>¡Hola! Soy una Desarrolladora Full Stack de Argentina.</p>
                                <p>Amo los desafíos y dar lo mejor de mí en todo.</p>
                                <p>Aprendo rápido y ¡me encantaría trabajar con vos!.</p>
                            </div>
                            <div className='contactAbout'>
                                <Contact />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='arrowContainer'>
                    <div className="arrow">
                        <span className='lightModeArrow'></span>
                        <span className='lightModeArrow'></span>
                        <span className='lightModeArrow'></span>

                    </div>
                </div>


                <Projects />
                <Skills />

                <div id="contact"></div>

                <div className="maia font fontColorPink langEn" data-aos="zoom-in" data-aos-duration="500">
                    <h1>Contact</h1>
                </div>
                <div className="maia font fontColorPink langEs hidden" data-aos="zoom-in" data-aos-duration="500"  >
                    <h1>Contacto</h1>
                </div>

                <div className="font fontColorLightMode text" data-aos="fade-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-duration="500">
                    <p className='langEn'>Any Questions?</p>
                    <p className='langEs hidden'>¿Alguna pregunta?</p>
                    <Contact />
                </div>

                <div>
                    <a href="#home">
                        <span className="iconify topPage topPageTransparent" data-icon="bi:arrow-up-circle-fill" id='topPage'></span></a>
                </div>

            </main>
        </>
    )
}

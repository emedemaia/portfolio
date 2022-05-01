import React, { useEffect, useState } from 'react'
import "../styles/hamburgers.css"
import "../styles/Header.css"
import AOS from "aos"
import "aos/dist/aos.css";

export const Header = () => {
    const [langEsp, setLangEsp] = useState(false)

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        AOS.refresh();
    }, [langEsp])

    const hamburger = () => {
        document.getElementById("hamburger").classList.toggle("is-active")
        document.getElementById("menu").classList.toggle("menu-expanded")
        document.getElementById("ul").classList.toggle("ul-expanded")
    }

    const changeMode = () => {
        const moon = document.getElementById("moon")
        const sun = document.getElementById("sun")
        const body = document.getElementById("body")
        const hambMenu = document.getElementById("hambMenu")
        const fontColorPink = [...document.getElementsByClassName("fontColorPink")]
        const fontColorLightMode = [...document.getElementsByClassName("fontColorLightMode")]
        const hamburger = [...document.getElementsByClassName("hamburger-inner")]
        const hamburger1 = document.getElementById("hamburger")
        const menu = document.getElementById("menu")
        const arrowLight = [...document.getElementsByClassName("lightModeArrow")]
        const arrowDark = [...document.getElementsByClassName("darkModeArrow")]
        const modalContent = [...document.getElementsByClassName("modalContent")]
        const btnCloseModal = [...document.getElementsByClassName("btnCloseModal")]
        const btn = [...document.getElementsByClassName("btn")]
        const imageContainer = [...document.getElementsByClassName("imageContainer")]
        const titleProj = [...document.getElementsByClassName("titleProj")]
        const fontColorWhite = [...document.getElementsByClassName("fontColorWhite")]


        if (moon.classList.contains("hidden")) {
            sun.classList.add("hidden")
            moon.classList.remove("hidden")
            body.classList.remove("darkMode")
            hambMenu.classList.remove("darkMode")
            hambMenu.classList.remove("hamb-menuDark")

            fontColorPink.forEach((element) => {
                element.classList.remove("fontColorTurquoise")
            })

            fontColorLightMode.forEach((element) => {
                element.classList.remove("fontColorDarkMode")
            })

            if (hamburger1.classList.contains("is-active")) {
                hamburger.forEach((element) => {
                    element.classList.remove("hamburgerDarkMode")
                })
            }

            hamburger.forEach((element) => {
                element.classList.remove("hamburgerDarkMode")
            })

            menu.classList.remove("backgroundTurquoise")

            arrowDark.forEach((element) => {
                element.classList.add("lightModeArrow")
                element.classList.remove("darkModeArrow")
            })

            modalContent.forEach((element) => {
                element.classList.remove("darkMode")
            })

            btnCloseModal.forEach((element) => {
                element.classList.remove("btnXDarkMode")
            })

            btn.forEach((element) => {
                element.classList.remove("btnDarkMode")
            })

            imageContainer.forEach((element) => {
                element.classList.remove("imageContainerDarkM")
            })

            titleProj.forEach((element) => {
                element.classList.remove("titleProjDark")
            })

            fontColorWhite.forEach((element) => {
                element.classList.remove("fontColorHeaderDark")
            })

        } else {
            moon.classList.add("hidden")
            sun.classList.remove("hidden")
            body.classList.add("darkMode")
            hambMenu.classList.add("darkMode")
            hambMenu.classList.add("hamb-menuDark")

            fontColorPink.forEach((element) => {
                element.classList.add("fontColorTurquoise")
            })



            fontColorLightMode.forEach((element) => {
                element.classList.add("fontColorDarkMode")
            })

            if (hamburger1.classList.contains("is-active")) {
                hamburger.forEach((element) => {
                    element.classList.add("hamburgerDarkMode")
                })
            }

            hamburger.forEach((element) => {
                element.classList.add("hamburgerDarkMode")
            })
            menu.classList.add("backgroundTurquoise")

            arrowLight.forEach((element) => {
                element.classList.remove("lightModeArrow")
                element.classList.add("darkModeArrow")
            })

            modalContent.forEach((element) => {
                element.classList.add("darkMode")
            })

            btnCloseModal.forEach((element) => {
                element.classList.add("btnXDarkMode")
            })

            btn.forEach((element) => {
                element.classList.add("btnDarkMode")
            })

            imageContainer.forEach((element) => {
                element.classList.add("imageContainerDarkM")
            })

            titleProj.forEach((element) => {
                element.classList.add("titleProjDark")
            })

            fontColorWhite.forEach((element) => {
                element.classList.add("fontColorHeaderDark")
            })
        }
    }

    const changeLangEn = () => {
        const home = document.getElementById("home")
        const en = [...document.getElementsByClassName("langEn")]
        const es = [...document.getElementsByClassName("langEs")]
        const enBtn = document.getElementById("langEn")
        const esBtn = document.getElementById("langEs")

        if (home.classList.contains("Es")) {
            es.forEach((element) => {
                element.classList.add("hidden")
            })
            en.forEach((element) => {
                element.classList.remove("hidden")
            })
            home.classList.remove("Es")
            home.classList.add("En")
            enBtn.classList.add("hidden")
            esBtn.classList.remove("hidden")
            setLangEsp(false)
        } else {
            console.log("Ya está en idioma inglés")
        }

    }

    const changeLangEs = () => {
        const home = document.getElementById("home")
        const en = [...document.getElementsByClassName("langEn")]
        const es = [...document.getElementsByClassName("langEs")]
        const enBtn = document.getElementById("langEn")
        const esBtn = document.getElementById("langEs")



        if (home.classList.contains("En")) {
            es.forEach((element) => {
                element.classList.remove("hidden")
            })
            en.forEach((element) => {
                element.classList.add("hidden")
            })

            home.classList.remove("En")
            home.classList.add("Es")
            enBtn.classList.remove("hidden")
            esBtn.classList.add("hidden")

            setLangEsp(true)
        } else {
            console.log("Ya está en idioma español")
        }
    }

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


    return (
        <>
            <header>
                <div className="header container-fluid" data-aos="fade-in" data-aos-duration="1500">
                    <div className="hamb-menu row" id="hambMenu">
                        <div className='col-1'>
                            <button className="hamburger hamburger--squeeze" type="button" onClick={hamburger} id="hamburger">
                                <span className="hamburger-box ">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>

                        <div className=' col-8 nopadding'>
                            <div className="font fontColorPink name">Maia</div>
                        </div>


                        <div className='col-1 nopadding d-flex align-items-center justify-content-center' >
                            <button onClick={changeMode} className="buttonMode" type="button">
                                <i className="fa-solid fa-moon  moon fa-lg fontColorWhite" id="moon"></i>
                                <i className="fa-solid fa-sun  sun fa-lg fontColorWhite hidden" id="sun"></i>
                            </button>
                        </div>

                        <div className='col-1 nopadding d-flex align-items-center justify-content-center'>
                            <button className="font fontColorPink langPosition langEn langBtn fontColorWhite hidden" onClick={changeLangEn} type="button"
                                id="langEn">.EN</button>
                            <button className="font fontColorPink langPosition langEs langBtn fontColorWhite" onClick={changeLangEs} type="button"
                                id="langEs">.ES</button>
                        </div>

                    </div>

                    <nav className="menu" id="menu">
                        <ul className="ul" id="ul">
                            <li className="font langEn"> <a href="#home" className='menuBtn fontColorWhite' onClick={menuOut}>Home</a> </li>
                            <li className="font langEn"> <a href="#projects" className='menuBtn fontColorWhite' onClick={menuOut}>Projects</a> </li>
                            <li className="font langEn"> <a href="#contact" className='menuBtn fontColorWhite' onClick={menuOut}>Contact</a> </li>
                            <li className="font langEs hidden"> <a href="#home" className='menuBtn fontColorWhite' onClick={menuOut}>Home</a> </li>
                            <li className="font langEs hidden"> <a href="#projects" className='menuBtn fontColorWhite' onClick={menuOut}>Proyectos</a> </li>
                            <li className="font langEs hidden"> <a href="#contact" className='menuBtn fontColorWhite' onClick={menuOut}>Contacto</a> </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

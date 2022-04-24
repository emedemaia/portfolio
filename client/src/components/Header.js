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
        const modalContent = document.getElementById("modalContent")
        const btnCloseModal = document.getElementById("btnCloseModal")

        if (moon.classList.contains("hidden")) {
            sun.classList.add("hidden")
            moon.classList.remove("hidden")
            body.classList.remove("darkMode")
            hambMenu.classList.remove("darkMode")

            fontColorPink.forEach((element)=>{
                element.classList.remove("fontColorTurquoise")
            })
          
            fontColorLightMode.forEach((element)=>{
                element.classList.remove("fontColorDarkMode")
            })
            
            if (hamburger1.classList.contains("is-active")) {
                hamburger.forEach((element)=>{
                    element.classList.remove("hamburgerDarkMode")
                })
            }

            hamburger.forEach((element)=>{
                element.classList.remove("hamburgerDarkMode")
            })

            menu.classList.remove("backgroundTurquoise")

            arrowDark.forEach((element)=>{
                element.classList.add("lightModeArrow")
                element.classList.remove("darkModeArrow")
            })

            modalContent.classList.remove("darkMode")
            btnCloseModal.classList.remove("btnXDarkMode")

        } else {
            moon.classList.add("hidden")
            sun.classList.remove("hidden")
            body.classList.add("darkMode")
            hambMenu.classList.add("darkMode")

            fontColorPink.forEach((element)=>{
                element.classList.add("fontColorTurquoise")
            })
          
            fontColorLightMode.forEach((element)=>{
                element.classList.add("fontColorDarkMode")
            })

           if (hamburger1.classList.contains("is-active")) {
                hamburger.forEach((element)=>{
                    element.classList.add("hamburgerDarkMode")
                })
            }

            hamburger.forEach((element)=>{
                element.classList.add("hamburgerDarkMode")
            })
            menu.classList.add("backgroundTurquoise")

            arrowLight.forEach((element)=>{
                element.classList.remove("lightModeArrow")
                element.classList.add("darkModeArrow")
            })

            modalContent.classList.add("darkMode")
            btnCloseModal.classList.add("btnXDarkMode")

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

    window.onscroll = menuOut()
    

    return (
        <>
            <header>
                <div className="header" data-aos="fade-in" data-aos-duration="1500">
                    <div className="hamb-menu" id="hambMenu">
                        <button className="hamburger hamburger--squeeze" type="button" onClick={hamburger} id="hamburger">
                            <span className="hamburger-box ">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>

                        <div className="font fontColorPink name"> Maia</div>
                        <button onClick={changeMode} className="buttonMode" type="button"><i className="fa-solid fa-moon  moon fa-lg"
                            id="moon"></i>
                            <i className="fa-solid fa-sun  sun fa-lg hidden" id="sun"></i>
                        </button>
                        <button className="font fontColorPink langPosition langEn langEnBtn hidden" onClick={changeLangEn} type="button"
                            id="langEn">.EN</button>
                        <button className="font fontColorPink langPosition langEs langEsBtn" onClick={changeLangEs} type="button"
                            id="langEs">.ES</button>
                    </div>

                    <nav className="menu" id="menu">
                        <ul className="ul" id="ul">
                            <li className="font langEn"> <a href="#home" className='menuBtn' onClick={menuOut}>Home</a> </li>
                            <li className="font langEn"> <a href="#projects" className='menuBtn' onClick={menuOut}>Projects</a> </li>
                            <li className="font langEn"> <a href="#contact" className='menuBtn' onClick={menuOut}>Contact</a> </li>
                            <button className="buttonContact contact font " type="button">Contact</button>
                            <li className="font langEs hidden"> <a href="#home" className='menuBtn' onClick={menuOut}>Home</a> </li>
                            <li className="font langEs hidden"> <a href="#projects" className='menuBtn' onClick={menuOut}>Proyectos</a> </li>
                            <li className="font langEs hidden"> <a href="#contact" className='menuBtn' onClick={menuOut}>Contacto</a> </li>
                            <button className="buttonContact contact font" type="button" >Contacto</button>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

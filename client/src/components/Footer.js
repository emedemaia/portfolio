import React from 'react'
import "../styles/Header.css"
import "../styles/Footer.css"

export const Footer = () => {
  return (
    <div className='footer bgFooterPink' id="footer">

    <div className='font'>
    <span className='fontColorPink fontColorWhite'>Links:</span>
    <a href="https://www.linkedin.com/in/maiaelias/" target="_blank" rel="noopener noreferrer"> <span className="iconify fontColorPink fontColorWhite lkd" data-icon="ant-design:linkedin-outlined"></span></a>
  <a href="https://www.instagram.com/emedemaia_art/" target="_blank" rel="noopener noreferrer"><span className="iconify fontColorPink fontColorWhite insta" data-icon="ph:instagram-logo-fill"></span></a>
  
  <a href="https://github.com/emedemaia" target="_blank" rel="noopener noreferrer"><span className="iconify fontColorPink fontColorWhite github" data-icon="ant-design:github-outlined"></span></a>

    </div>
    <div className='font fontColorPink fontColorWhite'><span className='langEn'>Developed by Maia I. Elías</span><span className='langEs hidden'>Desarrollado por Maia I. Elías</span></div>

    </div>
  )
}

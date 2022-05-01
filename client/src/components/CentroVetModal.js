import React from 'react'
import "../styles/ProjectsCase.css"
import titleCVet320 from "../images/titleCentroVet_320.png"
import titleCVet560 from "../images/title560.png"
import titleCVet740 from "../images/titleCVet740.png"

export const CentroVetModal = () => {
  return (
    <>

{/* <!-- Modal PROJECT 1 --> */}
<div className="modal fade font " id="centrovetSite" tabIndex="-1" aria-labelledby="webSitesModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content modalContent">
            <div className="modalHeader">
              <img srcSet={`${titleCVet320}  320w,
                   ${titleCVet560} 560w,
                   ${titleCVet740} 740w`}
              
                   sizes='(max-width: 760px) 320px,
                   (max-width: 992px) 500px
                    740px'

              src={titleCVet320} className="modalImg" alt="centroVet" />
            </div>
            <div className='tecnol  fontColorLightMode'>HTML, CSS, JS, HBS, Bootstrap, NodeJS, MySQL</div>
            <div className="modal-body fontColorLightMode">
              <p className="modal-title fontColorLightMode" id="webSitesModal">CENTRO VET</p>
              <p className='langEn'>Website of a veterinary Lab, with data, links to reserve turns, a contact form, and info about the staff. It has an admin section (user: Maia, pwd: 1234), where you can write news ("novedades") like a Blog, and also see data of the people who writes you through the contact form.</p>
              <p className='langEn'>Responsive website</p>
              <p className='langEs hidden'>Sitio web de un laboratorio veterinario, con información, links para reservar turnos, un formulario de contacto e información para conocer el staff. Prsenta una sección de administrador (usuario: Maia, contraseña: 1234), donde podés escribir novedades como en un blog, así como ver los datos de la gente que te ha escrito a través del formulario de contacto.</p>
              <p className='langEs hidden'>Sitio web responsive.</p>
            </div>
            <div className="modalBtns">
              <a href='https://centrovetnode.herokuapp.com' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink btnLightMode langEn">Visit Website</button>
                <button type="button" className="btn fontColorPink btnLightMode langEs hidden">Visitar Website</button>
              </a>
              <a href='https://centrovetnode.herokuapp.com/admin/login' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink  btnLightMode langEn">
                  Visit Admin section
                </button>
                <button type="button" className="btn fontColorPink  btnLightMode langEs hidden">
                  Visitar sección admin
                </button>
              </a>
              <a href='https://github.com/emedemaia/centrovet_node.git' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink  btnLightMode langEn">Visit repository</button>
                <button type="button" className="btn fontColorPink  btnLightMode langEs hidden">Visitar repositorio</button>
              </a>
            </div>
            <div className='btnCloseContainer'>
              <button type="button" className="btn-close btnX btnCloseModal" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}


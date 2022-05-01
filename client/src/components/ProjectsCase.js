import React from 'react'
import "../styles/ProjectsCase.css"
import project1320 from "../images/project1_320.png"
import titleCVet320 from "../images/titleCentroVet_320.png"
import project2320 from "../images/project2_320.png"
import titlePatin320 from "../images/titlePatin_320.png"
import titlePatin560 from "../images/titlePatin560.png"
import titleCVet560 from "../images/title560.png"
import titlePatin740 from "../images/titlePatin740.png"
import titleCVet740 from "../images/titleCVet740.png"



export const ProjectsCase = () => {



  return (
    <>

      <div className='container'>
        <div className="row rowImage">

          {/* <!-- Button trigger modal PROJECT 1--> */}
          <div className="imageContainer" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-bs-toggle="modal" data-bs-target="#centrovetSite"  >
            <div className="col image">
              <h6 className='font fontColorPink titleProj'>CENTROVET</h6>
              <img sizes='(max-width: 760px) 250px, 400px' src={project1320} width="100%" alt="Project" />
            </div>
          </div>
          {/* End Project 1 */}

          {/* <!-- Button trigger modal PROJECT 2--> */}
          <div className="imageContainer" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-bs-toggle="modal" data-bs-target="#patinSite">
            <div className="col image">
              <h5 className='font fontColorPink titleProj'>PISTA DE PATIN RETRO</h5>
              <img sizes='(max-width: 760px) 250px, 400px' src={project2320} width="100%" alt="Project" />
            </div>
          </div>
          {/* End project 2 */}


        </div>
      </div>

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
            <div className='tecnol'>HTML, CSS, JS, HBS, Bootstrap, NodeJS, MySQL</div>
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



      {/* <!-- Modal PROJECT 2 --> */}
      <div className="modal fade font " id="patinSite" tabIndex="-1" aria-labelledby="webSitesModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content modalContent">
            <div className="modalHeader">
              <img srcSet={`${titlePatin320}  320w,
                   ${titlePatin560} 560w,
                   ${titlePatin740} 740w`}
              
                   sizes='(max-width: 760px) 320px,
                   (max-width: 992px) 500px
                    740px'
              src={titlePatin320} className="modalImg" alt="centroVet" />
            </div>
            <div className='tecnol'>ReactJS, NodeJs, MongoDB</div>
            <div className="modal-body fontColorLightMode">
              <p className="modal-title fontColorLightMode" id="webSitesModal">PISTA DE PATÍN RETRO</p>
              <p className='langEn'>Website of an imaginary roller rink, where you can register as an user, reserve turns, manage your personal data and delete your account. Also there's an admin section where you can manage users category (vIP or not), see users turns and delete users accounts.</p>
              <p className='langEn'>Not responsive website yet</p>
              <p className='langEs hidden'>Sitio web de una pista de patín imaginaria, donde podés registrarte como usuario, reservar turnos, manejar tu información personal y eliminar tu cuenta. También hay una sección de administrador donde podés cambiar la categoría del usuario (VIP o no), ver los turnos de los usuarios y eliminar sus cuentas.</p>
              <p className='langEs hidden'>No es responsive (aún)</p>
            </div>
            <div className="modalBtns">
              <a href='https://patin.herokuapp.com' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink  btnLightMode langEn">Visit Website</button>
                <button type="button" className="btn fontColorPink btnLightMode langEs hidden">Visitar Website</button>
              </a>
              <a href='https://patin.herokuapp.com/registeradminpage' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink  btnLightMode langEn">
                  Visit Admin register page
                </button>
                <button type="button" className="btn fontColorPink  btnLightMode langEs hidden">
                  Visitar sección de registro admin
                </button>
              </a>
              <a href='https://github.com/emedemaia/AplicacionWebPatinUTN.git' target="_blank" rel="noopener noreferrer">
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

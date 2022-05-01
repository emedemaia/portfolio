import React from 'react'
import "../styles/ProjectsCase.css"
import titlePatin320 from "../images/titlePatin_320.png"
import titlePatin560 from "../images/titlePatin560.png"
import titlePatin740 from "../images/titlePatin740.png"

export const PatinModal = () => {
  return (
    <>

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
            <div className='tecnol  fontColorLightMode'>ReactJS, NodeJs, MongoDB</div>
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


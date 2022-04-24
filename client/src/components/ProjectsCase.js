import React from 'react'
import "../styles/ProjectsCase.css"
import project1320 from "../images/project1_320.png"
import titleCVet320 from "../images/titleCentroVet_320.png"
import project2320 from "../images/project2_320.png"
import titlePatin320 from "../images/titlePatin_320.png"

export const ProjectsCase = () => {



  return (
    <>
{/* PROJECT1 */}
   {/* <!-- Button trigger modal --> */}
      <div className="container imageContainer"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-bs-toggle="modal" data-bs-target="#centrovetSite"  >
        <div className="row">
          <div className="col col-md-6 image">
          <h6 className='font fontColorPink titleProj'>CENTROVET</h6>
            <img src={project1320} width="100%" alt="Project"/>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade font " id="centrovetSite" tabIndex="-1" aria-labelledby="webSitesModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" id="modalContent">
            <div className="modalHeader">
             <img src={titleCVet320} className="modalImg" alt="centroVet"/>
            </div>
            <div className="modal-body fontColorLightMode">
            <h6 className="modal-title fontColorLightMode" id="webSitesModal">CENTRO VET</h6>
              Website with an admin section (user: Maia, pwd: 1234), where you can write news ("novedades") like a Blog, and also see data of the people who writes you through the contact form.
            </div>
            <div className="modalBtns">
              <a href='https://centrovetnode.herokuapp.com' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink">Visit Website</button>
              </a>
              <a href='https://centrovetnode.herokuapp.com' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink">
                  Visit Admin section
                </button>
              </a>
              <a href='https://github.com/emedemaia/centrovet_node.git' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink">Visit repository</button>
              </a>
            </div>
            <div className='btnCloseContainer'>
              <button type="button" className="btn-close btnX" data-bs-dismiss="modal" aria-label="Close" id="btnCloseModal"></button>
            </div>
          </div>
        </div>
      </div>

{/* PROJECT2 */}
{/* <!-- Button trigger modal --> */}
<div className="container imageContainer"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-bs-toggle="modal" data-bs-target="#patinSite">
        <div className="row">
          <div className="col col-md-6 image">
          <h6 className='font fontColorPink titleProj'>PISTA DE PATIN RETRO</h6>
            <img src={project2320}  width="100%" alt="Project"  />
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade font " id="patinSite" tabIndex="-1" aria-labelledby="webSitesModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" id="modalContent">
            <div className="modalHeader">
             <img src={titlePatin320} className="modalImg" alt="centroVet"/>
            </div>
            <div className="modal-body fontColorLightMode">
            <h6 className="modal-title fontColorLightMode" id="webSitesModal">PISTA DE PATÍN RETRO</h6>
              Website of an imaginary roller rink, where you can register as an user, reserve turns, manage your personal data and delete your account. Also there's an admin section where you can manage users category (vIP or not), see users turns and delete users accounts.
            </div>
            <div className="modalBtns">
              <a href='https://patin.herokuapp.com' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink">Visit Website</button>
              </a>
              <a href='https://patin.herokuapp.com/registeradminpage' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink">
                  Visit Admin register page
                </button>
              </a>
              <a href='https://github.com/emedemaia/AplicacionWebPatinUTN.git' target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn fontColorPink">Visit repository</button>
              </a>
            </div>
            <div className='btnCloseContainer'>
              <button type="button" className="btn-close btnX" data-bs-dismiss="modal" aria-label="Close" id="btnCloseModal"></button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

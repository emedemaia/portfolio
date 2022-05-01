import React from 'react'
import "../styles/ProjectsCase.css"
import project1320 from "../images/project1_320.png"

export const CentroVetBtn = () => {
  return (
    <>

 {/* <!-- Button trigger modal PROJECT 1--> */}
 <div className="imageContainer" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-bs-toggle="modal" data-bs-target="#centrovetSite"  >
            <div className="col image">
              <h6 className='font fontColorPink titleProj'>CENTROVET</h6>
              <img sizes='(max-width: 760px) 250px, 400px' src={project1320} width="100%" alt="Project" />
            </div>
          </div>
          {/* End Project 1 */}

    </>
  )
}

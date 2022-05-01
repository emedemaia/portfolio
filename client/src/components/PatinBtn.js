import React from 'react'
import "../styles/ProjectsCase.css"
import project2320 from "../images/project2_320.png"

export const PatinBtn = () => {
  return (
    <>

  {/* <!-- Button trigger modal PROJECT 2--> */}
  <div className="imageContainer" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-bs-toggle="modal" data-bs-target="#patinSite">
            <div className="col image">
              <h5 className='font fontColorPink titleProj'>PISTA DE PATIN RETRO</h5>
              <img sizes='(max-width: 760px) 250px, 400px' src={project2320} width="100%" alt="Project" />
            </div>
          </div>
          {/* End project 2 */}

    </>
  )
}

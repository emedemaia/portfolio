import React from 'react'
import "../styles/ProjectsCase.css"

export const ProjectsCase = () => {

  const project = () => {

  }

  return (
    <>
      <div className="container imageContainer">
        <div className="row">
          <div className="col col-md-6 image">
            <p className='font fontColorPink'>CentroVet</p>
            <a href='https://centrovetnode.herokuapp.com'>
              <img src="https://via.placeholder.com/320X250" alt="Project" onMouseOver={project} />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-6 image">
            <p className='font fontColorPink'>Pista de patín Retro</p>
            <a href='https://patin.herokuapp.com'>
              <img src="https://via.placeholder.com/320X250" alt="Project" onMouseOver={project} />
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

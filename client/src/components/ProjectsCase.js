import React from 'react'
import "../styles/ProjectsCase.css"
import { CentroVetBtn } from './CentroVetBtn'
import { PatinModal } from './PatinModal'
import { CentroVetModal } from './CentroVetModal'
import { PatinBtn } from './PatinBtn'



export const ProjectsCase = () => {



  return (
    <>

      <div className='container projectCase'>
        <div className="row rowImage">
          <CentroVetBtn />
          <PatinBtn />
        </div>
      </div>

      <CentroVetModal />
      <PatinModal />

    </>
  )
}

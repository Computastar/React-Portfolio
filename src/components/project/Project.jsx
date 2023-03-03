import React from 'react'
import './project.css'

const Project = ({title, text}) => {
  return (
    <div className='folio__projects-container__project'>
      <div className='folio__projects-container__project-title'>
        <div />
        <h1>{title}</h1>
        </div>
        <div className='folio__projects-container_project-text'>
          <p>{text}</p>
      </div>
    </div>
  )
}

export default Project

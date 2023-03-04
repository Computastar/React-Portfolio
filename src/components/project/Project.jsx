import React from 'react'
import './project.css'

const Project = ({title, deployed, repository, screenshot}) => {
  return (
    <div className='folio__projects-container__project'>
      <div className='folio__projects-container__project-title'>
        <div />
        <h1>{title}</h1>
        </div>
        <div className='folio__projects-container_project-deployed'>
          <p>{deployed}</p>
      </div>
      <div className='folio__projects-container_project-repository'>
          <p>{repository}</p>
    </div>
    <div className='folio__projects-container_project-image'>
          <img src='https://github.com/Computastar/Day-Planner/blob/main/assets/images/05-third-party-apis-homework-demo.gif' alt="" />
    </div>
  </div>
  )
}

export default Project

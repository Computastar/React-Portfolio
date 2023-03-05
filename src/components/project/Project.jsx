/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './project.css'
import banner from '../../assets/cstar_banner.png'


const Project = ({title, deployed, repository, screenshot}) => {
  return (
    <div className='folio__projects-container__project'>
      <div className='folio__projects-container__project-title'>
        <div />
        <h1>{title}</h1>
        </div>
        <div className='folio__projects-container_project-deployed '>
          { (deployed)===null
            ? <p>No deployed GitHub pages</p>
            : <a href={deployed}>View Deployed Site</a>
          }

      </div>
      <div className='folio__projects-container_project-repository '>
        { (repository==="")
          ? <p>No GitHub repository</p>
          : <a href={repository}>View Repository</a>
        }
    </div>
    <div className='folio__projects-container_project-image'>
          <img src={require('../../assets/cstar_banner.png')} alt="" />
    </div>
  </div>
  )
}

export default Project

import React from 'react'
import './project.css'
import '../../assets/1.jpeg';



function Project(props) {
  return (
    <div>
    <div className='folio__projects-container__project'>
      <div className='folio__projects-container__project-title'>
        <div />
        <h1>{props.name}</h1>
        </div>
        <div className='folio__projects-container_project-deployed '>
          { (props.pages)===null
            ? <p>No deployed GitHub pages</p>
            : <a href={props.pages} target="_blank"  rel="noreferrer noopener">View Deployed Site</a>
          }

      </div>
      <div className='folio__projects-container_project-repository '>
        { (props.repo===null)
          ? <p>No GitHub repository</p>
          : <a href={props.repo} target="_blank"  rel="noreferrer noopener">View Repository</a>
        }
    </div>
    <div className='folio__projects-container_project-image'>
      <img src={props.image} alt={props.name} />
    </div>
  </div>
  </div>
  )
}


export default Project

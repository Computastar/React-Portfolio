import React from 'react'
import { Project } from '../../components/'
import './projects.css'

const Projects = () => {
  return (
    <div className='folio__projects section__Margin' id='projects'>
      <div className='folio__projects-container'>
         <Project title="Project 1" text="this is project one" />
         <Project title="Project 2" text="this is project one" />
         <Project title="Project 3" text="this is project three" />
      </div>
    </div>
  )
}

export default Projects

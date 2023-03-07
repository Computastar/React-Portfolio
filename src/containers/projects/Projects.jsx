import React, { Component } from 'react'

import  Project  from '../../components/project/Project'
import projects from '../../services/projects.json'

import './projects.css'

class Projects extends Component {
  state = {
    projects
  }




render()  {
  return (
    <div className='folio__projects section__Margin' id='projects'>
      <div className='folio__projects-container'>
        {this.state.projects.map(project => (
          <Project 
                  key={project.id} 
                   name={project.name} 
                   pages={project.pages}  
                   repo={project.repo}
                   image={project.image}
          />
          ))}
      </div>
    </div>
  );
}
};

export default Projects

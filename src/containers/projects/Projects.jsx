import React, {useState, useEffect } from 'react'
//import { decode as base64_decode} from 'base-64';
import  Project  from '../../components/project/Project'

import './projects.css'


const Projects = () => {
  const url = 'https://api.github.com/users/computastar/repos';

    const [repos, setRepos] = useState([]);

    //const [screenshot, setScreenshot] = useState(null)
  
    const getRepos = async () => {
      const response = await fetch(url);
      const repos = await response.json();

      const publicRepos = repos.filter( repo => {
        return repo.private === false
      })
      setRepos(publicRepos);
       console.log(publicRepos);
    };

       useEffect(() => {
      getRepos();
    }, []);

  return (
    <div className='folio__projects section__Margin' id='projects'>
      <div className='folio__projects-container'>
        {repos.map( repo => (

          <Project key={repo.id} 
                   title={repo.name} 
                   deployed={repo.homepage}  
                   repository={repo.html_url}
                   screenshot={repo.description}
          />
          ) 
        )
        }
      </div>
        
    </div>
  )
}

export default Projects

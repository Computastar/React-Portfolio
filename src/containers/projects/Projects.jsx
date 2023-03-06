import React, {useState, useEffect } from 'react'
//import { decode as base64_decode} from 'base-64';
//import { octokit } from '../../services/octokit';
import  Project  from '../../components/project/Project'

import './projects.css'


const Projects = () => {
  const url = 'https://api.github.com/users/computastar/repos';

  // second argument
  
  //let publicRepos = {};
    const [repos, setRepos] = useState([]);
    //const [decode, setDecode] = useState([]);
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

    /*const getDecode = async () => {
      const response = await fetch('https://api.github.com/repos/computastar/bootstrap-portfolio/contents/README.md');
      const decode = await response.json()
      //console.log(decode.content);
      const decoded = base64_decode(decode.content);
      //console.log(decoded)
    }*/


   
    useEffect(() => {
      getRepos();
      //getDecode();
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

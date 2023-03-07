/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'
import './project.css'
/*import banner from 'https://github.com/Computastar/Team-Profile-Generator/blob/main/assets/MyTeam_.jpeg'*/


const Project = ({title, deployed, repository, screenshot}) => {

const [imagePath, setImagePath] = useState("");
  
  const getScreenshot = async (screenshot) => {
    try {
              let ss = ""
        let sp = 0
          console.log(screenshot.screenshot)
          ss = screenshot.screenshot
          //ss = ss.toLocaleLowerCase();
          console.log(ss)
          sp = ss.search('screenshot=');
         //console.log(ss)
        
         ss = ss.slice(sp+11)
         console.log(typeof ss)
         console.log(ss)
         setImagePath("'" + ss + "'")
         //return ()
        } catch (error) {
          console.log({error}) 
        }
  };

  //getScreenshot({screenshot});

  /*useState(() => {
    getScreenshot({screenshot});
  }, []);*/

  return (
    <div>
    <div className='folio__projects-container__project'>
      <div className='folio__projects-container__project-title'>
        <div />
        <h1>{title}</h1>
        </div>
        <div className='folio__projects-container_project-deployed '>
          { (deployed)===null
            ? <p>No deployed GitHub pages</p>
            : <a href={deployed} target="_blank"  rel="noreferrer noopener">View Deployed Site</a>
          }

      </div>
      <div className='folio__projects-container_project-repository '>
        { (repository===null)
          ? <p>No GitHub repository</p>
          : <a href={repository} target="_blank"  rel="noreferrer noopener">View Repository</a>
        }
    </div>
    <div className='folio__projects-container_project-image'>
        {/* (getScreenshot({screenshot})===null)
          ? <p>Cant find screenshot</p>
          : <img src={require(imagePath)} alt="" />
          
      */}
    </div>
  </div>
  </div>
  )
}

export default Project

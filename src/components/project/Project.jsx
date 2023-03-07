import React from 'react'
import Card from 'react-bootstrap/Card'
import './project.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Project(props) {
  return (
    <div className='folio__projects-container__project'>
    <Card className='folio__Project-Card' style={{ width: '19rem', height: '19rem' }}>
    <Card.Img className='folio__Project-Card-image' src={props.image} alt=""/>
    <Card.Body>
      <Card.Title className='folio__Project-Card-Title' >{props.name}</Card.Title>
      <Card.Link className='folio__Project-Card-Link' href={props.pages} target="_blank"  rel="noreferrer noopener">View Deployed Site</Card.Link>
      <br />
      <Card.Link className='folio__Project-Card-Link' href={props.repo} target="_blank"  rel="noreferrer noopener">View Repository</Card.Link>
    </Card.Body>
  </Card>
    </div>
  )
}


export default Project

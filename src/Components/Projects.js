import React from 'react';
import ProjectBox from './ProjectBox';
import kanban from '../images/kanban.jpg';
import Recipe from '../images/recipe.jpg';
import fs from '../images/freescribe.jpg';
import calci from '../images/calci.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>PROJECTS</b></h1>
      <div className='project'>
        
        <ProjectBox projectPhoto={kanban} projectName="Kanban" />
        <ProjectBox projectPhoto={Recipe} projectName="TastyTreat" />
        <ProjectBox projectPhoto={fs} projectName="FreeScribe" />
      </div>
    </div>
  )
}

export default Projects
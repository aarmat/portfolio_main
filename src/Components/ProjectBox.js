import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    FreeScribeDesc : "This website is a translation and transcription webapp that takes input audio from users or file to perform transcription and translation actions. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    FreeScribeGithub : "https://github.com/aarmat/Freescribe",
    FreeScribeWebsite : "",

    TastyTreatDesc : "A website that shows you recipes and descriptions of each recipe , which user can search for and add in the favourites section. Uses MERN stack.",
    TastyTreatGithub : "https://github.com/aarmat/Recipe-app",
    TastyTreatWebsite : "",

    KanbanDesc:"A Kanban board using fronted tech like react and tailwind.css that allows users to add tasks and sort them based on priority , namess or types of the task.",
    KanbanGithub:"https://github.com/aarmat/Kanban-board-react",
    KanbanWebsite:"https://kanban-board-react-lyart.vercel.app/",
    
   
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
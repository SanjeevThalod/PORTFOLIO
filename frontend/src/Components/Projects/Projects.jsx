import React from 'react';
import "./project.css"
import { Button, Typography } from '@mui/material';
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from '@mui/icons-material';

const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
})=>{
    return (
        <>
          <a href={url} className='projectCard' target='blank'>
            <div>
                <img src={projectImage} alt="Website" />
                <Typography variant='h5'>{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant='h4'>About Project</Typography>
                <Typography>{description}</Typography>
                <Typography variant='h6'>Tech Stack : {technologies}</Typography>
            </div>
          </a>
          {isAdmin && (
            <Button>
                <Delete/>
            </Button>
          )}
        </>
    );
}

const Projects = () => {
    const projects = [1,2,3];
    return (
        <div className='projects'>
            <Typography variant='h3'>Projects <AiOutlineProject/></Typography>
            <div className="projectsWrapper">
                {projects.map((project,index)=>(
                    <ProjectCard url="https://cool-gelato-60b04c.netlify.app" key={index}
                    projectTitle="Talk-A-Tive"
                    projectImage="https://res.cloudinary.com/dycxuzuon/image/upload/v1704201047/1704200805322_rz7fss.jpg"
                    description="A complete chatApp"
                    technologies="MongoDB,React,NodeJS,Express"
                    isAdmin = {false}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;
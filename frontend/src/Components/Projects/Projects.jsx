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
                <Typography variant='h5'><a href="https://www.github.com/SanjeevThalod" target="blank">Code</a></Typography>
            </div>
            <div>
                <Typography variant='h4'>{projectTitle}</Typography>
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
    const projects = [
        {
          url: "https://cool-gelato-60b04c.netlify.app",
          projectTitle: "Talk-A-Tive",
          projectImage: `${process.env.REACT_APP_PHOTO}/v1704385426/Screenshot_2024-01-04_215030_qwa2ml.png`,
          description: "A complete chatApp",
          technologies: "MongoDB, React, NodeJS, Express",
          isAdmin: false,
        },
        {
          url: "https://go-food-frontend-mauve.vercel.app/",
          projectTitle: "GoFood",
          projectImage: `${process.env.REACT_APP_PHOTO}/v1704385477/Screenshot_2024-01-04_215422_sivv4g.png`,
          description: "Online food Odering solution",
          technologies: "MongoDB, React, NodeJS, Express",
          isAdmin: true,
        },
        {
          url: "https://sanjeevthalod.github.io/E-Commerce/",
          projectTitle: "Cara",
          projectImage: `${process.env.REACT_APP_PHOTO}/v1704387189/Screenshot_2024-01-04_222133_ctsotw.png`,
          description: "A frontend for fashion Brand",
          technologies: "HTML, CSS, JAVASCRIPT",
          isAdmin: false,
        },
        {
            url: "https://sanjeevthalod.github.io/E-Waste/",
            projectTitle: "Remine",
            projectImage: `${process.env.REACT_APP_PHOTO}/v1704387315/Screenshot_2024-01-04_222454_e6xyiw.png`,
            description: "Landing Page for E-Waste Recycling Website",
            technologies: "HTML, CSS, JAVASCRIPT",
            isAdmin: false,
          },
      ];
      
      
    return (
        <div className='projects'>
            <Typography variant='h3'>Projects <AiOutlineProject/></Typography>
            <div className="projectsWrapper">
                {projects.map((item,index)=>(
                    <ProjectCard url="https://cool-gelato-60b04c.netlify.app" key={index}
                    projectTitle={item.projectTitle}
                    projectImage={item.projectImage}
                    description={item.description}
                    technologies={item.technologies}
                    isAdmin = {false}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;
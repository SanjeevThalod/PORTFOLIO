import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey, my name is Sanjeev Singh Thalod. I am full-stack Developer
                </Typography>
                <Link to="/contact" className='footerContactBtn' >
                    <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/SanjeevThalod" target='blank'><BsGithub/></a>
                <a href="https://www.linkedin.com/in/sanjeev-singh-thalod-a9a62922a" target='blank'><BsLinkedin/></a>
                <a href="https://www.instagram.com/sanjeevthalod/" target='blank'> <BsInstagram/></a>
            </div>
        </div>
    );
};

export default Footer;
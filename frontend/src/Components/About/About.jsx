import React from "react";
import "./About.css";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>Building the future, one algorithm at a time.</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://res.cloudinary.com/dycxuzuon/image/upload/v1704201047/1704200805322_rz7fss.jpg"
            alt="profile"
            className="aboutAvatar"
          />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Sanjeev
          </Typography>
          <Typography>Full Stack Developer</Typography>
          <Typography style={{ margin: "1vmax 0" }}>
            I am tech Enthusiast
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "40px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Crafting elegant solutions in the language of code. I am an Developer on
            a mission to turn ideas into seamless software experiences. Join me
            as I navigate the ever-evolving landscape of technology, one
            algorithm at a time.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;

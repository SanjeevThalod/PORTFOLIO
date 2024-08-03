import React, { useEffect } from "react";
import * as THREE from "three";
import moonImg from "../Image/moon.jpg";
import venusImg from "../Image/venus.jpg";
import "../Home.css";
import { Typography } from "@mui/material";
import TimeLine from "./TimeLine/TimeLine";
import { Link, useNavigate } from "react-router-dom";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { Tooltip } from 'react-tooltip';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiThreedotjs,
} from "react-icons/si";
import Typewriter from "./TypeWriter/Typewriter";

const Home = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    
    const venusTexture = textureLoader.load(venusImg);
    venusTexture.generateMipmaps = false; // Disable mipmaps for Venus
    venusTexture.minFilter = THREE.LinearFilter;
    
    const moonTexture = textureLoader.load(moonImg);
    moonTexture.generateMipmaps = false; // Disable mipmaps for Moon
    moonTexture.minFilter = THREE.LinearFilter;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Initial camera position
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Enable shadows
    renderer.shadowMap.enabled = true;

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.castShadow = true; // Make the moon cast shadows

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 150);
    const pointLight2 = new THREE.PointLight(0xffffff, 10);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-10, -5, 2);
    pointLight.castShadow = true; // Make the lights cast shadows
    pointLight2.castShadow = true;

    const lightHelper = new THREE.PointLightHelper(pointLight);
    //const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(new THREE.AmbientLight(0x404044)); // Add ambient light to illuminate shadows

    // movement
    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleScroll = () => {
      if (window.innerWidth <= 600) { // Check if on mobile
        camera.position.y = 5 - window.scrollY * 0.01; // Adjust this value to change the speed of scrolling
        if (camera.position.y < 0) camera.position.y = 0; // Ensure camera doesn't go below ground level
      } else {
        camera.rotation.y = window.scrollY * 0.01;
        camera.rotation.z = window.scrollY * 0.01;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResume = () => {
    window.open("https://drive.google.com/drive/folders/1CcrNcELd2lyPH7RnrZbku0Xm9l0SBux7?usp=sharing");
  };

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="writer">
        <h1>{`Hi! I'm Sanjeev,`}</h1>
        <Typewriter phrases={["-Student", "-Web Developer", "-Tech Enthusiast"]} />
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILL SET</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://res.cloudinary.com/dxt2i61hy/image/upload/v1722702937/js_o0swbq.png"
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://res.cloudinary.com/dxt2i61hy/image/upload/v1722703813/React_Logo_SVG_mxzpoi.svg"
              alt="face2"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://res.cloudinary.com/dxt2i61hy/image/upload/v1722704015/three-25cfa581_wk94ro.webp"
              alt="face3"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://res.cloudinary.com/dxt2i61hy/image/upload/v1722703631/246656344_10165689418720557_4225476852778908330_n_e2fypb.png"
              alt="face4"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://res.cloudinary.com/dxt2i61hy/image/upload/v1722703305/nodejs-development-services_qeqgyz.png"
              alt="face5"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://res.cloudinary.com/dxt2i61hy/image/upload/v1722703878/ISO_C_2B_2B_Logo_guakdu.svg"
              alt="face6"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
      <div className="filler">
        <button className="haha" onClick={() => navigate('/projects')}>Projects</button>
      </div>
      <IoCloudDownloadSharp className="downloadResumeButton" data-tooltip-id="tooltip" data-tooltip-content="Download Resume" onClick={handleResume} />
      <Tooltip id="tooltip" place="top" effect="solid" style={{ zIndex: "1000", fontFamily: 'revert' }} />
    </div>
  );
};

export default Home;

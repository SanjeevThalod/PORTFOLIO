import React, { useEffect } from "react";
import * as THREE from "three";
import moonImg from "../Image/moon.jpg";
import venusImg from "../Image/venus.jpg";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../Home.css";
import { Typography } from "@mui/material";
import TimeLine from "./TimeLine/TimeLine";
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
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    

    const venusTexture = textureLoader.load(venusImg);
    const moonTexture = textureLoader.load(moonImg);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
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
    window.addEventListener("scroll",(e)=>{
      camera.rotation.y = window.scrollY*0.01;
      camera.rotation.z = window.scrollY*0.01;
    });
  }, []);

  return (
    <div className="home">
      
      <canvas className="homeCanvas">
      </canvas>
      <h1 className="writer">{`Hi! I'm Sanjeev,`} <Typewriter phrases={['Student', 'Web Developer', 'Tech Enthusiast']} /></h1>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine></TimeLine>
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILL SET</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA38/FaJQpUUDsGEYR1zBK1wqLWUA9DTYp5CiQCPcBGAYYCw/s587/js.png"
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
              alt="face2"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt="face3"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://viget.imgix.net/mongo-logo.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=672&ixlib=php-3.3.1&q=90&w=672&s=236e0c43a5d3899208a661a2ad47b975"
              alt="face4"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
              alt="face5"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              alt="face6"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox" id="homeskillsBox">
          <SiCplusplus/>
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
      
      </div>
    </div>
  );
};

export default Home;

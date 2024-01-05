import React, { Component } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../Image/logo.png"

class Header extends Component {
  render() {
    return <ReactNavbar
      navColor1="white"
      navColor2="hsl(219,48%,8%)"
      burgerColor="hsl(250,100%,75%"
      burgerColorHover="hsl(250,100%,75%)"
      nav1FlexDirection="row"
      nav2FlexDirection="row"
      nav3FlexDirection="row"
      nav4FlexDirection="row"
      nav1alignItems="center"
      nav2alignItems="center"
      nav3alignItems="center"
      nav4alignItems="center"
      nav1justifyContent="space-around"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      nav4justifyContent="space-around"
      logo={logo}
      logoWidth="250px"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1Color="hsl(250,100%,75%)"
      link1ColorHover="white"
      link1Size="1.5rem"
      link1Padding="3vmax"
      
      />;
  }
}

export default Header;

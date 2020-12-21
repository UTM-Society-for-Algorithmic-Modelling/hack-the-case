import React from "react";
import logo from "../logo.svg";
import background from "./Hackathon.mp4";
export default function Header({ title, subtitle, dark, id }) {
  return (
      <div id={id}>
	  <video id="background-video" autoPlay loop muted style={{ "width": "100%" }}>
	                  <source src={background} type="video/mp4" />
	                  Your browser does not support the video tag.
	              </video>
      </div>
      
	
  );
}

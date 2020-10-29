import React from "react";
import logo from "../logo.svg";
import background from "./Hackathon.jpg";
export default function Header({ title, subtitle, dark, id }) {
  return (
      <div id={id}>
      <img src={background} style={{ "width": "100%" }}/>
      /*<div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>*/
      
	
    </div>
  );
}

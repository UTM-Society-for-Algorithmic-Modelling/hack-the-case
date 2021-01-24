import React from "react";
import MCSS from "./MCSS.png";
import WISC from "./WiSC_Transparent_Logo_1.png";
import UTMSAM from "./UTMSAM_transparent_without_chaos.png";
import DSC from "./DSC.png";

export default function HTCPartners({ title, subtitle, dark, id }) {
  const image = {
	justifyContent: "center",
	maxWidth: "200px",
	maxHeight: "200px",
  };
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
	<div style={{display: "flex", flexWrap: "wrap"}}> 
	<img style={image} src={MCSS} />
	<img style={image} src={WISC} />
	<img style={image} src={UTMSAM} />
	<img style={image} src={DSC} />
        </div>  
      </div>
    </div>
  );
}



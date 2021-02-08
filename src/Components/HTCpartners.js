import React from "react";
import MCSS from "./MCSS.png";
import WISC from "./WiSC_Transparent_Logo_1.png";
import UTMSAM from "./UTMSAM_transparent_without_chaos.png";
import DSC from "./DSC.png";
import MMPA from "./MMPA-Color-vertical-01.png";
import BigDataAI from "./BIGDataAIHUB_logo.png";
import IBA from "./tl.png";

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
	<img style={image} src={MMPA} />
	<img style={image} src={IBA} />
	<img style={image} src={BigDataAI} />
        </div>  
      </div>
    </div>
  );
}



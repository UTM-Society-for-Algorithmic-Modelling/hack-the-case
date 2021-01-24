import React from "react";
import { 
	  Button,
	  Card,
	  Grid,
	  CardContent,
	  CardMedia,
	  Typography
} from '@material-ui/core';
import * as typeformEmbed from "@typeform/embed";
import { ReactTypeformEmbed } from 'react-typeform-embed';

export default function Registration({ title, subtitle, dark, id }) {
return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
	<h1>{title}</h1>
        <p>{subtitle}</p>
		 <div style={{ display: "block", position: "relative", minHeight: "500px", minWidth: "100%"}}>
	<ReactTypeformEmbed url="https://form.typeform.com/to/UqdIcXrx"  popup={false} />
	        </div> 
		
	{/* <form style={{backgroundColor: "lightblue", padding: "20px 20px 20px 20px", borderRadius: '5px'}}>
	                <ul>
	                <li style={{listStyleType: "none", margin: "20px 20px 20px 20px"}}> 
			<label>Name: <input type="text" name="name" /></label>
	                </li>
	                <li style={{listStyleType: "none", margin: "20px 20px 20px 20px"}}>
			<label>Email: <input type="text" name="username" /></label>
	                </li>
	  		<li style={{listStyleType: "none", margin: "20px 20px 20px 20px"}}> 
	                <p>What is your year of study?</p> 
	  		<select name="year">
		  		<option value="first">First Year</option>
		  		<option value="second">Second Year</option>
		  		<option value="third">Third Year</option>
		  		<option value="fourth">Fourth Year+</option>
		  		<option value="graduate-student">Graduate Student</option>
		  	</select> </li>
	  		<li style={{listStyleType: "none", margin: "20px 20px 20px 20px"}}>
	                <p>Please list your group members using comma seperated values below:</p>
			<textarea name="group-members"></textarea></li>
	                <li style={{listStyleType: "none", margin: "20px 20px 20px 20px"}}><input type="submit" value="Submit" style={{color: "#FFFFFF", backgroundColor:"#000000"}}/></li>
			</ul>
	</form> */}
      </div>
    </div>
  );
}

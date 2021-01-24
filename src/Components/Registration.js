import React from "react";
import { 
	  Button,
	  Card,
	  Grid,
	  CardContent,
	  CardMedia,
	  Typography
} from '@material-ui/core';
/*import * as typeformEmbed from "@typeform/embed";
*/
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Iframe from 'react-iframe';
import Embed from 'react-embed';

export default function Registration({ title, subtitle, dark, id }) {
return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
	<h1>{title}</h1>
        <p>{subtitle}</p>
			 

       <div className="typeform-widget" data-url="https://form.typeform.com/to/UqdIcXrx?typeform-medium=embed-snippet" style={{ width: "100%", height: "500px"}}></div> 		
	{/* <form style={{backgroundColor: "lightblue", padding: "20px 20px 20px 20px", borderRadius: '5px'}}>
	                <ul> https://form.typeform.com/to/UqdIcXrx'
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

import React from "react";

export default function Registration({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
	<h3>Registration and Teams: Each team consists of 4 members, preferably from different backgrounds as the team should be competent in both hackathon and case competition. Each student will register as an individual. If you have already decided on a team, you can simply indicate your team members once all four members have registered. If you don’t have a team in mind, don’t worry! You can find your teammates in the <a href="https://discord.gg/h4TgEgN" target = "external">discord channel!</a> Everyone is welcomed to join HTC’s discord channel, even if you are not competing.
	  </h3>
	<h1>{title}</h1>
        <p>{subtitle}</p>
		<form>
	         <p>Name:</p>
	         <input
	            type="text"
	         />
	  		 <p>Email: </p>
	  		<input
	           input="text"
	  		/>
	  		<p>What is your year of study?</p>
	  		<select>
		  		<option value="first">First Year</option>
		  		<option value="second">Second Year</option>
		  		<option value="third">Third Year</option>
		  		<option value="fourth">Fourth Year</option>
		  		<option value="graduate-student">Graduate Student</option>
		  	</select>
	  		<p>Please list your group members using comma seperated values below</p>
			<textarea>Text</textarea>
	  	
	</form>
      </div>
    </div>
  );
}

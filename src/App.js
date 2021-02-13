import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
/*import Navbar from "./Components/Navbar";*/
import Section from "./Components/Section";
import Header from "./Components/Header";
import Registration from "./Components/Registration";
import dummyText from "./DummyText";
import Calandar from "./Components/Calendar"
import { ReactTypeformEmbed } from 'react-typeform-embed';
import HTCPartners from "./Components/HTCpartners";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	    {/* <Navbar /> */}

	<Navbar bg="light" variant="light" expand="lg" sticky="top">
	                                    <Navbar.Brand href="#section1">
	    				<img src={logo} className="nav-logo" alt="Logo"/> <b>Hack The Case 2021</b>
	    				 </Navbar.Brand>
	                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	                                    <Navbar.Collapse id="basic-navbar-nav">
	                                        <Nav className="mr-auto">
	                                        <Nav.Link href="#section1">Home</Nav.Link>
	                                        <Nav.Link href="#section2">Registration</Nav.Link>
	                                        <Nav.Link href="#section3">About HTC</Nav.Link>
	    					<Nav.Link href="#section4">Competition Guideline</Nav.Link>
						<Nav.Link href="#section7">Timeline</Nav.Link>
	                                        <Nav.Link href="#section5">HTC Partners</Nav.Link>
	                                        </Nav>
	                                    </Navbar.Collapse>
	                                </Navbar>
        <Header
          /*title="Section 1"
          subtitle={dummyText}*/
          dark={true}
          id="section1"
        />
        <Registration
          title="Registration Form"
          subtitle="Please apply below. Your team should consist 3-4 members preferably from different backgrounds as the team should be competent in both hackathon and case competition. If you have questions or inquires, please email sam@utmsu.ca"
          dark={false}
          id="section2"
        />
        <Section
          title="About Hack The Case"
          subtitle="Welcome to Hack the Case! Imagine a hackathon, case competition, workshops, and game events mashed together with networking opportunities, and tons of prizes. That's us! Hack the Case is an innovation focused competition designed for diversed students of all backgrounds."	    
          dark={true}
          id="section3"
        />
        <Section
          title="Competition Guideline"
          subtitle="The competition will start on February 15 and end on February 20. However, you are not required to be present throughout the week. We will soon reveal a detailed schedules with specific times for all subevents. During the week, Hack the Case will be hosting different workshops, mentorship, game nights, and networking opportunities. We also have awesome prizes prepared for the participants and winners, stay tuned for more updates!"
          dark={false}
          id="section4"
        />
        <Calandar
          title="Workshop Timeline"
          subtitle="d"
          dark={false}
          id="section7"
        />
        <HTCPartners
          title="HTC Partners"
          subtitle={dummyText}
          dark={false}
          id="section5"
        />
	<Section
	  subtitle="Powered by React, React-smooth-scroll, original design by https://github.com/jamesqquick/React-With-Smooth-Scrolling"
	       dark={true}
	       id="section"
	    />
      </div>
    );
  }
}

export default App;

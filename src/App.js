import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Header from "./Components/Header";
import Registration from "./Components/Registration";
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header
          /*title="Section 1"
          subtitle={dummyText}*/
          dark={true}
          id="section1"
        />
        <Registration
          title="Registration Form"
          subtitle="Please enter your information Below"
          dark={false}
          id="section2"
        />
        <Section
          title="About HTC"
          subtitle="Welcome to Hack the Case. Imagine a hackathon, case competition, workshops, and game events mashed together with networking opportunities, and tons of prizes. That's us. Hack the Case is an innovation focused competition designed for diversed students of all backgrounds."	    
          dark={true}
          id="section3"
        />
        <Section
          title="HTC Information"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;

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
          title="Hack The Case Information"
          subtitle="The competition will start on Febuary 15 and end on Febuary 22. However, you are not required to be present throughout the week. We will soon reveal a detailed schedules with specific times for all subevents. During the week, Hack the Case will be hosting different workshops, mentorship, game nights, and networking opportunities. We also have awesome prizes prepared for the participants and winners, stay tuned for more updates!"
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

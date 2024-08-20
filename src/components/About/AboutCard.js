import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">REDA BAOUSSOUS </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br />
            I am currently worling as a DevSecOps Engineer at ONCF.
            <br />
            <br />

            Apart from working on cloud solutions and automation, I have a few other passions!
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to optimize and secure everything you build!"{" "}
          </p>
          <footer className="blockquote-footer">BaoussousR</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

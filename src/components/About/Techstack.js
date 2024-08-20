import React from "react";
import { Col, Row } from "react-bootstrap";
//import { CgCPlusPlus } from "react-icons/cg";
import {
  //DiJavascript1,
  //DiReact,
  DiNodejs,
  DiJenkins,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
  DiDojo,
  DiNginx
} from "react-icons/di";
import {
VscTerminalBash} from "react-icons/vsc";

import {
  FaAws,
  FaUbuntu,
 } from "react-icons/fa";
import {
  SiKubernetes,
  SiPostgresql,
  SiGitlab,
  SiMicrosoftazure,
  SiSonarqube,
  SiAzuredevops, 
  SiGrafana,
  SiAnsible,
  SiSnyk,
  SiApache,
  SiTerraform,
  SiPrometheus

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />               
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNginx />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnyk />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDojo />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscTerminalBash />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />        
      </Col>

    </Row>
  );
}

export default Techstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Eureka from "../../Assets/Projects/Eureka.png";
import Weather from "../../Assets/Projects/Weather.png";
import SDN from "../../Assets/Projects/SDN.png";
import CRUD from "../../Assets/Projects/CRUD.jpg";

import Antenna from "../../Assets/Projects/antenna.png";
import Jenkins from "../../Assets/Projects/jenkins.png";
import AWS from "../../Assets/Projects/aws_cloud.jpeg";
import MobDev from "../../Assets/Projects/Mobdev.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jenkins}
              isBlog={false}
              title="Implémentation d’un Pipeline CI/CD avec Jenkins et AKS with Helm"
              description="Automatisation du déploiement d'une application sur le Cloud (AKS)."
              ghLink="https://github.com/baoussreda/azure-voting-app-CloudProjet"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AWS}
              isBlog={false}
              title="Déploiement d'une Infrastructure Scalable avec Terraform et AWS"
              description="L'automatisation en intégrant IAM, S3, Auto Scaling, Load Balancer, DNS, et CloudWatch."
              ghLink="https://github.com/baoussreda/Terraform_Aws"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eureka}
              isBlog={false}
              title="Création et déploiement d’une application basée sur les microservices"
              description="Réalisation d’une app qui gère des employées en mettant en œuvre un pipeline CI/CD"
              ghLink="https://github.com/baoussreda/MyMS"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SDN}
              isBlog={false}
              title="Mise en place d'un Réseau SDN (Réseau Défini Par Logiciel)"
              description="Gestion, Configuration, surveillance et dépannage de l’infrastructure réseau."
              ghLink="https://github.com/baoussreda/SDN"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MobDev}
              isBlog={false}
              title="Conception, optimistation et sécurisation d’un réseau étendu d’entreprise"
              description="Réseau WAN pour l'entreprise MobDev, qui implique la connexion de deux sites distants."
              ghLink="https://github.com/baoussreda/WAN_Network"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUD}
              isBlog={false}
              title="Un projet CRUD JavaFx en utilisant MySQL"
              description="Création d'une application qui se charge du classement et choix de filièrepour les étudiants de l’ENSA Safi, en fonction de l'infrastructure de l'établissement."
              ghLink="https://github.com/baoussreda/MajorsManagementSystem.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Application web de météo en utilisant Laravel"
              description="Définition de l'état météorologique en utilisant une API de météo."
              ghLink="https://github.com/baoussreda/LaravelMeteo"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Antenna}
              isBlog={false}
              title="Intégration d'une Interface Web Interactive pour la Reconnaissance d'Antennes"
              description="Génération Automatique de Scripts AutoLISP dans un Environnement AutoCAD avec utilisaition de l'apprentissage automatique"
              ghLink="https://github.com/baoussreda/PIC_Project"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

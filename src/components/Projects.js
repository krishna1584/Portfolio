import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import Modala from "./Modal/Modala";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ReactDOM } from "react";
import Card from "./Card"

export const Projects = () => {

  const projects = [
    {
      title: "Cloud Computing",
      description: "",
      linktext: "Click here to view",
      imgUrl: projImg1,
      link: "https://drive.google.com/file/d/1j_NWhVhhOi2S2EYif1ETf8xQbRLStilH/view",
    },
    {
      title: "DevOps",
      description: "Spark AR Studio and Lens Studio",
      linktext: "Click here to view",
      imgUrl: projImg2,
      link: "https://drive.google.com/file/d/1jckZfwfzwDLQo6-IZgediSlCatkceS5h/view",
    },
    {
      title: "C Programming",
      description: "",
      linktext: "Click here to view",
      imgUrl: projImg3,
      link: "https://drive.google.com/file/d/1jdNW1JbLNGCEZFMACEcm5UQFe9f0VE1v/view",
    },
    {
      title: "Red Hat Linux ",
      description: "",
      linktext: "Click here to view",
      imgUrl: projImg4,
      link: "https://drive.google.com/file/d/1cY1xmBH_WzwrViDYjcYmdUFwK1mfpcwa/view",
    },
    {
      title: " Digital Transformation in Financial Services",
      description: "",
      linktext: "Click here to view",
      imgUrl: projImg6,
      link: "https://drive.google.com/file/d/1ce4p2Z8kSWxPQL2FJo333B-Pnue-U33Y/view",
    },
    {
      title: "Finance For everyone",
      description: "",
      linktext: "Click here to view",
      imgUrl: projImg5,
      link: "https://drive.google.com/file/d/1ckkicaDF1Oulg1vVMmViAxZraGpyfvwC/view",
    },
  ];

  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio</h2>
                <p className="main">The following is a collection of my latest and most meaningful projects. Each piece is unique in style and content and represents a distinct moment in my career.</p>
                
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sections</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <section className='Resume' id='resume'>
        <div className='container top'>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2023-Present</h4>
                <h1>Education</h1>
              </div>
              
            </div>
            <div>            
              <h2>Bachelor of Engineering in Computer Science </h2>
              <h5>(2023 - present)</h5>
              <hr></hr>
              <p></p>
            </div>
            <br></br>
            <br></br>
            <div>            
              <h2>High School (CBSE)</h2>
              <h5>Mount Litera Zee School, Jhansi, Uttar Pradesh (2007 - 2022)</h5>
              <hr></hr>
              <p className="text">Grade: Distinction | Activities : School Prefect <br></br>
              <ul>
                <li>Won group singing, poster-making, drawing competitions in school</li>
                <li> Done anchoring twice in Annual Function of school.</li>
              </ul></p>
            </div>
          </div>
        </div>
      </section>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className='container top'>
                    <h4>2023-Present</h4>
                <h1>Work Experience</h1>
                <div>         
                  <br></br>   
              <h2>Tourify</h2>
              <h5>May 2024 - June 2024</h5>
              <hr  align="center"></hr>
              <p className="text">Created and designed a website clled Tourify. Worked both on the front end and backend of the website using programming languages(javascript, HTML, and CSS).
              <ul>
                <li>Designed a useful and elegant digital experience for a website helping in the field of tourim from start to finish(research, design, test, implement) as the lead. </li>
                <li>In less than 2 months designed eloquent flow and structure of the website along with a fully functioning module for communication</li>
                <li>Fostered collaboration and consistency alongside team members.</li>
                <li>Presented website to OPEN SOURCE HEAD of our college, answering questions and receiving feedback for the same.</li>
                <li>Website: <a href="https://tourify1.netlify.app/" target="_blank">Click here</a></li>
              </ul>
              </p>
              <br></br>
              <h2> Hangman Game </h2>
              <h5>March 2024 - April 2024</h5>
              <hr  align="center"></hr>
              <p className="text">
              <ul>
                <li>Managed project timelines. Spearheaded the adoption of cutting-edge coding for better user experience.</li>
                <li>Ensured that every team member completes his assigned task before deadline.</li>
                <li>Focused on creating an engaging and user-friendly experience by integrating intuitive controls, appealing graphics, and responsive design, resulting in increased user satisfaction and engagement.</li>
                <li>Fostered effective communication and collaboration within the team through regular meetings, code reviews, and pair programming sessions, enhancing overall project efficiency and team skill development.</li>
                <li>Website: <a href="https://hangman-game-nine-tan.vercel.app/" target="_blank">Click here</a></li>
                </ul>
              </p></div>
          <div className='heading text-center'>
          </div>
        </div> 
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

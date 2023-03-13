import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import creditscoring from '../assets/img/creditscoring.png';
import scraped from "../assets/img/scraped.jpg";
import propertyImage from "../assets/img/propertyImage.png";
import dataengproj from "../assets/img/dataengproj.png";
import leave from "../assets/img/leave.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Credit scoring model",
      description: "The most pressing questions for banks are how efficiently can we guage the risk profile of our customers and how can we use this information to decide on the required liquidity while still maintaining our regulatory obligations.",
      imgUrl: creditscoring,
    },
    {
      title: "Web scraping with Selenium and python ",
      description: "Scraping top machine learning open source projects in Github Collect with selenium python on Chrome. the image is the final data imported to a csv file",
      imgUrl: scraped,
    },
    {
      title: "Property/Real Estate Management System",
      description: "This Property/Real Estate Management System project in Django is a full-stack Django web application that offers a clean, descriptive, and interactive user interface for viewing and registering for real estate. Responsive pages and tabs for home, about us, and featured listings",
      imgUrl: propertyImage,
    },
    {
      title: "Data Engineering ",
      description: "This projects runs on docker, reads a csv file , generate a schema by converting the dataframe (the dataset is too big and its read in chunks of 100000) into a DDl, put the schema into postgres database, convert the dataframe to sql to facilate inserting into postgres and finally insert the data into database table. From his point SQL commands can be used to read, read and alter the data in postgres.",
      imgUrl: dataengproj,
    },
    {
      title: "Online Leave Management System",
      description: "This project features a web-based employee management system with various features such as a login page where employees can enter their credentials to access the system. A register page is also provided for new employees to create their login credentials. The home page serves as the system's default page for customers visiting the website. Additionally, the system includes a leave application page where only authorized personnel such as the CEO, Manager, and Supervisor can accept or reject an employee's leave application. Employees can also view and track their leave applications through the My Application page",
      imgUrl: leave,
    },
    {
      title: "Business Startup",
      description: "Coming Soon",
      imgUrl: projImg3,
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
                <h2>Projects</h2>
                <p>Here in the projects section of my portfolio, you'll find a curated selection of my most recent and notable work. Each project is an opportunity for me to showcase my skills, creativity, and problem-solving abilities. I am constantly striving to push the boundaries and find new and innovative solutions to the challenges I encounter in my work. I hope this section provides a comprehensive overview of my capabilities and demonstrates my commitment to excellence in everything I do. In-house projects are not included.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="section">
                      <p>No more projects at this section at the moment.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>No more projects at this section at the moment.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}
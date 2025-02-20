import React, { useState } from "react";
//import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
//import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaPhone } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import myImage from './images/Gaurav Kumar.jpg';
import fileName from './images/GAURAV KUMAR.pdf';
//import fileName from './GAURAV KUMAR.pdf';

export default function Profile() {

    const handleDownload = () => {
        const filePath = process.env.PUBLIC_URL + fileName;
        const link = document.createElement("a");
        link.href = filePath;
        link.download = fileName || "download.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };  
  const skills = [
    [
      { name: "Java", percentage: 90 },
      { name: "Spring Boot", percentage: 85 },
      { name: "Microservices", percentage: 80 },
      { name: "SQL", percentage: 75 },
      { name: "React", percentage: 70 }
    ],
    [
      { name: "PL/SQL", percentage: 65 },
      { name: "AOP", percentage: 60 },
      { name: "JavaScript", percentage: 75 },
      { name: "TypeScript", percentage: 70 },
      { name: "Node.js", percentage: 65 }
    ]
  ];

  const recentWork = [
    { title: "Web Development", link: "https://example.com/web-development" },
    { title: "Frontend Development", link: "https://example.com/frontend-development" },
    { title: "Containerization & Orchestration", link: "https://example.com/containerization" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? recentWork.length - 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= recentWork.length - 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container">
      {/* Header Section */}
      <section className="responsive-section">
        <div className="responsive-container">
          <h1 className="heading">I'm Gaurav Kumar</h1>
          <h2 className="subheading">Senior Software Developer</h2>
          <p className="paragraph">
            Welcome to my Personal Profile. Check out what I’ve been working on and developed as a Software Engineer.
          </p>
          <div className="margin-top">
            <button onClick={handleDownload} className="download-button">Download CV</button>
          </div>
        </div>
        <div className="responsive-flex-container">
          <img src={myImage} alt="Gaurav Kumar" className="round-image" />
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section">
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-container">
          {skills.map((column, colIndex) => (
            <div key={colIndex}>
              {column.map((skill, index) => (
                <div key={index} className="margin-bottom">
                  <div className="flex-between">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="responsive-section">
        <div className="responsive-container">
            <img src={myImage} alt="Gaurav Kumar" className="round-image" />
        </div>
        <div className="responsive-div">
          <h2 className="about-heading">About Me</h2>
          <p className="margin-bottom">
            I am a seasoned Software Developer with 3 years of proven expertise orchestrating 20% revenue hikes through visionary projects.
            A team collaborator, adept at navigating complexities while fostering innovation. Seeking a forward-thinking environment to
            architect cutting-edge solutions and propel business evolution through technological ingenuity.
          </p>
          <div className="flex-column">
            <p className="contact-info"><FaPhone className="contact-icon" /> Phone: 8210929030</p>
            <p className="contact-info"><FaEnvelope className="contact-icon" /> Email: sinha.gauravkumar06@gmail.com</p>
          </div>
          <h3 className="interests-heading">My Interests</h3>
          <div className="flex-container">
            <span>🏏 Cricket</span>
            <span>🎵 Music</span>
            <span>🎨 Art</span>
            <span>✈️ Travel</span>
            <span>📖 Reading</span>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="responsive-section-1">
        <h2 className="offer-heading">What I Offer</h2>
        <div className="grid-container">
          <div className="card-container">
            <h3 className="heading-xl">Web Development</h3>
            <p>Full-stack development, including server-side logic, frontend design, database integration, DevOps, and security.</p>
          </div>
          <div className="card-container">
            <h3 className="heading-xl">Frontend Development</h3>
            <p>Leverage HTML and CSS expertise to create visually appealing and responsive web interfaces.</p>
          </div>
          <div className="card-container">
            <h3 className="heading-xl">Containerization & Orchestration</h3>
            <p>Utilizing Docker and Kubernetes for efficient application deployment, scaling, and management.</p>
          </div>
        </div>
      </section>

      {/* My Recent Work */}
      <section className="responsive-section-1">
        <h2 className="offer-heading">Recent Work</h2>
        <div className="grid-container">
          <button onClick={handlePrev} className="button">◀</button>
          <div className="grid-layout">
            {recentWork.slice(currentIndex, currentIndex + 2).map((work, index) => (
              <div key={index} className="card">
                <h3 className="heading-xl">
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="link">
                    {work.title}
                  </a>
                </h3>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="button">▶</button>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="responsive-section-1">
        <h2 className="offer-heading">FeedBack Section</h2>
        <h3 className="get-in-touch-heading">Get In Touch</h3>
        <div className="centered-container">
          <input type="text" placeholder="UserName" className="input-field" />
          <input type="text" placeholder="PhoneNumber" className="input-field" />
          <input type="email" placeholder="Email Address" className="input-field" />
          <textarea placeholder="Type your Message Here" className="input-field"></textarea>
          <button className="send-message-btn">Send Message</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© Gaurav Kumar (sinha.gauravkumar06@gmail.com)</p>
        <p>Phone Number: 8210929030</p>
        <div className="flex-container">
          <a href="https://linkedin.com/in/gaurav-kumar-95b21918b" target="_blank" rel="noopener noreferrer" className="linkedin-icon"><FaLinkedin size={24} /></a>
          <a href="https://github.com/kumgau01" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
        </div>
      </footer>
    </div>
  );
}

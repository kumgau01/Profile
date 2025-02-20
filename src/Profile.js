import React, { useState } from "react";
//import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
//import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaPhone } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaUserAlt } from "react-icons/fa";
import myImage from './images/Gaurav Kumar.jpg';
import fileName from './images/GAURAV KUMAR.pdf';
//import fileName from './GAURAV KUMAR.pdf';
import ImageButton from './ImageButton'

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

      const [formData, setFormData] = useState({
        username: "",
        phone: "",
        email: "",
        message: "",
      });
      
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
      const handleInstaMessage = () => {
        const { username, phone, email, message } = formData;
        const instagramUser = "grts_6";
    
        // Format the message
        const formattedMessage = `Hello!%0A%0AName: ${username}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
        
        // Open Instagram in a new tab
        window.open(`https://www.instagram.com/${instagramUser}/`, "_blank");
      };

      const handleWhatsAppMessage = () => {
        const { username, phone, email, message } = formData;
        const instagramUser = "grts_6";
    
        // Format the message
        const formattedMessage = `Hello!%0A%0AName: ${username}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
        
        // Or use WhatsApp (alternative)
        window.open(`https://wa.me/?text=${formattedMessage}`, "_blank");
      };

  const skills = [
    [
      { name: "Java", percentage: 90 },
      { name: "J2EE", percentage: 90 },
      { name: "Spring-Framework", percentage: 90 },
      { name: "Spring Boot", percentage: 85 },
      { name: "AOP", percentage: 60 },
      { name: "Microservices", percentage: 75 },
      { name: "hibernate", percentage: 70 },
      { name: "JPA", percentage: 80 },
      { name: "Kafka", percentage: 60 }
    ],
    [
      { name: "PL/SQL", percentage: 65 },
      { name: "SQL", percentage: 75 },
      { name: "NoSQL", percentage: 55 },
      { name: "Couchbase", percentage: 75 },
      { name: "React", percentage: 70 },
      { name: "JavaScript", percentage: 75 },
      { name: "HTML5", percentage: 80 },
      { name: "CSS", percentage: 85 },
      { name: "Shell Script", percentage: 65 }
    ]
  ];

  const recentWork = [
    { title: "Profile", link: "https://github.com/kumgau01/Profile", imageUrl: "https://github.com/shkkr01/PortfolioWebsite/blob/main/assets/Portfolio-Desk.jpg?raw=true" },
    { title: "Chat-Bot", link: "https://github.com/kumgau01/Gemini-Chat-Application", imageUrl: "https://files.oaiusercontent.com/file-H6s5eS9o24ccnVR9WGNk2h?se=2025-02-20T18%3A37%3A45Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df1d0f557-186b-4400-9580-bf1bfd29a123.webp&sig=BdQ3QS4SgDbxJhOI6uxQHtmVmQ5O%2BdrYo5G0vhfuTXs%3D" },
    { title: "Learn-Git", link: "https://github.com/kumgau01/Lets-Learn-Git", imageUrl: "https://files.oaiusercontent.com/file-UtQC3RkXJ92edorRFNadHo?se=2025-02-20T18%3A38%3A51Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D76e21585-b542-47f5-a4ce-1b54fa221171.webp&sig=cNHyEg5m7crVenydv1D%2BXq0mEh6ObPRVHut6z2oSnwY%3D" },
    { title: "Hotel-Booking", link: "https://github.com/kumgau01/Hotel-Booking", imageUrl: "https://files.oaiusercontent.com/file-Ab6UVpLUFhZUTC5ih75iV8?se=2025-02-20T18%3A40%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D451dfda5-f62b-435e-88ce-450a7d9092f7.webp&sig=HjSRhE5sJRkfqyBkXgzv0rsEML9wmiX62k29aJI/q90%3D"},
    { title: "E-commerce-website", link: "https://github.com/kumgau01/E-commerce-website", imageUrl: "https://files.oaiusercontent.com/file-EEM5ocrv5oF9i9N7ogD9oP?se=2025-02-20T19%3A11%3A49Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Daabe22d6-875e-4516-82d2-eaca85c08ffc.webp&sig=n0eUnPKJg%2BsNo6n466%2BgmITBUcd24lVvtUOGuzB0fPo%3D"}
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
      <section>
        <div>
            <h1>🛠️ Still in Progress... Stay Tuned!</h1>
        </div>
      </section>
      <section className="responsive-section">
        <div className="responsive-container">
          <p className="paragraph">Hello!</p>
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
            I am a seasoned Software Developer with over 4.5 years of proven expertise orchestrating 20% revenue hikes through visionary projects.
            A team collaborator, adept at navigating complexities while fostering innovation. Seeking a forward-thinking environment to
            architect cutting-edge solutions and propel business evolution through technological ingenuity.
          </p>
          <div className="flex-column">
            <p className="contact-info"><FaUserAlt className="contact-icon" /> Name: Gaurav Kumar</p>
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
            <h3 className="heading-xl">Backend Development</h3>
            <p>Utilize expertise in Java, Spring Boot, and microservices to build robust, scalable, and high-performance backend systems. Ensure seamless integration with frontend applications while optimizing database interactions and API efficiency for a smooth user experience.</p>
          </div>
          <div className="card-container">
            <h3 className="heading-xl">Web Development</h3>
            <p>web development services, including full-stack development, server-side logic, frontend design, database integration, DevOps practices, and a focus on security. Delivering efficient, scalable, and visually appealing web solutions tailored to client needs.</p>
          </div>
          <div className="card-container">
            <h3 className="heading-xl">Frontend Development</h3>
            <p>leverage HTML and CSS expertise to create visually appealing and responsive web interfaces. Enhance user experience by ensuring intuitive design and seamless integration with backend systems</p>
          </div>
          <div className="card-container">
            <h3 className="heading-xl">Database Management</h3>
            <p>Database Management involves designing and implementing efficient data storage solutions. Utilizing SQL for relational databases and NoSQL for flexibility, services include database creation, optimization, and seamless integration with applications for reliable data management.</p>
          </div>
          <div className="card-container">
            <h3 className="heading-xl">Containerization & Orchestration</h3>
            <p>Containerization (e.g., Docker) packages applications for consistency across environments, and orchestration (e.g., Kubernetes) automates their deployment, scaling, and management, optimizing efficiency and scalability in modern software development</p>
          </div>
        </div>
      </section>

      {/* My Recent Work */}
      <section className="responsive-section-1">
        <h2 className="offer-heading">Recent Work</h2>
        <div className="grid-container">
          <button onClick={handlePrev} className="leftButton">◀</button>
          <div className="grid-layout">
            {recentWork.slice(currentIndex, currentIndex + 2).map((work, index) => (
              <div key={index} className="card">
                <h3 className="heading-xl">
                  {/*<a href={work.link} target="_blank" rel="noopener noreferrer" className="link">
                    {work.title}
                  </a>*/}
                  <ImageButton 
                    imageUrl={work.imageUrl} // Replace with your image URL
                    link={work.link} // Replace with your link
                    altText={work.title} />
                </h3>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="rightButton">▶</button>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="responsive-section-1">
        <h2 className="offer-heading">FeedBack Section</h2>
        <h3 className="get-in-touch-heading">Get In Touch</h3>
        <div className="centered-container">
          <input type="text" name="username" placeholder="UserName" className="input-field" onChange={handleChange}/>
          <input type="number" name="email" placeholder="PhoneNumber" className="input-field" onChange={handleChange}/>
          <input type="email" name="message" placeholder="Email Address" className="input-field" onChange={handleChange}/>
          <textarea placeholder="Type your Message Here" className="input-field" onChange={handleChange} />
          <button onClick={handleInstaMessage} className="send-message-btn">Send Insta Message</button>
          <div className="input-field" />
          <button onClick={handleWhatsAppMessage} className="send-message-btn">Send WhatsApp Message</button>
        </div >
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

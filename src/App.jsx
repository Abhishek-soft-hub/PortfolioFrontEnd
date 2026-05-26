import { useState } from "react";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    reason: "",
  });

  // =========================
  // Handle Input Change
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // Handle Submit
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "https://portfolio-backend-new-em1q.onrender.com/enquiry/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {

        alert("Enquiry Submitted Successfully!");

        setFormData({
          name: "",
          email: "",
          mobileNo: "",
          reason: "",
        });

        setShowForm(false);

      } else {

        const error = await response.text();

        alert(error);
      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <>
      {/* Navbar */}

      <nav className="navbar">

        <h2>Abhishek.</h2>

        <ul>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>

      {/* Hero */}

      <section className="hero-section">

        <div className="hero-left">

          <h3>Hello 👋</h3>

          <h1>
            I'm <span>Abhishek Jadhav</span>
          </h1>

          <h2>Java Full Stack Developer</h2>

          <p>
            Entry-level Software Engineer with experience in
            Java, Spring Boot, REST APIs, Microservices and
            React development.
          </p>

          <div className="buttons">

            <a
              href="https://your-backend.onrender.com/download-resume"
              target="_blank"
              rel="noreferrer"
            >
              <button>Download Resume</button>
            </a>

            <a href="#projects">
              <button className="secondary">
                View Projects
              </button>
            </a>

          </div>

        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Profile" />
        </div>

      </section>

      {/* About */}

      <section id="about">

        <h2>About Me</h2>

        <p className="about-text">

          Passionate software engineer with hands-on
          experience building scalable backend systems
          using Java and Spring Boot.

          Strong understanding of SDLC, OOP,
          REST APIs, Microservices and secure
          application development.

        </p>

      </section>

      {/* Skills */}

      <section id="skills">

        <h2>Technical Skills</h2>

        <div className="skill-category">

          <h3>Languages</h3>

          <div className="skills">

            <span>Java 17</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>

          </div>

        </div>

        <div className="skill-category">

          <h3>Backend</h3>

          <div className="skills">

            <span>Spring Boot</span>
            <span>Spring MVC</span>
            <span>Spring Security</span>
            <span>Hibernate</span>
            <span>REST APIs</span>
            <span>Microservices</span>
            <span>Apache Kafka</span>

          </div>

        </div>

        <div className="skill-category">

          <h3>Database</h3>

          <div className="skills">

            <span>MySQL</span>
            <span>PostgreSQL</span>
            <span>JDBC</span>

          </div>

        </div>

        <div className="skill-category">

          <h3>Tools</h3>

          <div className="skills">

            <span>Git</span>
            <span>GitHub</span>
            <span>Maven</span>
            <span>Jenkins</span>
            <span>Postman</span>
            <span>VS Code</span>

          </div>

        </div>

        <div className="skill-category">

          <h3>Concepts</h3>

          <div className="skills">

            <span>OOP</span>
            <span>SOLID</span>
            <span>JWT</span>
            <span>Agile</span>
            <span>Multithreading</span>
            <span>Collections</span>

          </div>

        </div>

      </section>

      {/* Projects */}

      <section id="projects">

        <h2>Projects</h2>

        <div className="project-container">

          <div className="card">

            <h3>
              Academic Resource Management Platform
            </h3>

            <p>
              Student Management System built using
              Spring Boot and React with JWT based
              authentication and role management.
            </p>

          </div>

          <div className="card">

            <h3>
              Data Workflow Automation Engine
            </h3>

            <p>
              Workflow engine for asynchronous
              job execution and data processing.
            </p>

          </div>

        </div>

      </section>

      {/* Experience */}

      <section id="experience">

        <h2>Experience</h2>

        <div className="experience-card">

          <h3>
            Software Engineer Intern
          </h3>

          <h4>
            Webforge Technologies
          </h4>

          <p className="date">
            Jun 2025 - Nov 2025
          </p>

          <ul>

            <li>
              Developed and maintained RESTful APIs using Java and Spring Boot.
            </li>

            <li>
              Implemented exception handling and debugging.
            </li>

            <li>
              Worked in Agile methodology and sprint planning.
            </li>

            <li>
              Improved application performance through debugging and optimization.
            </li>

            <li>
              Collaborated with teams to build scalable enterprise solutions.
            </li>

          </ul>

        </div>

      </section>

      {/* Contact */}

      <section id="contact">

        <h2>Contact</h2>

        <p>Email: abhishekjadhav.official2025@gmail.com</p>

        <p>Phone: +91 7218589202</p>

        <p>GitHub: github.com/Abhishek-soft-hub</p>

        <button
          className="enquiry-btn"
          onClick={() => setShowForm(true)}
        >
          Enquiry
        </button>

        {showForm && (

          <div className="popup-overlay">

            <div className="popup-form">

              <h3>Enquiry Form</h3>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Enter Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="reason"
                  placeholder="Reason For Enquiry"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />

                <div className="popup-buttons">

                  <button type="submit">
                    Submit
                  </button>

                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>

          </div>
        )}

      </section>

      {/* Footer */}

      <footer>

        © 2026 Abhishek Jadhav

      </footer>

    </>
  );
}

export default App;
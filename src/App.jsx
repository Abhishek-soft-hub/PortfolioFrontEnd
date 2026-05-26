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
  // Submit Form
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
          mobileNumber: "",
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

  // =========================
  // Resume Download (FIXED - NO ERROR)
  // =========================
  const handleDownload = () => {
    window.open(
      "https://portfolio-backend-new-em1q.onrender.com/download-resume",
      "_blank"
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Abhishek.</h2>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <h3>Hello 👋</h3>

          <h1>
            I'm <span>Abhishek Jadhav</span>
          </h1>

          <h2>Java Full Stack Developer</h2>

          <p>
            Entry-level Software Engineer with experience in Java, Spring Boot,
            REST APIs, Microservices and React development.
          </p>

          <div className="buttons">

            {/* ✅ RESUME DOWNLOAD BUTTON (FIXED) */}
            <button onClick={handleDownload}>
              Download Resume
            </button>

            <a href="#projects">
              <button className="secondary">View Projects</button>
            </a>

          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Profile" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          Passionate software engineer with experience in Java, Spring Boot,
          REST APIs, and Microservices.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Technical Skills</h2>

        <div className="skills">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>MySQL</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Academic Management System</h3>
          <p>Spring Boot + React project with JWT authentication.</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2>Experience</h2>

        <div className="card">
          <h3>Software Engineer Intern</h3>
          <p>Worked on REST APIs, debugging, and backend development.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>

        <p>Email: abhishekjadhav.official2025@gmail.com</p>
        <p>Phone: 7218589202</p>

        <button onClick={() => setShowForm(true)}>
          Enquiry
        </button>

        {/* POPUP FORM */}
        {showForm && (
          <div className="popup-overlay">
            <div className="popup-form">
              <h3>Enquiry Form</h3>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="reason"
                  placeholder="Reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />

                <div className="popup-buttons">
                  <button type="submit">Submit</button>

                  <button
                    type="button"
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

      {/* FOOTER */}
      <footer>
        © 2026 Abhishek Jadhav
      </footer>
    </>
  );
}

export default App;
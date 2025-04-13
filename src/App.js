// src/App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="resume">
      <header className="header">
        <h1>Gujarvadi Sravanthi</h1>
        <p>sravanthighujarvad@gmail.com| +91-8309788285</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p> An IT undergraduate with a strong foundation in coding, including Java and Data Structures & Algorithms, passionate about solving problems and building practical software solutions.

</p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>BVRIT HYDERABAD College Of Engineering For Women</strong> (2023–2027)</p>
      </section>

      <section>
        <h2>TechnicalSkills</h2>
        <ul>
          <li>Java,C,Python.</li>
          <li>HTML, CSS, Bootstrap</li>
          <li>MySQL</li>
        </ul>
      </section>

      <section>
        <h2>SoftSkills</h2>
          <p> Adaptability , ProblemSolving, Creative</p>
      </section>

      <section>
        <h2>Projects</h2>
        <p><strong>Nivi Chat</strong> </p>
      </section>

      <section>
        <h2>Certifictions</h2>
        <ul>
          <li>Great AppSec Hackathon 2024</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
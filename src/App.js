// src/App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="resume">
      <header className="header">
        <h1>Gundra Yashwithareddy</h1>
        <p>yashwithareddygundra@gmail.com | +91-7569341570</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p> I’m a passionate React developer focused on building modern web applications using React, Node.js, and databases.</p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>BVRIT HYDERABAD College Of Engineering For Women</strong> (2023–2027)</p>
      </section>

      <section>
        <h2>TechnicalSkills</h2>
        <ul>
          <li>Programming languages :Java,C.</li>
          <li>Web tecnologies :HTML, CSS, Bootstrap</li>
          <li>Data bases :MySQL</li>
          <li>Design Tools: AutoCAD, SketchUp</li>
          <li>Git, GitHub</li>
        </ul>
      </section>

      <section>
        <h2>SoftSkills</h2>
          <p> Communication, Logicalthinking, Teamwork, Creative</p>
      </section>

      <section>
        <h2>Projects</h2>
        <p><strong>Online Quiz System </strong> Developed a java based online quiz platfrom using oops principles .features included user login , question management and scoring </p>
      </section>

      <section>
        <h2>Certifictions</h2>
        <ul>
          <li>Great AppSec Hackathon 2024</li>
          <li>DevAstra 2025 - A National level 24 hours Hackathon</li>
          <li>AutoCAD </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
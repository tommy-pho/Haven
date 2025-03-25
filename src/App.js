import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Background Music */}
      <audio id="background-music" loop autoplay>
        <source src="assets/crossing_field.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <header>
        <h1>Tommy Pho</h1>
        <p>Computer Science Majo | Developer | Problem Solver</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I'm Tommy Pho, a passionate developer exploring full-stack development and software engineering.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2025 Tommy Pho. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

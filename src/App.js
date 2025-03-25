// App.js
import React, { useState } from 'react';
import './App.css'; // Optional: If you have App-specific styles
import crossingField from './assets/crossing_field.mp3'; // Import the MP3
import BackgroundMusic from './BackgroundMusic'; // Import the BackgroundMusic component

function App() {
    const [isMuted, setIsMuted] = useState(false);
    const fixedVolume = 0.2;

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className="App">
            <BackgroundMusic
                audioFile={crossingField}
                fixedVolume={fixedVolume}
                isMuted={isMuted}
                toggleMute={toggleMute}
            />

            <header>
                <h1>Tommy Pho</h1>
                <p>Computer Science Major | Developer | Problem Solver</p>
            </header>

            <section id="about">
                <h2>About Me</h2>
                <p>
                    I'm Tommy Pho, a passionate developer exploring full-stack development and software engineering.
                </p>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <ul>
                    <li>
                        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                            GitHub Profile
                        </a>
                    </li>
                    {/* Add more project links here */}
                </ul>
            </section>

            <footer>
                <p>© 2025 Tommy Pho. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
// BackgroundMusic.js
import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Import volume icons

const BackgroundMusic = ({ audioFile, fixedVolume, isMuted, toggleMute }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audioElement = audioRef.current;

        const playPromise = audioElement.play();

        if (playPromise !== undefined) {
            playPromise
                .then(_ => {
                    console.log("Autoplay started successfully!");
                })
                .catch(error => {
                    console.log("Autoplay prevented: ", error);
                    // Consider adding a "Play Music" button or message to the user
                });
        }

        audioElement.addEventListener('ended', () => {
            audioElement.currentTime = 0;
            audioElement.play();
        });

        return () => {
            audioElement.removeEventListener('ended', () => {
                audioElement.currentTime = 0;
                audioElement.play();
            });
        };
    }, [audioFile]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = fixedVolume;
            audioRef.current.muted = isMuted;
        }
    }, [fixedVolume, isMuted]);

    return (
        <div>
            <audio
                ref={audioRef}
                src={audioFile}
                preload="auto"
                style={{ display: 'none' }}
            />
            <button
                onClick={toggleMute}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                }}
                aria-label={isMuted ? "Unmute Music" : "Mute Music"}
            >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                <span style={{ marginLeft: '5px' }}>{isMuted ? 'Unmute' : 'Mute'}</span>
            </button>
        </div>
    );
};

export default BackgroundMusic;
import React, { useState, useRef } from 'react';

const BackgroundMusic = ({ src }) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log("Playback was prevented:", error));
      setAudioEnabled(true); // Update state to reflect that audio is playing
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={src} loop hidden>
        Your browser does not support the audio element.
      </audio>
      {!audioEnabled && (
        <button onClick={handlePlayAudio} style={{ position: 'absolute', top: '20px', left: '20px' }}>
          Enable Sound
        </button>
      )}
    </div>
  );
};

export default BackgroundMusic;

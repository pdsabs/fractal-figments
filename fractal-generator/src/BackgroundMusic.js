import React, { useState, useRef } from 'react';
import {Button} from '@mui/material';

const BackgroundMusic = ({ src, songName }) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current.pause();
        setAudioEnabled(false);
      } else {
        audioRef.current.play().catch(error => console.log("Playback was prevented:", error));
        setAudioEnabled(true); // Update state to reflect that audio is playing
      }
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={src} loop hidden>
        Your browser does not support the audio element.
      </audio>
        <Button onClick={handlePlayAudio}>
          Play {songName}
        </Button>
    </div>
  );
};

export default BackgroundMusic;

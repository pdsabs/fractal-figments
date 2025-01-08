import React from 'react';
import './styles.css';
// import BackgroundMusic from './BackgroundMusic';
// import SpiralSketch from './SpiralSketch';
import {Box} from '@mui/material';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2
    }}>
      <iframe
        title="Spotify Artist Smol"
        style={{borderRadius: '12px'}}
        src="https://open.spotify.com/embed/artist/2pwBng2g7Z23jZrsleMcpW?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <iframe
        title="Spotify Artist Big"
        style={{borderRadius: '12px'}}
        src="https://open.spotify.com/embed/artist/2pwBng2g7Z23jZrsleMcpW?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      {/* <BackgroundMusic src="/dogs.mp3" songName="Dogs"/> */}
      {/* <BackgroundMusic src="/onda_project.m4a" songName="Danny"/> */}
      {/* <SpiralSketch/> */}
    </Box>
  );
}

export default App;

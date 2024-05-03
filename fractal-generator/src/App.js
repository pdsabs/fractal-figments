import React from 'react';
import './styles.css'
import BackgroundMusic from './BackgroundMusic';
import SpiralSketch from './SpiralSketch';
import {Box} from '@mui/material';

function App() {
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      <BackgroundMusic src="/dogs.mp3" songName="Dogs"/>
      <BackgroundMusic src="/onda_project.m4a" songName="Danny"/>
      <SpiralSketch/>
    </Box>
  );
}

export default App;

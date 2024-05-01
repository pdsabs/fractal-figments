import React from 'react';
import './styles.css'
import BackgroundMusic from './BackgroundMusic';
import Fractal from './Fractal';

function App() {
  return (
    <div>
      <BackgroundMusic src="/onda_project.m4a"/>
      <Fractal/>
    </div>
  );
}

export default App;

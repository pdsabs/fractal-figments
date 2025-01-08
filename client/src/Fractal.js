import React, { useEffect } from 'react';
import p5 from 'p5';

const Fractal = () => {
  const Sketch = p5 => {
    let angle = 0;
    let radius = 0;

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.background(255);  // Set background to white
    };

    p5.draw = () => {
      // Calculate x and y coordinates
      let x = radius * Math.cos(angle);
      let y = radius * Math.sin(angle);

      // Translate to the center of the canvas
      p5.translate(p5.width / 2, p5.height / 2);
      p5.stroke(0); // Set the line color to black
      p5.strokeWeight(2); // Set the stroke weight

      // Draw a point at the (x, y) position
      p5.point(x, y);

      // Incrementally change the angle and radius
      angle += 0.1;
      radius += 0.5;
    };
  };

  useEffect(() => {
    const myP5 = new p5(Sketch);

    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div>
      <style>
        {`
                    canvas {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                `}
      </style>
      <div/>
    </div>
  );
};

export default Fractal;

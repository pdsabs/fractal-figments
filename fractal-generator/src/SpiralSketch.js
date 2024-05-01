import React, { useEffect } from 'react';
import p5 from 'p5';

const SpiralSketch = () => {
  const Sketch = p5 => {
    let angle = 0;
    let radius = 0;
    let points = []; // Array to store each point
    let zoom = 1.00;

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.background(255);
    };

    p5.draw = () => {
      p5.translate(p5.width / 2, p5.height / 2);
      p5.stroke('red');
      p5.strokeWeight(2);
      p5.scale(zoom);

      // Calculate new point
      if (points.length < 300) {
        let x = radius * Math.cos(angle);
        let y = radius * Math.sin(angle);
        points.push({x, y, radius, angle}); // Store the point in the array
      } else {
        zoom *= 1.00555;
      }

      // Draw all points
      drawPoints(points);
      p5.stroke('orange');
      drawPoints(points);

      // Update variables
      angle += 0.1;
      radius += 2;

      console.log(points.length);
      // Optionally limit the number of points for performance
      // if (points.length > 1000) {
      //   points.shift(); // Remove the oldest point
      // }
    };

    function drawPoints(points) {
      points.forEach(point => {
        if (points.length >= 300) {
          point.angle += 0.2;
          //point.radius += 0.5;
          //p5.strokeWeight(5);
          point.x = point.radius * Math.cos(point.angle);
          point.y = point.radius * Math.sin(point.angle);
          p5.point(point.x, point.y);

        } else {
          p5.point(point.x, point.y);
        }
      });
    }
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

export default SpiralSketch;

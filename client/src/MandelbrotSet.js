import React, { useEffect } from 'react';
import p5 from 'p5';

const MandelbrotSet = () => {
  const Sketch = p5 => {
    let scale = 0.5; // Scale of the mandelbrot set
    let centerX = 0; // Center coordinates for the viewport
    let centerY = 0;
    let maxIterations = 100;

    p5.setup = () => {
      p5.createCanvas(800, 600);
      p5.pixelDensity(1);
      drawMandelbrot();

      // Use an arrow function to maintain the correct 'this' context
      p5.canvas.onwheel = (event) => {
        event.preventDefault();
        const zoomFactor = 1.01;
        if (event.deltaY < 0) {
          scale *= zoomFactor;
        } else {
          scale /= zoomFactor;
        }

        // Calculate new center based on mouse position
        centerX += (p5.mouseX - p5.width / 2) * (1 - 1 / zoomFactor) / scale;
        centerY += (p5.mouseY - p5.height / 2) * (1 - 1 / zoomFactor) / scale;

        drawMandelbrot();
      };
    };

    const drawMandelbrot = () => {
      p5.loadPixels();

      for (let x = 0; x < p5.width; x++) {
        for (let y = 0; y < p5.height; y++) {
          let a = p5.map(x, 0, p5.width, -2.5 * scale + centerX, 1 * scale + centerX);
          let b = p5.map(y, 0, p5.height, -1 * scale + centerY, 1 * scale + centerY);

          let ca = a;
          let cb = b;
          let n = 0;

          while (n < maxIterations) {
            const aa = a * a - b * b;
            const bb = 2 * a * b;
            a = aa + ca;
            b = bb + cb;
            if (a * a + b * b > 16) {
              break;
            }
            n++;
          }

          let bright = p5.map(Math.sqrt(n / maxIterations), 0, 1, 0, 255);
          if (n === maxIterations) {
            bright = 0;
          } else {
            let hue = p5.map(n, 0, maxIterations, 0, 255);
            p5.pixels[(x + y * p5.width) * 4 + 0] = bright;
            p5.pixels[(x + y * p5.width) * 4 + 1] = hue;
            p5.pixels[(x + y * p5.width) * 4 + 2] = 255 - hue;
            p5.pixels[(x + y * p5.width) * 4 + 3] = 255; // Alpha
          }
        }
      }

      p5.updatePixels();
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
            display: block;
            margin: 0 auto;
            background: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </div>
  );
};

export default MandelbrotSet;

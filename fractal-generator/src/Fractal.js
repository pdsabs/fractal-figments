import React, { useEffect } from 'react';
import p5 from 'p5';

const Fractal = () => {
  const Sketch = p5 => {
    let angle = 0;

    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(0);
      p5.translate(p5.width / 2, p5.height);
      drawBranch(p5, 100);
    };

    const drawBranch = (p5, len) => {
      p5.stroke(255);
      p5.line(0, 0, 0, -len);
      p5.translate(0, -len);
      if (len > 4) {
        p5.push();
        p5.rotate(angle);
        drawBranch(p5, len * 0.67);
        p5.pop();
        p5.push();
        p5.rotate(-angle);
        drawBranch(p5, len * 0.67);
        p5.pop();
      }
    };

    p5.mouseMoved = () => {
      angle = p5.map(p5.mouseX, 0, p5.width, 0, Math.PI);
      p5.redraw();
    };
  };

  useEffect(() => {
    new p5(Sketch);
  }, []);

  return <div />;
};

export default Fractal;

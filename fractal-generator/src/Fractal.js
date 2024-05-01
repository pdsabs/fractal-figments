import React, { useEffect } from 'react';
import p5 from 'p5';

const Fractal = () => {
  const Sketch = p5 => {
    let angle = 0;
    const sentence = "This is an example of a sentence where each word forms part of the fractal tree.";
    let words = sentence.split(' ');

    p5.setup = () => {
      p5.createCanvas(800, 600);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(0);
      p5.translate(p5.width / 2, p5.height);
      drawBranch(p5, 100, 0);
    };

    const drawBranch = (p5, len, wordIndex) => {
      if (wordIndex < words.length) {
        let word = words[wordIndex];
        p5.fill(255);
        p5.textSize(len);
        p5.textAlign(p5.CENTER, p5.CENTER);

        // Draw the text upward by rotating canvas
        p5.rotate(-Math.PI / 2);
        p5.text(word, 0, 0);
        p5.rotate(Math.PI / 2);

        // Move to end of word
        let wordWidth = p5.textWidth(word);
        p5.translate(0, -wordWidth);

        if (len > 10) { // Only continue if length is sufficient
          p5.push();
          p5.rotate(angle);
          drawBranch(p5, len * 0.6, wordIndex + 1);
          p5.pop();
          p5.push();
          p5.rotate(-angle);
          drawBranch(p5, len * 0.6, wordIndex + 1);
          p5.pop();
        }
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

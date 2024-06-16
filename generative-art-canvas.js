const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1200, 1200]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Calculate the center of the canvas
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate the dimensions of the rectangle
    const rectangleWidth = width * 0.10;
    const rectangleHeight = height * 0.10;

    const gap = width * 0.02;

    // Calculate the starting point of the rectangle to center it
    const startX = (width - (rectangleWidth * 6)) / 2;
    const startY = (width - (rectangleHeight * 6)) / 2;


    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {

        const x = centerX + (rectangleWidth + gap) * i;
        const y = centerY + (rectangleHeight + gap) * j;

        context.beginPath();
        context.rect(x, y, rectangleWidth, rectangleHeight);
        context.stroke();
        context.lineWidth = 5;
      }

    }
  };
};

canvasSketch(sketch, settings);

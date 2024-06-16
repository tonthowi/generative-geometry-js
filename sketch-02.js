// Import necessary modules from 'canvas-sketch' and 'canvas-sketch-util'
const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

// Set the canvas dimensions to 1080x1080 pixels
const settings = {
  dimensions: [1080, 1080]
};

// Define the sketch function
const sketch = () => {

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Set the drawing color to black
    context.fillStyle = 'blue';

    // Place the center of the circle at the center of the canvas
    const cx = width / 2;
    const cy = height / 2;

    // Define the width and height of the rectangles to be drawn
    const w = width * 0.01;
    const h = height * 0.4;
    let x, y;
    
    // Number of rectangles and radius for positioning
    const num = 20; // Set the number of rectangles
    const radius = width * 0.30; // Set the radius to fill the 30% of the entire canvas

    // Loop to create and position rectangles around a quarter circle
    for (let i = 0; i < num; i++) {
      // Calculate the angle for each slice of the circle
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      // Calculate the x and y positions using trigonometry
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
  
      // Save the current context state
      context.save();
      // Move the origin to the calculated position
      context.translate(x, y);
      // Rotate the context by the negative angle
      context.rotate(-angle);
      // Scale the context randomly
      context.scale(random.range(0.1, 2), random.range(0.1, 0.5));
  
      // Draw a rectangle
      context.beginPath();
      context.rect(random.range(0, -w * 0.5), random.range(0, -h * 0.5), w, h);
      context.fill();
      // Restore the context state
      context.restore();

      // Save the context state again
      context.save();
      
      // Translate to the top-left corner of the canvas
      context.translate(cx, cy);
      // Rotate by the negative angle
      context.rotate(-angle);

      // Set a random line width
      context.lineWidth = random.range(5, 20);
      // Draw an arc
      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke();

      // Restore the context state
      context.restore();
    }
  };
};

// Start the canvas-sketch with the defined sketch and settings
canvasSketch(sketch, settings);

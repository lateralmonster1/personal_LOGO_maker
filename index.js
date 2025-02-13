const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate SVG content
const generateSVG = (text, textColor, shape, shapeColor) => {
  let shapeElement = '';

  switch (shape) {
    case 'circle':
      shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shapeElement = `<polygon points="150,20 280,180 20,180" fill="${shapeColor}" />`;
      break;
    case 'square':
      shapeElement = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
      break;
  }

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
};

// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to 3 characters):',
    validate: input => input.length <= 3 || 'Text must be up to 3 characters long.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal):'
  }
];

// Function to initialize the app
const init = () => {
  inquirer.prompt(questions).then(answers => {
    const svgContent = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }).catch(error => {
    console.error('Error:', error);
  });
};

// Function call to initialize app
init();


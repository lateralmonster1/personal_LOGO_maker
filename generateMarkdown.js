// generateMarkdown.js
function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Questions
  If you have any questions, you can contact me at [${data.email}](mailto:${data.email}).
  You can also find more of my work at [${data.github}](https://github.com/${data.github}).
    `;
  }
  
  module.exports = generateMarkdown;
  
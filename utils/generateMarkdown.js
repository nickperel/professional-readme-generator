// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "IBM") {
    return "[IBM License](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "[Mozilla License](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "IBM") {
    return "The IPL is the open-source license IBM uses for some of its software. Supposed to facilitate commercial use of said software; is very clear on the specifics of liability. Also grants explicit patent rights.";
  } else if (license === "MIT") {
    return "A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.";
  } else if (license === "Mozilla") {
    return "MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater. You can distribute binaries under a proprietary license, as long as you make the source available under MPL.";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}
  ${renderLicenseBadge(answers.license)}

  ## Description
  
  * ${answers.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ### Installation
  
  * ${answers.installations}

  ### Usage

  * ${answers.usage}

  ### License Info
  * ${renderLicenseLink(answers.license)}
  * ${renderLicenseSection(answers.license)}
  
  ### Contributing

  *

  ### Tests

  *

  ### Further Questions?

  *
`;
}

module.exports = generateMarkdown;

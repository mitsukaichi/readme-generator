# 09 Node.js Challenge: Professional README Generator

## About this project
This project was done as the eventh assignment of a codind bootcamp as part of the process to learn about node.js. I built a command line tool to generate a README file based on the input provided by users, using some starter files to meet the following criteria:

- User is prompted for information about their application repository
- Generated readme contains title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- Readme contains a badge for that license is added near the top of the README and a notice is added to the License section
- Github username is added to the section of the README entitled Questions, with a link to my GitHub profile
- Email address is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- click on the links in the Table of Contents takes user to the corresponding section of the README

## Installation & usage

1. Download all the files in this reposotory
2. Open the terminal, move to the directory the downloaded files are stored
3. Install npm packages, inquire and fs
4. Type node index.js in Terminal and answer all the prompted questions. 
5. Once you answer all the questions, the generated readme is available in the output folder.

## Demo

- [Video](https://drive.google.com/file/d/1mm4blFpPWsI7ngLreCZfUc_ta3G_KY0H/view?usp=sharing)

## Resources referred to 

- [Get the current year in JavaScript](https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript)
- [How to Find an Object by Property Value in an Array of JavaScript Objects](https://www.tutorialrepublic.com/faq/how-to-find-an-object-by-property-value-in-an-array-of-javascript-objects.php)

## Things I leartn in this challenge

It was the first assignment using the node.js, I excersized the following skills I just learnt in the class:
- create a function in one js file, export the module and use that module in another file
- install and use npm packages
- write into files from node.js
- how to use string literals

The biggest challenge I had was to dynamically incert a username into a license content stored as a string literal. I started with creating an object that contains the licence content as string literals with the incertion of the username variable. However, the string literal couldn't be modified after it's already being defined, so I created a function that takes in the username as an argument and add that into the string literal, which worked successfully.

## License

MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
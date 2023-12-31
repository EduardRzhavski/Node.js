// What is the difference between import and require?

// Synchronous & Asynchronous: require is synchronous by default. The entire module is loaded and executed before continuing with the rest of the code. import can be used with asynchronous operations. This is beneficial for code splitting and loading modules on-demand.
// Static & Dynamic: require is more static. import supports dynamic imports, allowing you to load modules conditionally or based on runtime values.
// Variable Declarations: In CommonJS require, you assign the required module to a variable using const or let. In ECMAScript Modules import, you can use import statements for named exports or use the import as syntax to rename imports.
// Compatibility: require is used in existing Node.js code. import is part of modern JavaScript and is the standard for ECMAScript Modules.

// How can you enable using the import syntax using node js

// mymodule.mjs
// import fs from 'fs';
// console.log(fs.readFileSync('file.txt', 'utf8'));
// node mymodule.mjs

// Give 2 node.js environment variables that are not available
// when using the import syntax.

// '__dirname' & '__filename', 'module' Object:


// Create 3 functions using the export/import syntax.

// mathOperations.js
// export function add(a, b) {
//     return a + b;
//   }
  
//   export function subtract(a, b) {
//     return a - b;
//   }
  
//   export function multiply(a, b) {
//     return a * b;
//   }

  // main.js
// import { add, subtract, multiply } from './mathOperations.js';

// const num1 = 10;
// const num2 = 5;

// console.log(`Addition: ${add(num1, num2)}`);
// console.log(`Subtraction: ${subtract(num1, num2)}`);
// console.log(`Multiplication: ${multiply(num1, num2)}`);

// // stringOperations.js
// export function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
  
//   export function reverse(str) {
//     return str.split('').reverse().join('');
//   }
  
//   export function countCharacters(str) {
//     return str.length;
//   }
  

// Import the file system module using the import syntax.

// filesystem.js
// import * as fs from 'fs';

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//   } else {
//     console.log('File content:', data);
//   }
// });
// node --experimental-modules filesystem.js

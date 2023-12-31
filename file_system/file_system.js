// 1. Create a new txt file using the same fs module method we have
// learned before.

// const fs = require('fs');

// const content = 'This is the content of the new text file.';

// fs.writeFile('newfile.txt', content, 'utf8', (err) => {
//   if (err) {
//     console.error('Error creating the file:', err);
//   } else {
//     console.log('New text file created successfully!');
//   }
// });

// 2. Create a copy of the newly created txt file using a method from
// the fs module.

// const fs = require('fs');

// const sourceFilePath = 'newfile.txt';
// const destinationFilePath = 'newfile_copy.txt';

// fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
//   if (err) {
//     console.error('Error copying the file:', err);
//   } else {
//     console.log('File copied successfully!');
//   }
// });

// 3. Rename one of the files using a method from the fs module.

// const fs = require('fs');

// const oldFilePath = 'newfile_copy.txt';
// const newFilePath = 'renamed_file.txt';

// fs.rename(oldFilePath, newFilePath, (err) => {
//   if (err) {
//     console.error('Error renaming the file:', err);
//   } else {
//     console.log('File renamed successfully!');
//   }
// });

// 4. Get a list of all the file names of the current directory using a
// method from the fs module.

// const fs = require('fs');

// const currentDirectory = './'; 

// fs.readdir(currentDirectory, (err, files) => {
//   if (err) {
//     console.error('Error reading directory:', err);
//   } else {
//     console.log('List of file names in the current directory:');
//     files.forEach((file) => {
//       console.log(file);
//     });
//   }
// });

// 5. Find out and implement another method for the fs module.

// const fs = require('fs');

// const fileName = 'renamed_file.txt'; 

// fs.stat(fileName, (err, stats) => {
//   if (err) {
//     console.error('Error getting file information:', err);
//   } else {
//     console.log(`File information for ${fileName}:`);
//     console.log(`Size: ${stats.size} bytes`);
//     console.log(`Creation Time: ${stats.ctime}`);
//     console.log(`Last Modified Time: ${stats.mtime}`);
//     console.log(`Is Directory: ${stats.isDirectory()}`);
//     console.log(`Is File: ${stats.isFile()}`);
//   }
// });


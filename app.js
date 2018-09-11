var fs = require('fs');

//challenge1: Simply print the contents of the text file to the screen.
fs.readFile("challenge1/info.txt", "utf8", (err, data) => console.log(data));

//challenge2: Add the names of everyone in your group to the end of the text file.
let names = fs.readFileSync('challenge2/info.txt', 'utf-8')
names = names + 'Person1\n' + 'Person2\n' + 'Person3\n'
fs.writeFileSync('challenge2/info.txt', names)

//challenge3: The file was incorrectly named binfo.txt ... Rename it to info.txt (only using js!)
fs.renameSync("challenge3/binfo.txt", "challenge3/info.txt")

//challenge4: Create a new folder within the challenge4 folder called "copyfolder". Then copy info.txt into that folder.
fs.mkdirSync("challenge4/copyfolder");
fs.copyFileSync("challenge4/info.txt", "challenge4/copyfolder/copy.txt");

//challenge5: Replace all of the "-"'s inside the text file with spaces.
let replace = fs.readFileSync('challenge5/info.txt', 'utf-8')
replace = replace.split('-').join(' ')
fs.writeFileSync('challenge5/info.txt', replace)

//challenge6: Display all files that end with ".txt". Don't hard code the file names!
fs.readdir("challenge6", (err, data) => {
  data.forEach((str) => {
    if(str.endsWith('.txt')){
      fs.readFile(`challenge6/${str}`, "utf8", (err, data) => console.log(data));
    }
  })
});

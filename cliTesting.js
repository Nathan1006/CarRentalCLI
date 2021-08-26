/// Allows the use of user input answers
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


const userName = rl.question("What is your name?\nName: ", (answer) =>{
    console.log('Hello, ' + answer)
    rl.close()
  });

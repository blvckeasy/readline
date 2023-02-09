const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});


rl.question('What is your name?\n', (name) => {
 console.log(`Hello ${name}!`);
 rl.close();
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* r1.on('line', (line) => {
  console.log('You wrote:' + line);
  r1.close();
})
 */
let answer = 'Bob Dilo';

/* rl.question('who is the best rat?\n',
  (userInput) => {
    if (userInput.trim() == answer) {
      console.log('the greatest rat is ' + userInput.trim());
      rl.close(); 
    }
    else {
      rl.setPrompt('Wrong answer. Try again.\n');
      rl.prompt();
      rl.on('line', (userInput)=>{
        if (userInput.trim() == answer) {
          rl.close();
        }
        else {
          rl.setPrompt(userInput + 'is incorrect. Try again.\n');
          rl.prompt();
        }
      })
    }
  }) */



rl.on('close', () => {
  console.log('well, that was nice. Tchau!');
});

/* rl.question('1 + 1 = ?\n', (input) => {
  console.log('question')
  rl.on('line', (input) => {
    console.log('line event')
    if (input == '2') {
      rl.close();
    }
    else {
      console.log('marker')
      rl.setPrompt('Try again. 1 + 1 = ?\n');
      rl.prompt();
    }
  })
}) */

rl.setPrompt('2+2 = ?\n');
rl.prompt();

rl.on('line', (input) => {
  if (input.trim() == '4') {
    rl.close();
  }
  else {
    rl.setPrompt('Try again. 2 + 2 = ?\n');
    rl.prompt();
  }
})
 
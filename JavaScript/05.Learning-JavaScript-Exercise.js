
// Exercise
/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

const character = 'V';
const timesToRepeact = 10;
let answer = '';

for (let i = 0; i < timesToRepeact; i++) {
    answer = answer + character
}

console.log(answer);
// Scope is hard. And scope is particularly strange in JavaScript (it varies by programming language.) If it feels hard it's because it is. A general, imperfect way for you to think about it right now is that a variable is "alive" (in scope) in between whatever the closest { is until that { closes its corresponding }. A few examples below, see if you can get it right. Keep in mind that the variable will stay in scope as long as any scope it exists in still exists. If I declare a variable in an outter scope and modify a variable in an inner scope, that variable will survive as long as the outter scope does. It matters where the variable is declared.

//This is pretty convulated example but see what you think. Once your ready, the next file will be the answers.

const A = "A";
let F;

function doStuff(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D);
  console.log(H);
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);
  const G = "G";
}
console.log(E);
console.log(G);

doStuff("B");
console.log(B);
console.log(C);
console.log(F);


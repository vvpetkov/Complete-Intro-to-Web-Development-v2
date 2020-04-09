function addFive(number) {
    const someVariable = "you can't see me outside this function";
    return number + 5;
  }
  
  addFive(10);
  console.log(someVariable);

  //! ReferenceError: someVariable is not defined
  // This is not going to work. someVariable is inside of the addFive scope and once addFive completes, it throws someVariable away since it's now out-of-scope.

  let friendsAtYourParty = 0;
  for (let i = 0; i <= 10; i++) {
    friendsAtYourParty++;
  }
  console.log(i);

  //! ReferenceError: i is not defined

  // Even this doesn't work since i is only in scope for the loop and then after that it's thrown away. This can be a difficult one to deal with as someone new to coding because you'll go to log something or use a variable and it's out of scope so it's not there. Just know if that happens, this is probably the problem.

  
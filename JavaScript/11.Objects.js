// Objects

// 💬

// ! keys need to be uniqe 

const person = {
    name: 'Vladimir Petkov',
    city: 'Sofia',
    state: 'Sofia grad',
    favoriteFood: '🥓',
    wantsFoodRightNow: true,
    numberOfFoodsWanted: 100,
    address: {
        street: '123 Place',
        apartment: 'A1'
    }
};

console.log(person);
console.log(person.name);
console.log(person.address.street);
console.log(person.address.apartment);
console.log(person.favoriteFood);

console.log(person["name"]); // same as the line above; definitely prefer using the other one

// Used in conjunction with functions they're very powerful. Take this example:

const person1 = {
    name: "Brian",
    ageRange: "25-35"
  };
  const person2 = {
    name: "Jack",
    ageRange: "65-75"
  };
  
  function suggestMusic(person) {
    if (person.ageRange === "25-35") {
      console.log("We think you'll like Daft Punk your crazy millenial.");
    } else if (person.ageRange === "65-75") {
      console.log(
        "You're obviously going to like Johnny Cash. He walks the line."
      );
    } else {
      console.log(
        "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
      );
    }
  }
  
  suggestMusic(person1);
  suggestMusic(person2);


  // Objects can even have their functions!

  const dog = {
    name: "dog",
    speak() {
      console.log("woof woof");
    }
  };
  
  dog.speak();

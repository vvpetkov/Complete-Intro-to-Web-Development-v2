// Objects are un-ordered collections of datas using keys and values. Arrays, in contrast, are ordered collections of data. If you put something in an array, it has an order. For example, you might a list of the days of the week.

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);

  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
  console.log(primeNumbers.length);
  console.log(primeNumbers.join(" | "));


  const courses = [
    { teacher: "Kyle Simpson", course: "JS Function Lite" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React v3" },
    { teacher: "Steve Kinney", course: "State Management" }
  ];
  
  courses.push({ teacher: "Sean Larkinn", course: "Webpack" });
  
  console.log(courses);
  
  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };
  
  console.log(courses);

  const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
  ];
  
  // method 1
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }
  
  // method 2
  cities.forEach(function(city) {
    console.log(city.toLowerCase());
  });

  /* 
  The first way, using a for loop, we're using that i control variable which gets incremented each loop. We use that i to access each item in the array on each iteration of the loop. We have the loop stop when i gets equal to the length of cities. Very useful pattern. You'll see it a lot.

The second way is using a function that arrays have called forEach. This forEach method takes in a function and that function will be called once on each item of the array. It will pass that item into the function, which is what city is in this situation. Both are useful patterns to know. You'll use both frequently. While you're getting started, just use the one you feel comfortable with. They have different things that make them preferable in different situations but usually you can use either. Method 2 may be a bit more advance but I don't think you should be scared of it.
  
  */
//

const me = {
    name: {
      first: "Brian",
      last: "Holt"
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA"
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    }
  };
  
  console.log(me.getAddress());


  // this is a deep 🐇🕳️
  
  https://frontendmasters.com/courses/javascript-foundations/


  // избягвай го 
  // има друг disign patern ,който може да го замести
  // да ги подаваме във променливи
  


const myDescription = {
  name: "Nikita",
  lastName: "Ivanov",
  age: 20,
  greet: function () {
    console.log(`Hello ${this.name} ${this.lastName}`);
  },
};

console.log(myDescription);

let simpleUserCount = 0;

const arrayUsers = [
  {
    name: "Nikita",
    lastName: "Ivanov",
    age: 20,
    isAdmin: true,
  },
  {
    name: "Oleg",
    lastName: "Ivanov",
    age: 22,
    isAdmin: true,
  },
  {
    name: "Valeria",
    lastName: "Ivanova",
    age: 24,
    isAdmin: false,
  },
  {
    name: "Michael",
    lastName: "Ivanov",
    age: 19,
    isAdmin: false,
  },
];
console.log(arrayUsers);

for (let i = 0; i < arrayUsers.length; i++) {
  if (arrayUsers[i].isAdmin === true) {
    simpleUserCount++;
  }
}

console.log(simpleUserCount);

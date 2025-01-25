// const myDescription = {
//   name: "Nikita",
//   lastName: "Ivanov",
//   age: 20,
//   greet: function () {
//     console.log(`Привет, ${this.name} ${this.lastName}!`);
//   },
// };

// console.log(myDescription);
// console.log(`Вызов greet метода:`);
// myDescription.greet();

// let simpleUserCount = 0;

// const arrayUsers = [
//   {
//     name: "Nikita",
//     lastName: "Ivanov",
//     age: 20,
//     isAdmin: true,
//   },
//   {
//     name: "Oleg",
//     lastName: "Ivanov",
//     age: 22,
//     isAdmin: true,
//   },
//   {
//     name: "Valeria",
//     lastName: "Ivanova",
//     age: 24,
//     isAdmin: false,
//   },
//   {
//     name: "Michael",
//     lastName: "Ivanov",
//     age: 19,
//     isAdmin: false,
//   },
// ];
// console.log(arrayUsers);

// for (let i = 0; i < arrayUsers.length; i++) {
//   if (arrayUsers[i].isAdmin === true) {
//     simpleUserCount++;
//   }
// }

// console.log(`Простых юзеров ${simpleUserCount}`);

const firstNumber = 12;
const secondNumber = 10;

let result = null;
console.log("97 урок: условия");

if (firstNumber > secondNumber) {
  result = firstNumber + secondNumber;
  console.log(`Результат first & second number is: ${result}`);
} else {
  result = secondNumber - firstNumber;
  console.log(`Else Результат first & second number is: ${result}`);
}

const nikita = "nikita";
nikita === "admin"
  ? console.log(`ternarny operator Nikita is admin`)
  : console.log(`ternarny operator Nikita is not admin`);

console.log(`98 урок циклы`);

for (let i = 1; i <= 10; i++) {
  console.log(`Пройден ${i} круг`);
}

console.log(`100 урок массивы`);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + 1);
}

console.log(`101 урок функции`);

function greet(name) {
  return `Привет, "${name}"`;
}

console.log(greet("Никита"));

function logNumbersGreaterThanTen(numbers) {
  numbers.forEach((number) => {
    if (number > 10) {
      console.log(number);
    }
  });
}

const numbersArray = [5, 12, 8, 21, 3, 15];
console.log(`Числа больше 10:`);
logNumbersGreaterThanTen(numbersArray);

function calculator(num1, num2, operator) {
  switch (operator) {
    case "plus":
      return num1 + num2;
    case "minus":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num2 !== 0 ? num1 / num2 : "Делить на ноль нельзя";
    default:
      return "Неправильный оператор!";
  }
}

const result1 = calculator(2, 3, "plus");
console.log(`Итог калькулятора ${result1}`);

console.log("Урок 102 объекты");
const users = [
  {
    name: "nikita",
    age: 23,
    isAdmin: true,
  },
  {
    name: "oleg",
    age: 22,
    isAdmin: false,
  },
];

users.push({
  name: "valera",
  age: 24,
  isAdmin: false,
});

console.log(users);
console.log(`Валеру добавил через users.push()`);

const hello = "hello world";
console.log("использую toUpperCase()");
console.log(hello.toUpperCase());

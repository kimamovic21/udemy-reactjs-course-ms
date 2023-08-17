// 17. "import" and "export"

// import { apiKey } from './util17.js';
// import apiKey from './util17.js';
// import { apiKey, abc} from './util17.js';

// console.log(apiKey);
// console.log(abc);


// import * as util from './util17.js';

// console.log(util.default);
// console.log(util.apiKey);
// console.log(util.abc)


// import { apiKey, abc as content } from './util.js';
// console.log(apiKey);
// console.log(content);

// ****************************************************************


// 18. Revisiting Variables and Values

// let userMessage = 'Hello World!';
// console.log(userMessage);

// let myName = 'Kerim';
// let greet = 'Hi';
// console.log(`${greet} ${myName}! How are you?`);

// ****************************************************************



// 19. Revisiting Operators

// console.log(1 + 2);
// console.log('Hello' + ' ' + 'world');
// console.log(1 === 1);
// console.log(1 === '1');
// console.log(1 == 1);
// console.log(1 == '1');
// console.log(1 === 2);

// let years = 12;
// if ( years >= 12) {
//     console.log(`You can enter!`);
// }
// else {
//     console.log(`Sorry, you can't enter!`);
// };

// ****************************************************************



// 20. Revisiting Functions & Parameters

// function greet() {
//     console.log(`Hello World!`);
// };
// greet();


// function greet2(userName = 'Unknown person', message = 'Hello') {
//     console.log(message, userName);
// };
// greet2('Max', 'Hello');
// greet2('Manuel', 'Hello');
// greet2();


// function greet3(userName, message) {
//     return `Hi, I am ${userName}. ${message}`;
// };
// console.log(greet3('Kerim', 'This is a return statement.'));

// const greeting = greet3('Max', 'This is a return statement also.');
// console.log(greeting);


// function introduceYourself(name, surname, age, city) {
//     console.log(`Hi. My full name is ${name} ${surname}.I am ${age} years old.I come from ${city}.`)
// };
// introduceYourself('Kerim', 'Imamovic', 26, 'Sarajevo');

// ****************************************************************



// 21. Arrow Functions

// const greet = (userName, message) => {
//     return message + userName;
// };
// console.log(greet('Kerim', 'Hello '));

// ****************************************************************



// 22. More on Arrow Functions

// ****************************************************************



// 23. Revisiting Objects & Classes

// const user = {
//     name: 'Kerim',
//     age: 26,
//     greet() {
//         console.log(`Hello ${this.name}`);
//     },
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// user.greet();
// console.table(user);


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };

//     greet() {
//         console.log(`Hi!`);
//     };
// };
// const user1 = new User('Kerim', 26);
// console.log(user1);
// user1.greet();

// ****************************************************************



// 24. Arrays & Array Methods like map()

// const hobbies = ['Sports', 'Cooking', 'Reading'];
// console.log(hobbies); 
// console.log(hobbies[0]);

// hobbies.push('Working');
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//     console.log(item);
//     return item === 'Sports';
// });
// console.log(index);


// const editedHobbies = hobbies.map((item) => {
//     console.log(item);
//     return `I love ${item}`;
// });
// console.log(editedHobbies);


// const editedHobbies2 = hobbies.map((item, index) => {
//     console.log(item);
//     console.log(index);
//     return {
//         text: item,
//     };
// });
// console.log(editedHobbies2);

// ****************************************************************



// 25. Destructuring

// const userNameData = [ 'Kerim', 'Imamovic' ];

// const [ firstName, lastName ] = userNameData;
// console.log(firstName);
// console.log(lastName);


// const { name: userName, age:userAge } = {
//     name: 'Kerim',
//     age: 26,
// };
// console.log(userName);
// console.log(userAge);


// const user2 = {
//     userName2: 'Max',
//     userAge2: 32,
// };
// const { userName2, userAge2 } = user2;
// console.log(userName2);
// console.log(userAge2);

// ****************************************************************



// 26. Destructuring in Function Parameter Lists

// ****************************************************************



// 27. The Spread Operator

// const hobbies = ['Sports', 'Cooking'];
// console.log(hobbies);
// const newHobbies = ['Reading'];
// console.log(newHobbies);

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//     name: 'Kerim',
//     age: 26,
// };
// console.log(user);

// const extendedUser = {
//     ...user,
//     isAdmin: true,
// };
// console.log(extendedUser);

// ****************************************************************



// 28. Revisiting Control Structures

// const password = prompt('Your password');
// console.log(password);

// if ( password === 'Hello' ) {
//     console.log('Hello works!');
// } 
// else if ( password === 'hello') {
//     console.log('hello works!');
// }
// else {
//     console.log('Access not granted!');
// };


// const hobbies = ['Sports', 'Cooking']

// for (const hobby of hobbies) {
//     console.log(`I love ${hobby}.`);
// };

// ****************************************************************



// 29. Manipulating the DOM - Not With React!

// const list = document.querySelector('ul');
// console.log(list);

// ****************************************************************



// 30. Using Functions as Values

// const greet = () => {
//     console.log('Hello World!');
// };

// const handleTimeout = () => {
//     console.log('Time out!');
// };

// setTimeout(handleTimeout, 3000);
// setTimeout(greet, 2000);


// const calculateAge = (currentYear, birthYear) => {
//     return currentYear - birthYear;
// };
// const currentUserYears = calculateAge(2023, 1996);

// const introduceYourself = (firstName, lastName) => {
//     console.log(`My full name is ${firstName} ${lastName}. I am ${currentUserYears} years old.`);
// };
// introduceYourself('Kerim', 'Imamovic');

// ****************************************************************



// 31. Defining Functions Inside Of Functions

// function init() {
//     function greet() {
//         console.log('Hi');
//     };
//     greet();
// };
// init();

// ****************************************************************



// 32. Reference vs Primitive Values

// let userMessage = 'Hello';
// userMessage = userMessage.concat('!!!');
// console.log(userMessage);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Working');
// console.log(hobbies);
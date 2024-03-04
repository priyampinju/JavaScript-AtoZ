/*********************************************************************** */
// Hi, welcome to my github, I am Pinju Priyam Gogoi, this is my javascript journey. I actually forgot the day I started learning javascript. Maybe it was around april 2022. But then I went to university and forgot about javascript. Then after my masters, when reality hit me I realised I have learned nothing and I dont have the skills to be employable. So I again started learing javascript. Its feb 10, 2024. I am resuming my javascript journey. And I had no intention of pushing this file to github. So the first part of this file is not well documented. But now that I'm learning it seriously, I am documenting it as much as possible. This will help me in the future if there needs anything that I forgot. This is a note to the future me that there was this day when this jobless boy was focused in just learning and nothing else.
/*********************************************************************** */
// Learning everything from https://youtu.be/chx9Rs41W6g?si=PlZ96KmRzVbQ-wL3
/*********************************************************************** */

// "use strict";

// console.log("Hello World");
// // alert("Hi");
// // document.write("Hi bro");
// // console.warn("this is warning");
// console.error("this is an error hehe")
// // console.clear()
// var num1=20;
// var num3=10;
// console.log(num1+num3);
// console.log('num1 is '+ num1)

// var arr=[1,2,3,"Pinju",5];
// console.log(typeof(arr[3]))

// function avg(a, b){
//     c = (a + b)/2;
//     return c;
// }

// let ab = avg(12,16);
// console.log(ab)

// c = avg(4,5);
// c1 = avg(4,6)
// c2 = avg(14,16);
// console.log(c1, c2);

// var age = 22;
// if(age<=8){
//     console.log("You're a kid");
// }
// else if(age>=8 && age<=18){
//     console.log("You're a to be kid");
// }
// else{
//     console.log("hehe");
// }

// var myName = "Pinju";
// console.log(myName);
// myName = "Priyam"
// console.log(myName);
// var aa = 2;
// console.log(aa ** 3);

// //let keyword
// let firstName = "Pinju";
// firstName = "Priyam";
// console.log(firstName);

// //declare constants
// const pi = 3.14;
// console.log(pi);

// //string indexing
// console.log(firstName[1]);
// console.log(firstName.length);
// console.log(firstName[firstName.length-2]);

// //trim()
// let firstName = "       Pinju        ";
// console.log(firstName);
// console.log(firstName.length);
// firstName = firstName.trim();
// console.log(firstName.length);

// let namrata = "Kavya";
// console.log(namrata);

// let firstName = "       Namrata        ";
// secondName = "Kavya";
// firstName = firstName.trim();
// console.log(firstName);
// firstName = firstName.toUpperCase();
// console.log(firstName);
// secondName = secondName.toLowerCase();
// console.log(firstName);
// console.log(secondName);

// console.clear();

// //slice function
// let newString = "abcdefghijkl";
// console.log(newString)
// newString = newString.slice(0,7);  //start index, end index
// console.log(newString);

//data types
// let age = 30;
// firstName = "dnsofdson";
// age = age + "";   //trick to change int to string int + blank space
// console.log(typeof age);

// //string to number
// console.log(typeof firstName);
// firstName = +firstName; //add + before the string
// console.log(typeof firstName);

// //******or******
// let num = 34;
// console.log(num);
// num = String(num);
// console.log(typeof num);

// str = "Pin"
// console.log(typeof str);
// str = Number(str);
// console.log(typeof str);

// // String Concatenation
// string1 = "Bro"
// string2 = "Pro"
// fullName = string1 +" "+ string2;
// console.log(fullName);

// //trying to add two numbers
// string1 = "10"
// string2 = "15"
// fullName = +string1 + +string2; //using plus before string to change it to number
// console.log(fullName);

// //template string
// myAge = 23;
// fName = "Pinju";
// // aboutMe = "My name is " + fName + ". My age is " + myAge;

// aboutMe = `My name is ${fName} and my age is ${myAge}`; //This is called template string

// console.log(aboutMe);

// //undefined
// let fName1;
// console.log(fName1); //when we dont assign any value it becomes unddefined
// console.log(typeof fName1);

// console.log(typeof null); //it'll show object

// //BigInt
// let myNumber = 12324;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER); //this is the highest number that can be stored in number. So we use BigInt.
// let myNumber2 = BigInt(123);
// let sameMyNumber2 = 123n;
// console.log(myNumber2);
// console.log(myNumber2 + sameMyNumber2); //we cant mix bigint with other data types

//Comparison Operator
// let num1 = 7;
// let num2 = 7;
// console.log(num1<=num2); //<, >, <=, >= we can use them

//== vs ===
// let num1 = 7;
// let num2 = '7';
// console.log(num1 == num2) //it will check only value not data types
// console.log(num1 === num2); //it'll check data types too

// console.log(num1 != num2); //it checks not equal to

// //if else
// let age = 18;
// if(age/2 == 0){
//         console.log("User allowed to play this game.");
// }
// // else if(age=18){
// //         console.log("User can play after becoming 19.");
// // }
// else{
//         console.log("user is not allowed to party *yoyo*.");
// }

// // falsy value
// let firstName = "6";  //it'll give a false value  null,false will give falsy value

// if(firstName){
//         console.log(firstName);
// }
// else{
//         console.log("first name is empty");
// }

//ternary operators
//problem: we have to store milk for age lower than 5, else coff
// let age = 4;
// let drink;

// if(age>=5){
//         drink = "coffee";
// }
// else{
//         drink = "milk";
// }

// console.log(drink);

// //we dont need to go through so long process, we can use ternary operator or conditional operator
// let age = 4;
// let drink = age >= 5 ? "coffee" : "milk"; //it'll check whether it satisfies first condition or not
// console.log(drink);

// // //and operator
// let firstName = "Katrina";
// let age = 2;

// // if(firstName[0] === "K" && age>18){
// //         console.log("Your name starts with K and you are above 18");
// // }

// //or operator
// if(firstName[0] === "K" || age > 18){
//         console.log("inside if"); // runs even when one condition is true
// }
// else{
//         console.log("inside out"); // will give this output just when both conditions are false
// }

// //nested if else
// // Problem: Guess the number
// let winningNumber = 18;
// let userGuess = + prompt("Guess a number");  //prompt takes input in string type
// // console.log(userGuess, typeof userGuess);

// if(userGuess === winningNumber){
//         console.log("Bingo! You guessed it right.");
// }
// else if(userGuess >= 30){
//         console.log("Your guess is too high.");
// }
// else if(userGuess <=12){
//         console.log("Your guess is too low");
// }
// else {
//         console.log("Your guess is wrong");
// }

/********************************************************************** */

// //switch statement
// //problem: We have to print the name of the day

// let day = 2;

// switch(day){
//         case 0:
//                 console.log("Sunday");
//                 break;
//         case 1:
//                 console.log("Monday");
//                 break;
//         case 2:
//                 console.log("Tuesday");
//                 break;
//         case 3:
//                 console.log("Wednesday");
//                 break;
//         case 4:
//                 console.log("Thursday");
//                 break;
//         case 5:
//                 console.log("Friday");
//                 break;
//         case 6:
//                 console.log("Saturday");
//                 break;
//         default:
//                 console.log("Invalid Day");
//                 break;
// }

/********************************************************************* */

// //While loop

// let i = 0;
// // console.log(i);
// // i++;
// // console.log(i);

// while(i<=10){
//         console.log(i);
//         i++;
// }
// console.log(`The current i is ${i}.`);

// //While loop example
// //problem: sum of n natural numbers
// let i=1; n=3; sum=0;

// while(i<=n){
//         sum= sum+i;
//         i++;
// }
// console.log(sum);

// //for loop
// //print 0 to 9

// for(i=0; i<=9; i++){
//         console.log(i);
// }

// //example:
// //add first n natural number
// let n = 10; sum=0;
// for(i=0; i<=10; i++){
//         sum = sum + i;
// }
// console.log(sum);

/*********************************************************************** */

//break keyword and continue keyword
// for(i=0;i<=10; i++){
//         if(i===4){
//                 break;
//         }
//         console.log(i);

// }

// for(i=0;i<=10; i++){
//         if(i===4){
//                 continue;
//         }
//         console.log(i);

// }

// //do while loop
// let i = 0
// do{
//         console.log(i);
//         i++;
// }
// while(i<=10);

/* ===========================================================*/

//array
// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// fruits.push("babababa");
// console.log(fruits);
// fruits.pop("jsdbjsbdfjsbf");
// console.log(fruits);
// let popedFruit = fruits.pop();
// console.log(fruits);
// fruits = ["bananananana", ...fruits, "appppppp"];
// console.log(fruits);
// console.log(popedFruit);

//unshift
// fruits.unshift("kela", "hahahahah");
// console.log(fruits);  //unshift adds items at the start

// //shift
// fruits.shift();
// console.log(fruits); //shift removes items from the start

//push and pop are faster then shift or unshift

/* ===========================================================*/

// //primitive vs reference type
// //primitive
// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is", num1); //6
// console.log("value of num2 is", num2); //6

// num1++;
// console.log("value of num1 is", num1); //out: 7
// console.log("value of num2 is", num2); //out: 6
////the value of num1 changes but num2 doesnot change

// //reference type
// let array1 = ["item1", "item2"];
// let array2 = array1 ;
// console.log(array1);
// console.log(array2);
// array1.push("item3");
// console.log("after pushing in array1");
// console.log(array1);
// console.log(array2); //item1, item2, item3
// console.log(array1 === array2);

// Primitive type variables are stored in stack, and every variable is assigned different stack memory
// Reference type variables are stored in heap memory and their address is stored in stack. So for array1, one memory is assigned in stack that will store the heap address of array1. So when we write array1 = array2, another stack memory is assigned to array2 but it will store the same address of the array1. So for array2, different stack memory is assigned but not different heap memory. So when we change the array1, and then console log array2, stack memory will refer the heap address of array1. So array 2 will also be changed unlike the primitive variable

/*=======================================================*/

// //ways to clone an array

// let array1 = ['aaa', 'bbb', 'ccc']
// let array2 = array1
// console.log(array1, array2)
// console.log(array1 === array2) // it will show true
// let array3 = ['aaa', 'bbb', 'ccc']
// console.log(array3)
// console.log(array1 === array3) // it shows false

// let array1 = ["a", "b"];
// let array2 = array1.slice(0); //method for cloning an array
// console.log(array2)
// let array2 = [].concat(array1); //method two for cloning an array
// console.log(array1)
// console.log(array2)

// //new way (SPREAD OPERATOR)
// let array2 = [...array1];
// console.log(array1, array2);
// array1.push("c");
// console.log(array1, array2);

// So we can use all these 3 methods to clone an array

/* ===================================================================*/

// //For loop in array
// let fruits = ["apple", "mango", "banana", "grapes"];
// let fruits2 = [];
// for(i=0; i<=fruits.length-1; i++){
//         fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits.length-1)
// console.log(fruits[1])
// for (i=0; i<fruits.length; i++){
//         fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits)
// console.log(fruits2)

// //const for arrays
// const fruits = ["apple", "mango", "grapes", "banana"];
// console.log(fruits)
// fruits.push("banana1");
// console.log(fruits); // the banana1 will be pushed even after being a const
// // As we have learned, arrays are stored in the heap memory and the adress of it is stored in the stack memory. So when we are pushing or popping we are playing with the heap memory and not with the stack memory. So we can do it. But we cant initiate a new array with the same name, since that will change the stack memory.
// fruits = ['sdhf', 'dfbdgf'] // This will give us error since we are making a new array. So if we have to change the items in the array, we do it with all the array methods such as push, pop, slice etc.

// Now the question is whether we should use let or const for assigning an array. Let's take an example. We have assigned an array using let fruits=..., then unknowing we again assigned another array with the same name. Now what will happen is the old array's items will be deleted and the new array will be functional. This might cause very heavy consequences. So its better for us to use const for arrays. As we can do every operation with it.

// We should use const for all the reference type variables

/*==================================================================*/

// //while loop in array
// const fruits = ["apple", "banana", "Kela"];
// const fruits2 = [];
// i = 0;
// while(i<fruits.length){
//         fruits2.push(fruits[i].toUpperCase());
//         i++;
// }
// console.log(fruits2);

// //For of loop
// const fruits = ["apple", "Mango","bananannanananan"];
// const fruits2 = [];
// for(let fruit of fruits){
//         fruits2.push(fruit);
// }
// console.log(fruits2);
// console.log(fruits)
// for(fruit of fruits){
//         console.log(fruit)
// }

// //For in loop
// const fruits = ["apple", "Mango","bananannanananan"];
// for(let index in fruits){
//         console.log(fruits[index]);
// }
// for (index in fruits) {
//         console.log(index)
// }

// For of loops returns the items in the array but For in loop returns the index of the item
// For of loop is the mostly used loop with arrays

/* ================================================================= */

// // //Array Destructuring
// const fruits = ["apple", "Mango","bananannanananan", "coconut"];
// let myFruit = fruits[0];
// let myFruit2 = fruits[1];
// console.log(myFruit, myFruit2) //op. apple mango

// let [myVar1, myVar2] = fruits // this is another way of assigning variables
// console.log(myVar1, myVar2)

// let [myVar1, myVar2, ...myNewArray] = fruits
// console.log(myNewArray) // This will return all the remaining items in the array fruits

// //shortcut
// let [myFruit, myFruit2] = fruits;
// console.log(myFruit, myFruit2); //same op

/*================================================================== */

//Objects
//arrays are good but not sufficient for real world data
//objects store key value pairs
//objects dont have index
// objects are reference type variable

// // const person = {name:"Pinju", age:23};
// const person = {
//         name:"Pinju",
//         age:23,
//         gf:"Rita",
//         hobbies: ["shdbs", "sdihbksf", "shdbsbf"]
// }
// console.log(person);
// // console.log(person.gf);

// // to add another key value pair in the object,
// person.gender = 'male'
// console.log(person);

// // there is a difference between dot and bracket notation person.name vs person['name']
// console.log(person.name)    // pinju
// console.log(person['name']); // pinju
// They return the same output

// person["gender"] = "male";
// console.log(person)
// So that just means that doesnot matter whether we use person.gender = 'male' or person['gender'] = 'male' They return the same

// The Diiference
// Lets take that the object has a key named 'my hobbies', so here if we want to access it using dot notation person.my hobbies -> here there is a space between the words. So here we cant use the dot notation. Here comes the usage of bracket notation. We can use person['my hobbies']

// also for us to have a key with two words, we cant just initiate it with my hobbies : ['sdsfd','dfgdg']. For that also we have to initialize it with 'my hobbies' : ['sdfsdf','sdfsf']

// //difference between dot and bracket notation
// const key = "email";
// const person = {name:"Pinju", hobbies:["guitar", "Bgmi", "sodosjf"]};

// // console.log(person["hobbies"]);
// person[key] = "pinnu@gmail.com";
// console.log(person); // here the output will show email:'sdfsff'

// but

// person['key'] = 'sdfonsf@sdjfns'
// console.log(person); // This will return key: 'sdfsf@sdsf'

//So if we want another variable to be the key, we cant use string

/* ==================================================================== */

// //Object Iteration
// const person = {name:"Pinju", age:23, hobbies:["guitar", "Bgmi", "sodosjf"]};

// //for in loop
// for(let key in person){
// console.log(key);
// console.log(person[key]);
//         console.log(`${key} : ${person[key]}`);
// }
// console.log(typeof person)
// console.log(Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

// //Computed properties
// For example we have
// const key1 = 'name';
// const key2 = 'age';
// const value1 = 'pinju';
// const value2 = '25'
// // now how can we put it in an object
// const obj = {
//         key1 : value1,
//         key2 : value2,
// }
// console.log(obj)   // {key1: 'pinju', key2: '25'}
// // but we want name : pinju, age: 25

// const obj1 = {
//         [key1] : value1,
//         [key2] : value2,
// }
// console.log(obj1) // {name: 'pinju', age: '25'}

// OR

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);

/*============================================================*/

//spread operator
// const array = [..."abcd"];
// console.log(array);

// //Spread Operator in object
// const obj1 = {
//         key1: "value1",
//         key2: "value2"
// }
// const obj2 = {
//         key3: "value3",
//         key4: "value4"
// }
// const newObject = {...obj1, ...obj2}
// const newObject = { ...["item1", "item2"]};
// console.log(newObject);

// //Destucturing for object
// const band = {
//         bandName: "One Direction",
//         famousSong: "Night Changes",
//         year: 2010
// };
// // console.log(band.bandName, band.famousSong)
// let {bandName, famousSong, year} = band; // now these variables will work as normally assigned variables. This is called destructuring
// console.log(year)

// //objects inside array //very useful
// const users = [
//         {userId: 1, firstName: "Pinju", gender: "male"},
//         {userId: 2, firstName: "Rohan", gender: "male"},
//         {userId: 3, firstName: "Kutta", gender: "female"},
// ]
// console.log(users);
// for(let user of users){
//         console.log(user.firstName);
// }

// //nested destructuring
// const users = [
//         {userId: 1, firstName: "Pinju", gender: "male"},
//         {userId: 2, firstName: "Rohan", gender: "male"},
//         {userId: 3, firstName: "Kutta", gender: "female"},
// ]

// const [{firstName}, user2, {gender}] = users;
// console.log(firstName);
// console.log(gender);

/*========================================================================*/

// //Functions
// function singHappyBirthday() {
//   console.log("Happy Birthay to you");
// }
// function twoPlusFour(a, b) {
//   return a + b;
// }
// // console.log(twoPlusFour());
// const returnedValue = twoPlusFour(7, 4);
// console.log(returnedValue);

// function sumThreeNumber(a,b,c){
//         return a+b+c;
// }
// const sum = sumThreeNumber(2,7,20);
// console.log(sum)

// //odd or even
// function isEven(a){
//         // if(a % 2 == 0){
//         //         return true;
//         // }
//         // return false;

//         return a % 2 === 0;
// }
// console.log(isEven(7))

// //problem:  input: string, output: firstCharacter
// function firstCharacter(string){
//         return string[0];
// }
// console.log(firstCharacter("Pinju"));

// //problem: input: array, target(number), if found output: index of target

// function nav(array, target){
//         for(i = 0;i<array.length;i++){
//                 if(array[i] === target){
//                         return i;
//                 }
//         }
//         return "not found";
// }
// const myArray = [1,2,3,4,5,6,7];
// const ans = nav(myArray,9);
// console.log(ans);

// //function expression
// function singHappyBirthday(){
//         console.log("Happy Birthay to you");
// }

// const singHappyBirthday = function(){
//         console.log("Happy Birthay to you");
// }
// singHappyBirthday();

// //arrow functions

// const singHappyBirthday = function(){
//         console.log("Happy Birthay to you");
// }

// const singHappyBirthday = () => {
//         console.log("Happy Birthay to you");
// }
// singHappyBirthday();

// const isEven = (a) => {
//         return a % 2 === 0;
// }
// console.log(isEven(3));

// const isEven = a => {   //we can remove parenthesis also
//         return a % 2 === 0;
// }
// console.log(isEven(3));

// const isEven = (a) => a % 2 === 0; //we can remove return
// console.log(isEven(3));
// console.log(isEven(8));

// const isEven = (a) => {
//   if (a % 2 == 0) {
//     return true;
//   }
//   return false;
// };
// console.log(isEven(8));

/************************************************************************ */

// Hoisting

// hello();
// function hello(){
//         console.log("HEllo")
// }  //output: HEllo

// hello()
// const hello = () => {
//         console.log("Hello")
// }  //output: Error    Function expression is not allowwed for function calling before funciton declaration

// When we declare a function using function declaration, but it will not work with fuunctiion exxpression and arrow function

// likewise

// //console.log(hello);   // uncaught reference error. But if we declare the same variable using var it will be printed. So, when we daclare a variable using var we can access it even before declaring.
// const hello = "hello World";
// console.log(hello);

/************************************************************************* */

// //Function inside functions

// const app = () =>{
//         const myFunc = () =>{
//                 console.log("Hello from myFunc");
//         }

//         const addFunc = (num1, num2) =>{
//                 return num1 + num2;
//         }

//         const mul = (num1, num2) =>num1 * num2;
//         console.log("inside app");

//         myFunc();
//         console.log(addFunc(1,2));
//         console.log(mul(2,3))
// }
// app();
// // we can make multiple functions inside a single function

/************************************************************************** */

// //Lexical scope
// function myApp() {
//   const myVar = "value1";
//   function myFunc() {
//     const myVar = "Value5";
//     //                 //when commented out, it'll check for other myVar variables inside its lexical environment (outside of the function. Here, outside of myFunc() that is in myApp)
//     console.log("inside myFunc", myVar);
//   }
//   const myFunc2 = function () {};
//   const myFunc3 = () => {};
//   console.log(myVar);
//   myFunc();
// }
// myApp();

/*************************************************************************** */

// // Block scope vs function scope
// {
//   let firstName = "Ritamoni";
//   console.log(firstName);
// }

// console.log(firstName); // error

// {    } This is a block in js. If we declare a variable inside the block using let and const we cant access it outside the block.

// // we can't access varibles outside a block.
// // Let and const are block scope
// // Var is function scope

// {
//   var firstName = "Poijusd";
// }
// console.log(firstName); // poiijussnd

// But when we declare variable with var, we can access it outside its block

// function myApp() {
//   if (true) {
//     var firstName = "Priyam";
//     console.log(firstName);
//   }
//   console.log(firstName); // print
// }
// console.log(firstName); // error
// myApp();
// //  var can be used anywhere in the function but not outside the function

/*************************************************************************** */

// // default parameters
// //problem: how to make any variable a default
// lets take an example so we define a function add(a,b) {...} but if the user provided only one number. In that scene, the output will be NaN. So to avoid that, we can say if user doesnt provide two numbers take the second number to be default as 0. thats written as add(a,b=0) or we can use if(typeof b === 'undefined' { b = 0})

// function addTwoNum(a,b=0){
//         // if(typeof b === "undefined"){
//         //         b = 1;
//         // }                 //Old method

//         // new method: func(para1, para2=default)
//         return a+b;
// }
// const ans = addTwoNum(4);
// console.log(ans);

/********************************************************************* */

// // Rest Parameter
// Lets say we have a func with 3 parameters. But the user gives 7 parameters. So now if we want to put the rest of the parameters in the third argument, we can use rest parameter. (...c).

// function myFunc(a, b, ...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is ${c}`);
// }
// myFunc(2, 3, 4, 6, 5, 8);

// // function to add all the numbers given by user
// const addAll = (...numbers) => {
//   total = 0;
//   for (let number of numbers) {
//     total = total + number;
//   }
//   return total;
// };
// let rita = addAll(5, 8, 9, 2, 3, 1);
// console.log(rita);  //28

/********************************************************************** */

// // Parameter destructuring

// let person = {
//         firstName: "Pinju",
//         gender: "Male"
// }

// // function getDetails(object){
// //         console.log(object.firstName);
// //         console.log(object.gender);
// // }

// // or we can do

// function getDetails({firstName, gender}){
//         console.log(firstName);
//         console.log(gender);
// }

// // Thats how we do parameter destructuring

// getDetails(person)

/******************************************************************** */

// // Callback functions
// function myfunc(callback) {
//   console.log("asbdfb");
//   callback("pin");
// }

// function myfunc2(name) {
//   console.log("inside my func 2");
//   console.log(`your name is ${name}`);
// }

// myfunc(myfunc2);
// // we call another function inside this function

// const myfunc = () => console.log("myfunc");

// const myfunc2 = (callback) => {
//   console.log("myfunc2");
//   callback();
// };

// myfunc2(myfunc);

/********************************************************************** */

// // Function returning a function
// // We have seen functions returning value or printing something. But can a function return a function? Yes it can

// function myFunc(){
//         function hello(){
//                 console.log("HEll0 World");
//         }
//         return hello;    // funtion is returning another function
// }

// const ans = myFunc();
// ans();    // since myFunc is returning a function and is stored in ans. So ans also becomes a function for obvious reasons

/********************************************************************* */

// Important array methods  forEach, map, filter, reduce

// const numbers = [3, 4, 6, 5, 2];
// function multiplyBy2(number, index) {
//   console.log("index is ", index);
//   console.log(`${number}*2 = ${number * 2}`);
// }
// // multiplyBy2(numbers[0], 0); //index is 0, 3*2 = 6
// // but if we want to do it for all the index, we gonna use for loop

// // for (let i = 0; i < numbers.length; i++) {
// //   multiplyBy2(numbers[i], i);
// // }

// // we can use forEach loop also
// numbers.forEach(multiplyBy2); // same output
// forEach iterates all the items in the array. And it automatically passes the item as the first parameter and the index as the second parameter

// The whole codes can be also written as

// const numbers = [3, 4, 6, 5, 2];
// numbers.forEach(function (number, index) {
//   console.log(`number : ${number} and index: ${index}`);
// });

// Now if we have to multiply each number with 2 and print
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.forEach(function (number) {
//   console.log(`${number} * 2 = ${number * 2}`);
// });

// forEach for objects
// const users = [
//   { firstName: "Pinju", age: 25, gender: "male" },
//   { firstName: "Ananya", age: 23, gender: "female" },
//   { firstName: "Rid", age: 26, gender: "male" },
// ];

// // users.forEach(function (user) {
// //   console.log(user.firstName);
// // });
// // same thing can be done using for of loop. forEach is older than for of. Thats the reason why we see more of forEach than for of

// for (user of users) {
//   console.log(user.firstName);
// }

/********************************************************************* */
// Important  PARAMETER VS ARGUMENT
// while defining functions, the elements passing inside the parameter () are called parameter.
// While calling the function, the elements inside the parameter are called arguments.
/********************************************************************* */

// // Map method  : similar to forEach. As forEach was taking callback function as a parameter. This map method will also take callback as parameter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// // map function always make new array

// const square = (number) => {
//   return number * number;
// };

// const squareArray = numbers.map(square);
// console.log(squareArray); // {1,4,9,16 ...} Map made new array of squares

// same thing

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const squareArray = numbers.map((number) => {
//   return number + 2;
// });
// console.log(squareArray);

// we can also pass index as parameter.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const squareArray = numbers.map((number, index) => {
//   return `index: ${index}, number: ${number}`;
// });
// console.log(squareArray);

// // Real Example
// const users = [
//   { firstName: "Pinju", age: 25, gender: "male" },
//   { firstName: "Ananya", age: 23, gender: "female" },
//   { firstName: "Rid", age: 26, gender: "male" },
// ];

// const userNames = users.map((user) => {
//   return user.firstName;
// });
// console.log(userNames); // ['Pin','ana','rid']

/****************************************************************** */

// // Filter Method  The callback that filter accepts has to be of boolean value. that is true or false.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const isEven = (number) => {
//   return number % 2 == 0;
// };

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// const isOdd = (number) => {
//   return number % 2 !== 0;
// };
// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

// or

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = numbers.filter((number) => {
//   return number % 2 == 0;
// });
// console.log(evenNumbers);

/******************************************************************** */

// // reduce method
// const numbers = [1, 2, 3, 4, 5, 6]; // aim is to sum all the numbers

// const sum = numbers.reduce((accumulator, currentValue) => {
//   // these are the two parameters that reduce takes
//   return accumulator + currentValue;
// });
// console.log(sum); // 21

// Now how it happening? for the first iteration, accumulator = 1 (1st index), currentValue = 2 (2nd index), return = 3 (accumulator + currentValue). Now for the second iteration, the accumulator will store the previous return. that is 3, currentValue = 3, return = 6, and so on...

// Now some real example
// to find the total price of all the items in the cart

// const userCart = [
//   { productId: 1, productName: "phone", price: 12000 },
//   { productId: 2, productName: "washing machine", price: 18000 },
//   { productId: 3, productName: "fridge", price: 14000 },
// ];

// // But we are facing a problem here. We were working with arrays before. But here we are encountering an array of objects. so we cant just let the accumulator (first parameter) be the first object cause if it becomes the first object, then we have to get the price of it using acc.price but as we know from the second iteration, acc stores the return of the previous iteration. So if the acc becomes an object, it won't be able to store the return of the previous iteration.
// // But there is a solution. We can pass a default value for the accumulator(first parameter). So lets say we are passing 0 as the default parameter of acc. Then it becomes a number. So now it can store numbers. syntax: numbers.reduce((acc, curVal)=> {},0)

// const totalAmount = userCart.reduce((totalPrice, curProd) => {
//   return totalPrice + curProd.price;
// }, 0);
// console.log(`Total price of the cart: ${totalAmount}`);

/********************************************************************* */

// // sort method
// sort method in javascript mutates the original array. other array methods gives us new arrays. But in case of sort, it modifies the original array

// const numbers = [1, 4, 3, 7, 2, 6, 8, 4];
// numbers.sort();
// console.log(numbers); //(8) [1, 2, 3, 4, 4, 6, 7, 8] This means this has changed the numbers permanently

// another example
// const numbers = [4, 7, 400, 29, 5000, 699];
// numbers.sort();
// console.log(numbers); // (6) [29, 4, 400, 5000, 699, 7] But why?
// This is because javascript  sorts as strings by default. so when we are sorting it, its sorting it like strings. Thats why its been sorted with the first digit.

// javascript use ASCII  value to sort strings they are like:
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// ...... '9' : 57

// to sort numbers in ascending order, we use  following code

// const numbers = [1, 4, 8, 45, 33, 4885, 4665, 344];
// // numbers.sort((a, b) => {
// //   return a - b;
// // });
// // or
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// Now how is it working: first it will take 2 parameters a and b, a will be 1st index and b will be 2nd index. So, then, it will do a - b. lets say a is 1 and b is 4. So after a-b, its negative. then it does pushes a to the array. and so on

// // This is the way to sort in ascending order. If we have to sort in descending order then,
// const numbers = [1, 4, 8, 45, 33, 4885, 4665, 344];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// // realistic example: Sorting price: high to low -->
// const products = [
//   { productId: 1, name: "flowers", price: 120 },
//   { productId: 2, name: "flowers1", price: 20 },
//   { productId: 3, name: "flowers2", price: 200 },
//   { productId: 4, name: "flowers3", price: 630 },
//   { productId: 5, name: "flowers4", price: 1100 },
//   { productId: 6, name: "flowers5", price: 50 },
// ];
// products.sort((a, b) => {
//   return b.price - a.price;
// });
// console.log(products); //{productId: 5, name: 'flowers4', price: 1100}{productId: 4, name: 'flowers3', price: 630} {productId: 3, name: 'flowers2', price: 200}{productId: 1, name: 'flowers', price: 120}{productId: 6, name: 'flowers5', price: 50}{productId: 2, name: 'flowers1', price: 20}

// // But there is a problem. As we have seen that sort method mutates the array and we dont want that. So we will applyy sort method on a cloned array.
// const products = [
//   { productId: 1, name: "flowers", price: 120 },
//   { productId: 2, name: "flowers1", price: 20 },
//   { productId: 3, name: "flowers2", price: 200 },
//   { productId: 4, name: "flowers3", price: 630 },
//   { productId: 5, name: "flowers4", price: 1100 },
//   { productId: 6, name: "flowers5", price: 50 },
// ];
// // low to high
// const lowToHigh = products.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(lowToHigh);
// console.log(products);

/********************************************************************* */

// // find method
// // it also takes callback as argument

// const myArray = ["cat", "dog", "deer", "tiger"];

// const isLength = (str) => {
//   return str.length == 3;
// };

// console.log(myArray.find(isLength));  // 'cat' -> find method finds the first element with length 3. It will look for the str with length3 and when it encounters one it will return it.

// const myArray = ["human", "cat", "dog", "billi", "mango"];
// console.log(myArray.find((str) => str.length === 3)); // 'cat'

// // Real Example
// const users = [
//   { userId: 1, name: "Pin", age: 25 },
//   { userId: 2, name: "P", age: 26 },
//   { userId: 3, name: "Pi", age: 27 },
//   { userId: 4, name: "Pinj", age: 28 },
//   { userId: 5, name: "Pinju", age: 29 },
// ];

// console.log(users.find((user) => user.name.length === 4));

/*********************************************************************** */

// // Every method
// // We need to check if every element in the array are even

// const numbers = [2, 18, 4, 6, 12, 10, 8];

// // the callback of every should return boolean
// // and the every method also returns boolean.

// console.log(numbers.every((number) => number % 2 == 0)); // true since all elements are even

// const numbers = [2, 3, 4, 5, 6, 7];
// console.log(numbers.every((number) => number % 2 == 0)); // false since not all are even

// // Real example

// const products = [
//   { productId: 1, name: "phone", price: 20000 },
//   { productId: 2, name: "microwave", price: 12000 },
//   { productId: 3, name: "dishwasher", price: 15000 },
//   { productId: 4, name: "charger", price: 2000 },
//   { productId: 5, name: "tv", price: 32000 },
// ];
// // to find if all the items are below 20000

// console.log(products.every((product) => product.price <= 20000)); // false

/************************************************************** */

// // some method
// // it checks if even one item is there that satisfies the condition

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers.some((number) => number % 2 == 0)); // returns true cause there are even numbers in the array

// // real example

// const products = [
//   { productId: 1, name: "phone", price: 20000 },
//   { productId: 2, name: "microwave", price: 12000 },
//   { productId: 3, name: "dishwasher", price: 15000 },
//   { productId: 4, name: "charger", price: 2000 },
//   { productId: 5, name: "tv", price: 32000 },
// ];
// // check if there is any product with price tag more than 20000

// console.log(products.some((product) => product.price > 20000)); //true
// console.log(products.some((product) => product.price > 32000)); //false
// console.log(products.some((product) => product.price >= 32000)); //true

/*********************************************************************** */

// // fill method
// // Make an array with ten -1s.
// const myArray = new Array(10).fill(-1);
// console.log(myArray); // [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

// another use: lets say we have an array
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// // and we want to change 3,4,5 to 0,0,0
// console.log(array.fill(0, 3, 6)); // fill(value, start index, end index)
// // output: [1, 2, 3, 0, 0, 0, 7, 8]

/*********************************************************************** */

// // splice method
// // used for deleting any item and inserting in that place
// // splice(start, deleteCount, insert):)

// const myArray1 = ["cat", "billi", "dog", "kutta"];
// console.log(myArray1.splice(1, 1)); //['billi']
// console.log(myArray1); // ['cat', 'dog', 'kutta']

// console.log(myArray1); //['cat', 'billi', 'dog', 'kutta']
// myArray1.splice(1, 1, "hi");
// console.log(myArray1); //['cat', 'hi', 'dog', 'kutta']

// if we want to insert something in the array at 3rd place

// const deletedItem = myArray1.splice(2, 0, "new item"); // this also returns the deleted item
// console.log(myArray1); // ['cat', 'billi', 'new item', 'dog', 'kutta']

// console.log(deletedItem); //[] ccause no item was deleted

/************************************************************************ */

// // Iterables
// // Those datatypes which can be used in for of loop, which can be iterated.
// // eg. strings, arrays

// const name = "BagmitaDevi";
// // can we use for of loop
// for (char of name) console.log(char); // bagmmitadevi
// // since it can be iterated, it is iterable. String is iterable

// Objects
// const user = { id: 1, name: "Bagmita", age: 22 };
// // can we iterate? Let's see
// for (item of user) console.log(item.name); // gives nothing
// // That means objects are not iterables

/************************************************************************* */

// // Array like objects
// // Those datatypes that has length property and which can be accessed through index. eg. string
// const name = "BagmitaDevi";
// console.log(name.length); //11
// console.log(name[3]); //m

/************************************************************************ */

// Sets : They are iterable, They also store data, But we cant access it through index. Sets have their own methods. The orders of the items are not guaranteed. Only unique items are accepted in sets

// const numbers = new Set([1, 2, 3, 4, 5]);
// console.log(numbers); // {1,2,3,4,5}

// // now let see what happens when we put duplicate items
// const numbers1 = new Set([1, 2, 3, 4, 5, 6, 7, 3]);
// console.log(numbers1); // {1, 2, 3, 4, 5, 6, 7} The duplicate item is not stored

// Now lets try to access it through index
// const numbers = new Set([1, 2, 3, 4, 5, 3, 5, 2, 3]);
// console.log(numbers); // {1, 2, 3, 4, 5}
// console.log(numbers[3]); // undefined So we cant access it through index

// const numbers = new Set([1, 2, 3, 4, 5, 3, 5, 2, 3]);
// // now we can add items here
// numbers.add(11);
// console.log(numbers); // {1, 2, 3, 4, 5, 11}
// const array = ["pig", "cat"];
// // numbers.add(array);
// numbers.add(...array);
// console.log(numbers);
// // we can checkk if a particular item is available
// console.log(numbers.has(4)); // true
// numbers.has(1) ? console.log("yes") : console.log("no"); // yes

// // Now lets see if it is iterable
// for (number of numbers) console.log(number);  // it iterates

// // Real examples
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 4, 3, 6, 2, 5, 4];
// const uniqueArray = new Set(array);
// console.log(uniqueArray); // unique items prints
// console.log(array); // the original array is not changed

// // To find the length, we can do
// let legth = 0;
// for (item of uniqueArray) length++;
// console.log(length); // 8

/********************************************************************** */

// // Maps
// // Maps are iterables. They store data in order. They store key value pair and they are like objects. Duplicate keys are not allowed unlike objects.

// // Difference between Maps and Objects
// // Objects can have only string or symbol as keys but Maps can store anything like arrays, number, string

// const person = new Map();
// console.log(person); // Map(0)
// person.set("name", "Khusbu");
// console.log(person); // Map(1) {'name' => 'Khusbu'}

// // as we know it accepts any type of key
// person.set([1, 2, 3, 4], "Hehe");
// console.log(person); // Map(2) {'name' => 'Khusbu', Array(4) => 'Hehe'}

// // Now lets check for the indexing
// console.log(person[1]); // undefined   Then how to index
// console.log(person["name"]); // undefined Then?
// // we use get method to access
// console.log(person.get("name")); // khusbu

// console.log(person.keys()); // MapIterator {'name', Array(4)} // We can print the keys using loop

// for (key of person.keys()) console.log(key, typeof key); // (4) [1, 2, 3, 4] 'object'
// It is returning arrays. So we can apply array methods.

// for (key of person) console.log(Array.isArray(key)); // true

// // Now lets destructure is

// for ([key, value] of person) console.log(`${key} : ${value}`);  // showing

// // Real example

// const person1 = {
//   id: 1,
//   name: "Khusbu",
// };
// An object is given. We want to store more information in it. But somewhere else and not in person1.

// const userInfo = new Map();
// userInfo.set(person1, { age: 12, gender: "female" });

// console.log(userInfo); // map
// console.log(person1.id); // 1
// console.log(person1.age); //undefined
// console.log(userInfo.get(person1).gender); //male
// // so we have to use get method to get info

// const person1 = {
//   id: 1,
//   name: "Khusbu",
// };
// const person2 = {
//   id: 2,
//   name: "Bajaj",
// };
// const extraInfo = new Map();
// extraInfo.set(person1, { age: 20, gender: "female" });
// extraInfo.set(person2, { age: 21, gender: "female" });

// console.log(extraInfo.get(person1).age);        // 20
// console.log(extraInfo.get(person2).age);        // 21

/********************************************************************** */

// // Clone using object.assign

// const girl = {
//   name: "Bagmita",
//   age: 22,
// };

// const girl1 = girl;
// console.log(girl, girl1); // Both are same

// If we try putting new key value pair
// girl1.sname = "devi";
// console.log(girl, girl1); // Both are same

// Here the object is saved in heap memory and both girl and girl1 has the address to it So upon changing anything in one, the other is getting changed

// So here we can use spread operator
// const girl3 = { ...girl };
// // instead we also can assign values to the object.
// const girl3 = Object.assign({}, girl); // {key value pair that we want to add}
// console.log(girl3);
// girl.sname = "devi";

// console.log(girl); // {name: 'Bagmita', age: 22, sname: 'devi'}
// console.log(girl3); // {name: 'Bagmita', age: 22}

/********************************************************************** */

// // optional chaining
// // Lets say we have an object
// const person = {
//   id: 3,
//   name: "Rita",
// };
// console.log(person.address); //undefined

// // Sometimes we might encounter such problem when we want to work with something that is not yet defined. But this way we have to face problem.
// // In react we work this way that something will be defined later but we dont want it to throw error

// // We first check if that property exists, if not the code is not executed
// console.log(person?.name);
// console.log(person?.address);

/********************************************************************** */

// // methods
// // functions inside object

// const person = {
//   name: "Bagmita",
//   age: 21,
//   about: function () {
//     // console.log(`Person name is ${person.name} and age is ${person.age}`);
//     // We can also write ${this.name} and ${this.age}
//     // This key word refers to the object we are inside or we are working with
//     // console.log(`This person's name is ${this.name} and age is ${this.age}`);
//     // We can just print this and see what it returns
//     console.log(this); // {name: 'Bagmita', age: 21, about: ƒ}
//     // So 'this' keyword sees who calls it. Here, the about fuction was called by person. So 'this' keyword works as person object
//   },
// };

// person.about();

// // Real example
// function personInfo() {
//   console.log(`The name of this user is ${this.name} and age is ${this.age}`);
// }

// const person1 = {
//   name: "Bagmita",
//   age: 21,
//   about: personInfo,
// };

// const person2 = {
//   name: "Khusbu",
//   age: 21,
//   about: personInfo,
// };

// const person3 = {
//   name: "Khusboo",
//   age: 21,
//   about: personInfo,
// };

// const person4 = {
//   name: "Rita",
//   age: 21,
//   about: personInfo,
// };

// const person5 = {
//   name: "Ananya",
//   age: 21,
//   about: personInfo,
// };

// person3.about();

/********************************************************************** */

// // What if we just console log this
// console.log(this);    // returns window object

// function print() {
//   console.log(this);
// }
// const person1 = {
//   name: "Pinju",
//   age: 32,
//   detail: print,
// };

// person1.detail(); // prints whole object person1

/********************************************************************** */

// // Call method, apply method and bind method
// function hi() {
//   console.log("Hello guys");
// }

// hi(); // Hello guys
// hi.call(); // Hello guys // so basically call method calls the function

// const user1 = {
//   name: "Bagmita",
//   age: 21,
//   about: function () {
//     console.log(`This user is ${this.name} and age is ${this.age}`);
//   },
// };

// const user2 = {
//   name: "Devi",
//   age: 23,
// };

// user1.about(); // This user is Bagmita and age is 21
// user2.about(); // This user is Bagmita and age is 21
// It gives us the same output even when there is no about function in user2
// To use the same about function in the user2, we have to use call method.

// user1.about.call(user2); // This user is Devi and age is 23 // So first we are calling the user1's about function and passing user2 as argument

// user1.about.call();  // This user is  and age is undefined

// when we use call method we have to pass argument
// we also can pass parameters in the function. And also can keep the function outside the object

// function about(hobby, favMusician) {
//   console.log(
//     `The user is ${this.name} with age being ${this.age} likes ${hobby} as hobby and loves listening to ${favMusician}`
//   );
// }

// const user1 = {
//   name: "Bagmita",
//   age: 21,
// };

// const user2 = {
//   name: "Devi",
//   age: 23,
// };

// about.call(user1, "snoring", "Curly hair"); // The user is Bagmita with age being 21 likes snoring as hobby and loves listening to Curly hair
// // So if we dont declare something inside the object we definitely can pass it as argument

// about.apply(user1, ["snoring", "Curly Hair"]); //The user is Bagmita with age being 21 likes snoring as hobby and loves listening to Curly Hair
// // For using apply method we have to pass the arguments in an array

// const func = about.bind(user1, "snoring", "curly hair"); // this bind method returns a function and we are storing it in the func variable
// func(); // The user is Bagmita with age being 21 likes snoring as hobby and loves listening to curly hair

// // Let's discuss why we use bind
// const user1 = {
//   name: "Khubsu",
//   age: 21,
//   about: function () {
//     console.log(this.name);
//   },
// };

// // user1.about(); // Khusbu
// // what if we put it in a variable
// // const func = user1.about(); //Khusbu
// // func(); // udefined. // So what is happening is the about function is just being saved inside func. And this keyword has nothing to do in func. So to use the user1's data in this keyword, we use the bind method.

// const func = user1.about.bind(user1);
// func(); // Khusbu

/********************************************************************** */

// // Arrow function behaviours
// const user1 = {
//   name: "Khusboo",
//   age: 22,
//   about: () => {
//     console.log(this);
//   },
// };

// user1.about(); // window {}
// // so the this keyword in an arrow function behaves differently then the normal function. Here the this function in the arrow function doesnot point to the user1, it points to one step above. So here its pointing to the window.

/********************************************************************** */

// // we can also write
// const user1 = {
//   name: "Khusboo",
//   age: 22,
//   about() {
//     console.log(this.name, this.age);
//   },
// };
// user1.about(); // Khusboo 22

/********************************************************************** */

// // // Object Oriented JS // // //

// const user1 = {
//   firstName: "Khusboo",
//   lastName: "Thengal",
//   age: 22,
//   email: "khusboo05@gmail.com",
//   address: "Khumtai MF",
//   gender: "female",
//   about() {
//     console.log(
//       `This user is ${this.firstName} ${this.lastName} of age ${this.age} years belongs to ${this.address}. You can reach her at ${this.email}`
//     );
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };
// user.about();

// // Now if we want to make hundreds of users we cant do that manually. So we will make a function for that. That function will:- 1.create an object 2.add key value pair 3. return the object

// const userMethods = {
//   about: function () {
//     console.log(
//       `This user is ${this.firstName} ${this.lastName} of age ${this.age} years belongs to ${this.address}. You can reach her at ${this.email}`
//     );
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// function createUser(firstName, lastName, age, email, address, gender) {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.age = age;
//   user.email = email;
//   user.address = address;
//   user.gender = gender;
//   // user.about = function () {
//   //   console.log(
//   //     `This user is ${this.firstName} ${this.lastName} of age ${this.age} years belongs to ${this.address}. You can reach her at ${this.email}`
//   //   );
//   // }

//   user.about = userMethods.about;
//   // user.is18 = function () {
//   //   return this.age >= 18;
//   // },
//   user.is18 = userMethods.is18;
//   return user;
// }

// const user1 = createUser(
//   "Bagmita",
//   "Devi",
//   "22",
//   "bagmita@123.com",
//   "Jorhat",
//   "female"
// );
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18); // true

// const user2 = createUser(
//   "Khusboo",
//   "Thengal",
//   "24",
//   "khusboo@gmmsl.com",
//   "Golaghat",
//   "female"
// );
// console.log(user2.firstName); // Khusboo

// // But there is a problem. When we are creating a new user, we are defining the about and is18 methods. so it is taking up so much space. So we will declare the methods separately and call the reference of the methods inside the createUser. that way we will not take more space

/********************************************************************** */

// // Chaining and __proto__ or [[prototype]]

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = Object.create(obj1);
// console.log(obj2); //{} empty object
// obj2.key3 = "value3";
// console.log(obj2); // {key3: 'value3'}
// console.log(obj2.key1); //value1 // But there is no key1 inside obj2. This is because we have passed obj1 as argument in create(). JS first will look for the key1 inside obj2. If not found it will look for it in the argument object

// // // Now the question is how is this happening? So if we print obj2,
// console.log(obj2); // we can see [[prototype]] : object inside obj2. If we see inside [[prototype]] we can see key1: "value1" key2: "value2" So this prototype refers to the obj1. We can print it
// console.log(obj2.__proto__); // key1:value1... // [[prototype]] and  __proto are same
// console.log(obj1.__proto__); // {constructor:f,...}... // IDK what this is

// // // So when we passed obj1 as argument in create(), we are simply keeping the argument inside the __proto__ or [[prototype]]
// // // This is called Chaining

/********************************************************************** */

// // Lets assume that we want a new method inside one user.

// const userMethods = {
//   about: function () {
//     console.log(
//       `This user is ${this.firstName} ${this.lastName} of age ${this.age} years belongs to ${this.address}. You can reach her at ${this.email}`
//     );
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// function createUser(firstName, lastName, age, email, address, gender) {
//   // const user = {};
//   const user = Object.create(userMethods); // What this will do is, whenever we want about and is18, first it will look for the functions inside user, if not found it will look for it in the __proto__ that is userMethods
//   //  THis line is doing two things. It is giving us an empty object as well as a __proto__
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.age = age;
//   user.email = email;
//   user.address = address;
//   user.gender = gender;
//   // user.about = userMethods.about;
//   // user.is18 = userMethods.is18;
//   return user;
// }

// const user1 = createUser(
//   "Bagmita",
//   "Devi",
//   "22",
//   "bagmita@123.com",
//   "Jorhat",
//   "female"
// );
// // console.log(user1);
// // const is18 = user1.is18();
// // console.log(is18); // true

// const user2 = createUser(
//   "Khusboo",
//   "Thengal",
//   "24",
//   "khusboo@gmmsl.com",
//   "Golaghat",
//   "female"
// );
// // console.log(user2.firstName); // Khusboo
// // // Now as we have put userMethods in the __proto__ lets try to print the user1.about
// console.log(user1.about()); // printing

/********************************************************************** */

// // Prototype

// // In javascript, function keyword is both a function as well as an object.

// function hello() {
//   console.log("Hi bitcches");
// }
// // Javascript functions ===> function + object
// // In objects, we can get the name of the object by obj.name. So let's try that with hello()
// console.log(hello.name); // hello

// // we can add our own property too
// hello.myOwnProperty = "Yo brother"; // Key value pair
// console.log(hello.myOwnProperty); // Yo brother

// name property gives us function name
// function also provide call, apply, bind methods

// function gives us a free object {} and that is prototype

// console.log(hello.prototype); // free space {} for us to use
// Only functions provide prototype property

// // // As we know prototype is a free object that comes with every function, we can add anything.
// hello.prototype.key3 = "value3";
// console.log(hello.prototype); // {key3: 'value3', constructor: ƒ}
// hello.prototype.sing = function () {
//   return "happy birthday to you";
// };

// console.log(hello.prototype); // {key3: 'value3', sing: ƒ, constructor: ƒ}

// console.log(hello.prototype.sing());

/********************************************************************** */

// As we know that there is no connection between __proto__ and prototype. But we can create our own connection

// const userMethods = {
//   about: function () {
//     console.log(
//       `This user is ${this.firstName} ${this.lastName} of age ${this.age} years belongs to ${this.address}. You can reach her at ${this.email}`
//     );
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// function createUser(firstName, lastName, age, email, address, gender) {
//   const user = Object.create(createUser.prototype);
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.age = age;
//   user.email = email;
//   user.address = address;
//   user.gender = gender;
//   return user;
// }

// // // If every function provide us an empty object then createUser also will provide prototype
// // console.log(createUser.prototype); // {}
// // // If that's the case, instead of creating a new object userMethods, we can work with createUser.prototype

// createUser.prototype.about = function () {
//   return `This user is ${this.firstName} ${this.lastName} of age ${this.age} years belongs to ${this.address}. You can reach her at ${this.email}`;
// };

// createUser.prototype.is18 = function () {
//   return this.age >= 18;
// };

// const user1 = createUser(
//   "Bagmita",
//   "Devi",
//   "22",
//   "bagmita@123.com",
//   "Jorhat",
//   "female"
// );
// const user2 = createUser(
//   "Khusboo",
//   "Thengal",
//   "24",
//   "khusboo@gmmsl.com",
//   "Golaghat",
//   "female"
// );
// console.log(user1.about()); // prints

/********************************************************************** */

// // New Keyword

// function createUser(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }

// createUser.prototype.about = function () {
//   console.log(this.firstName, this.age);
// };

// const user1 = new createUser("pinju", 12);

// // // this new keyword is doing 3 things. creating an empty object, return the empty object this.

// console.log(user1);

// // We gonna copy the previous code

// // // this is known as constructor function. This type of functions that needs to be use new keyword has its function name starting with capital letter
// function CreateUser(firstName, lastName, age, email, address, gender) {
//   // const user = Object.create(createUser.prototype); // instead of this line we will use new while defining
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.email = email;
//   this.address = address;
//   this.gender = gender;
//   // return user; // we dont need this cause new retturns itself
// }

// CreateUser.prototype.about = function () {
//   return `This user is ${this.firstName} ${this.lastName} of age ${this.age} years belongs to ${this.address}. You can reach her at ${this.email}`;
// };

// CreateUser.prototype.is18 = function () {
//   return this.age >= 18;
// };

// const user1 = new CreateUser(
//   "Bagmita",
//   "Devi",
//   "22",
//   "bagmita@123.com",
//   "Jorhat",
//   "female"
// );
// const user2 = new CreateUser(
//   "Khusboo",
//   "Thengal",
//   "24",
//   "khusboo@gmmsl.com",
//   "Golaghat",
//   "female"
// );
// console.log(user1.about()); // prints
// console.log(user2.about()); // prints

// for (key in user1) {
//   console.log(key);
// } // all the keys inside user1 and in the prototype

/********************************************************************** */

// let numbers = [1, 2, 3];
// console.log(numbers);
// console.log(numbers.__proto__); // returns a list of methods. But we know that only functions has __proto__.
// This is because in js, when we declare an array, it behaves like this
// let numbers = new array(1,2,3) // and we know that new keyword returns a prototype

/********************************************************************** */

// Writing constructors and then creating new users with new keyyyword is very tidious. So we will use class keyword. Classes in javascript are fake unlike other programing languages

// class CreateUser {
//   constructor(firstName, lastName, age, email, address, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.address = address;
//     this.gender = gender;
//   }

//   about() {
//     return `This user is ${this.firstName} ${this.lastName} of age ${this.age} years belongs to ${this.address}. You can reach her at ${this.email}`;
//   }
//   is18() {
//     return this.age >= 18;
//   }
// }

// const user1 = new CreateUser(
//   "Bagmita",
//   "Devi",
//   "22",
//   "bagmita@123.com",
//   "Jorhat",
//   "female"
// );
// // console.log(user1.about());

// // // we can check what's inside prototype of user1
// console.log(Object.getPrototypeOf(user1)); // about and is18 is present

/********************************************************************** */

// // // // Inheritance // // //

// // // Animal class

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `this ${this.name} is eating grass`;
//   }
//   isSuperCute() {
//     return this.age <= 1;
//   }
// }

// const animal1 = new Animal("tiger", 3);

// console.log(animal1);
// console.log(animal1.eat());

// // now if we make another class called dog class

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `this ${this.name} is eating grass`;
//   }
//   isSuperCute() {
//     return this.age <= 1;
//   }
// }
// const dog1 = new Dog("tommy", 2);
// console.log(dog1);

// // // // Now as we have seen that we are writing the same thing for all the classes. But we can inherit the properties of any class.

// // class Cat extends Animal {}
// // const cat1 = new Cat("meow", 1);
// // console.log(cat1);

// // Objects are also called as instances. So objects and instances are same thing
// // // now if we have to add something extra in the new class that cant be inherited from the parent class, Now how can we do it lets see

// class Cat extends Animal {
//   constructor(name, age, speed) {
//     // now for the name and age we will inherit it from parent class.
//     super(name, age); // super means the parent class
//     this.speed = speed;
//   }

//   run() {
//     return `${this.name} is running at a speed of ${this.speed} km/h`;
//   }
// }

// const cat1 = new Cat("meow", 1, 34);
// console.log(cat1);
// console.log(cat1.run()); // meow is running at a speed of 34 km/h

/********************************************************************** */

/// // Same method in base class

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `this ${this.name} is eating grass`;
//   }
//   isSuperCute() {
//     return this.age <= 1;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, speed) {
//     super(name, age);
//     this.speed = speed;
//   }

//   eat() {
//     return `this cat named ${this.name} is eating shit`;
//   }

//   run() {
//     return `${this.name} is running at a speed of ${this.speed} km/h`;
//   }
// }

// const cat1 = new Cat("meow", 1, 34);
// console.log(cat1.run()); // meow is running at a speed of 34 km/h
// console.log(cat1.eat()); // this cat named meow is eating shit
// // so this means that js will first look for the methods inside the constructor. If not found it will look for in the parent

/********************************************************************** */

////Getters and setters

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   // fullName() {

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   setName(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const person1 = new Person("Khusbu", "Bajaj", 22);

// // console.log(person1.fullName());

// // // As we can see that we can print a property like firstName as person1.firstName but we have to use paranthesis in case of a method. But lets see how we can call any method like property

// // We can add get just before any method and it will act as property of the constructor.

// console.log(person1.fullName); // Khusbu Bajaj

// // // Now how can we set the user's first name and last name from the full name. lets see
// // Also we can change the first and last name using set

// // console.log(person1.firstName); // Khusbu
// // console.log(person1.lastName); // Bajaj
// // person1.setName("Bajaj", "Khusbu");
// // console.log(person1.firstName); // Bajaj
// // console.log(person1.lastName); // Khusbu

// person1.fullName = "Pinju Gogoi";
// console.log(person1); // firstname: Pinju,,,,....

/********************************************************************** */

// static

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   static classInfo() {
//     return `this is Animal class info`;
//   }
// }

// const animal1 = new Animal("tiger", 4);
// console.log(animal1.classInfo); // returns undefined

// // this is because static properties are not functions to be called.

// console.log(Animal.classInfo()); // This is Animal class info

/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */

// "use strict";

        // console.log("Hello World");
        // // alert("Hi");
        // // document.write("Hi bro");
        // // console.warn("this is warning");
        // // console.error("this is an error hehe")
        // // console.clear()
        // var num1=20;
        // var num3=10;
        // // console.log(num1+num3);
        // var arr=[1,2,3,"Pinju",5];

        // function avg(a, b){
        //     c = (a + b)/2;
        //     return c;
        // }

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
// // firstName = "Priyam";
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


//slice function
// let newString = "abcdefghijkl";
// newString = newString.slice(0,7);  //start index, end index
// console.log(newString);

// //data types
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


// //String Concatenation
// // string1 = "Bro"
// // string2 = "Pro"
// // fullName = string1 +" "+ string2;
// // console.log(fullName);

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
// let num2 = 7;
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
// let firstName = "";  //it'll give a false value  null,false will give falsy value

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




//array
// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// fruits.push("babababa");
// console.log(fruits);
// fruits.pop("jsdbjsbdfjsbf");
// // console.log(fruits);
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

//push and pop are fast then shift or unshift






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



// //ways to clone an array
// let array1 = ["a", "b"];
// // let array2 = array1.slice(0); //method for cloning an array
// // let array2 = [].concat(array1); //method two for cloning an array

// //new way (SPREAD OPERATOR)
// let array2 = [...array1];
// console.log(array1, array2);
// array1.push("c");
// console.log(array1, array2);




// //For loop in array
// let fruits = ["apple", "mango", "banana", "grapes"];
// let fruits2 = [];
// for(i=0; i<=fruits.length-1; i++){
//         fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);




// //const for arrays
// const fruits = ["apple", "mango", "grapes", "banana"];
// fruits.push("banana");
// console.log(fruits);




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



// //For in loop
// const fruits = ["apple", "Mango","bananannanananan"];
// for(let index in fruits){
//         console.log(fruits[index]);
// }



// // //Array Destructuring
// const fruits = ["apple", "Mango","bananannanananan"];
// // let myFruit = fruits[0];
// // let myFruit2 = fruits[1];
// // console.log(myFruit, myFruit2) //op. apple mango


// //shortcut
// let [myFruit, myFruit2] = fruits;
// console.log(myFruit, myFruit2); //same op



//Objects
//arrays are good but not sufficient for real world data
//objects store key value pairs
//objects dont have index

// // const person = {name:"Pinju", age:23};
// const person = {
//         name:"Pinju",
//         age:23,
//         gf:"Rita",
//         hobbies: ["shdbs", "sdihbksf", "shdbsbf"]
// }
// console.log(person); 
// // console.log(person.gf);
// person["person"] = "male";
// console.log(person);
// console.log(person.hobbies);
// console.log(person["name"]);



// //difference between dot and bracket notation
// const key = "email";
// const person = {name:"Pinju", hobbies:["guitar", "Bgmi", "sodosjf"]};

// // console.log(person["hobbies"]);
// person[key] = "pinnu@gmail.com";
// console.log(person);


// //Object Iteration
// const person = {name:"Pinju", age:23, hobbies:["guitar", "Bgmi", "sodosjf"]};

// //for in loop
// for(let key in person){
//         //console.log(person[key]);
//         console.log(`${key} : ${person[key]}`);
// }
// // console.log(typeof person)
// // console.log(Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);



// //Computed properties
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// // const obj = {
// //         [key1] : value1,
// // }
// // console.log(obj)

// //or
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);


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
// let {bandName, famousSong, year} = band;
// console.log(year)


// //objects inside array //very useful
// const users = [
//         {userId: 1, firstName: "Pinju", gender: "male"},
//         {userId: 2, firstName: "Rohan", gender: "male"},
//         {userId: 3, firstName: "Kutta", gender: "female"},
// ]
// // console.log(users);
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





// //Functions
// function singHappyBirthday(){
//         console.log("Happy Birthay to you");
// }
// function twoPlusFour(a,b){
//         return a+b;
// }
// // console.log(twoPlusFour());
// const returnedValue = twoPlusFour(7,4);
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



//function expression
// function singHappyBirthday(){
//         console.log("Happy Birthay to you");
// }

// const singHappyBirthday = function(){
//         console.log("Happy Birthay to you");
// }
// singHappyBirthday();



//arrow functions
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

// const isEven = a => a % 2 === 0;  //we can remove return
// console.log(isEven(3));



//Hoisting
// hello();

// function hello(){
//         console.log("HEllo")
// }  //output: HEllo

// const hello = function(){
//         console.log("Hello")
// }  //output: Error    Function expression is not allowwed for function calling before funciton declaration


// //console.log(hello);
// const hello = "hello World";
// console.log(hello);


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



// //Lexical scope
// function myApp(){
//         const myVar = "value1";
//         function myFunc(){
//                 // const myVar = "Value5" 
//                 //when commented out, it'll check for other myVar variables inside its lexical environment
//                 console.log("inside myFunc", myVar);
//         }
//         const myFunc2 = function(){}
//         const myFunc3 = () => {}
//         console.log(myVar);
//         myFunc();
// }
// myApp();



// // Block scope vs function scope
// {
//         let firstName = "Ritamoni";
//         console.log(firstName)

// }

// // we can't access varibles outside a block.
// // Let and const are block scope
// // Var is function scope

// { 
//         var firstName = "Poijusd"

// }
// console.log(firstName)
 

// function myApp(){
//         if(true){
//         var firstName = "Priyam";
//                 console.log(firstName);
//         }
//         console.log(firstName);
// }
// myApp()
// //  var can be used anywhere in the function



// // default parameters
// //problem: how to make any variable a default

// function addTwoNum(a,b=0){
//         // if(typeof b === "undefined"){
//         //         b = 1;
//         // }                 //Old method

//         // new method: func(para1, para2=default)
//         return a+b;
// }
// const ans = addTwoNum(4);
// console.log(ans);


// Rest Parameter
// function myFunc(a,b,...c){
//         console.log(`a is ${a}`);
//         console.log(`b is ${b}`);
//         console.log(`c is ${c}`);
// }
// myFunc(2,3,4,6,5)



// function addAll(...numbers){
//         total = 0;
//         for(let number of numbers){
//                 total = total + number;
//         }
//         return  total;
// }
// let rita = addAll(5,8,9,2,3,1); 
// console.log(rita)



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



// // Callback functions
// function myfunc(callback){
//         console.log("asbdfb");
//         callback();
// }

// function myfunc2(name){
//         console.log("inside my func 2");
//         console.log(`your name is ${name}`);
// }

// myfunc(myfunc2)
// // we call another function inside this function



// // Function returning a function
// function myFunc(){
//         function hello(){
//                 console.log("HEll0 World");
//         }
//         return hello;    // funtion is returning another function
// }

// const ans = myFunc();
// ans();    // ans becomes a function since myFUnc is returning a func



// Important array methods

// const numbers = [3,4,6,5,2];

// function multiplyBy2(number, index){
//         console.log("index is ", index );
//         console.log(`${number}*2 = ${number*2}`);
// }

// for(let i=0; i<numbers.length; i++){
//         multiplyBy2(numbers[i],i);
// }

let i = 0, j = 1;
function fibbo(i,j){
        return i + j;
}
console.log('fibbo')
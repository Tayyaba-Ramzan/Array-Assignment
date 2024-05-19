//                    Simple Array Assignment

// Question 1
// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".

let fruits:string[]=["Apple","Banana","Mango","Orange"];
console.log(fruits);

//                   XXXXXXXXXXXXXXXXXXXXX

// Question 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.

let numbers:number[]=[10,20,30,40];
console.log(numbers);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.

let thirdFruit=fruits[3];
console.log(thirdFruit);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 4
// Change the second element of the numbers array to 25.

let secondElement=numbers[1]=25;
console.log(secondElement);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 5
// Add the element "grape" to the end of the fruits array using the
// method.

fruits.push("Grape");
console.log(fruits);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.

let lastFruit=fruits.pop();
console.log(lastFruit);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 7
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.

let firstFruit=fruits.shift();
console.log(firstFruit);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 8
// Add the element "kiwi" to the beginning of the fruits array
// using the method.

fruits.unshift("Kiwi");
console.log(fruits);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 9
// Remove 2 elements from the fruits array starting from index 1
// using the method.

fruits.splice(1,2);
console.log(fruits);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.

fruits.splice(2,0,"Pineapple","Pear");
console.log(fruits);

//                        XXXXXXXXXXXXXXXXXXXXX

// Question 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.

let citrusFruits=fruits.splice(0,2);
console.log(citrusFruits);

// Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.

let lastTwoFruits=fruits.splice(-2);
console.log(lastTwoFruits);

//                        XXXXXXXXXXXXXXXXXXXXX
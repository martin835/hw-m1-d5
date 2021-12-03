/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n EXERCISE 1 \n")

const area = function (l1, l2) {
    return l1*l2
}

let result = area(4,3)

console.log(result)

console.log("\n EXERCISE 2 \n")

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

const crazySum = function (a, b) {
    if (a === b) {
        return (a + b)*3
    } 

    return a + b
}

let crazySumResult = crazySum(10,10)

console.log(crazySumResult)

console.log("\n EXERCISE 3 \n")

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

const crazyDiff = function (n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  }

  console.log(crazyDiff(19))
  console.log(crazyDiff(0))
  console.log(crazyDiff(1))
  console.log(crazyDiff(-1))
  console.log(crazyDiff(20))
  console.log(crazyDiff(100))

  console.log("\n EXERCISE 4 \n")

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

const boundary = function (n) {
    if ((n >= 20 && n <=100) || n === 400) {
        return true
    }
} 

console.log(boundary(1))
console.log(boundary(20))
console.log(boundary(30))
console.log(boundary(100))
console.log(boundary(200))
console.log(boundary(400))


console.log("\n EXERCISE 5 \n")


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

const strivify = function (text) {

    let newText

    if (text.slice(0, 6) === "Strive") {
        newText = text
        return newText
    }

    newText = "Strive " + text
    return newText
}

console.log (strivify("blablabla"))
console.log (strivify("Strive lorem ipsin"))
console.log (strivify("Sstrive lorem ipsin"))

console.log("\n EXERCISE 6 \n")

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

/* console.log(9%3)
console.log(9%7) */

 const check3and7 = function (n) {

  if (n <=0 ) {

    console.log("You must provide a positive number")


  } else if (n%3 === 0 && n%7 === 0 ) {
    console.log(`${n} is a multiple of both 3 and 7`) 
  }
    else if (n%3 === 0 ) {
    console.log(`${n} is a multiple of 3`) 
  } else if (n%7 === 0) {
    console.log(`${n} is a multiple of 7`)  
  } else {
    console.log(`${n} is NOT a multiple of 3 or 7`)
  }
} 

for (let i = 0; i <= 30; i++) {

    console.log(check3and7(i))
}


console.log("\n EXERCISE 7 \n")


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

const reverseString = function (text) {

    let newString = text.split("").reverse().join("")
   
    return newString
}

console.log(reverseString("Strive"))


console.log("\n EXERCISE 8 \n")

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */



const upperFirst = function (text) {
    let arrayOfWords = text.split(" ")
    let firstLetters = []
    let upperCaseFirstLetter 
    let restOfWord

    for (i=0; i < arrayOfWords.length; i++) {
       firstLetters = arrayOfWords[i].split("").shift()
        for (j = 0; j < firstLetters.length; j++) {
            upperCaseFirstLetter = firstLetters[j].toUpperCase()
        }

        restOfWord = arrayOfWords[i].slice(1)
    }
    
    
  
    return upperCaseFirstLetter + restOfWord
}

console.log(upperFirst("strive school"))


console.log("\n EXERCISE 9 \n")

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

const cutString = function (text) {
    let textArray = text.split("")
    textArray.shift()
    textArray.pop()
    let newText = textArray.join("")

    return newText
}

console.log(cutString("strive school"))


console.log("\n EXERCISE 10 \n")

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

const giveMeRandom = function (n) {

    let yourArray = []

    for (i = 0; i < n; i++ ) {
        let x = Math.floor((Math.random() * 10) )
        yourArray.push(x)
    }
   return yourArray 
}

console.log(giveMeRandom(5))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

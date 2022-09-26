// ASSESSMENT 3: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibSequence", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
      expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Good error: "ReferenceError: fibSequence is not defined"

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Create a function named fibSequence
// Create two variables, num1 and num2 with a value of 1, and a new empty array called fibArr
// For loop for our input number to iterate 
// New variable called fibAdder to hold num1 + num2
// Using .push to add num1 into our empty array fibArr
// Update num variables after push
// Finally return fibArr

const fibSequence = (fibLength1) => {
  let num1 = 1;
  let num2 = 1;
  let fibArr = [];

  for (let i = 0; i < fibLength1; i++) {
    let fibAdder = num1 + num2
    fibArr.push(num1);
    num1 = num2;
    num2 = fibAdder;
    
  }
  return fibArr
}

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("studySorter", () => {
  it("takes in an object and returns an array of the numbers sorted from least to greatest.", () => {
      expect(studySorter(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect(studySorter(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// Good error: "ReferenceError: studySorter is not defined"


const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// Create function studySorter 
// Use Object.values method to return array of the objects property values
// Use .sort to sort the values and then use (a, b) => a - b to sort the values in ascending order

const studySorter = (object) => {
  return Object.values(object).sort((a, b) => a - b)
  }


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulatingArray", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
      expect(accumulatingArray(accountTransactions1)).toEqual([100, 83, 60, 51])
      expect(accumulatingArray(accountTransactions2)).toEqual([250, 161, 261, 165])
      expect(accumulatingArray(accountTransactions3)).toEqual([])

  })
})
// Good error: "ReferenceError: accumulatingArray is not defined"


const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// create function accumulatingArray
// create if statement if array is empty to return empty array using arr.length strictly equal to 0 to return [], and an else for the rest
// create new let conditional with an array holding first value [0]
// create for loop to iterate after the first value i = 1 
// sum the value of newArray
// return newArray
// realize that I should've named accumulatingArray something shorter and easier to type 😐 (I suppose I could change it now)

const accumulatingArray = (arr) => {
  if (arr.length === 0) {
    return []
  } else {
  let newArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    newArray[i] = newArray[i - 1] + arr[i];
  }
  return newArray;
}}

// console.log(accumulatingArray(accountTransactions3))
// function worked except for accountTransactions3, returned undefined. Realized I needed an if statement for an empty array so I added that before the for loop

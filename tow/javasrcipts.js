 
for (let i = 1; i <= 10; i++) {   
    let multiple = 7 * i;         
    console.log(`7 * ${i} = ${multiple}`);        
}
   



// let number=10
// while (number > 0) {
//     console.log(`countdown ${number}`);
//     number--
     
// }
//  let num =""
//  const correctNumber =42;
//     do {
//         if(num ===42)
//         console.log(`congrats! You got it Right.`);
        
//     } while (condition);


function generatePyramid(rows) {
    if (rows < 1 || rows > 9) {
      console.log("Please enter a number of rows between 1 and 9.");
      return;
    }
  
    for (let i = 1; i <= rows; i++) {
      let rowPattern = '';
      for (let j = 1; j <= i; j++) {
        rowPattern += j + ' ';
      }
      console.log(rowPattern.trim());
    }
  }
  
  // Example usage:
  let numberOfRows = 5;  
  generatePyramid(numberOfRows);

// =======================================================================================/''


  // Step 1: Declare variables for age and day of the week
let age = 25; 
let dayOfWeek = 3; 

let basePrice;
if (age >= 0 && age <= 12) {
  basePrice = 8;
} else if (age >= 13 && age <= 59) {
  basePrice = 12;
} else if (age >= 60) {
  basePrice = 10;
} else {
  console.log("Invalid age");
  basePrice = 0;
}

// Step 3: Use a switch statement to apply the day-specific discount
let discount = 0;
switch (dayOfWeek) {
  case 1:
  case 2: 
  case 3: 
    discount = 2;
    break;
  case 4:
    discount = 1;
    break;
  case 5: 
  case 6: 
  case 7: 
    discount = 0;
    break;
  default:
    console.log("Invalid day of the week");
    discount = 0;
}

let finalPrice = basePrice - discount;

 
console.log(`Original Price: ${basePrice}`);
console.log(`Discount : ${discount}`);
console.log(`Final Price: ${finalPrice}`);














// ========================================03=============================================

function sumOfDigits(number) {

    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
      console.log("Please enter a positive integer.");
      return;
    }
  
    let originalNumber = number;
    let sum = 0;
  

    do {
      let digit = number % 10;
      sum += digit;
      number = Math.floor(number / 10);
    } while (number > 0);
  

    console.log(`Original Number: ${originalNumber}`);
    console.log(`Sum of Digits: ${sum}`);
  }
  

  let number = 12345; 
  sumOfDigits(number);




// ==================================for loop================
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      continue;
    }
    console.log(i);
  }
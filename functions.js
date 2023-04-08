//defining functions

//Alerts the first letter of the inputted name
function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}

//Returns true if inputted number is divisible by 2, returns false otherwise
function divisibleByTwo(num) {
    if(num % 2 == 0) {
        return true;
    }
    return false;

}

//Returns the greatest number in the inputted array
function largestNum(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;

}



//Calling all defined functions

//Should alert: "The name Vandana starts with the letter V"
firstLetterName("Vandana");

//Call 1 with even number
//Should output to console: "The number 4 is divisible by 2: true"
let num = 4;
console.log("The number " + num + "is divisible by 2: " + divisibleByTwo(num));
//Call 2 with odd number
//Should output to console: "The number 7 is divisible by 2: false"
num = 7;
console.log("The number " + num + "is divisible by 2: " + divisibleByTwo(num));

//Should output to console: 89
let array = [2, 3, 46, 57, 3, 89, 87, 45];
console.log(largestNum(array));
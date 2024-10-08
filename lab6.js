//--- Task One ---//

let myNumber = 10; //--- Declares myNumber and sets the value to 10 ---//
let myString = "Hello, JavaScript!";  //--- Declares myString and sets the value to Hello, JavaScript! ---//

console.log(myNumber);
console.log(myString); //--- Console.log prints both variables into the output ---//

//--- Task Two ---//

for (let i = 0; i <= 10; i += 1) { //--- For Loop iterates numbers 0-10 by checking if i is => 10 if not it prints the number and adds one then repeats
    console.log(i);
}

for (let i = 1; i <= 5; i++) { //--- For Loop multiplies 3 by loop counter each time from one to five printing thr result ---//
    let multiple = 3 * i;
    console.log(multiple);
}


//--- Task Three ---//

function addNumbers(num1, num2) { //--- Function defines the two variables, returns number one plus number two and calls the funtion with inputs ---//
    return num1 + num2; 
}
console.log(addNumbers(15, 15));

function multiplyNumbers(num1, num2) { //--- Function defines the two variables, returns number one multiplied by number two and calls the function with inputs ---//
    return num1 * num2;
}
console.log(multiplyNumbers(15, 15));


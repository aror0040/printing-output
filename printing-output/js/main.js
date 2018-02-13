//  TASK - 1

// Declare variables
var a, b, c, output;
a = 3;
b = 5;
 
output = "var a = 3; \n var b = 5; \n var c; \n -------------- \n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "(a += b) : " + (a += b) + "\n" + // a = a + b = 8
    "(a -= b) : " + (a -= b) + "\n" + //a = a  -b = 3
    "(a *= b) : " + (a *= b) + "\n" + //a= a * b = 15
    "(a /= b) : " + (a /= b) + "\n" + //a = a / b = 3
    "(a %= b) : " + (a %= b) + "\n" + // a = a % b = 3
    "(a == b) : " + (a == b) + "\n" + // a==b - false
    "(a != b) : " + (a != b) + "\n" + // a!=b - true
    "(a > b) : " + (a > b) + "\n" + // a>b - false
    "(a < b) : " + (a < b) + "\n" + // a<b - true
    "(!a && !c) : " + (!a && !c) + "\n" + //!a && !c - false
    "(!a || !c) : " + (!a || !c) + "\n"; // !a OR !c - true

alert(output);


// TASK - 2 


var first_name, last_name, email, output;

first_name = "Sheenam";
last_name = "Arora";
email = "aror040@algonquinlive.com";
output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email;


alert(output);




// TASK - 3 

var numbers = [ //array containing random integers
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100)
];

var first_element, last_element, sum;

first_element = numbers[0];
last_element = numbers[numbers.length - 1];

sum = first_element + last_element;

if (sum % 2 === 0) {
    window.alert(first_element + " + " + last_element + " = " + sum + "\n " +
                 "This Number is Even");
} else {
    window.alert(first_element + " + " + last_element + " = " + sum + "\n" +
                 "This Number is Odd");
}
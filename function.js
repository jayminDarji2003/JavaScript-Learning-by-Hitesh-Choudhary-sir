// it's called function definition
function greeting() {
    console.log("hello ji kaise ho");
}

greeting();

// a,b are parameters
// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }
function addTwoNumbers(a, b) {
    return a + b;
}

// 7 and 6 are arguments
const result = addTwoNumbers(7, 6);
console.log("Sum is : " + result);


function logInUserMsg(userName = "sam") {
    (!userName) ? console.log("please enter user name") : console.log(`${userName} Just Logged In`)
    return userName
}

const msg = logInUserMsg("jaymin");
console.log(msg);
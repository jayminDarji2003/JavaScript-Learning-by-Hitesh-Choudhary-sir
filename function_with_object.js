// ... called "rest" operator
function cart(...num) {
    console.log(typeof num);
    sum = 0;
    num.map((value) => {
        sum += value
        console.log(value);
    })
    return sum;
}

const total = cart(10, 20, 40)
console.log("total is : " + total);

// rest operator
function calCartPrice(...value) {
    return value;
}

console.log(calCartPrice(10, 20, 30));

// pass object to function
const user = {
    username: "jaymin",
    price: 199
}

function profile(anyObj) {
    console.log(anyObj);
    console.log("userName : ", anyObj.username);
    console.log("price : ", anyObj.price);
}

// profile(user);
profile({
    username: "sam",
    price: 399
});


// pass array to function
// return second value from array
function handleArray(myArray) {
    return myArray[1];
}

const array = [10, 20, 30, 40, 50];

// console.log("second value is : " + handleArray(array));
console.log("second value is : " + handleArray([10, 20, 30, 40, 50]));
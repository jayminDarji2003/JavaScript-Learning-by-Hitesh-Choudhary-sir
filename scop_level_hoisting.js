// nested scop
/*
function one() {
    const userName = "JAYMIN";

    function two() {
        const website = "youtube";
        console.log(userName);
    }
    // console.log(website);

    two();
}

one();
*/

// if-else
if (true) {
    const userName2 = "jay";
    if (userName2 === "jay") {
        const website2 = "facebook";
        console.log(userName2, website2);
    }
    // console.log(website2);
}

// console.log(userName2);


// ---------------- interesting -------------------------------

// It's called basic function
console.log(addOne(5));
function addOne(num) {
    return num + 1;
}


// It's called expression
// variable
console.log(addTwo(10)); 

const addTwo = function (num) {
    return num + 2;
}


// for of loop

// const arr = [1, 2, 3, 4, 5];
const arr = "String"

console.log("----------------------------");

for (let num of arr) {
    console.log(num);
}

// for in loop

const obj = {
    name: "jaymin",
    age: 18,
    email: "jaymin@gmail.com"
}

console.log("----------------------------");

for (let key in obj) {
    console.log(key, " : ", obj[key]);
}

// map

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United State of America")

console.log("----------------------------");
console.log(map);

console.log("----------------------------");
for (const [key, value] of map) {
    console.log(key, " ---------> ", value);
}


// for in loop in array
const programming = ["c", "cpp", "js", "py", "java"]

console.log("-----------------------");
for (const key in programming) {
    console.log(programming[key]);
}

console.log("-----------------------");
programming.forEach((value, index, arr) => {
    console.log(value, index, arr);
})

console.log("----------------------");

// [{}, {} , {}]
const myCoding = [
    {
        languageName: "javascript",
        extention: "js"
    },
    {
        languageName: "python",
        extention: "py"
    },
    {
        languageName: "java",
        extention: "java"
    }
]

myCoding.forEach((item) => {
    // access value of object
    // for (const key in item) {
    //     console.log(item[key]);
    // }

    // access value direct
    console.log(item.languageName, "--", item.extention);
})
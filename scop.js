// let, var , const
// {} block scop
// var b = 300

let a = 1000

if (true) {
    let a = 10
    const c = 30
    // var b = 20
    console.log("inner : ", a);
}


console.log(a);
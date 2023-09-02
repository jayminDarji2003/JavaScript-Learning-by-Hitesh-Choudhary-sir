// map, filter and reduce in js

// Filter : filter function take one call back function and return array.

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = nums.filter((num) => num > 7);
// console.log(newNums);

const books = [
    {
        title: "Book one",
        genre: "Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book two",
        genre: "Non-Fiction",
        publish: 1982,
        edition: 2001
    },
    {
        title: "Book three",
        genre: "History",
        publish: 1984,
        edition: 2009
    },
    {
        title: "Book four",
        genre: "Non-Fiction",
        publish: 1988,
        edition: 2005
    },
    {
        title: "Book five",
        genre: "Fiction",
        publish: 1983,
        edition: 2008
    },
];

// const userBooks = books.filter((book) => {
//     return book.genre === "Fiction";
// })

const userBooks = books.filter((book) => {
    return book.edition > 2004 && book.genre === "History";
})

// console.log(userBooks);
// console.log("Total response : " + userBooks.length);




const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = numbers.map((num) => {
    return num + 10;
})

// not work on filter : remember!!
// const newNums = numbers.filter((num) => {
//     return num + 10;
// })

// map().map() --> called "chain of function"
const newNums2 = numbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums2);



// Reduce()

const myNums = [1, 2, 3];
const result = myNums.reduce((accumulator, currentValue) => {
    console.log(`accumulator value : ${accumulator} and current value : ${currentValue}`);
    return accumulator + currentValue;
}, 10);

console.log(result);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile development course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item,) => acc + item.price, 0);

console.log(priceToPay);
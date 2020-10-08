// Filter Method
// const scores = [10, 30, 15, 25, 50, 40, 5];
// filter array จะ return ค่าออกมาเป็น true กับ false

// *** จำไว้ว่า .filter จะ return ค่าออกมาเมื่อกูต้องเท่านั้น
// const filteredScores = scores.filter(score => {
//     return score > 20;
// });

// เขียนแบบ shorthand
// const filteredScores = scores.filter(score => score > 20);

// console.log(filteredScores);

// const users = [
//     { name : 'shaun', premium : true },
//     { name : 'yoshi', premium : false },
//     { name : 'mario', premium : false },
//     { name : 'chun-li', premium : true }
// ];

//  Shorthand version
// const premiumUsers = users.filter(user => user.premium);
// console.log(premiumUsers);


// Map Method
// สำคัญมากกก
// การใช้งาน map method ควรที่จะสร้างตัวแปลใหม่ขึ้นมารองรับ เพราะถ้าเรา map ค่าตัวแปรเก่ามันจะถูกทับ
// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrice = prices.map(price => price / 2);

// console.log(salePrice);

// const products = [
//     { name : 'gold star', price : 20 },
//     { name : 'mushroom', price : 40 },
//     { name : 'green shells', price : 30 },
//     { name : 'banana skin', price : 10 },
//     { name : 'red shells', price : 50 }
// ]

// const saleProducts = products.map(product => {
//     if (product.price > 30) {
//         // product.price = product.price / 2;

//         // ทำไมต้อง return ออกมาเป็น Object เพราะ ถ้าเรา return ออกมาเป็นค่าเดียวค่าของมันนั้นจะถูกนำไปแทนที่เก่า
//         return { name: product.name, price: product.price / 2 }
//     } else {
//         return product;
//     }
// });
// console.log(saleProducts, products);


// Reduce method
// ใช้เอาเฉพาะค่าที่เราต้องการของ array นั้นๆ โดยจะ return ค่าออกมาเป็นค่าเดียว

// const scores = [10, 20, 60, 40, 70, 90, 30];
// const result = scores.reduce((acc, curr) => {
//     if (curr > 50) {
//         acc++;
//     }

//     return acc;
// }, 0);

// console.log(result);

// const scores = [
//     { player : 'mario', score : 50 },
//     { player : 'yoshi', score : 30 },
//     { player : 'mario', score : 70 },
//     { player : 'crystal', score : 60 }
// ]

// const marioTotal = scores.reduce((acc, curr) => {
//     // acc(accumulator) = ตัวสะสม
//     // curr(currentValue) = ค่าปัจจุปัน
//     if (curr.player === 'mario') {
//         acc += curr.score;
//     }

//     return acc;
// }, 0)
// console.log(marioTotal);


// Find method
// Find method จะเข้าไปวนหาใน array ถ้าหากเจอ จะ return ค่าออกมาเป็น True กับ False
// ซึ่งเมื่อเจอค่าที่เป็น true จะหยุดทำงานทันที
// const scores = [10, 5, 0, 40, 30, 10, 90, 70];
// const firstHighScore = scores.find(score => {
//     return score > 50;
// });

// Shorthand version
// const firstHighScore = scores.find(score => score > 50);
// console.log(firstHighScore);


// Sort Method

// example 1
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();
console.log(names);

// example 2

const scores = [10, 50, 20, 5, 35, 70, 45];

// ***สำคัญมาก เราไม่สามารถ sort แบบนี้ได้เพราะมันใช้สำหรับ alphabetically
// ให้เราใส่ function callback เข้าไปเท่านั้น
// scores.sort();
// console.log(scores);

// ถ้าจะ sort ต้องใช้แบบนี้เท่านั้น

// scores.sort((a,b) => {
//     return b - a;
// });

// shorthand version
scores.sort((a,b) => b - a);
console.log(scores);

// example 3
const players = [
    { name: 'mario', score : 20 },
    { name: 'luigi', score : 10 },
    { name: 'chun-li', score : 50 },
    { name: 'yoshi', score : 30 },
    { name: 'shaun', score : 70 },
]

// players.sort((a,b) => {
//     return b.score - a.score;
//     // console.log(a, b);
// });

players.sort((a,b) => b.score - a.score);
console.log(players);




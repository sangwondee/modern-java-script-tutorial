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

const products = [
    { name : 'gold star', price : 20 },
    { name : 'mushroom', price : 40 },
    { name : 'green shells', price : 30 },
    { name : 'banana skin', price : 10 },
    { name : 'red shells', price : 50 }
]

const saleProducts = products.map(product => {
    if (product.price > 30) {
        // product.price = product.price / 2;

        // ทำไมต้อง return ออกมาเป็น Object เพราะ ถ้าเรา return ออกมาเป็นค่าเดียวค่าของมันนั้นจะถูกนำไปแทนที่เก่า
        return { name: product.name, price: product.price / 2 }
    } else {
        return product;
    }
});

console.log(saleProducts, products);


const scores = [10, 30, 15, 25, 50, 40, 5];

// filter array จะ return ค่าออกมาเป็น true กับ false

// *** จำไว้ว่า .filter จะ return ค่าออกมาเมื่อกูต้องเท่านั้น
// const filteredScores = scores.filter(score => {
//     return score > 20;
// });

// เขียนแบบ shorthand
// const filteredScores = scores.filter(score => score > 20);

// console.log(filteredScores);

const users = [
    { name : 'shaun', premium : true },
    { name : 'yoshi', premium : false },
    { name : 'mario', premium : false },
    { name : 'chun-li', premium : true }
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);


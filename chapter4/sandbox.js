// get to the reference to the ul
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(preson => {
    html += `<li style ="color: purple">${preson}</li>`
});

console.log(html);

ul.innerHTML = html;

// callback function & foreach *** สำคัญมากๆ ***
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (preson, index) => {
//     console.log(`${index} -> hello ${preson}`);
// };

// people.forEach(logPerson);

// people.forEach((people, index) => {
//     console.log(`${index} -> ${people}`);
// });


// methods and functions

// method เป็น function แบบหนึ่งที่อยู่ใน function
// const name = 'shaun'

// // functions
// const greet = () => 'hello world !!!';

// const resultOne = greet();
// console.log(resultOne);

// // methods
// const resultTwo = name.toUpperCase(); // โดย mthods จะเข้าถึงโดยจุด

// console.log(resultTwo);





// Arrow function *** สำคัญมากกก ***

// การเขียน function แบบเดิม
// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }

// 1. เขียน arrow function แบบที่ 1 ใช้แบบนี้ล่ะ

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// 2. เขียน arrow function แบบที่ 2 เราสามารถ เขียนแบบนี้ได้ ก็ต่อเมื่อมีการรับ arguments ค่าเดียว ในกรณีนี้คือ radius
// const calcArea = radius => 3.14 * radius**2;

// const result = calcArea(4);

// console.log('area is : ', result);



// Practise arrow functions !!!
// const greet = function () {
//     return 'hello world';
// };

// Answer is:
// const greet = () => 'hello world';

// let result = greet();

// console.log(result);

// const bill = function(products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }

//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;

//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }

//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));

// const result = bill(products, tax);

// console.log(result);













// return values (function)

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);

// console.log(area);


// arguments & parameter

// arguments คือ ขารับข้อมูลเข้าไปทำงานของ function
// parameter คือ ขาส่งข้อมูลเข้าไปทำงาน function

// const speak = function (name = 'sangwondee', time = 'night') {
//     console.log(`good ${time} ${name}`)
// }

// const speak = function (name, time) {
//     console.log(`good ${time} ${name}`)
// }

// speak('wichan');  // function สามารถ override ได้
// speak('sangwondee', 'morning');



// hositing คือ ?
// function expression
// let speak = function() {
//     console.log('good day! commander');
// }
// เหมือนใน php คือ การที่ function ทำงานแล้ว เอาค่าใส่ในตัวแปรนั้นๆ เช่น $a = $this->doSomthing();

// speak(); // เรียกใช้ function speak()

// function declaration
// function greet() {
//     console.log('hello there');
// }

// greet(); // เรียกใช้ function greet()
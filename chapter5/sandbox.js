// Symbool ->used with objects *** สำคัญมากกกก***

// symbool แบ่งออกเป็น 2 ชนิด
// 1. Primitive type
// 2. Reference types

// Primitive Type ประกอบด้วย
// 1.1 numbers
// 1.2 string
// 1.3 Boolean
// 1.4 null
// 1.5 undefined
// 1.6 symbols

// Reference types ประกอบด้วย
// 2.1 all types of objects
// 2.1.1 object literals
// 2.1.2 arrays
// 2.1.3 functions
// 2.1.4 dates
// 2.1.5 all other objects

// Stack & Heap

// Stack คือที่ ลักษณะคล้ายๆ memory (Ram) ที่จะเก็บค่าของตัวแปรที่ถูกสร้างไว้ในทุกๆ
// Heap คือ เป็นตัวเก็บข้อมูลแบบหนึ่งจะเก็บข้อมูลประเภทของ objects ซึ่ง จะเก็บข้อมูลจริงๆ แต่จะนำเอา pointer เข้าไปเก็บในตัว ของ stack อีกครั้งหนึ่ง

// Primitive type

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne : ${scoreOne} and scoreTwo : ${scoreTwo}`);

scoreOne = 100;

// ถ้าหากเรากำหนดค่าแบบ primitive type ค่าหนึ่งอีกค่าหนึ่งมันจะไม่เปลี่ยนตามเช่น ค่า scoreOne
console.log(`scoreOne : ${scoreOne} and scoreTwo : ${scoreTwo}`);

// Reference Value
// ถ้าเราเปลี่ยนค่าใดค่าหนึ่งมันจะเปลี่ยนทั้งสองค่า
// เพราะว่า reference type มันจะเก็บเฉพาะ pointer ไว้ใน stack (memory)
// ไม่ว่าค่าตัวแปรตัวนั้นจะเปลี่ยนจากตัว 1 หรือ ตัวที่ 2
const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

// userOne.name = 'sangwondee';
userTwo.age = 40;
console.log(userOne, userTwo);



// Math object

// คืทอการใช้งาน objects math ที่มีอยู่ใน javascripts
// console.log(Math);
// console.log(Math.PI + ' => this is pi value');
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area)); // ปัดค่าขึ้นปัดค่าลง
// console.log(Math.floor(area)); // เอาค่าทศนิยม
// console.log(Math.ceil(area)); //  ปัดค่าขึ้น
// console.log(Math.trunc(area)); // ตัดค่่าเอาเฉพาะตัวเลข

// Object literals
// const blogs = [
//     { title : 'why mac & cheet rules', likes: 30 },
//     { title : '10 think to make with marmite', likes: 50 }
// ];

// let user = {
//     name: "Wichan Sangwondee",
//     age: 30,
//     email: 'sangwondee@gmail.com',
//     location: 'thailand',
//     blogs: [
//         { title : 'why mac & cheet rules', likes: 30 },
//         { title : '10 think to make with marmite', likes: 50 }
//     ],
//     logIn () {
//         // console.log('this is login with arrow function');
//     },
//     logOut() {
//         // console.log('this is log out with arrow function');
//     },
//     logBlogs() {
//         // console.log('this is logBlogs');
//         // console.log('this user has written the following blogs');
//         // console.log(this);
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         });
//     }
// }

// dot notation คือการเข้าถึง object โดยการใช้ dot
// console.log(user);
// console.log(user.name);
// console.log(user.blogs[0]);

// console.log(user['age']); // เราสามารถเข้าถึง โดยใช้ Bracket ก็ได้ (แต่ส่วนใหญ่แล้วจะใช้เป็นแบบ dot notation)

// การเปลี่ยนแปลงค่าใน Object
// user.age = '35'; // เราสามารถกำหนดค่าจองมันได้เลยโดยใช้ dot notations
// console.log(user.age);
// console.log(typeof user.age);
// console.log(user)

// การเรียกใช้ methods ใน object (user)
// user.logIn();
// user.logOut();
// user.logBlogs();

// const name = 'wichan sangwondee';

// name.toUpperCase();
// console.log(name);
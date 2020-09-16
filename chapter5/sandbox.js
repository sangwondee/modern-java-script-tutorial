// Math object

// คืทอการใช้งาน objects math ที่มีอยู่ใน javascripts
console.log(Math);
console.log(Math.PI + ' => this is pi value');
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area)); // ปัดค่าขึ้นปัดค่าลง
console.log(Math.floor(area)); // เอาค่าทศนิยม
console.log(Math.ceil(area)); //  ปัดค่าขึ้น
console.log(Math.trunc(area)); // ตัดค่่าเอาเฉพาะตัวเลข

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
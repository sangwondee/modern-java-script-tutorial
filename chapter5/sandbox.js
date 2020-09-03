// Object literals

let user = {
    name: "Wichan",
    age: 30,
    email: 'sangwondee@gmail.com',
    location: 'thailand',
    blogs: [
        'why mac & cheese rules',
        '10 thing you never not to js'
    ],
    logIn: () => {
        console.log('this is login with arrow function');
    },
    logOut: () => {
        console.log('this is log out with arrow function');
    },
    logBlogs: () => {
        console.log('this is logBlogs');
    }
}
//

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
user.logIn();
user.logOut();

const name = 'wichan';

name.toUpperCase();
console.log(name);
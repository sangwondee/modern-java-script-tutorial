// **** สำคัญมากกก ****
// ทุกคนคิดว่า js รูปแบบ type เป็น Obejct ทั้งหมด แต่จริงๆ แล้วมันเป็น type อื่นๆได้ เพิ่งแต่ทุก type มันจะถูกห่อหุ้มด้วย
// object เท่านั้นเอง

// const names = ['shaun', 'crytal'];

// // จะแสดงทุก _proto_ ซึ่งความจริงมันยังเป็น premitive type แต่มันจะถูก (wrapper temporary) (หุ้มด้วย object)
// // จึงทำให้มันสามารถใช้งาน property ของ object ได้
// console.log(names);

// const ages = new Array(20, 25, 30)

// console.log(ages)
// // เรา create object ธรรมดาแต่มันจะ (wrapper temporary) ด้วย object ของ javascrpit แล้วทำให้เราสามารถใช้งาน property ได้เลย
// const userOne = {}
// console.log(userOne)

// const userTwo = new Object
// console.log(userTwo)





// Object Literal

// const userOne = {
//     username: 'ryu',
//     email: 'ryu@thenetninja.co.th',
//     login() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('the user logged out');
//     }
// }

// console.log(userOne.email, userOne.username);
// userOne.login();

// const userTwo = {
//     username: 'chun li',
//     email: 'chun.li@thenetninja.co.th',
//     login() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('the user logged out');
//     }
// }

// console.log(userTwo.email, userTwo.username);
// userTwo.login();


// const userThree = new User('shaun@thenetninja.co.th', 'shaun');

// Classes
// *** สำคัญมากกกก ***

// Class เป็นเหมือน blueprint ของ Object นั้นๆ เปรี่ยบเทียบเหมือนรถ (Car blueprint)

// ประกอบไปด้วยสองอย่างคือ Properties และ Functionality
// Properties -> คือส่วนประกิบของรถ เช่น สี, รูปทรง, ขนาด
// Functionality ->  คือวิธีการที่มันทำได้ เช่น ขับไปด้านหน้า ,ขับถอยหลัง,เบรก


// สามสิ่งที่คำสั่ง new keyword ทำคือ
// the 'new' keyword
// 1 - สร้าง object เปล่าๆ ขึ้นมา -> it creates a new empty object {}
// 2 - ผูกตัวแปล 'this' ให้กับ object เปล่าที่สร้างขึ้นมาใหม่ -> it binds the value of 'this' to the new empty object
// 3 - ไปเรียก function constructor ขึ้นมาเพื่อสร้าง object -> it calls the constructor function to 'build' the object

// Class ต้องมี construtor เพื่อให้รูปว่า class นั้นๆ มีรูปแบยังไง

// class User {
//     constructor(username, email) {
//         //set up properties
//         this.username = username
//         this.email = email
//         this.score = 0
//     }
//     login() {
//         console.log(`${this.username} just logged in`)
//         return this
//     }
//     logout() {
//         console.log(`${this.username} just logged out`)
//         return this
//     }
//     incScore() {
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this
//     }
// }


// Class Inheritance
// สามารถใช้งาน class ของ class parent ได้ โดยสามรถใช้ method ต่างๆ ของ parent ได้ ซึ่งถ้าหากไม่มี constructor
// ก็จะ constructor ของตัวลูกมาแทน

// super() เราต้องใช้คำสั่ง super เพื่อดึกตัวแปลหรือฟังชั่น parent มาใช้งาน

// Constructor ของ Admin Class
// คือการกำหนดของตัวเองก็จะเรียกใช้ได้แต่ถ้าหากเราต้องการใช้ function ของ parent class

// class Admin extends User {
//     constructor(username, email, title) {
//         super(username, email)
//         this.title = title
//     }

//     deleteUser(user) {
//         users = users.filter(u => u.username !== user.username)
//     }
// }

// const userOne = new User('mario', 'mario@thenetninja.co.uk')
// const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')
// const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');

// console.log(userOne)
// console.log(userTwo)
// userOne.login().incScore().incScore().logout();
// console.log(userOne)
// console.log(userTwo)
// console.log(userThree)

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);
// console.log(userThree.title)


// Constructor functions (under the hood)
// function User(username, email) {
//     this.username = username
//     this.email = email
//     this.login = function() {
//         console.log(`${this.username} logged `)
//     }
// }

// class User {
//     constructor(username, email) {
//         //set up properties
//         this.username = username
//         this.email = email
//     }
// }

// const userOne = new User('mario', 'mario@thenetninja.co.uk')
// const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')

// console.log(userOne, userTwo)




// Prototype Method -> อันนี้สำคัญอยู่นะ

//เวลาที่เราสร้าง object มันจะถูกนำเข้าไปใน prototype เพื่อที่จะได้นำไปใช้ในที่อื่นๆ
// ทุก Object ใน javascript จะมี prototype อยู่
// protype จะมี method ให้ใช้งาน โดยแต่ละ type ก็จะมี method ที่แต่ต่างกัน
// เช่น Date prototype ก็จะมี method getDay(), getMonth(), etc...
// Array prototype ก็จะมี method sort(), filter(), etx...

// การทำงานของ prtotype
// เวลาเราสร้าง Object มันจะเก็บตัวแปลนั้นๆ เอาไว้แต่พวก method ต่างๆ มันจะเก็บไว้ใน Prototype
// ตัวอย่างเช่น
// console.log(Array.prototype);
// มันจะไม่เก็บค่า method นั้นๆไว้ในตัวแปลที่เราสร้างขึ้นมา

function User(username, email) {
    this.username = username
    this.email = email
}

// เราสามารถใส่ function เข้าไปใน prototype ได้โดยการใส่ . เข้าไปใน prototype เพื่อนำไปใช้ในที่อื่นๆได้
User.prototype.login = function() {
    console.log(`${this.username} has logged in`)
    return this;
}

User.prototype.logout = function() {
    console.log(`${this.username} has logged out`)
    return this;
}

const userOne = new User('mario', 'mario@thenetninja.co.uk')
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')
const userThree = new Admin('wichan', 'wichan@thenetninja.co.ul')

console.log(userOne, userTwo)

// Channing
// คือการใช้งาน function ต่อๆกัน
userOne.login().logout()
//End Prototype Method

// Prototype Inheritance

function Admin() {
    User.call()
}




// End Prototype Inheritance
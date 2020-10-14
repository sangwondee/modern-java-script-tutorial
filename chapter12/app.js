// Asynchronous Javascrpit (Start now and finish later) คือการทำงานแบบไม่่ต้องรอ process อื่นก่อนหน้านี้ทำงานเสร็จทำ
// console.log(1)
// console.log(2)

// setInterval(() => {
//     console.log('callback function fired !!!');
// }, 2000);

// console.log(3)
// console.log(4)

// HTTP Requests คือ การส่งคำขอไปยังเชิิฟเวอร์เพื่อต้องการข้อมูล โดยจากฝั่ง Client ไปยังฝั่ง Server เพื่อให้ส่งข้อมูลที่ต้องการกลับมา เช่น Client
//     ต้องการ หน้า home.html ก็จะส่งคำขอ GET /home -> ไปที่เชิฟเวอร์ แล้วตอบกลับเป็น home.html ออกมา

// ใช้อันนี้ https://jsonplaceholder.typicode.com/ -> website ทดลอง http requests


// Making HTTP Request (XHR) สำคัญมาก

// XMLHttpRequest คือ ออบเจ็กค์ที่ทำหน้าที่ติดต่อร้องขอข้อมูลจากฝั่ง server โดยที่ ข้อมูลร้องขอนั้นเป็นเพียงข้อมูลเล็กๆ และทางเว็บ server
//     จะจัดหาและตอบกลับมาในรูปแบบข้อมูล xml จากนั้นจะเป็นหน้าที่ของ JavaScript ในการนำผลลัพธ์มาแสดงผลบนหน้าจอ
// โดยไม่จำเป็นต้อง refresh หน้าจอใหม่ทั้งหมด


// Callback Functions
// (Callback ตัวนี้เป็น function นะไม่ใช้ paramater และเพราะว่ามันเป็น function มันจึงรับ 2 ค่าและ return 2 ค่า)
// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();
//     // เมื่อ statechange มีการเปลี่ยแปลงก็จะทำการดักจับ
//     request.addEventListener('readystatechange', () => {
//         // readyState => เป็นตัวบอกสถานะ ของ XMLHttpRequest โดยตัวที่ 4 นั้น จะมีความหมายว่า ทำงานเสร็จสิ้นแล้ว
//         // อ่านเพิ่มเติม https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
//         if (request.readyState === 4 && request.status === 200) {
//             // console.log(JSON);
//             // JSON => Javascript Object Notation -> รูปแบบการ จัดเก็บข้อมูลของ JavaScript จัดเก็บในลักษณะ JSON Object
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data); // จะ return ค่าออกมา 2 ตัว
//             // console.log(request.responseText);
//         } else if (request.readyState === 4) {
//             callback('could not fetch the data', undefined) // จะ return ค่าออกมา 2 ตัว
//             // console.log('could not fetch the data');
//         }
//     });
//     // ต้องการ 2 parameter เพื่อ 1. method 2. path(url)
//     request.open('GET', resource);
//     request.send();

//     // request.open('GET', 'todos.json');
//     // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// }

// log ตรงนี้เราจะแสดงให้เห็นว่า asynchronous ทำงานยังไง
// console.log(1)
// console.log(2)


//  ตัวอย่าง Callback Hell
// getTodos('todos/luigi.json', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//         getTodos('todos/mario.json', (error, data) => {
//             console.log(data);
//         });
//         getTodos('todos/shaun.json', (error, data) => {
//             console.log(data);
//         });
//     }
// });

// // จะทำตรงนี้เพราะ เราจะสามารถเรียกใช้ fuction ซ้ำๆได้
// getTodos((error, data) => { // ทำไมถึงส่งไป 2 แต่รับค่าเดียว
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })

// console.log(3)
// console.log(4)


// Promise Basic / *** สำคัญมากๆ ***/
// คือ object หนึ่งที่มีใน native javascript เป็นตัวช่วยเราให้สามารถเขียนโปรแกรมแบบ asynchronous ได้สะดวกมากขึ้น
// ลดปัญหาการ call back ที่ดูยากไม่เป็นระเบียบ ลองมาดูกันครับว่ามันจะช่วยเราได้ยังไงกันบ้าง

// การทำงานคือ เริ่มจากสร้าง Object Promise ขึ้นมาก่อน โดยที่ constructor จะรับค่าเป็น function ที่มี arguments เป็น function 2 ตัว
// คือ resolve และ reject ซึ่ง resolve จะเอาไว้สั่งงานเมื่อการทำงานที่ต้องการสำเร็จ
// ส่วน reject เมื่อการทำงานไม่สำเร็จ เมื่อมีการ resolve (state fulfilled)ก็จะมาเข้า function then ในตัวข้างนอกที่ arguments ที่ 1
// แต่ถ้า reject (state rejected) ก็จะมาทำคำสั่งใน arguments ที่ 2 แทน

// ref -> https://konoesite.com/promise-%E0%B9%83%E0%B8%99-javascript-b93f09acdb66

// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);

//             } else if (request.readyState === 4) {
//                 reject('error getting resource');
//             }
//         });
//         // ต้องการ 2 parameter เพื่อ 1. method 2. path(url)
//         request.open('GET', resource);
//         request.send();
//     });
// }

// Promise example
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         resolve('some data');
//         reject('some error');
//     });
// }

// // call getSomething function arrorw
// getSomething().then(data => {
//     console.log(data);
// }).catch(error => { // catch method เป็นเหมือนตัวดักจับ error
//     console.log(error);
// });


// Chaining Promise
// เรียก function getTodos โดยใช้ตัว Promise
// getTodos('todos/luigi.json').then(data => {
//     console.log('promise resolved:', data);
//     return getTodos('todos/mario.json');
// }).then(data => {
//     console.log('promise resolved:', data);
//     return getTodos('todos/shuan.json');
// }).then(data => {
//     console.log('promise resolved:', data);
// }).catch(error => {
//     console.log(error)
// });


// The Fetch API (ทำงานเหมือน Promise แต่เขียนให้สั้นลงกว่า)
// ref => https://medium.com/@sirawit/%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%A1%E0%B8%B2%E0%B9%83%E0%B8%8A%E0%B9%89-fetch-api-%E0%B9%81%E0%B8%97%E0%B8%99-ajax-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%94%E0%B8%B6%E0%B8%87%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B8%81-rest-api-%E0%B8%81-e345189ae935#:~:text=JavaScript%20%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%8A%E0%B8%B1%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87,fetch(url)&text=return%20response.json()%20%2F%2F%20%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%20json
// ref => https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// fetch('todos/luigi.json').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log('rejected', err)
// })


//async & await อันนี้ดีทำให้เขียนได้สั้นลงและง่ายขึ้น

// await => ใช้เพื่อบอกให้ JavaScript รอจนกว่าคำสั่งนั้นจะเสร็จ ถึงค่อยไปทำงานอันต่อไป
// ถ้าหากเราจะใช้เราต้องทำ function นั้นให้เป็น Async สะก่อนแบบในตัวอย่าง
// ซึ่งถ้าหากเป็นแบบนั้น ตัว function นั้นจะ return ออกมาเป็น promise เราก็จะสามารถใช้
// .then และ .catch เพื่อจัดการได้เลยไม่ต้องเขียนแบบด้านบนอีก
// ข้อเสียคือจะไม่ support ie version ต่ำๆ

const getTodos = async () => {
    const response = await fetch('todos/luigis.json');

    if (response.status !== 200) {
        throw new Error('cannot fetch the data hell Yeah');
    }

    const data = await response.json();

    return data;
}

getTodos()
    .then(data => console.log('resolved : ', data))
    .catch(err => console.log('rejected', err.message))


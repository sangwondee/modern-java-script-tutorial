// ***สำคัญมาก***
// Document Object Model (DOM) เป็นการเข้าถึงแบบ node (binary tree) โดยจะเข้าถึงเป็น level ไปเลื่อยๆ

// const para = document.querySelector('p'); // เลือกเอา <p> โดยจะเลือกเอาแต่ตัวแรกที่มันเจอ.

// const para = document.querySelector('.error'); // ถ้าใส่ . จะเลือกเอาชื่อ class แรกของชื่อที่มันเจอ

// const para = document.querySelector('div.error'); // ถ้าใส่ . เราจะสามารสเข้าไปถึง class นั้นๆ เพราะทำงานเป็นแบบ object

// console.log(para);

// querySelectorAll => คือ การเลือกเอา element selector โดยต้องมันจะรับ tag eletemt ด้วย.

// const params = document.querySelectorAll('p'); // จะออกมาเป็น NodeList ซึ่งเราสามารถใช้ตัวแปรแบบ array ได้

// params.forEach(item => {
//     console.log(item);
// });
// console.log(params);

// Get an element by id
// const title = document.getElementById('page-title'); //ถ้าเป็น getElementById เราไม่จำเป็นต้องมี # เพื่อให้ได้ element
// // console.log(title);

// // Get elements by their class name
// const errors = document.getElementsByClassName('error');
// // ค่าที่ได้ออกมาจะเป็น HTMLCollection เป็น arrays แต่เราไม่สามารถใช้ foreach loops กับมันได้.
// // console.log(errors[0]);
// // console.log(errors);

// // Get elements by their tag name
// const paras = document.getElementsByTagName('p');
// จะหา <p> ทั้งหมดที่อยู่ในหน้านั้นแล้วทำการแสดงออกมา
// console.log(paras);

// เอาค่าใน text ต่างๆมาใช้งาน

// innerText => ใช้ในการหาและเปลี่ยนแปลงค่าใน text ของ html ที่เราเลือก
// innerHTML => ใช้หาค่าหรือเปลี่ยนแปลงค่าใน HTML
// const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerHTML = 'ninjas are awesome!';
// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach((para) => { // Arrow function
//     console.log(para.innerText);
//     para.innerText += ' new text';  // += คือการเอาค่าเดิมมาเพิ่มกับค่าใหม่
// });

// let content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new h2</h2>'

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach((person) => {
//     content.innerHTML += `<p>${person}</p>`; // เป็นการเพิ่มค่า value text เข้าไปใน values
// });

// console.log(content);

// Getting & Setting Attributes
// getAttribute => เอาค่าจาก attribute เช่น tag a ได้ attribute เป็น href
// setAttribute => กำหนดค่าให้ กับ attribute นั้น
// const link = document.querySelector('a');
// // console.log(link.getAttribute('href'));

//  // parameter แรก ให้ใส่ class ที่เราต้องการเปลี่ยนตัวที่สอง ให้ใส่ตัวใหม่เข้าไป
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The Net Ninja Website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success'); // setAttribute เอาไว้ใช้เวลาใส่ if success or warning or danger.
// mssg.setAttribute('style', 'color: green;'); // แต่ถ้า ในตัวแปลนั้นไม่มี attribute จะถูกสร้างขึ้นมาใหม่

// Changing CSS Styles

// // เราสามารถกำหนด size หรือ รูปแบบ css ของ element ได้
// const title = document.querySelector('h1');

// console.log(title.style);
// // console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = ''; // สามารถกำหนดค่าออกเป็น null ได้


// Class List => list class ทั้งหมดออกมา
// textContent => ใช้หาค่าในตัว tag นั้นๆ คล้ายๆ innerHTML

// const content = document.querySelector('p');
// console.log(content.classList); // list class ที่เป็น tag p ทั้งหมด
// content.classList.add('error'); // เพิ่ม class เข้าไป สามารถใส่เป็น array ได้.
// content.classList.remove('anothor'); // remove class anothor
// content.classList.add('success'); // เพิ่ม class เข้าไป สามารถใส่เป็น array ได้.

const paras = document.querySelectorAll('p');

// Execise เขียนเอง
// paras.forEach((p) => {
//     // console.log(p);
//     if (p.innerHTML.search('error') >= 0) {
//         p.classList.add('error');
//     }

//     if (p.innerHTML.search('success') >= 0) {
//         p.classList.add('success');
//     }
// });

// เฉลย
paras.forEach(p => {
    // console.log(p.textContent.includes('error'));
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    };

    if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

// แถม
const title = document.querySelector('.title');

title.classList.toggle('test');
// title.classList.toggle('test');


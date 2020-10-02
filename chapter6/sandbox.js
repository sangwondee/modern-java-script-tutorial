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

// const paras = document.querySelectorAll('p');

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
// paras.forEach(p => {
//     // console.log(p.textContent.includes('error'));
//     if (p.textContent.includes('error')) {
//         p.classList.add('error');
//     };

//     if (p.textContent.includes('success')) {
//         p.classList.add('success');
//     }
// });

// // แถม
// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');


// Dom Parnets and Children & Siblings  เหมือนเป็นการหา node ที่สูงกว่าหรือต่ำกว่า ของ node ก่อนหน้านี้

// const article = document.querySelector('article');

// console.log(article.children); // จะแสดงผลออกมาในรูปของ HTMLCollections[]ซึ่งเราไม่สามารถนำมาเป็น foreach loop ได้

// Array.from คือ การ Convert HTMLCollection ให้ไปอยู่ในรูปของ arrays เพื่อที่จะได้สามารถใช้ foreach ได้

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement); // .parentElement คือการค่า node ที่อยู่เหนือตัวมัน.
// console.log(title.parentElement.parentElement); // ยิ่งถ้าเราใส่ตัว .parentElement เข้าไปมันก็จะไปหา node ที่อยู่ด้านบนเข้าไปเลื่อยๆ
// console.log(title.nextElementSibling); // คือการหาตัว node ตัวถัดไป.
// console.log(title.previousElementSibling); // คือการหาตัว ตัวก่อนหน้านี้. (แต่มันไม่มีค่่ามันจะ return null)

// chaining
// console.log(title.nextElementSibling.parentElement.children); เหมือนเขาแสดงให้ดูว่ามันจะออกมาเป็น HTMLCollections
// แต่จริงๆแล้วมันไม่ได้ใช้ทำอะไรหรอ


// **** สำคัญมากกกกกกกกก  ****
// Event Basics (Click events)

// const button = document.querySelector('button');

// addEventListenner (type, options);
// button.addEventListener('click', event => {
//     console.log('you click me');
//     console.log(event);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', event => {
//         event.target.style.textDecoration = 'line-through';
//     });
// });

// Creating & Removing Element
// คือการทำ click แล้วเพิ่มค่านั้นเข้าไปใน lists

// const button = document.querySelector('button')
// const ul = document.querySelector('ul')

// button.addEventListener('click', () => {
//     // method ที่ createElement ใน html method
//     const li = document.createElement('li')
//     // textContent เป็นการเอาค่าเข้าไปใส่ใน tag element นั้นๆ
//     li.textContent = 'something new to do list'
//     // prepend  คือการเพิ่ม Object เข้าไปใน node อันบนสุด ที่นี้คือการเพิ่ม li เข้าไปใน ul อันท้ายแรก (ใช้อันนัี้ล่ะ)
//     ul.prepend(li)
//     // append  คือการเพิ่ม Object เข้าไปใน node สุดท้ายในที่นี้คือการเพิ่ม li เข้าไปใน ul อันท้ายสุด
//     // ul.append(li);

//     // ul.innerHTML += '<li>somethin news</li>'
// })

// const ul = document.querySelector('ul')
// .remove() // remove tag นั้นออกจากหน้า DOM
// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', event => {
//         event.target.remove();
//     });
// });

// Event Bubbling (and delegation)

// เหมือนเป็น event ที่เรียงไปหาตัว parent เพื่อทำอะไรซักอย่างยัง งงๆ อยู่
// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     // method ที่ createElement ใน html method
//     const li = document.createElement('li')
//     // textContent เป็นการเอาค่าเข้าไปใส่ใน tag element นั้นๆ
//     li.textContent = 'something new to do list'
//     // prepend  คือการเพิ่ม Object เข้าไปใน node อันบนสุด ที่นี้คือการเพิ่ม li เข้าไปใน ul อันท้ายแรก (ใช้อันนัี้ล่ะ)
//     ul.prepend(li)
//     // append  คือการเพิ่ม Object เข้าไปใน node สุดท้ายในที่นี้คือการเพิ่ม li เข้าไปใน ul อันท้ายสุด
//     // ul.append(li);
//     // ul.innerHTML += '<li>somethin news</li>'
// });

// const ul = document.querySelector('ul')

// ul.addEventListener('click', e => {
//     // console.log(e.target.tagName === 'LI');
//     // console.log(e.target);
//     if (e.target.tagName === 'LI') { // เป็นการเลือกเอา target ไหนทำแบบนี้เพื่อป้องกัน ไม่ให้ไปคลิกที่อื่นแล้วมันหายไป
//         e.target.remove()
//     }
// });

// More DOM Events
const copy = document.querySelector('.copy-me')
const box = document.querySelector('.box')

copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright')
});

// หาค่าที่อยู่ของ mouse ในอยู่ในกพื้นที่กล่องนั้น
box.addEventListener('mousemove', e => {
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
    // console.log(e);
});

// เราสามารถจับ event ของ documnet ของ DOM ได้เลย
// คือการ หาค่าที่อยู่ของ scroll wheel
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});

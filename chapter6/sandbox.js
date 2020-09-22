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


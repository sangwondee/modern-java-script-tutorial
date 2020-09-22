// ***สำคัญมาก***
// Document Object Model (DOM) เป็นการเข้าถึงแบบ node (binary tree) โดยจะเข้าถึงเป็น level ไปเลื่อยๆ

// const para = document.querySelector('p'); // เลือกเอา <p> โดยจะเลือกเอาแต่ตัวแรกที่มันเจอ.

// const para = document.querySelector('.error'); // ถ้าใส่ . จะเลือกเอาชื่อ class แรกของชื่อที่มันเจอ

// const para = document.querySelector('div.error'); // ถ้าใส่ . เราจะสามารสเข้าไปถึง class นั้นๆ เพราะทำงานเป็นแบบ object

// console.log(para);

// querySelectorAll => คือ การเลือกเอา element selector โดยต้องมันจะรับ tag eletemt ด้วย.

const params = document.querySelectorAll('p'); // จะออกมาเป็น NodeList ซึ่งเราสามารถใช้ตัวแปรแบบ array ได้

params.forEach(item => {
    console.log(item);
});
// console.log(params);
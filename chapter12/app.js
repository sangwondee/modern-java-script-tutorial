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

const request = new XMLHttpRequest();
// console.log(request);

// เมื่อ statechange มีการเปลี่ยแปลงก็จะทำการดักจับ
request.addEventListener('readystatechange', () => {
    // readyState => เป็นตัวบอกสถานะ ของ XMLHttpRequest โดยตัวที่ 4 นั้น จะมีความหมายว่า ทำงานเสร็จสิ้นแล้ว
    // อ่านเพิ่มเติม https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log('could not fetch the data');
    }
});

// ต้องการ 2 parameter เพื่อ 1. method 2. path(url)
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();



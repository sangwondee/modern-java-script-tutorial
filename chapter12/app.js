// Asynchronous Javascrpit (Start now and finish later) คือการทำงานแบบไม่่ต้องรอ process อื่นก่อนหน้านี้ทำงานเสร็จทำ
console.log(1)
console.log(2)

setInterval(() => {
    console.log('callback function fired !!!');
}, 2000);

console.log(3)
console.log(4)

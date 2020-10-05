// Testing RegEx

const username = 'shaung';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// .test() เหมือนเป็นการตรวจค่าต่างๆ ว่ามีค่าอยู่ใน pattern นั้นๆ หรือไม่ จะ return ค่าออกมาเป็น true and false

// if (result) {
//     console.log('regex test passed :)');
// } else {
//     console.log('regex test fail :(');
// }

let result = username.search(pattern);

// ส่วนใหญ่ใช้ตัวนี้กัน
// .search เป็นการเข้าไปค้นหาค่าต่างๆ ตัวแปล string ที่ใส่เข้าไป
// จะ return ออกมาเป็น 0 เมื่อเจอ และ return ค่าออกมาเป็น 1 เมื่อไม่เจอ

if (result >= 0) {
    console.log('regex test passed :)');
} else {
    console.log('regex test fail :(');
}
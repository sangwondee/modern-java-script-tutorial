// rest parameter
// การรับ parameter โดยที่เราไม่รู้ว่าค่าที่ส่งมาทั้งหมดมีกี่ค่า แต่มันจะนำค่าทั้งหมดมาทำเป็นตัวแปล array
const double = (...nums) => {
    // do someting
    console.log(nums);
    return nums.map(num => num * 2);
}
const result = double(1,3,5,7,9,2,4,6,8,10);
// console.log(result);

// spread syntax (arrays)
// คือการแยก array ออกเป็นตัวๆ อาจจะใช้ในกรณี ที่ต้องการรวม 2 array เข้าด้วยกัน
const people = ['shaun', 'ryu', 'crystal'];
const members = ['mario', 'chun-li', ...people];
console.log(members);

// spread syntax (objects)
// คือการแทนค่าของ object เข้าไปเลยไม่ใช่การใช้ค่า แบบ reference type
const person = { name: 'shaun', age:30 , job: 'net ninja'};
const personClone = { ...person, location: 'manchester' };

console.log(personClone);
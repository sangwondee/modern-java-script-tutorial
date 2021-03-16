// sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];

console.log(namesArray);

// Set เป็นออบเจ็คที่ใช้สำหรับเก็บข้อมูลที่ไม่ซ้ำกัน มันสามารถใช้เก็บได้ทั้งข้อมูลประเภทพื้นฐานและออบเจ็ค (Object reference)
// const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];

const uniqueNames = [... new Set(namesArray)];
// console.log(uniqueNames);

const ages = new Set();

// ages.add(20);
// ages.add(25).add(30);
// ages.add(25);
// ages.delete(25);

// console.log(ages, ages.size);
// console.log(ages.has(30), ages.has(25));
// ages.clear();
// console.log(ages);

const ninjas = new Set([
    { name: 'shaun', age:30 },
    { name: 'crystal', age:29 },
    { name: 'chun-li', age:32 },
]);

ninjas.forEach(ninja => {
    console.log(ninja.name);
});








// rest parameter
// การรับ parameter โดยที่เราไม่รู้ว่าค่าที่ส่งมาทั้งหมดมีกี่ค่าแต่มันจะนำค่าทั้งหมดมาทำเป็นตัวแปล array
// const double = (...nums) => {
//     // do someting
//     console.log(nums);
//     return nums.map(num => num * 2);
// }
// const result = double(1,3,5,7,9,2,4,6,8,10);
// // console.log(result);

// // spread syntax (arrays)
// // คือการแยก array ออกเป็นตัวๆ อาจจะใช้ในกรณี ที่ต้องการรวม 2 array เข้าด้วยกัน
// const people = ['shaun', 'ryu', 'crystal'];
// const members = ['mario', 'chun-li', ...people];
// console.log(members);

// // spread syntax (objects)
// // คือการแทนค่าของ object เข้าไปเลยไม่ใช่การใช้ค่า แบบ reference type
// const person = { name: 'shaun', age:30 , job: 'net ninja'};
// const personClone = { ...person, location: 'manchester' };

// console.log(personClone);
// DateTime is a object (Reference Type)
// const now = new Date;

// console.log(now);
// console.log(typeof now); // object

// // year, months, day, times
// console.log('getFullYear:' , now.getFullYear());
// console.log('getMonth:' , now.getMonth());
// console.log('getDate:' , now.getDate());
// console.log('getDay:' , now.getDay());
// console.log('getHours:' , now.getHours());
// console.log('getMinutes:' , now.getMinutes());
// console.log('getSeconds:' , now.getSeconds());

// // timestamps
// console.log('timestamp', now.getTime());

// //date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());


// timestamps
// เราสามารถ ใส่ค่าวันที่ที่เป็นตัวอักษรเข้าไปได้เลย
// const before = new Date('February 1 2019 7:30:59');
// const now = new Date;

// console.log(now.getTime(), before.getTime());

// // หาค่า เวลาที่ต่างกันจาก timestamp
// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = Math.round(diff / 1000 / 60); // เพราะ 1000 ms เท่ากับ 1 นาที
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(mins, hours, days);
// console.log(`the blog was written ${days} ago`);

// // converting timestamps into date objects
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));


// Building a Digital Clock Hell Yeah !!!
// const clock = document.querySelector('.clock');

// const tick = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = ("0" + now.getMinutes()).substr(-2); // ใส่ 0 ด้านหน้่ากรณีที่เวลาไม่่ถึง 10 นาที
//     const seconds = ("0" + now.getSeconds()).substr(-2);

//     const html = `
//         <span>${hours}</span> :
//         <span>${minutes}</span> :
//         <span>${seconds}</span>
//     `;

//     clock.innerHTML = html;
// }

// setInterval(tick, 1000); // แสดงเวลาทุกๆ วินาที


// Date-fns Library คล้ายๆกับ (MomentJs) แต่จะเร็วกว่าเอาที่เราถนัดเอา
const now = new Date();
// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// // comparing dates
// const before = new Date('February 1 2019 12:00:00');
// console.log(dateFns.distanceInWords(now, before, { addSuffix : true}));

// Moment js
// console.log(moment().format());
// type conversion การเปลี่ยนแปลงชนิดของข้อมูล
// let score = '100';
// console.log(typeof score);


// score = Number(score);  // เปลี่ยนค่าจาก string เป็น number
// console.log(typeof score);
// console.log(score + 1 );


// มันจะคืนค่าออกมาเป็น NaN เพราะค่าของมันเป็น string ที่ไม่สามารถเปลี่ยนเป็นตัวเลขได้
// let result = Number('hello');


// let result = String(50);
// let result = Boolean(0);
// let result = Boolean('a');
// let result = Boolean('');
// console.log(result, typeof result);


// Stict Comparison
let age = 25;

// loose comparison (diffenct typ can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// stict comparison (diffenct type can't still be equal) เวลาใช้ พวก operation ให้ใช้พวกเครื่องหมายนี้

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// includes คือการเข้าไปหาค่าในตัวแปรนั้น แต่จะ return ค่าออกมาเป็น true and false
// let result = email.includes('!');
// let result = names.includes('bowser');
// console.log(result);


// comparison operators

// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 20);

// let name = 'shaun';
// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');
// console.log(age);


// Arrays
// let ninjas = ['shaun', 'ryn', 'chun-li'];
// console.log(ninjas[1]);

// let ages = [20, 25,30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let result = ninjas.join('*')
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);

// เป็นการเพิ่มค่าเข้าไปในตัวแปรที่เป็น array โดยจะลบค่าเก่าแล้วเก็บค่าใหม่ แต่จะ return ออกมาเป็น ตำแหน่านั้น
// let result = ninjas.push('ken');

// เป็นการดึงค่าสุดท้ายออกมา
// let result = ninjas.pop();
// console.log(result);
// console.log(result, ninjas);


// const title = 'Best reads of 2020';
// const author = "Mario";
// const likes = 30;

// // conccatenation way
// // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + 'likes';
// // console.log(result);

// // template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);



// Numbers
// let redius = 10;
// const pi = 3.14;

// console.log(redius, pi);
// math operation +, -, *, /, **, %

// console.log(10 / 2);

// let result = redius % 3;
// let result = pi * redius**2;

// order of operation - B O D M A S

// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;

// likes = likes +1;

// shorthand
// likes++;
// likes--;

// likes += 10 // shorthand js
// likes -= 5 // shorthand js
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// Nan คือ ค่าที่ผิดพลาดของ javascript เพราะเกิดจากการบวกตัวเลขกับตัวอักษร
// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';

// console.log(result);




// common string methods
// let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n');

// let result = email.slice(2, 5); // เรืิ่มตำแหน่งที่ 2 ไป ถึงตำแหน่งที่ 5

// let result = email.substr(2, 5); // เริ่มตำแหน่งที่ 2 เอา 5 ตัว

// let result = email.replace('m', 'w'); // แทน string โดย จะเปลี่ยนจากตัวแรก

// let result = email.replace('n', 'w'); // แทน string โดย จะเปลี่ยนจากตัวแรก

// console.log(result);






// // Strings
// console.log('hello world');
// let email = 'sangwondee@gmail.com';
// console.log(email);

// // string concatenation (ต่อตัวอักษร)
// let firstName = 'Wichan';
// let lastName = 'Sangwondee';

// let fullName = firstName + " " + lastName;

// console.log(fullName);

// // Getting individual characters
// console.log(fullName[2]);

// // find length
// console.log(fullName.length); // มันเป็น function ของ string

// // String method
// console.log(fullName.toUpperCase()); // เป็นการเรียก method ของ string ค่าที่รับเข้าไปจะเป็น agument

// let result = fullName.toLowerCase();
// console.log(result);

// let index = email.indexOf('@');
// console.log('index of the @ sign:', index);
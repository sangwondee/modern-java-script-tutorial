// variable & block scope ***สำคัญมาก***

let age = 30;

if (true) {
    let age = 40;
    let name = 'shuan';

    console.log('inside 1st code block:' , age, name);

    if (true) {
        let age = 50;
        console.log('inside 2nd code block:', age);
    }
}

console.log('outside code block: ', age, name)



// Switch Statements
// const grade = 'A';

// switch (grade) {
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//     case 'D':
//         console.log('you got an D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
//         break;
// }

// Break and contiune
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
    // if (scores[i] === 0) {
    //     continue; ถ้าตรงกับเงื่อนไข ให้ข้าวตัวนัน้ไปก่อนแล้วทำงานที่เหลือทั้งหมด
    // }

    // console.log("your score:" , scores[i]);

    // if ( scores[i] === 100 ) {
    //     console.log("Congrats, you got the top score!");
    //     break; หมายถึงถ้าตรงกับเงื่อนไขแล้วให้หยุดทำงานทันที
    // }
// }


// logical NOT (!)
// let user = false;

// if (!user) {
//     console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);


// Logical operators - OR || and AND &&
// const password = 'pa@sasdfasfaaaa';

// if (password.length >= 12 && password.includes('@')) {
//     // includes() = คือการเช็คค่านั้น ว่ามีจริงไหมแต่จะ return เป็น true กับ false
//     console.log("that password is mighty strong");
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log("that password is strong enough!");
// } else {
//     console.log('password is not storng enough');
// }

// else if statements
// const password = 'p@ss';

// if (password.length >= 12) {
//     console.log("that password is mighty strong");
// } else if (password.length >= 8) {
//     console.log('that password is long enongh!');
// } else {
//     console.log("password is not long enough")
// }


// if statements
// const age = 25;

// if (age > 20) { // แต่ถ้าข้อมูลเป็น fasle มันจะไม่แสดงผลในหน้า console
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 3) {
//     console.log("that is a lot of ninjas");
// }

// const password = 'p@ss';

// if (password.length >= 8) {
//     console.log('that password is long enongh!');
// }


// do while loops
// let i = 3;

// do {
//     console.log('val of i is:', i);
//     i++;
// } while (i < 5);

// // while loops
// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;

// while (i < 5) {
//     console.log('in loop:', i);
//     i++;
// }

// let i = 0;

// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }



// for loops
// console.log('chapter 3');

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {

//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }
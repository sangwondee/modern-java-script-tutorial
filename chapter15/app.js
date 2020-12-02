// **** สำคัญมากกก ****
// ทุกคนคิดว่า js รูปแบบ type เป็น Obejct ทั้งหมด แต่จริงๆ แล้วมันเป็น type อื่นๆได้ เพิ่งแต่ทุก type มันจะถูกห่อหุ้มด้วย
// object เท่านั้นเอง

const names = ['shaun', 'crytal'];

// จะแสดงทุก _proto_ ซึ่งความจริงมันยังเป็น premitive type แต่มันจะถูก (wrapper temporary) (หุ้มด้วย object)
// จึงทำให้มันสามารถใช้งาน property ของ object ได้
console.log(names);

const ages = new Array(20, 25, 30)

console.log(ages)
// เรา create object ธรรมดาแต่มันจะ (wrapper temporary) ด้วย object ของ javascrpit แล้วทำให้เราสามารถใช้งาน property ได้เลย
const userOne = {}
console.log(userOne)

const userTwo = new Object
console.log(userTwo)
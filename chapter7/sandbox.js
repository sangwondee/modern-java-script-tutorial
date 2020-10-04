
const form = document.querySelector('.signup-form')

// ถ้าหากจะอ้างขึ้นถึง form ให้ใส่เครื่องหมาย # สำคัญมาก
// const username = document.querySelector('#username');

// dot notation = การเข้าถึงข้อมูล
form.addEventListener('submit', e => {

    e.preventDefault(); // ใช้ในการหยุด event ทุกอย่างแล้วมาทำ event ด้านล่างนี้

    // เราสามารถเข้าถึง form attribute ใน form ได้ โดยการใช้ dotnotation
    console.log(form.username.value);
    // username.value()

    // console.log(form.username.value);
});
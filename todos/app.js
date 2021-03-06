const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();

    if (todo.length) {
        genrateTemplate(todo);
        addForm.reset();
    }
})

const genrateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

// delete todos
list.addEventListener('click', e => {
    console.log(e.target.classList);
    // .contains เป็นเหมือน เลือกว่าจะเอา contains('รับค่าเป็น') class ไหน
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// มีความ งง อยู่
const filterTodos = (term) => {
    // list ตัวนี้จะออกมาเป็น HTMLCollection เรามาใช้ children ต่อเพราะเราจะเอาค่าใน list ของมัน
    // Array.from คือการแปลงค่า HTMLCollection เป็น array เพื่อเราจะได้เรียกใช้ function ต่างๆ ได้.

    // แปลง HTMLCollection to array แล้ว filter ตัว todo โดยที่ไม่เอาตัว todo list ที่รับค่าเข้ามาแล้วค่อยไปเพิ่ม class filtered
    // ซึ่ง class filtered จะแสดง display none;
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))
}

// Search มีความงงอยู่อาจจะต้องดูและทำความเข้าใจอีกรอบ
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
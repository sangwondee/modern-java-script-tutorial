// collection() เป็นการเลือกว่าจะใช้ collection(table) ไหน
// เป็นการ get ค่ามากจาก database คืนค่าออกมาเป็น promise

// snapshort คือ ??? เหมือนเป็นตัว ที่บอกว่าเราทำงานที่ไหนในขนาดนั้น
// Start here !!!
db.collection('recipes').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addRecipe(doc.data());
    });
}).catch(err => {
    console.log(err);
})

const list = document.querySelector('ul');

const addRecipe = (recipe) => {
    let time = recipe.created_at.toDate();

    let html = `
        <li>
            <div>${recipe.title}</div>
            <div>${time}</div>
        </li>
    `;

    list.innerHTML += html;
}
const list = document.querySelector('ul');
const form = document.querySelector('form');

// collection() เป็นการเลือกว่าจะใช้ collection(table) ไหน
// เป็นการ get ค่ามากจาก database คืนค่าออกมาเป็น promise

// snapshort คือ ??? เหมือนเป็นตัว ที่บอกว่าเราทำงานที่ไหนในขนาดนั้น
// Start here !!!
db.collection('recipes').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addRecipe(doc.data(), doc.id);
    });
}).catch(err => {
    console.log(err);
})


// Functions
const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
        <li data-id = "${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;

    list.innerHTML += html;
}

form.addEventListener('submit', e => {

    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        // คือการแปลงค่า timestamp ที่เข้ามาแล้วเปลี่ยนค่าไปเป็น timestamp ของ firebase
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    // save data to firebase
    db.collection('recipes').add(recipe).then(() =>{
        console.log('recipes added');
    }).catch(err => {
        console.log(err);
    })
});

// deleteing data
list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        // เอาไป delte ในดาด้าเบส โดยส่ง id ไป
        db.collection('recipes').doc(id).delete().then(() =>{
            console.log('recipe deleted');
        })
    }
});
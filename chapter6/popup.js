const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper'); // อย่าลืมว่าถ้าหากเป็น class ให้ใส่เครื่องหมาย . ก่อนหน้าด้วย
const close = document.querySelector('.popup-close'); // อย่าลืมว่าถ้าหากเป็น class ให้ใส่เครื่องหมาย . ก่อนหน้าด้วย

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

close.addEventListener('click', () => {
    popup.style.display = 'none'
});

popup.addEventListener('click', () => {
    popup.style.display = 'none'
});
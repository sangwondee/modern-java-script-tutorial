const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        // คือการวนเอาค่าคำตอบที่อยู่ใน index ไปเทียบกับค่าของ correctAnswers
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    if (score > 0) {
        // window object ?
        scrollTo(0,0);
        // result.querySelector('span').textContent = `${score}%`;
        result.classList.remove('d-none');
        // เป็นการ set Animations เวลาตัวเลขค่อยเพิ่มขึ้นมา.
        let output = 0;
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
            output === score ? clearInterval(timer) : output++;
        }, 10);
    }
})
//Basic Form validattion
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-z]{6,12}$/;

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     const username = form.username.value;

//     if (usernamePattern.test(username)) {
//         feedback.textContent = 'that username is valid !';
//     } else {
//         feedback.textContent = 'username must contain letters only & be between 6 to 12';
//     }
// });

form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        // setAttribute คือ set ค่าของ class นั้นๆ ให้ success
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});

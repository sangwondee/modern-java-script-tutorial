//Basic Form validattion

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
    event.preventDefault();

    const username = form.username.value;
    const usernamePattern = /^[a-zA-z]{6,12}$/;

    if (usernamePattern.test(username)) {
        feedback.textContent = 'that username is valid !';
    } else {
        feedback.textContent = 'username must contain letters only & be between 6 to 12';
    }
});

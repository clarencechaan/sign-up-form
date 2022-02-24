const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const notMatching = document.querySelector('.not-matching-text')

function checkPasswordsMatch()  {
    if (password.value === confirmPassword.value) {
        notMatching.classList.add('hidden');
        password.classList.remove('not-matching');
        confirmPassword.classList.remove('not-matching');
    } else {
        notMatching.classList.remove('hidden');
        password.classList.add('not-matching');
        confirmPassword.classList.add('not-matching');
    }
}

console.log(password);
password.addEventListener('keyup', checkPasswordsMatch);
confirmPassword.addEventListener('keyup', checkPasswordsMatch);

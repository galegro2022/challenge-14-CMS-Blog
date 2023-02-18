const formEl = document.querySelector('#signupForm');

function makeUser(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#password').value.trim();

    const newUserObj = {
        name,
        password
    }

    fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify(newUserObj),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

formEl.addEventListener('submit', makeUser);
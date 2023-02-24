//sign up form
const formEl = document.querySelector('#signupForm');
//var source   = document.getElementById("tpl").innerText;
console.log(formEl)
console.log("hello world")
function makeUser(event) {
    event.preventDefault();
    console.log("made it to makeUser")
    const password = document.querySelector('#password').value;
    const name = document.querySelector('#name').value;
    const newUserObj = {
        password,
        name
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
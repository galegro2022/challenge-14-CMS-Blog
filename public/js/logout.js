//logout request
const logoutBtn = document.querySelector('#logoutBtn');

function logout () {
    fetch('/api/users/logout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, })
    //.then(res => res.json())
    .then(data => console.log(data))
}

logoutBtn.addEventListener('click', logout);
//login request


// //function login() {
//     console.log("made it to login==================")
//     fetch async,('/api/users/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, })
//     then(res => res.json())
//     .then(data => console.log(data))
// //}
const loginbtn = document.querySelector('#loginbtn');

login = async (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;

    const res = await fetch("api/users/login",{
        method: "POST",
        body: JSON.stringify({name, password}),
        headers: { 'Content-Type': 'application/json' }
    })
}

loginbtn.addEventListener('click', login);
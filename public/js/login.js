const loginBtn = document.querySelector('#login_form');
const signupBtn = document.querySelector('#create-acct');

async function handleLogin(e) {
    e.preventDefault()
    // const email = document.querySelector('#signup-email').value;
    const username = document.querySelector('#username_login').value;
    const password = document.querySelector('#password_login').value;


    const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header

    })
    if (response.ok) {
        document.location.replace('/')
    }
    else {
        alert('login failed')
    }

}


async function handleSignup(e) {
    e.preventDefault()
    const email = document.querySelector('#signup-email').value;
    const username = document.querySelector('#signup-username').value;
    const password = document.querySelector('#signup-password').value;
    const data = {
        email,
        username,
        password
    }
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header

    })

    if (response.ok) {
        document.location.replace('/')
    }
    else {
        alert('signup failed')
    }

}



loginBtn.addEventListener('submit', handleLogin)
signupBtn.addEventListener('submit', handleSignup)
// will need a login function as well

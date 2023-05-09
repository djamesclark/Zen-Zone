const createButtonEl = document.querySelector('#create-acct');
createButtonEl.addEventListener('click', async function (){
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
         
    }
    )
})

// will need a login function as well

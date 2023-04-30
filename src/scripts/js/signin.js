const form = document.querySelector('.card form');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type': 'application/json'} : {}
    }).then(response => {
        if (response.status >= 400) {
            response.json().then(errorRes => {
                const error = new Error('Something went wrong');
                error.data = errorRes;
                throw error;
            })
        }
        return respnse.json();
    })
}

const signin = () => {
    sendHttpRequest('POST', 'http://localhost:8000/api/v1/signin', {
        email: 'lois@test.com',
        password: 'lois'
    }).then(data => {
        console.log(data)
    }).catch(error => {
        console.log(error);
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    signin();
    document.querySelector("fa-arrow-left").addEventListener("click", function() {
        window.location.href = "client\src\pages\index.html";
      });
})
let url = window.location.href;

let urlClass = new URL(url);

let email = urlClass.searchParams.get('emailSub');

const infoEmail = document.querySelector('.confirmaEmail');

infoEmail.innerHTML = email;

document.addEventListener('keypress', function(event){

    if(event.key === 'Enter'){

        let btn = document.querySelector('#dismiss');

        btn.click();
    }
});
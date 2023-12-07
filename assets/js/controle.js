const suc = document.querySelector('.success');

const sub = document.querySelector('.secSign');

document.getElementById('subscribe').disabled = true;

const msgValid = document.querySelector('#msgValid').classList.add('display');


document.getElementById('email').addEventListener('input', function(event){
    
    let conteudo = document.getElementById('email').value;

    mascara = /\S+@\S+\.\S+/;

    valida = mascara.test(conteudo);

    if(conteudo !==null && conteudo !== '' && !valida){

        document.getElementById('msgValid').classList.remove('display');
        
    }else if(valida){

        document.getElementById('subscribe').disabled = false;
        
        document.getElementById('subscribe').classList.add('botaohv');

        document.getElementById('msgValid').classList.add('display');
    
    }else{

        document.getElementById('subscribe').disabled = true;
    }

})


suc.classList.add('display');

function verificaInput(){

}

function troca(id) {

  if (id == 'secSign') {

    sub.classList.add('display');

    suc.classList.remove('display');

    const email = document.querySelector('#email');

    const emailDigitado = email.value;

    const infoEmail = document.querySelector('.confirmaEmail');

    infoEmail.innerHTML = emailDigitado;


  } else if (id == 'success') {

    suc.classList.add('display');

    sub.classList.remove('display');


  }

}

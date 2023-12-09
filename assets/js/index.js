document.getElementById('subscribe').disabled = true;

const msgValid = document.querySelector('#msgValid').classList.add('display');


// função para validar e-mail e liberar o botão de subscribe
document.getElementById('email').addEventListener('input', function(event){
    
    let conteudo = document.getElementById('email').value;

    mascara = /\S+@\S+\.\S+/;

    valida = mascara.test(conteudo);

    if(conteudo !==null && conteudo !== '' && !valida){

        document.getElementById('msgValid').classList.remove('display');
        
    }else if(valida){

        document.getElementById('subscribe').disabled = false;
        
        document.getElementById('subscribe').classList.add('botaohv');

        document.getElementById('subscribe').classList.add('botaoact');

        document.getElementById('msgValid').classList.add('display');
    
    }else{

        document.getElementById('subscribe').disabled = true;
    }

})



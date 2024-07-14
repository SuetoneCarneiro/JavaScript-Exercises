const altura = document.querySelector('input[name=altura]');
const peso = document.querySelector('input[name=peso]');
const sexo = document.querySelector('input[name=sexo]:checked');
const condicao = document.querySelector('#imc')

function calculadoraDeIMC(){
    const imc = peso.value/(altura.value**2);
    const border = {
        'Abaixo do Peso': 'border border-warning bg-warning text-white',
        'Peso Normal': 'border border-sucess bg-success text-white',
        'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
        'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
        'Obeso': 'border border-danger bg-danger text-white'
    }

    let result = '';

    if(sexo.value === 'masculino'){
        if(imc <= 20.7) result = 'Abaixo do Peso';
        if(imc > 20.7 && imc <= 26.4) result = 'Peso Normal';
        if(imc > 26.4 && imc <= 27.8) result = 'Marginalmente Acima do Peso';
        if(imc > 27.8 && imc <= 31.1) result = 'Acima do Peso Ideal';
        if(imc > 31.1) result = 'Obeso';
    }
    if(sexo.value === 'feminino'){
        if(imc <= 19.1) result = 'Abaixo do Peso';
        if(imc > 19.1 && imc <= 25.8) result = 'Peso Normal';
        if(imc > 25.8 && imc <= 27.3) result = 'Marginalmente Acima do Peso';
        if(imc > 27.3 && imc <= 32.3) result = 'Acima do Peso Ideal';
        if(imc > 32.3) result = 'Obeso'
    }

    condicao.value = result;

    condicao.className = 'form-control form-control-lg ' + border[result];
    
}


document.body.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        event.preventDefault();
        altura.value = '';
        peso.value = '';
        condicao.value = '';
        condicao.className = 'form-control form-control-lg';
        altura.focus();
    }
    if(event.key === 'Enter'){
        event.preventDefault();
        calculadoraDeIMC();
    }
    
})
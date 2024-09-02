const cep = document.querySelector('#cep');
const erroCep = document.querySelector('#cepError')
const bairro = document.querySelector('#neighborhood');
const rua = document.querySelector('#street');
const numero = document.querySelector('#number');
const cidade = document.querySelector('#city');
const estado = document.querySelector('#state');


cep.addEventListener('change', () => {
    let numeroCep = cep.value
    let validaCep = /\d{5}-?\d{3}/;
    if(validaCep.test(numeroCep)){
        requisicao(numeroCep);
    }else{
        erroNaRequisicao();
    }
})

function requisicao(numeroCep){
    let url = `https://viacep.com.br/ws/${numeroCep}/json/`;
    fetch(url)
        .then(resp => resp.json())
        .then(info =>{
            if(info.erro){
                limparCampos();
            }else{
                rua.value = info.logradouro;
                bairro.value = info.bairro;
                cidade.value = info.localidade;
                estado.value = info.uf;

                numero.focus();
                removerErro();
            }
        })
        .catch(error =>{
            erroNaRequisicao();
        })
}

function limparCampos(){
    rua.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
    numero.value = '';
}

function erroNaRequisicao(){
    cep.setAttribute('class', 'input-cep-error');
    erroCep.classList.remove('hidden');
    limparCampos();
}

function removerErro(){
    cep.classList.remove('input-cep-error')
    erroCep.classList.add('hidden')
}
//Array para armazenar os amigos 
let amigos = [];

//Função para adicionar o amigo no array
function adicionarAmigo(){
    let amigo = document.querySelector('input').value.trim();

    // Verificando se o campo está vazio, se não, adiciona no array
    if (amigo == ''){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
        limparInput();
        listaArrayAmigos();
    }
}

// Função para limpar o campo
function limparInput(){
    let input = document.querySelector('input');
    input.value = '';
}

//Função para fazer uma lista do array
function listaArrayAmigos(){
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Função para sortar um amigo
function sortearAmigo(){
    if (amigos.length == 0){
        alert('A lista de amigos está vazia! Adicione nomes para sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}!`;

}
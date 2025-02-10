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
    let lista = document.getElementById('resultado');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


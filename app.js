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
        console.log(amigos);
        limparInput();
    }
}

// Função para limpar o campo
function limparInput(){
    amigo = document.querySelector('input');
    amigo.value = '';
}
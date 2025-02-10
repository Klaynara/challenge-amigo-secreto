# :gift: Challenge Amigo Secreto

> Programa ONE - parceria de Alura e Oracle

## :trophy: Proposta do Desafio
Neste desafio proposto, nos foi passado para fazer uma aplicação onde os usuários possam fazer o sorteio de um amigo secreto, inserindo os nomes que desejam numa lista, para então, ser sorteado apenas um dos nomes.

## :clapper: Demonstração
Ao utilizar o site, seguirá da segunte forma:
* O usuário deverá escrever os nomes pelo campo de texto e clicar no botão "Adicionar" para adicionar os nomes à lista.
  ![tela_simples](https://github.com/user-attachments/assets/384e5566-fcd7-4952-9d59-7b23d4080836)

* Quando o nome é adiconado, haverá uma lista visível na página abaixo do campo de texto com todos os nomes.
  ![tela_lista](https://github.com/user-attachments/assets/9071138f-379b-44e2-9cc5-8f07cda8ada6)

* E então, para o sorteio, será apenas necessário clicar no botão "Sortar Amigo" que irá aparecer o nome do amigo sorteado em verde.
  ![tela_sorteado](https://github.com/user-attachments/assets/a25f016b-7dfb-4fd5-a464-d8c702b26ae7)

## :building_construction: Funcionalidades
* __Adicionar Amigos__
  * O usuário insere um nome em um campo de entrada e clica no botão "Adicionar".
  
  * O nome é armazenado em um array.

  * Se o campo estiver vazio, um alerta impede a adição.

  * Após adicionar, o campo de entrada é limpo automaticamente.

* __Exibir a lista de amigos__
  * Os nomes adicionados são exibidos dinamicamente em uma lista.
  
  * Antes de atualizar a lista, ela é limpa para evitar duplicação.
  
  * Cada nome é adicionado como um item dentro da lista.

* __Sortear amigo__
  * O usuário pode sortear aleatoriamente um amigo da lista.
    
  * O sorteio utiliza Math.random() e Math.floor() para escolher um nome.

## :computer: Tecnologias Utilizadas
* HTML → Estrutura da página
* CSS → Estilização da interface
* JavaScript → Manipulação do DOM e lógica da aplicação

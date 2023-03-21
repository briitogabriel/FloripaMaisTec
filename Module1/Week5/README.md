
## Week 3 - Node Server

### Node, Array manipulations, methods, CLI. Enunciated below in portuguese:

**[M1S05] Ex 1 - Função deletar dados duplicados**

Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria', 'Luis’, 'Danilo’, 'José’]

Através de lógica de programação, remova os duplicados e exiba quais nomes que estavam duplicados e a nova lista sem eles.

Exemplo:

José, Danilo, ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria', 'Luis’]

Regra 1: Não é necessário nenhum envio de dados.

Regra 2: Deve remover somente os duplicados, e deixar uma lista com os items únicos

Regra 3: Exibir o resultado dos deletados conforme no exemplo. Printar os dados que foram deletados e exibir a lista sem duplicados.

**[M1S05] Ex 2 - Função de exibir dados dos usuários**

Dada a seguinte lista, de forma decrescente, retorne os dados das 2 listas de forma agrupada, pela seguinte ordem.

usuarios - Crescente: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

frutas - Descrescente:[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” , “Laranja“]

Resultado esperado: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ]

**[M1S05] Ex 3 - Função para adicionar novos usuários na lista**

Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

Através de lógica de programação, adicione um ou mais nomes na lista, porém não é possível receber um nome igual.

Regra 1: É necessário enviar um ou mais nomes;

Regra 2: Caso um ou mais nomes já exista na lista retorne uma mensagem de erro;

Regra 3: Se entre os nomes enviados, receber um valor diferente de uma string, retornar uma mensagem de erro;

Regra 4: Caso se enquadre, nas primeiras 3 regras, retornar um log da nova lista com os nomes adicionados junto aos anteriores

**[M1S05] Ex 4 - Função para retornar dados filtrados**

Utilizar o array de objetos:

    [

    {nome: "luis", idade: 26},

    {nome: "norma", idade: 16},

    {nome: "daiana", idade: 26},

    {nome: "jorge", idade: 16},

    {nome: "kauan", idade: 16},

    {nome: "charles", idade: 26},

    {nome: "marco", idade: 16},

    {nome: "bruno", idade: 16}

    ]

Retornar uma lista separada pelos usuários com idades menores de 18 e outra com os usuários maiores ou iguais a 18.

**[M1S05] Ex 5 - Função para contar vogais**

Criar um algoritmo que conte o total de vogais baseado na string que foi enviada.

Regra 1: Caso não seja uma string, retorne uma mensagem de erro.

Regra 2: Caso identifique pelo menos 1 vogal, retorne o número exato.

Regra 3: Caso na palavra, não conste nenhuma vogal, retorne uma mensagem informe que não tem nenhuma vogal
## Stack

#### NodeJs
## Local use

#### You must have node installed
Clone

```bash
  git clone https://github.com/briitogabriel/FloripaMaisTec.git
```

Access project's directory

```bash
  cd Module1/Week5
```

Install dependencies

```bash
  npm install
```

Run server

```bash
  node server.js
```

Interact with the terminal to see the exercises
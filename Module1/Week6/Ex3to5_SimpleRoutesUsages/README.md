
## Week 6 - API with Express

### Node server, API, routes, req/res, params/body, endpoints,HTTP status. Enunciated below in portuguese:

**[M1S06] Ex 3 - Iniciando um servidor node**

Inicie um servidor node local em sua máquina utilizando express.

O resultado esperado é imprimir na tela do navegador uma mensagem da sua escolha.

**[M1S06] Ex 4 - Rotas com express**

Crie uma rota HTTP com express para simular o envio do seu nome como parâmetro da url e imprima em um console.log() a mensagem “Rota de API criada pelo(a): {nome}”;

OBS: substitua o {nome} pelo nome que é passado como parâmetro da url.

OBS: utilize a plataforma de API que você preferir.

**[M1S06] Ex 5 - Rotas com express**

Crie uma rota HTTP com express para simular o envio de um objeto pelo corpo da requisição e como resposta retorne esse objeto no formato json padrão.

OBS: utilize a plataforma de API que você preferir.
## Stack

#### NodeJS, Express, Nodemon, Insomnia/Postman
## Local use

#### You must have node installed
Clone

```bash
  git clone https://github.com/briitogabriel/FloripaMaisTec.git
```

Access project's directory

```bash
  cd Module1/Week6/Ex3to5_SimpleRoutesUsages
```

Install dependencies

```bash
  npm install
```

Run server

```bash
  npm start
```

Open a 'API Client' software to reach the endpoints and methods:

```bash
  GET simple message ->
  localhost:3333/

  GET req params and receive a JSON with the name ->
  localhost:3333/nome='name'

  POST req body and receive a JSON with the name ->
  localhost:3333/bodymessage
  {
    body = 'name'
  }
```
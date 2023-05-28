
## Week 4 - Bikcraft

### DOM manipulation, Styling, Events

**[M2S04] Exercícios - Roteiro de Desenvolvimento**

Construir telas adicionais para o exercício desenvolvido em aula, “Bikcraft”, utilizando os conceitos de linhas / colunas do bootstrap para uma melhor experiência e codificação, adicionar ainda possibilidade de alteração do tema do site.

Link da base do exercício: https://github.com/FullStack-Trindade/conteudo-html/tree/development/exercicios/bikcraft

**[M2S04] Ex 1 - Tela de Contato (Parte 1 - Seção Formulário)**

Desenvolver a tela de contato seguindo o padrão presente em: https://www.origamid.com/projetos/bikcraft/contato.html

Utilizar das mesmas variáveis do exercício base desenvolvido em aula. Para a sessão de “formulário”, desenvolver para o card de contato uma organização 4-8 para as colunas em desktop e 12-12 para mobile.

Aproveitar o mesmo header desenvolvido no projeto base em aula.

**[M2S04] Ex 2 - Tela de Contato (Parte 2 - Seção Lojas Locais)**

Desenvolver a tela de contato seguindo o padrão presente em: https://www.origamid.com/projetos/bikcraft/contato.html

Para a seção “lojas locais” utilizar a organização “row” e “col” presente no bootstrap, para que em mobile esteja um item abaixo do outro (sm-12) e desktop um item ao lado do outro (md-6).

**[M2S04] Ex 3 - Tela de Contato (Parte 3 - Seção Footer)**

Desenvolver a tela de contato seguindo o padrão presente em: https://www.origamid.com/projetos/bikcraft/contato.html

Desenvolver a seção footer do site, que poderá ser reaproveitada em outras telas assim como header.

O footer deve ser organizado com 3 colunas em versão desktop (md) e em 1 coluna para mobile (sm).

**[M2S04] Ex 4 - Tela de Bicicletas (Parte 1)**

Desenvolver a tela de biciletas seguindo o padrão presente em: https://www.origamid.com/projetos/bikcraft/bicicletas.html

Desenvolver a tela, reaproveitando os componentes já desenvolvidos no exercício base (em aula) e o footer da tela de contato.

Construir a section com as bicicletas como mostrado no site e na imagem abaixo, ou seja, mantendo o aspecto de duas colunas iguais (6-6).

Para a área da imagem + preco, agrupar os dois itens dentro de uma div como position relative para facilitar o posicionamento da precificação.

**[M2S04] Ex 5 - Tela de Bicicletas (Parte 2)**

Desenvolver a tela de biciletas seguindo o padrão presente em: https://www.origamid.com/projetos/bikcraft/bicicletas.html

Para cada botão inserido de “mais sobre” relacionados a bicicleta, realizar uma ação de onclick no botão e chamar uma função no javascript.
A função deve receber qual o código da bicicleta selecionado e gerar um log no console contendo a seguinte informação:

‘Ir para a página da bicicileta ${nome_bicicleta}’



Para capturar o nome da bicicleta, deverá ter um array no javascript com o conteúdo abaixo e realizar busca via ID:

const bicicletas = [
{ id: 1, name: 'Nimbus Stark', price: 4999 },
{ id: 2, name: 'Magic Might', price: 2499 },
{ id: 3, name: 'Nebula Cosmic', price: 3999 },
]

**[M2S04] Ex 6 - Mudança de Cor dos botões**

Adicionar uma opção no menu que altera a cor do “ativo” no site, passando de amarelo (#fb1) para a cor verde #06bc37.

O botão deve ser incluido no header da aplicação com o nome “Alterar Cor Ativa”. E deve ser aplicada a cor em todos os elemntos que possuem o amarelo como padrão, ou seja, substituindo toda cor pela nova.

**[M2S04] Ex 7 - Mudança de Tema do site**

Acrescentar um ícone no header para mudança de tema do site. O novo tema a ser aplicado deve ser na cor branca, mantendo grande parte do padrão de cores na versão dark.

Aplicar esta funcionalidade apenas na home do site. Deixo abaixo uma visualização próxima que deve ser aplicada.

## Stack

#### Javascript, CSS, HTML, Bootstrap

## Local use

#### You must have node installed
Clone

```bash
  git clone https://github.com/briitogabriel/FloripaMaisTec.git
```

Access project's directory

```bash
  cd Module2/Week4/Bikcraft
```

Open the index.html file and interact with the forms

```bash
  index.html
```


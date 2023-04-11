# Esquenta para o Projeto TrybeWallet #

## Projeto Post List ##


# Orientações # 
1 - Clone o repositório do exercício
- Use o comando: 
`
 git clone git@github.com:gBatiista/esquenta-trybewallet.git
`

2 - Instale as dependências
- `npm install`

# Requisitos #

## 1. Faça o setup inicial do Redux criando as seguintes pastas e arquivos:

 > 1 - src/redux ---- contendo o arquivo: `store.js` <br><br>
   2 - src/redux/reducers ---- contendo os arquivos:  `userReducer.js, postsReducer.js, index.js` <br> obs: realizar o `combineReducers` no arquivo `index.js` <br><br>
   3 - src/redux/actions ---- contendo os arquivos:  `userAction.js, postsAction.js` <br><br>
   4 - src/redux/types ---- contendo os arquivos:  `userType.js, postsType.js` <br>


## 2. Crie uma página de **Login** ##

- Crie um componente `Login` que será o seu formulário dentro  do diretório `src/pages`.
- O componente deve ter um elemento do tipo `form` e conter os seguintes inputs:

> 1 - Input do tipo `email` que será o campo referente ao email do usuário <br>
2 - Input do tipo `password` que será o campo referente ao password do usuário <br>

- Inserir um botão com o texto "Login" que devera redirecionar para a rota `/posts`

- ao clicar no botão você deve disparar uma `action` para salvar o email e password dentro de userReducer.

## 3. Crie uma página de **Posts**
  - Ao inicializar essa página deve disparar uma `action` para fazer o fetch em uma API de posts, a função para o fetch já existe dentro de `/src/utils/fetchPosts.js` **Dica: lembrem do redux-thunk**
  - Os `posts` devem ficar salvos dentro de postsReducer
  <br><br>
  - Essa página deve conter um `form` simples para adicionar `nome` e `número de telefone` nas informações do usuário
> OBS: Cuidado para não apagar as informações já existentes do usuário.


## 4. Crie um componente chamado **UserInfo** em `src/components`
- Esse componente deve renderizar as seguintes infomações do usuário
- 1 - Email <br>
  2 - Nome <br>
  3 - Telefone <br>

- Você pode utilizar qualquer tag HTML que faça sentido

- Renderize esse componente abaixo do forms na página `Posts`

## 5. Por fim faça um **.map()** dos posts salvos no Redux dentro da página **Posts**
  - Crie uma tag `div` com a classe `"divcontent"`
  - Dentro de `divcontent` faça o map de posts criando uma outra `div` com a classe `"divposts"`
  - Por fim dentro de divposts renderize `userId`, `title` e `body` de cada post utilizando tags HTML da sua escolha

## (BONUS) - 5. Em Login, crie a função `validateFields`
A função `validateFields` deverá validar os campos de `email`  e `password` com as seguintes condições:
- `email` deve ser um email valido
- `password` deve ter mais de 4 caracteres

E, caso os campos sejam válidos, o botão "Adicionar" deve ser habilitado via `state` disabledButton.

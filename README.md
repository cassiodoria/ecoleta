<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/nlw.png" width="250px" />
</h1>

<h4 align="center"> 
	Ecoleta -  NextLevelWeek 1.0 🚀
</h4>
<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="250px" />
</p>

<p align="center">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/cassiodoria/ecoleta">
	
  <a href="https://www.linkedin.com/in/cassio-doria/">
    <img alt="Made by cassiodoria" src="https://img.shields.io/badge/made%20by-cassiodoria-%2304D361">
  </a>

  <a aria-label="Completed" href="https://nextlevelweek.com/aulas/booster/1/edicao/1">
    <img src="https://img.shields.io/badge/NLW-done-brightgreen?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
  
  <a href="https://github.com/cassiodoria/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/cassiodoria/ecoleta">
  </a>

  <a href="https://github.com/cassiodoria/ecoleta/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  </a>
</p>

<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

# 💻Projeto

O projeto **Ecoleta** foi desenvolvido na NextLevelWeek 1.0 🚀 oferecido pela [Rocketseat]. É um projeto completo com backend (API), Aplicação Web e Aplicação Mobile.<br />

<img alt="Insomnia" src=".github/ecoleta.png" />

 Na **Aplicação Web** é possível cadastrar pontos de coleta (Ecopontos, Supermercados, Prefeituras) de materiais que necessitam de descarte correto (Lâmpadas, Pilhas, Baterias, Papéis, Papelão, Resíduos Eletrônicos, Resíduos Organicos e Óleo de Cozinha).<br />
Já o servidor backend gerencia os dados cadastros e disponíbiliza o acesso aos dados via **API REST**<br />
No **Aplicativo Mobile** é possível consultar os locais cadastrados na aplicação web pelo mapa filtrando pelos tipos de materiais que o local coleta.

# 🛠Tecnologias

### Server (API)
* [Node.JS](https://nodejs.org/en/docs/)
* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [SQLite](https://www.sqlite.org/index.html)
* [Knex](http://knexjs.org/)
* [Multer](https://www.npmjs.com/package/multer)
* [Cors](https://github.com/expressjs/cors)
* [Celebrate](https://www.npmjs.com/package/celebrate)

### Web
* [ReactJS](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Axios](https://github.com/axios/axios)
* [Leaflet](https://leafletjs.com/)
* [ReactDropzone](https://react-dropzone.js.org/)

### Mobile
* [React Native](https://reactnative.dev/)
* [Expo](https://docs.expo.io/)
* [Axios](https://github.com/axios/axios)
* [Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
* [Map View](https://docs.expo.io/versions/latest/sdk/map-view/)

#  🚀Como Usar

Para usar a aplicação, você precisa de [Git](https://git-scm.com) e [Node.js][nodejs] instalado no seu computador. Com as ferramentas instaladas, basta seguir os passos a seguir:

### Clonar o projeto

```bash
# Clonar o projeto Ecoleta do repositório
$ git clone https://github.com/cassiodoria/ecoleta
```

### Server (API) 

```bash
# Entre na pasta server
$ cd ecoleta/server

# Instale as dependências
$ npm install

# Crie o arquivo de banco de dados (database.sqlite) e suas tabelas
$ npm run knex:migrate

# Popule os dados da tabela items (Lâmpadas, Pilhas e Baterias, Papéis e Papelão, Resíduos Eletrônicos, Resíduos Organicos e Óleo de Cozinha)
$ npm run knex:seed

# Executa o servidor no endereço localhost a porta 3333
$ npm run dev
```
Para testar se o servidor subiu corretamente e os dados do banco de dados estão corretos, basta fazer um GET (ou acessar via browser) no endereço `http://localhost:3333/items` e verificar se os itens (Lâmpadas, Pilhas e Baterias, Papéis e Papelão, Resíduos Eletrônicos, Resíduos Organicos e Óleo de Cozinha) são retornados.

Exemplo usando a ferramenta [Insomnia](https://insomnia.rest/)
<img alt="Teste do server usando Insomnia" src=".github/insomnia.png" />

### Web

```bash
# Entre na pasta web
$ cd ecoleta/web

# Instale as dependências
$ npm install

# Execute a aplicação web. A aplicação será aberta no endereço localhost na porta 3000
$ npm start
```

<img alt="Aplicação Web" src=".github/aplicacao-web.png" />

### Mobile
Para testar a aplicação mobile, é possível usar um emulador ou a ferramenta [Expo] no seu celular.

```bash
# Entre na pasta mobile
$ cd ecoleta/mobile

# Instale as dependências
$ npm install

# Execute a aplicação mobile. A ferramenta irá abrir. Basta escaniar o qrcode no próprio terminal ou na página do Expo que irá abrir no browser. 
$ npm start

# Se ocorrer algum problema relacionado a fonte, execute o comando a seguir:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

Exemplo usando a ferramenta [Expo]
<img alt="Teste da aplicação mobile usando Expo" src=".github/aplicacao-mobile.png" />


# 🤔Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

# 📝Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/cassiodoria/ecoleta/blob/master/LICENSE) para mais detalhes.

Feito com ♥ by [Cássio Dória](https://www.linkedin.com/in/cassio-doria/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[Rocketseat]: (https://www.rocketseat.com.br)
[Insomnia]: (https://insomnia.rest/)
[Expo]: (https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)
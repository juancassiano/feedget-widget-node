# API de Feedback

Essa API recebe um feedback do usuário, podendo ser do tipo: BUG, IDEIA, ou OUTROS, permitindo enviar também uma screenshot e salvando em um banco de dados.

## References

- [Documentação Prisma](https://www.prisma.io/docs/concepts/database-connectors/sqlite)
- [Documentação Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Documentação Nodemailer](https://nodemailer.com/usage/)
- [Documentação Express](https://expressjs.com/pt-br/api.html)

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/juancassiano/feedget-widget-node
```

Entre no diretório do projeto

```bash
  cd  feedget-widget-node
```

Instale as dependências

```bash
  npm install
```

Visualize, manipule e explore os dados

```bash
  npx prisma studio
```

Inicie o servidor

```bash
  npm run start
```

## Documentação de Rota da API

#### Adiciona Feedback

```http
  POST /feedbacks
```

Recebe um feedback com tipo, comentário e foto, salva no banco e envia por email.

| Parâmetro    | Tipo     | Descrição                                                    |
| :----------- | :------- | :----------------------------------------------------------- |
| `type`       | `string` | **Obrigatório**. O tipo de feedback. (Ex: BUG)               |
| `comment`    | `string` | **Obrigatório**. O comentário do feedback. (Ex:Está travado) |
| `screenshot` | `string` | **Opcional**. Foto do erro para feedback.                    |

## Techs

<div style="display: inline_block"><br>
  <img align="center" alt="Juan-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="Juan-NodeJS" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Juan-Git" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg">
  <img align="center" alt="Juan-VsCode" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg">
  <img align="center" alt="Juan-Express" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg">
  <img align="center" alt="Juan-NPM" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg">
  <img align="center" alt="Juan-Prisma" height="30" width="40" src="./.github/prisma.svg">
  <img align="right" alt="Juan-GIF" height="150" style="border-radius:50px;" src="https://cdn.discordapp.com/attachments/768628359797407785/927646633691324486/Design_sem_nome.gif">
</div>
## Autor

- [Juan Cassiano](https://www.github.com/juancassiano)

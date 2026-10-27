# Cadastro de usuários

Aplicação de estudo para cadastrar e consultar usuários, com React, navegação entre páginas e consumo de uma API REST simulada com JSON Server. Desenvolvida inicialmente a partir de uma atividade de aula.

## Funcionalidades

- Listagem de usuários com nome e e-mail.
- Cadastro de usuário com validação de campos vazios.
- Navegação entre listagem e formulário sem recarregar a página.
- Indicadores de carregamento, lista vazia e falha de comunicação.
- Persistência local em `db.json` por meio do JSON Server.

## Tecnologias

React · JavaScript · Vite · React Router DOM · JSON Server · CSS

## Executar localmente

Pré-requisitos: Node.js com npm, em versão compatível com as dependências do `package.json`.

```bash
git clone https://github.com/Petrocelli900/atividade-react-vite-jsonserver-.git
cd atividade-react-vite-jsonserver-
npm install
```

Inicie a API em um terminal:

```bash
npm run server
```

Em outro terminal, inicie o frontend:

```bash
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173`. A API deve estar acessível em `http://localhost:3001/users`.

Para gerar e visualizar a versão de produção do frontend:

```bash
npm run build
npm run preview
```

O preview continua dependendo da API local em execução.

## API utilizada

| Método | Rota | Função |
| --- | --- | --- |
| GET | `/users` | Listar usuários |
| POST | `/users` | Cadastrar usuário |

Exemplo de corpo da requisição de cadastro:

```json
{
  "name": "Pessoa Exemplo",
  "email": "pessoa@example.com"
}
```

## Organização do código

| Caminho | Responsabilidade |
| --- | --- |
| `src/pages/Home.jsx` | Busca e apresentação dos usuários |
| `src/pages/CreateUser.jsx` | Formulário e envio do cadastro |
| `src/components/Navbar.jsx` | Navegação da aplicação |
| `src/services/api.js` | Requisições HTTP e tratamento de respostas |
| `src/App.jsx` | Definição das rotas |
| `src/style.css` | Estilos da interface |
| `db.json` | Dados da API simulada |

## Verificação manual

1. Inicie API e frontend e confira se a listagem carrega.
2. Cadastre um usuário com dados fictícios e verifique o retorno à listagem.
3. Atualize a página e confira se o usuário continua disponível.
4. Tente enviar nome ou e-mail vazio e confira a mensagem de validação.
5. Pare a API e recarregue a listagem para conferir a mensagem de erro.

Este roteiro descreve como verificar o projeto; não representa uma suíte automatizada nem uma execução registrada de testes.

## Limitações e próximas melhorias

Este projeto utiliza uma API simulada: não possui autenticação, autorização ou backend Java. Utilize apenas dados fictícios. A URL da API está fixa no serviço e as dependências utilizam `latest`, o que pode alterar a compatibilidade entre instalações.

Melhorias planejadas:

- Fixar versões das dependências e versionar o arquivo de lock.
- Configurar a URL da API por variável de ambiente.
- Impedir envios repetidos enquanto o cadastro está em andamento.
- Adicionar edição, exclusão e busca de usuários.
- Integrar um backend Java com validação e testes.

## Autor

[João · Petrocelli900](https://github.com/Petrocelli900)

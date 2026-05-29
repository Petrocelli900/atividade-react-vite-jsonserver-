# Atividade React + Vite + React Router DOM + JSON Server

Projeto desenvolvido conforme o tutorial da aula: aplicação React com listagem e cadastro de usuários usando Vite, React Router DOM e JSON Server.

## O que foi feito

- Projeto React com Vite
- Rotas com React Router DOM
- Página Home para listar usuários
- Página Novo Usuário para cadastrar usuários
- Componente Navbar
- Serviço de API com fetch
- Banco fake com db.json
- JSON Server rodando na porta 3001
- Estilização simples com CSS

## Como rodar

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar o JSON Server

Abra um terminal e execute:

```bash
npm run server
```

A API ficará disponível em:

```bash
http://localhost:3001/users
```

### 3. Rodar a aplicação React

Abra outro terminal e execute:

```bash
npm run dev
```

A aplicação abrirá em:

```bash
http://localhost:5173
```

## Estrutura

```text
src/
├── pages/
│   ├── Home.jsx
│   └── CreateUser.jsx
├── components/
│   └── Navbar.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── style.css
```

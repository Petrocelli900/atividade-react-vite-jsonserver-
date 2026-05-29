# Arquivos separados da atividade

## package.json
```json
{
  "name": "atividade-react-vite-jsonserver",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "server": "json-server --watch db.json --port 3001",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-router-dom": "latest",
    "json-server": "latest"
  },
  "devDependencies": {}
}
```

## db.json
```json
{
  "users": [
    {
      "id": 1,
      "name": "Rogério",
      "email": "rogerio@email.com"
    }
  ]
}
```

## src/services/api.js
```js
const API_URL = "http://localhost:3001/users";

export async function getUsers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  return response.json();
}

export async function createUser(user) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar usuário");
  }

  return response.json();
}
```

## src/components/Navbar.jsx
```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <span>|</span>
      <Link to="/create">Novo Usuário</Link>
    </nav>
  );
}

export default Navbar;
```

## src/pages/Home.jsx
```jsx
import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError("Não foi possível carregar os usuários. Verifique se o JSON Server está rodando.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <h1>Usuários</h1>

      {loading && <p>Carregando usuários...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && users.length === 0 && (
        <p>Nenhum usuário cadastrado.</p>
      )}

      <section className="user-list">
        {users.map((user) => (
          <article className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
```

## src/pages/CreateUser.jsx
```jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/api";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Preencha nome e email antes de salvar.");
      return;
    }

    try {
      await createUser({
        name: name.trim(),
        email: email.trim()
      });

      navigate("/");
    } catch (err) {
      setError("Erro ao cadastrar usuário. Verifique se o JSON Server está rodando.");
    }
  }

  return (
    <main className="container">
      <h1>Novo Usuário</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Digite o nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite o email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Salvar</button>
      </form>
    </main>
  );
}

export default CreateUser;
```

## src/App.jsx
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## src/main.jsx
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

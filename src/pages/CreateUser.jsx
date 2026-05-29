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

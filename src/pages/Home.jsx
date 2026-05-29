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

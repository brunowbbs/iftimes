import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import "./styles.css";

//POST  /auth

// body{
//   email:"user@email.com",
//   password:"123456"
// }

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post("/auth", {
        email: email,
        password: password,
      });

      localStorage.setItem("@email", response.data.email);
      localStorage.setItem("@name", response.data.name);
      localStorage.setItem("@token", response.data.token);

      navigate("/home");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  }

  function getInfoUserLogged() {
    const token = localStorage.getItem("@token");

    if (token) {
      navigate("/home", { replace: true });
    }
  }

  useEffect(() => {
    getInfoUserLogged();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-10 text-[1.25rem]">UnyTimes</h1>

      <form onSubmit={submit} className="w-[400px] border rounded-lg p-3">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Informe o e-mail"
          className="mb-2"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Informe a senha"
        />

        <button
          type="submit"
          className="bg-[#525252] mt-5 w-full py-0.5 rounded-md"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

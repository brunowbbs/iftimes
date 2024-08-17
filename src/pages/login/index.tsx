import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Login() {
  const navigate = useNavigate();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/home");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-10 text-[1.25rem]">UnyTimes</h1>

      <form onSubmit={submit} className="w-[400px] border rounded-lg p-3">
        <input placeholder="Informe o e-mail" className="mb-2" />
        <input placeholder="Informe a senha" />

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

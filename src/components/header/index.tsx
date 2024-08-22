import { useEffect, useState } from "react";
import { useNavigate, replace } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  function getUserName() {
    const response = localStorage.getItem("@name");

    if (response) {
      setUserName(response);
    }
  }

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <header className="flex justify-between px-5 py-3">
      <h1 className="font-bold text-lg">UnyTimes</h1>

      <div>
        <span className="mx-5">Olá, {userName}</span>
        <button
          className="border px-2 rounded-full"
          onClick={() => {
            localStorage.removeItem("@email");
            localStorage.removeItem("@name");
            localStorage.removeItem("@token");
            navigate("/", { replace: true });
          }}
        >
          Sair
        </button>
      </div>
    </header>
  );
}

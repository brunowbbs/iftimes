import { RegisterProps } from "./types";

export default function RegisterView(props: RegisterProps) {
  if (props.isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{props.nome}</h1>
      <button onClick={() => props.setNome("Wesley")}>alterar estado</button>

      {props.users?.map((user) => (
        <p>{user}</p>
      ))}
    </div>
  );
}

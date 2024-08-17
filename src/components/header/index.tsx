export default function Header() {
  return (
    <header className="flex justify-between px-5 py-3">
      <h1 className="font-bold text-lg">UnyTimes</h1>

      <div>
        <span className="mx-5">Olá, usuário</span>
        <button className="border px-2 rounded-full">Sair</button>
      </div>
    </header>
  );
}

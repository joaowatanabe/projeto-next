import Link from "next/link";

export default function PaginaFilhaComLayout() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl gap-5">
      <h1>Conteúdo da página FILHA</h1>

      <div className="flex gap-5">
        <Link className="botao" href="/layout">Voltar</Link>
        <Link className="botao" href="/">Início</Link>
      </div>
    </div>
  );
}

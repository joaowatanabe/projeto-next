import Link from 'next/link'

export default function PaginaComLayout() {
  return (
    <div className='flex flex-col justify-center items-center text-2xl gap-5'>
      <h1>Conteúdo da página RAIZ</h1>
      
      <div className="flex gap-5">
        <Link className='botao' href='/layout/filha'>Ir para a página FILHA</Link>
        <Link className="botao" href="/">Início</Link>
      </div>
      
    </div>
  )

}
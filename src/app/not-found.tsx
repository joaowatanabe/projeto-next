import Image from 'next/image'
import explorador from '@/assets/explorador.png'
import Link from 'next/link'

export default function Pagina404() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-7 text-center">
            <h1 className="text-3xl text-zinc-400 font-bold">404 - Página não encontrada!</h1>
            <Image src={explorador} alt="Erro 404" width={300} height={300} />

            <p className="text-lg max-w-[600px]">
                Você parece ter perdido o caminho... Volte 10 casas
            </p>

            <Link href="/" className="bg-blue-400 py-2 px-4 rounded-full">
                Voltar
            </Link>
        </div>
    )
}

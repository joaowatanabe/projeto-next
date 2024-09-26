'use client'
import { useState } from 'react'

export default function Cliente() {
    const [data, alterarData] = useState(new Date())

    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-3 text-xl bg-emerald-400/60 border-2 border-white p-5 rounded-md">
                <span className="font-bold">Data atual:</span>
                <span>{data.toLocaleTimeString()}</span>
            </div>
            <button onClick={() => alterarData(new Date())} className="botao">
                Atualizar
            </button>
        </div>
    )
}

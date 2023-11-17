export default function Principal(){

    return (
        <div>
            <h1>Nova Página</h1>
            <MariaPrea mensagem="morreu maria preá..."/>
        </div> 
    )
}

export function MariaPrea({mensagem}){

    return (
        <h2>{mensagem}</h2>
    )
}
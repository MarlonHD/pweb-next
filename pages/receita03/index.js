import { useState } from "react";
import { useRouter } from "next/router";

export default function Form(){
    const router = useRouter()

    const [ano, setAno] = useState('')
    const [busca, setBusca] = useState('')

    const buscaChange = (e) => { setBusca(e.target.value)}

    const anoChange = (e) => { setAno(e.target.value)}

    const pesquisar = () => {
        const query = {busca, ano};

        router.push({
            pathname: 'receita03/movies',
            query
        });
    }

    return(
        <div>
            
                <input type='text' id='busca' value={busca} onChange={buscaChange} placeholder="Título"/>
                <input type='text' id='busca' value={ano} onChange={anoChange} placeholder="Ano"/>
                <button onClick={pesquisar}>Buscar</button>
            
        </div>
    )
    
}
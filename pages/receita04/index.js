import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css"

export default function Buscar(){
    const router = useRouter()

    const [ano, setAno] = useState('')
    const [busca, setBusca] = useState('')

    const buscaChange = (e) => { setBusca(e.target.value)}

    const anoChange = (e) => { setAno(e.target.value)}

    const pesqClient = () => {
        if (busca) {
            const query = {busca, ano};

            router.push({
                pathname: 'receita04/movies2',
                query
            });
        }else{
            alert("O campo de busca está vazio!!")
        }
    }

    const pesqServer = () => {
        if(busca){
            const query = {busca, ano};

            router.push({
                pathname: 'receita04/moviesByServer',
                query
            });
        }else{
            alert("O campo de busca está vazio!!")
        }
    }

    const localizar = () => {
        router.push({ pathname: 'receita04/localizai'})
    }
    
    return(
        <div>
            <div class={styles.dispFlex}>
                <input class={styles.input} type='text' value={busca} onChange={buscaChange} placeholder="Título"/>
                <input class={styles.input} type='text' value={ano} onChange={anoChange} placeholder="Ano"/>
                <div class={styles.column}>
                    <button onClick={pesqClient}>Buscar pelo cliente</button>
                    <button onClick={pesqServer}>Buscar pelo servidor</button>
                </div>
            </div>
            <br/>
            <div>
                <button onClick={localizar}>Localizar Dispositivo</button>
            </div>
        </div>
        
    )
}


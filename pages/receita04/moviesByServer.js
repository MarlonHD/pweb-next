//api key: 9124015e

import styles from './styles.module.css';
import { useRouter } from 'next/router';

export async function getServerSideProps(context){
    const ano = context.query.ano
    const busca = context.query.busca
    const url = (ano ? `https://www.omdbapi.com/?apikey=9124015e&s=${busca}&y=${ano}` : `https://www.omdbapi.com/?apikey=9124015e&s=${busca}`)

    const res = await fetch(url)
    const json = await res.json()

    const data = json

    return { props: {data} }
}

export default function Movies2({data}){
    
    const router = useRouter()

    const detalhar = (id) => {
        const query = {id}

        router.push({pathname:'./detalhes', query})
    }

    if(data == undefined){
        return (
            <div>
                <ul>
                    <button onClick={router.back}>Voltar</button>
                </ul>
                <div>
                    <h1>LASCOU!!</h1>
                </div>
            </div>
        )
    }else{ 
        return (
            <div>
                <div>
                    <ul>
                        <button onClick={router.back}>Voltar</button>
                    </ul>
                </div>
                <div class={styles.grid}>
                    {data.Search.map( (m) => (
                        <div class={styles.card} onClick={() => detalhar(m.imdbID)}>
                            <img class={styles.imgMovie} src={m.Poster} alt={m.Title} />
                            <div class={styles.textCard}>
                                <h2>{m.Title}</h2>
                                <h4>{m.Year}</h4>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        )
    }    
}
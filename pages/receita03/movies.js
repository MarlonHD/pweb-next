//api key: 9124015e

import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Movies(){
    const router = useRouter()

    const busca = router.query.busca
    const ano = router.query.ano
    const [data, setData] = useState()

    const voltar = () => {
        router.push({
            pathname: '/receita03'});
    }

    useEffect(() => {
        async function fetchData(busca,ano) {
            try {
                const res = await fetch(ano ? `https://www.omdbapi.com/?apikey=9124015e&s=${busca}&y=${ano}` : `https://www.omdbapi.com/?apikey=9124015e&s=${busca}`)
                
                const data = await res.json()
                setData(data)
            } catch (error) {
                alert('Não foi possível realizar a busca')
            }
        }        

        if (busca) {
            fetchData(busca,ano)
        }
    }, [busca,ano])
    

    if(data == undefined){
        return (
            <div>
                <ul>
                    <button onClick={voltar}>Voltar</button>
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
                        <button onClick={voltar}>Voltar</button>
                    </ul>
                </div>
                <div class={styles.grid}>
                    {data.Search.map( (m) => (
                        <div class={styles.card}>
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



//export async function getServerSideProps(context){
//    const res = await fetch(`http://www.omdbapi.com/?apikey=9124015e&s=bagdad`)
//    const data = await res.json()
//    return {
//        props: {
//            data
//        }
//    }
//}

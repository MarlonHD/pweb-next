import useSWR from "swr"
import { fetcher } from "./movies2"
import styles from "./styles.module.css"

export async function getServerSideProps(context){
    const id = context.query.id
    
    return{props:{id}}
}

export default function detalhes({id}){

    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=9124015e&i=${id}`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    const props =   ["Título", "Ano", "Rated", "Lançamento", "Duração", "Gênero", "Diretor", "Escritor", "Atores", "Enredo", "Idioma", "País", "Prêmios", "Rating", "IMDB Votos", "IMDB ID", "Tipo"]
    const content = [`${data.Title}`, `${data.Year}`, `${data.Rated}`,`${data.Released}`,`${data.Runtime}`,`${data.Genre}`,`${data.Director}`,`${data.Writer}`,`${data.Actors}`,`${data.Plot}`,`${data.Language}`,`${data.Country}`,`${data.Awards}`,`${data.imdbRating}`,`${data.imdbVotes}`,`${data.imdbID}`,`${data.Type}`]

    return(
        <div class={styles.detalhar}>
            <div>
                <img src={data.Poster} />
            </div>
            <div>
                <table border="" >
                    {props.map((m)=>(
                        <tr>
                            <td>{m}</td><td>{content[props.indexOf(m)]}</td>
                        </tr>
                    ))}
                    
                </table>
            </div>
            
        </div>
    )
}
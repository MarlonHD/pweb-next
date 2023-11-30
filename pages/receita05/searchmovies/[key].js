//api key: 9124015e
import useSWR from 'swr'
import {useState} from 'react'
import { Button, Table } from 'antd';
import { useRouter } from 'next/router';


export default function Searchmovies(){
    
    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)
    
    const router = useRouter()

    const key = router.query.key
    
    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl(`http://www.omdbapi.com/?apikey=9124015e&s=${key}`)
        else setUrl('')
    }

    const detalhar = (id) => {
        router.push({
            pathname:'../onemovie/[pid]', 
            query: {pid: id}
        })
    }

    return (
        <div>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''} redirect={detalhar}/>
        </div>
    )
}

async function theFetcher(url) {
    if (url === null || url === '') return {Search:''}
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function TheMovies({data,show,redirect}){
    if (!show) return (<div></div>)    
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)

    return (
        <div>
            <table border={1}>
                <tr><th>Título</th><th>Ano</th></tr>
                { data.Search.map( (m) => (
                    <tr onClick={() => redirect(m.imdbID)}><td>{m.Title}</td> <td>{m.Year}</td></tr>
                )  ) }
            </table>
        </div>

    )

}

export function TheLink({url, handler}){    

    return (

        <div>
            <Button type="primary" onClick={handler}>{url === '' ? 'Mostrar' : 'Ocultar'}</Button>
        </div>

    )

}
//api key: 9124015e
import useSWR from 'swr'
import {useState} from 'react'

export default function Movies33(){
    const [state, setState] = useState({url:'', titleSearchString:'', anoSS:''})
    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url || !state.titleSearchString) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='') return {Search:''}
        const res = await fetch(`${state.url}/?apiKey=9124015e&s=${state.titleSearchString}&y=${state.anoSS}`)
        const json = await res.json();
        return json;
    })

    const onClickHandler = e => {

        e.preventDefault()
        let s = document.getElementById('titleSearchString').value
        let ano = document.getElementById('anoSS').value
        if (s !== ''){
            if (state.url === '') {
                setState({url:'http://www.omdbapi.com',titleSearchString:s, anoSS:ano})
            }
            else setState({url:'',titleSearchString: state.titleSearchString, anoSS:ano})
        }
        
    }
    
    const [order, setOrder] = useState(false)
    const ordenar = e => {
        setOrder(!order)
    }
    

    return (
        <div>
            <TheForm handler={onClickHandler}/>

            <TheLink url={state.url} handler={onClickHandler} />

            <button onClick={ordenar}>{!order ? "Crescente" : "Decrescente"}</button>

            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} desc={order}/>
        </div>
    )
}

export function TheForm({handler}){
    
    return (
        <div>
            <form onSubmit={handler}>
                <label htmlFor="titleSearchString">Filtro de Título</label>
                <input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true"/>
                <br/>
                <label htmlFor="titleSearchString">Ano de Lançamento</label>
                <input id="anoSS" name="anoSearchString" type="text" autoComplete="true"/>
                
                <button type='submit'>buscar</button>
            </form>
        </div>
    )
}

export function TheMovies({data,show,desc}){

    if (!show) return (<div></div>)

    if (!data) return (<div></div>)

    if (data.error) return (<div>falha na pesquisa</div>)

    if (data.Search === '' ) return (<div>carregando...</div>)

    if (data.Response === 'True') {
        if(desc){
            data.Search.sort((b,a) => a.Title.localeCompare(b.Title) );
        }else{
            data.Search.sort((a,b) => a.Title.localeCompare(b.Title) );
        }

        return (
            <div>
                { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  ) }            
            </div>
        )
    }else{
        return(<div></div>)
    }
    

}



export function TheLink({url, handler}){

    return (

        <div>

            <a href="/movies33.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )

}


//api key: 9124015e
import { Card } from "antd";


export default function TheMovie({data}){
    
    //console.log(`Pré-renderizando ${data.Title}`)
    
    if(data == undefined) return (<div>Carregando...</div>)

    const { Meta } = Card;

    if(data.Response == 'True') { return (

        <div>
            <Card
                hoverable
                style={{
                width: 300,
                }}
                cover={<img alt={data.Title} src={data.Poster} />}
            >
                <Meta 
                    title={(data.Title)+" - "+(data.Year)}
                    description={data.Plot}
                />
                
            </Card>

        </div>     
    
    )}else{
        return <div>Pesquisa indisponível</div>
    }
    

}



export async function getStaticPaths(){

    return {

        paths:[

            {params: {id: "tt0095801"}},

            {params: {id: "tt0033152"}},

            {params: {id: "tt0015400"}},

            {params: {id: "tt0041149"}},

            {params: {id: "tt0044388"}},

            {params: {id: "tt0098746"}},

            {params: {id: "tt0046322"}},

            {params: {id: "tt0046497"}},

            {params: {id: "tt0044389"}}

        ],

        fallback: true 

    }

}



export async function getStaticProps({ params }) {

    const res = await fetch(`https://www.omdbapi.com/?apikey=9124015e&i=${params.id}`)

    const data = await res.json();


    return {

      props: {

        data,

      }

    }

}
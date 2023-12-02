import { Card } from "antd";

export default function TheMovie({data}){
    console.log(data)
    //console.log(`Pré-renderizando ${data.Title}`)
    
    if( data === undefined) return <div>Carregando...</div>

    const { Meta } = Card;
    if(data){return (
        <div>
            <Card
                hoverable
                style={{
                width: 240,
                }}
                cover={<img alt={data.name} src={data.sprites['front_default']} />}
            >
                <Meta 
                    title={data.name} 
                    description={data.types.map((type) => type.type.name).join(', ')} 
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
            {params: {id: "1"}},
            {params: {id: "2"}},
            {params: {id: "3"}},
            {params: {id: "4"}},
            {params: {id: "5"}},
            {params: {id: "6"}},
            {params: {id: "7"}},
            {params: {id: "8"}},
            {params: {id: "9"}}
        ],
        fallback: true 
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)

    try{
        const data = await res.json();
        
        return {
            props: {
                data
            }
        }
    }catch (e) {}
    
    const data = false

    return{
        props: {
            data
        }
    }
    
    

}
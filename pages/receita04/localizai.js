//API Key: key=5LaAOagPRYdJUEjHxTMq

import useSWR from "swr";
import { fetcher } from "./movies2";

export default function Localiza(){
    const {data, error} = useSWR(`https://extreme-ip-lookup.com/json/?key=5LaAOagPRYdJUEjHxTMq`, fetcher)

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    
    return(
        <div>
            <table>
                <tr>
                    <td>CIDADE</td>
                    <td>{data.city}</td>
                </tr>
                <tr>
                    <td>IP</td>
                    <td>{data.query}</td>
                </tr>
                <tr>
                    <td>LATITUDE</td>
                    <td>{data.lat}</td>
                </tr>
                <tr>
                    <td>LONGITUDE</td>
                    <td>{data.lon}</td>
                </tr>
            </table>
        </div>
    )
}

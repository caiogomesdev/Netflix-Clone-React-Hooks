import {useEffect} from 'react'
import Filmes from '../../services/Filmes'

export default ()=>{

    useEffect(()=>{

        const ListFilmes = async ()=>{
            let list = await Filmes()
            console.log(list)
        }
        
        ListFilmes()
        
    },[])

    return(
        <div>
            
        </div>
    )
}
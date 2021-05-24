import api, {KEY} from './api'


async function Search(endPoint){

    try {
        let response = await api.get(`${endPoint}&language=pt-BR`)
        return response.data;
        
    } catch (error) {
        return undefined
    }
    
}

export default async()=>{
    return[
        {slug : 'originais', 
        title: 'Original da Netflix', 
        itens: await Search(`/discover/tv?with_networks=213&api_key=${KEY}&sort_by=popularity.desc&page=1`)
        },
        {
        slug : 'threading', 
        title: 'Recomendados para você', 
        itens: await Search(`/trending/all/week?api_key=${KEY}`)
        },
        {
        slug : 'toprated', 
        title: 'Em Alta', 
        itens: await Search(`/movie/top_rated?api_key=${KEY}`)
        },
        {
        slug : 'action', 
        title: 'Ação', 
        itens: await Search(`/discover/movie?with_genres=28&api_key=${KEY}`)
        },
        {
        slug : 'comedy', 
        title: 'Comédia', 
        itens: await Search(`/discover/movie?with_genres=35&api_key=${KEY}`)
        },
        {
        slug : 'horror', 
        title: 'Terror', 
        itens: await Search(`/discover/movie?with_genres=27&api_key=${KEY}`)
        },
        {
        slug : 'romance', 
        title: 'Romance', 
        itens: await Search(`/discover/movie?with_genres=10749&api_key=${KEY}`)
        },
        {
        slug : 'documentary', 
        title: 'Documentários', 
        itens: await Search(`/discover/movie?with_genres=99&api_key=${KEY}`)
        }
    ]
}
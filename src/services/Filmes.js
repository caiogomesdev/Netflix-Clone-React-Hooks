import api, {KEY} from './api'


async function Search(endPoint){

    try {
        let response = await api.get(`${endPoint}&language=pt-BR`)
        return response.data;
        
    } catch (error) {
        return undefined
    }
    
}

export default {

    getHomeList: async ()=>{
        return[
            {slug : 'originals', 
            title: 'Original da Netflix', 
            items: await Search(`/discover/tv?with_networks=213&api_key=${KEY}&sort_by=popularity.desc&page=1`)
            },
            {
            slug : 'threading', 
            title: 'Recomendados para você', 
            items: await Search(`/trending/all/week?api_key=${KEY}`)
            },
            {
            slug : 'toprated', 
            title: 'Em Alta', 
            items: await Search(`/movie/top_rated?api_key=${KEY}`)
            },
            {
            slug : 'action', 
            title: 'Ação', 
            items: await Search(`/discover/movie?with_genres=28&api_key=${KEY}`)
            },
            {
            slug : 'comedy', 
            title: 'Comédia', 
            items: await Search(`/discover/movie?with_genres=35&api_key=${KEY}`)
            },
            {
            slug : 'horror', 
            title: 'Terror', 
            items: await Search(`/discover/movie?with_genres=27&api_key=${KEY}`)
            },
            {
            slug : 'romance', 
            title: 'Romance', 
            items: await Search(`/discover/movie?with_genres=10749&api_key=${KEY}`)
            },
            {
            slug : 'documentary', 
            title: 'Documentários', 
            items: await Search(`/discover/movie?with_genres=99&api_key=${KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieID, type)=> {
        let info = {};

        if(movieID){
            switch(type){
                case 'movie':
                    info = await Search(`/movie/${movieID}?api_key=${KEY}`)
                break;
                case 'tv':
                    info = await Search(`/tv/${movieID}?api_key=${KEY}`)
                break;
                default:
                    info = undefined;
                break;

            }
        }


        return info
    }
}
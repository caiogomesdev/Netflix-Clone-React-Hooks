import {useEffect, useState} from 'react'
import Filmes from '../../services/Filmes'


import Header from '../../components/Header'
import FeaturedMovie from '../../components/FeaturedMovie'
import MovieRow from '../../components/MovieRow'
import './styles.css'

export default ()=>{

    const [movieList, setMovieList] = useState([])
    const [FeaturedData, setFeaturedData] = useState(null)
    const [blackHeader, setBlackHeader] = useState(false)
    const [loading, setLoadsing] = useState(true)

    //Carrega a lista de filmes e escolhe aleatóriamente a série de destaque
    useEffect(()=>{

        const LoadAll = async ()=>{
            let list = await Filmes.getHomeList()
            setMovieList(list)

            let originals = list.filter(i=> i.slug === 'originals')
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChosen]
            let chosenInfo = await Filmes.getMovieInfo(chosen.id, 'tv')

            setFeaturedData(chosenInfo)
            setLoadsing(false)
        }
        
        LoadAll()
        
    },[])
    //Monitora a scroll
    useEffect(()=>{
        const scrollListener = () => {
            setBlackHeader(window.scrollY > 15)            
        }

        window.addEventListener('scroll', scrollListener)
        return ()=>{
        window.removeEventListener('scroll', scrollListener)    
        }

    },[])

    return(
        <div className="page">

{loading && 
    <div style={{position:'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: '9999', backgroundColor: '#040204', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<img  src="https://www.agenciatatu.com.br/wp-content/uploads/netflix.gif" />
</div>   
}
     

            <Header black={blackHeader} />

            {FeaturedData && 
            <FeaturedMovie item={FeaturedData}/> }
        
                <section className="lists">
                    

                    {movieList.map((item, key)=>(
                        <MovieRow key={key} title={item.title} items={item.items}/>
                    ))}
                </section>

            <footer style={{textAlign: 'center', margin: '50px 0'}}>
                Feito para estudo e com muito <span role="img" aria-label="coração">♥</span> por CaioGomesDev <br />
                Direitos de imagem para Netflix.<br /> Dados pegos do site Themoviedb.org

            </footer>
        </div>
    )
}
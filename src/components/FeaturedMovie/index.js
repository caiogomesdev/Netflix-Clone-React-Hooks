import './styles.css'

const FeaturedMovie = ({item})=>{

    const limiteDescriptionChar = 100;


    console.log(item)
    // data value
    let first_date = new Date(item.first_air_date)
    // transforms API array into a string
    function GenresString(){
        let countGenres = item.genres.length
        let genresString = ''

        for(let i = 0; i < countGenres; i++){
            genresString += `${item.genres[i].name}`
            if(i !== countGenres -1){
                genresString += ', '
            }
        }

        return genresString
        
    }
    return(
        <div className="featured" style={{backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">

                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{first_date.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}</div>
                        <div className="featured--description"> {item.overview.substring(0,limiteDescriptionChar)} {item.overview.length > limiteDescriptionChar && '...'}</div>
                        <div className="featured--buttons">
                            <a className="featured--watchbutton" href={"#"}><span role="img" aria-label="play" >▶</span> Assistir</a>
                            <a className="featured--mylistbutton" href="#">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres">Gêneros: {GenresString()}</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FeaturedMovie
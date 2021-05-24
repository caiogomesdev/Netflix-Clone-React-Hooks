import './styles.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useState} from 'react'
export default ({title, key, items})=>{

    const [scrollX, setScrollX] = useState(-400);

    const HandleLeftArrow = ()=>{
        let x = scrollX + Math.round(window.innerWidth/2)

        if(x > 0){
            x = 0;
        }
        setScrollX(x);

    }
    const HandleRightArrow = ()=>{
        let x = scrollX - Math.round(window.innerWidth/2)
        let listW = items.results.length*150;
        if(window.innerWidth - listW > x){
            x = window.innerWidth - listW - 60 /*Padding 30Left + 30Right*/        
        }
        setScrollX(x);

    }
    return(
        <div key={key} className="movieRow">
            <h2>{title}</h2>

            <div className="moveRow--left" onClick={HandleLeftArrow}><NavigateBeforeIcon style={{fontSize: 50}} /></div>
            <div className="moveRow--right" onClick={HandleRightArrow}><NavigateNextIcon style={{fontSize: 50}} /></div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: scrollX}}>

                {items.results.length > 0 && items.results.map((item,keyi)=>(
                    <div key={keyi} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                    
                ))}

                </div>

            </div>
        </div>
    )
}
import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

const SeriesListItem = ({series}) => {
    let defaultImage = "https://trailers.apple.com/trailers/independent/default/images/poster-large.jpg?lastmod=1";

    let imageURL = series.show.image===null?defaultImage:series.show.image.medium
    
    return(
        <div className="series-list-item">
            <div className="series-image">
               <Link to={`/series/${series.show.id}`}>
                    <img src={imageURL} alt={series.show.name} />
                </Link>
            </div>
            <div className="series-details">
                <Link to={`/series/${series.show.id}`}>
                    <h3 className="title">{series.show.name}</h3>
                </Link>
                <span className="genres-head"><strong>Genres:</strong></span>
                <span className="genres">
                    {series.show.genres.map((g,i)=>(
                        <span key={i}> {g} </span>
                    ))}
                </span>
            </div>
        </div>
    ); 
}
const SeriesList = ({list}) => {
    return(
        <div className="series-container">
            {list.map(s =>(
                <SeriesListItem 
                    series={s} 
                    key={s.show.id}
                />                   
            ))}
        </div>
    );
}

export default SeriesList;
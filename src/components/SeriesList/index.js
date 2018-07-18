import React from "react";
import "./index.css";

const SeriesListItem = ({series}) => {
    let defaultImage = "https://trailers.apple.com/trailers/independent/default/images/poster-large.jpg?lastmod=1";

    let imageURL = series.show.image===null?defaultImage:series.show.image.medium
    
    return(
        <div className="series-list-item">
            <div className="series-image">
               <a href={series.show.url}><img src={imageURL} alt={series.show.name} /></a>
            </div>
            <div className="series-details">
                <h3 className="title"><a href={series.show.url}>{series.show.name}</a></h3>
                <span><strong>Genres:</strong></span>
                <span>
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
        <div>
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
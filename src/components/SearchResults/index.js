import React from "react";
import Loader from "../../components/Loader";
import {Link} from "react-router-dom";
import "./index.css";

let SearchResults = props => {
    let {isFetching,results,inputValue} = props;
    return (
        
            <div>
                {
                    !isFetching && results.length===0 && inputValue.trim()!=="" && <p>Cannot find {inputValue}</p>
                }
                {
                    !isFetching && results.length !==0 && inputValue.trim() !=="" &&
                    <div className="search-results">
                            {results.map(r=>(
                                <p key={r.show.id}><Link to={`/series/${r.show.id}`}>{r.show.name}</Link></p>
                            ))}
                        </div>
                }
                {
                    isFetching && <Loader />
                }
            </div>
                    
    )
    
}

export default SearchResults;
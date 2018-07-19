import React, {Component} from "react";
import * as apiCalls from "../../components/App/api";
import Loader from "../../components/Loader";
import "./index.css";

class SingleSeries extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: null,
        };
    }
    componentDidMount(){
        let {id} = this.props.match.params;
        this.loadSingleShow(id);
    }

    async loadSingleShow(id){
        let show = await apiCalls.getSingleShow(id);
        this.setState({show});
        console.log({show})
    }

    render(){
        let views;
        let {show} = this.state;
        let regexp = /<p>|<b>|<\/p>|<\/b>/gm;
        
        {this.state.show !== null?
            views = (
                <div className="single-show">
                    <div className="show-image">
                        <img src={show.image.original} alt={show.name} />
                    </div>
                    <div className="show-info">
                        <h2 className="show-title">{show.name}</h2>
                        <span><strong>Genres: </strong></span>
                        {
                            show.genres.map((g,i)=>(
                                <span key={i}>{g} </span>
                            ))
                        }
                        <p>
                            {show.summary.replace(regexp,"")}
                        </p>
                        <p><strong><a href={show.officialSite}>{show.name} Official Site</a></strong></p>
                    </div>
                </div>
            ):views=(<div style={{marginLeft:"50%"}}><Loader /></div>);
        }
        
        return(
            <div>
               {views}
            </div>
        );
    }
}

export default SingleSeries;
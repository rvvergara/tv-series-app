import React from "react";
import loader from "../../assets/loader.gif"

const Loader = props => {
    return (<div>
        <img 
        src={loader} 
        alt="Loader" 
        width={100}
        />
    </div>)
}

export default Loader;
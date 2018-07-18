const APIURL = "http://api.tvmaze.com/search/shows?q=";

export async function getShow(show){
    return fetch(APIURL+show)
    .then(resp=>{
      if(!resp.ok){
        if(resp.status>=400 && resp.status<500){
          return resp.json().then(data=>{
            let err = {errorMessage: data.message};
            throw err;
          });
        }else{
          let err = {errorMessage: "Please try again later, server failed to respond."};
          throw err;
        }
      }
      return resp.json();
    });
}


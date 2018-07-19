const APIURL = "https://api.tvmaze.com/search/shows?q=";
const SHOWBASEURL = "https://api.tvmaze.com/shows/";

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

export async function getSingleShow(id){
  return fetch(SHOWBASEURL+id)
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


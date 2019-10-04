import React from "react";

function getGiphy(endpoint, apikey) {
  const baseURI = "https://api.giphy.com/v1/gifs/";
  let baseKey = "?api_key=" + apikey;

  let api_request = baseURI + endpoint + baseKey;

  const fetchFn = fetch(api_request)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(function(error) {
      console.log(error);
    });
  return fetchFn;
}

export default getGiphy;

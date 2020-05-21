const axios = require("axios");

export function showDetail(data, URL) {
  for (let i = 0; i < data.results.length; i++) {
    console.log(data.results[i]);
  }
  let key = splitUrl(URL);
  localStorage.setItem(key, data);
  return data;
}

function splitUrl(URL){
  var y= URL.split('/');
  console.log(y);
  return y[y.length-2];
}



export function getAllStarwarsValue(URL) {
    let dataVal = [];
    // first page
    return axios(URL)
        .then(response => {
            // collect dataVal from first page
            dataVal = response.data.results;
            return response.data.count;
        })
        .then(count => {
            // exclude the first request
            const numberOfPagesLeft = Math.ceil((count - 1) / 10);
            let promises = [];
            // start at 2 as you already queried the first page
            for (let i = 2; i <= numberOfPagesLeft; i++) {
                promises.push(axios(`${URL}?page=${i}`));
            }
            return Promise.all(promises);
        })
        .then(response => {
            //get the rest records - pages 2 through n.
            dataVal = response.reduce((acc, data) => [...acc, ...data.data.results], dataVal);
            console.log(dataVal, 'dataVal');
            let key = splitUrl(URL);
            console.log(key);
            localStorage.setItem(key, JSON.stringify(dataVal));
            return dataVal;
        })
        .catch(error => console.log("Properly handle your exception here"));
}

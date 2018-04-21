var axios = require('axios');



// NY Times API Request Function
//Here, we are passing in the topic, beingyear, and end year and holding that information in the "articleQuery" variable. 
var articleQuery = function(topic, beginYear, endYear){

    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
  
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
                    topic + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";

// Create a Javascript Promise
return new Promise(function(fulfill, reject) {
    //NY Times API get request
    axios.get(queryURL).then(function(responpse) {
        var result = [];

        //Return only first 5 articles

        if(response.data.response.docs[0]) {
            for(var i=0; i< response.data.docs.length; i++){
                if(i==5) {
                    break;
                }
                else{
                    //Otherwise, push to results array
                    result.push(response.data.response.docs[i]);
                }
            }
            
            // Return the array of articles via "promise" 
            //if request is successful, we are fulfilling the resquest and holding the result value
            fulfill(result);
        }
        else {
            // if we don't get any results, return an empty string via 'promise;
            //promise is rejected
            reject("");
        }
    });
});

};

const request = require('request');

var getWeather = (lat,lng,callback) => {

request({
    url:`https://api.darksky.net/forecast/90d67c772f6cd89f5c4baad1084ec07e/${lat},${lng}`,
    json:true
}, (error,response,body) => {
    if(error){
        callback('cannot connect to forecast server....');
    }
    else if (response.statusCode === 400){
        callback('cannot fetch data from forecast server....');
    }
    else if (response.statusCode === 200){
        callback(undefined,{
         temperature :   body.currently.temperature,
         apparentTemperature :   body.currently.apparentTemperature
        });
}
});

};

module.exports.getWeather = getWeather;
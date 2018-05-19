
const yargs =require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
.options({
   a: {
demand:true,
alias :'address',
describe : 'weather address',
string : true
    }
})
.help()
.alias('help','h')
.argv;


geocode.geocodeAddress(argv.address,(errmessage,results) => {
    if(errmessage){
        console.log(errmessage);
    }
    else{
        console.log(results.address);
        
weather.getWeather(results.latitude,results.longtitude, (errmessage,Weatherresults) => {
    if(errmessage)
    {
                console.log(errmessage);
            }
            else
            {
                console.log(`it is currently ${Weatherresults.temperature} feels like ${Weatherresults.apparentTemperature}`);
            }
});
    }
});


//lat,lng,callback
const request = require('request');

var geocodeAddress = (address,callback) => {


    encodedAddress = encodeURIComponent(address);

    request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
    },(error,response,body) => {
    if(error){
        callback('cannot connect to network');
    }
    else if(body.status === 'ZERO_RESULTS'){
    console.log('address not found');
    }
    else if(body.status === 'OK'){
        callback(undefined,{
            address: body.results[0].formatted_address,
            latitude : body.results[0].geometry.location.lat,
          longtitude : body.results[0].geometry.location.lng
        });
    }
    });

};

module.exports.geocodeAddress = geocodeAddress;
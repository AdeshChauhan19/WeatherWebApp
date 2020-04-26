
const request = require("request");
const forecast = (longitude,latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=085ef3e29f82e6512d5023e4800b9825&query=' + longitude + ','+latitude
    request({ url, json: true }, (error, {body}) =>
     {
       if(error)
       {
          callback('Unable to connect',undefined);
       }
       else if(body.success === false) 
       {
          callback('Unable to Find latitude,longitude',undefined);
       }
       else
       {
          callback(undefined,'The weather description are as follows '+body.current.weather_descriptions[0]+' Current temperature is '+body.current.temperature+' It feels like '+body.current.feelslike)
       }
       
 
    })
 }

 module.exports=forecast
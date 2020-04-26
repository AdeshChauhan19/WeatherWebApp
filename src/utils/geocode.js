
const request = require("request");
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRlc2hjaGF1aGFuMTkiLCJhIjoiY2s5Y3V0ZWF2MDc0ZTNldDZsZ2R2eDdzeiJ9.w4VEMtA0TXPHsnvYSsDJrQ'
    request({ url, json: true }, (error, {body}) =>
     {
       if(error)
       {
          callback('Unable to connect',undefined);
       }
       else if(body.features.length === 0) 
       {
          callback('Unable to Find location',undefined);
       }
       else
       {
          callback(undefined,{
             latitude: body.features[0].center[1],
             longitude: body.features[0].center[0],
             location: body.features[0].place_name
          })
       }
       
 
    })
 }

 module.exports=geocode
const request = require('postman-request');
let address
const geocode=(address,callback)=>{
   const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoibmlyYW5qYW4tYXdhcmUiLCJhIjoiY2wzaDloamxjMGZlazNpcGtsN2I3cW1vaiJ9.VnGeAoTod1FkbRGN7Xq32w'
  //const url='http://api.weatherstack.com/current?access_key=1f6e34714c4e5709372871e212949041&query=37.8267,-122.4233'
request(url, function (error, response, body) {
   const d=JSON.parse(response.body)
    if(error){
      callback('unable to connect',undefined)
    }
    // else if(d.features.centre){}
    else {
      callback({
        latitude:d.features[0].center[0],
        longitude:d.features[0].center[1],
        place:d.features[0].place_name
      })
      // callback(d.features[0].center[0])
      // callback(d.features[0].center[1])
    }
})
}
//address='newyork'
 
 module.exports=geocode
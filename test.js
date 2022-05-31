const request = require('postman-request');
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlyYW5qYW4tYXdhcmUiLCJhIjoiY2wzaDloamxjMGZlazNpcGtsN2I3cW1vaiJ9.VnGeAoTod1FkbRGN7Xq32w'
request(url, function (error, response, body) {
  const data=JSON.parse(response.body)
  const s=data.features.centre
//   console.log(data.features.geometry.coordinates)
console.log(s)
});
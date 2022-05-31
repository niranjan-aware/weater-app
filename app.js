const request=require('postman-request')
const geocode=require('./utils/geocode')
const weatherinfo=require('./utils/forecast')
const location= process.argv[2]
if(!location){
  console.log('provide the location')
}
else{
geocode(location,(data)=>{
   
  // console.log('Data',data)
  const lat=data.latitude
  const long=data.longitude
  console.log(lat)
  console.log(long)
  weatherinfo(long,lat,(forecastdata)=>{
    console.log('Data',forecastdata)
    //console.log('place',data.place)
  })
})
}
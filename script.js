document.querySelector(".btn").addEventListener("click", function (event) {
  var place = document.querySelector("input").value;
  // document.querySelector(".input").toggleClass("inclicked");
  
  event.preventDefault();
  let geolocation = getGeolocation(place);
  // console.log("longitude:",getGeolocation[0])
  // console.log("latitude:",getlocation[1]);


})
function getWeather(long, lat) {
  let p = fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+long+"&hourly=temperature_2m,showers&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto")
 
  p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
  }).then((value2) => {
    console.log(value2)
  })
}

function getGeolocation(city) {
  let p = fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city + "&count=1")
  p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
  }).then((value2) => {

    console.log(value2.results)
    // console.log("longitude",value2.results[0].longitude)
    console.log("latitude",value2.resuls[0].latitude)
    // return [value2.results[0].longitude,value2.result[0].latitude];
  })

}
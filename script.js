window.addEventListener("load",()=>{
  let p =document.querySelector('.preloader');
  p.setAttribute("style","opacity:0;pointer-events:none;")
});



const temp = document.querySelector(".temp");
const region = document.querySelector(".location");
const visibility = document.querySelector(".visibility");
const windSpeed = document.querySelector(".windSpeed");
const humidity = document.querySelector(".Humidity");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const pressure = document.querySelector(".pressure");
const feelsLike = document.querySelector(".feelsLike");
const UV = document.querySelector(".UV");
const rain = document.querySelector(".rain");
const tempDay1 = document.querySelector(".tempDay1")
const tempDay2 = document.querySelector(".tempDay2")
const tempDay3 = document.querySelector(".tempDay3")
const tempDay4 = document.querySelector(".tempDay4")
const tempDay5 = document.querySelector(".tempDay5")
const tempDay6 = document.querySelector(".tempDay6")
const dayDay1 = document.querySelector(".dayDay1")
const dayDay2 = document.querySelector(".dayDay2")
const dayDay3 = document.querySelector(".dayDay3")
const dayDay4 = document.querySelector(".dayDay4")
const dayDay5 = document.querySelector(".dayDay5")
const dayDay6 = document.querySelector(".dayDay6")



getWeather("New Delhi");
// getPhoto("New Delhi");


document.querySelector(".btn").addEventListener("click", function (event) {
  var place = document.querySelector("input").value;
  // document.querySelector(".input").toggleClass("inclicked");

  var long;

  var lat;


  event.preventDefault();
  getWeather(place);
  getPhoto(place);

})



function getWeather(city) {
  let p = fetch("https://api.weatherapi.com/v1/forecast.json?key=51586754fd1f439583c111631231202&q=" + city + "&days=6&aqi=no&alerts=no");
  
  p.then((response) => {
    // console.log(response.status)
    console.log(response.ok)
    return response.json()
  }).then((value2) => {
    // console.log(value2)

    temp.innerHTML = value2.current.temp_c + "&#176";
    humidity.innerHTML = value2.current.humidity + " %";
    visibility.innerHTML = value2.current.vis_km + " km";
    region.innerHTML = value2.location.name + " , " + value2.location.country;
    windSpeed.innerHTML = value2.current.wind_kph + " km/h";
    sunset.innerHTML = value2.forecast.forecastday[0].astro.sunset;
    sunrise.innerHTML = value2.forecast.forecastday[0].astro.sunrise;
    pressure.innerHTML = value2.current.pressure_mb + " mB";
    feelsLike.innerHTML = value2.current.feelslike_c + "&#176"
    rain.innerHTML = value2.forecast.forecastday[0].day.daily_chance_of_rain;
    UV.innerHTML = value2.current.uv;



    // ---------------------forecast weather-------------------

    //----------------------Days-Temp-----------------------------

    tempDay1.innerHTML = value2.forecast.forecastday[0].day.avgtemp_c + "&#176"
    tempDay2.innerHTML = value2.forecast.forecastday[1].day.avgtemp_c + "&#176"
    tempDay3.innerHTML = value2.forecast.forecastday[2].day.avgtemp_c + "&#176"
    tempDay4.innerHTML = value2.forecast.forecastday[3].day.avgtemp_c + "&#176"
    tempDay5.innerHTML = value2.forecast.forecastday[4].day.avgtemp_c + "&#176"
    tempDay6.innerHTML = value2.forecast.forecastday[5].day.avgtemp_c + "&#176"

    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = d.getDay();
    document.querySelector(".day").innerHTML = Days[day];

    for (let i = 0; i < 6; i++) {
      document.querySelectorAll(".dayDay")[i].innerHTML = Days[i];
      var iconArr = value2.forecast.forecastday[i].day.condition.icon;
      document.querySelectorAll(".icon")[i].setAttribute("src", iconArr)
    }
    // ---------------ForecastIcon---------------

    //----------------Date update----------------
    let todaysdate= d.getDate();
    let Mon = d.getMonth();
    let Year = d.getFullYear();

    const Month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    console.log(todaysdate,Month[Mon], Year)


    document.querySelector(".date").innerHTML = todaysdate + " " + Month[Mon] + "' " + Year;




  })

}
function getPhoto(city) {
  let p = fetch("https://pixabay.com/api/?key=33545906-3d0eadc14359d77a7fbd43812&q=" + city + "&image_type=photo&pretty=true")
  p.then((response) => {
    // console.log(response.status)
    console.log(response.ok)
    return response.json()
  }).then((value2) => {
    // console.log(value2)
    let x = Math.floor((Math.random() * 10) + 1);
    var apiImg = value2.hits[x].webformatURL;
    // console.log(apiImg)

    document.querySelector(".background")[0].
    document.querySelectorAll(".background")[0].style.backgroundImage = "url(" + apiImg + ")";
    document.querySelectorAll(".background")[1].style.backgroundImage = "url(" + apiImg + ")";


    let d = Math.floor((Math.random() * 10) + 1);
    var infoImg = value2.hits[d].webformatURL;
    // console.log(infoImg);
    document.querySelector(".WeatherPhoto").style.backgroundImage = "url(" + infoImg + ")";

  })


}

// function getWeather(long, lat) {
//   let p = fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m,showers&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto")

//   p.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
//   }).then((value2) => {
//     console.log(value2)
//   })
// }

// function getGeolocation(city) {
//   let p = fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city + "&count=1")
//   p.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
//   }).then((value2) => {
//     var arr = value2.results[0];
//     long = arr.map(a => parseFloat(a.timestamp));
//     console.log(long)
//   })
//   // lat = (value2.results[0].latitude);
//   // long = (value2.results[0].longitude);
// }
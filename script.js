var fetchDataBtn = document.getElementById("fetchDataBtn")
var primary = document.getElementById("primary")
var secondary = document.getElementById("secondary")
var primary1st = document.getElementById("primary-1st")
var primeLat = document.getElementById("prime-Lat")
var primeLong = document.getElementById("prime-Long")
var Googlemap = document.getElementsByTagName("iframe")[0]

var infoSheet1 = document.getElementById("infoSheet1")
var infoSheet2 = document.getElementById("infoSheet2")
var infoSheet3 = document.getElementById("infoSheet3")
var infoSheet4 = document.getElementById("infoSheet4")
var infoSheet5 = document.getElementById("infoSheet5")
var infoSheet6 = document.getElementById("infoSheet6")
var infoSheet7 = document.getElementById("infoSheet7")
var infoSheet8 = document.getElementById("infoSheet8")


var urlLocation = "" //ipegweatherapi-create
var urlWeatherApi;

var locationDataFinal;
async function getLocation() {
    try {
        const location = await fetch(urlLocation)
        const locationData = await location.json()
        locationDataFinal = locationData
    }
    catch (error) {
        console.log("Unable to fetch location" + error);
    }
}

document.addEventListener('DOMContentLoaded', getLocation)

function getWeatherReport() {
    var infoSheetFetch = fetch(urlWeatherApi)
    infoSheetFetch.then(data=>data.json())
    .then(data=> {
        infoSheet1.textContent = data.name
        infoSheet2.textContent = data.coord.lat
        infoSheet3.textContent = data.timezone
        infoSheet4.textContent = data.wind.speed
        infoSheet5.textContent = data.main.pressure
        infoSheet6.textContent = data.main.humidity
        infoSheet7.textContent = data.wind.deg
        infoSheet8.textContent = data.coord.lon
    })
    .catch(error=>console.error("Can't fetch weather data " + error))    
}

function startFetching() {
    primary.style.height = "110vh"
    fetchDataBtn.style.display = 'none'
    primary1st.style.display = 'contents'
    secondary.style.display = 'contents'
    primeLat.textContent = locationDataFinal.latitude
    primeLong.textContent = locationDataFinal.longitude

    map.src = `https://maps.google.com/maps?q=${locationDataFinal.latitude},${locationDataFinal.longitude}&z=15&output=embed`
    urlWeatherApi = ``
    getWeatherReport()
}

fetchDataBtn.addEventListener('click', startFetching)

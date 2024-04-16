const apiKey = "1fd1e60e834557f8d5960b39fefe3f3e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-cont input");
const searchBtn = document.querySelector(".search-cont button");
const weatherIcon = document.querySelector(".weather-icon");

       
async function checkWeather(city)
    {

     const response = await fetch( apiUrl + city + `&appid=${apiKey}`);

     if(response == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
     else(
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            console.log(data);

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
             }
             else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
             else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
             else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
             else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png"
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        )
    }
        
        
searchBtn.addEventListener("click", ()=>{
     checkWeather(searchBox.value);
 }
)
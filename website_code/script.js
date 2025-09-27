// js code for weather forcast 

let locationSearch = document.getElementById("locationSearch")
let bgimage = document.querySelector(".bgimage")
let setting = document.querySelector(".setting")
let humidity = document.querySelector(".humidity")
let visibility = document.querySelector(".visibility")
let wind = document.querySelector(".wind")
let pressure = document.querySelector(".pressure")
const cityname = document.querySelector(".cityname")
let temperature = document.querySelector(".temperature")
let tempSticker = document.querySelector(".tempSticker")
let humidity_value = document.querySelector(".humidity_value")
let wind_value = document.querySelector(".wind_value")
let visibility_value = document.querySelector(".visibility_value")
let pressure_value = document.querySelector(".pressure_value")
let weather_info = document.querySelector(".weather_info")
let searchBar = document.querySelector(".searchBar")
let form = document.querySelector("form")
let main = document.querySelector(".card")
//let form=document.getElementsByTagName('form')
let c_to_f = document.querySelector('.c_to_f')
let km_to_miles = document.querySelector('.km_to_miles')
let hpa_to_atm = document.querySelector('.hpa_to_atm')
let kmByhr_to_mileByhr = document.querySelector('.kmByhr_to_mileByhr')
let light_theme = document.querySelector('.light_theme')
let dark_theme = document.querySelector('.dark_theme')

// const apiKey= 'https://home.openweathermap.org/api_keys';

let id = '6680cfb163df9990fcda2f63eb086b27';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather = () => {
    fetch(url + '&q=' + locationSearch.value)
        .then(reponsive => reponsive.json())
        .then(data => {
            console.log(data);
            console.log(locationSearch.value);

            if (data.cod == 200) {
                cityname.innerText = `${data.name}`;
                const usingTemp = Math.round(data.main.temp);
                temperature.querySelector(".myTemp").innerText = `${usingTemp}°C`;
                let a = data.weather[0].icon;
                tempSticker.querySelector(".cloud_img").src = `http://openweathermap.org/img/wn/${a}.png`;
                humidity_value.innerText = `${data.main.humidity} %`;
                const usingVisibility = Math.round(data.visibility * 1.61 / 1000)
                visibility_value.innerText = `${usingVisibility} km`;
                const usingWind = Math.round(data.wind.speed);
                wind_value.innerText = `${usingWind} km/hr`;
                const usingPressure = Math.round(data.main.pressure);
                pressure_value.innerText = `${usingPressure} hPa`;
                let weather_condition = data.weather[0].id;
                if (weather_condition == 800) {
                    document.body.style.backgroundImage = "url('../assests/blueSkymountain.webp')";
                }
                else if (weather_condition < 800 && weather_condition > 700) {
                    document.body.style.backgroundImage = "url('../assests/mistMountain.webp')";
                }
                else if (weather_condition < 600 && weather_condition >= 500) {
                    document.body.style.backgroundImage = "url('../assests/more.webp')";
                }
                else if (weather_condition < 250 && weather_condition >= 200) {
                    document.body.style.backgroundImage = "url('../assests/stormy-sky-mountain.webp')";
                }
                else if (weather_condition < 350 && weather_condition >= 300) {
                    document.body.style.backgroundImage = "url('../assests/mistMountain.webp')";
                }
                else if (weather_condition > 800) {
                    document.body.style.backgroundImage = "url('../assests/rainyMountain.webp')";
                }
                else if (weather_condition < 650 && weather_condition >= 600) {
                    document.body.style.backgroundImage = "url('../assests/snowMountain.webp')";
                }

                const fer = usingTemp * (9 / 5) + 32;
                c_to_f.addEventListener('click', () => {
                    temperature.querySelector(".myTemp").innerText = `${fer}°F`;

                })
                const miles = usingVisibility * 0.62;
                km_to_miles.addEventListener('click', () => {
                    visibility_value.innerHTML = `${miles} miles`;

                })
                const mmhg = Math.round(usingPressure * 75) / 100;
                hpa_to_atm.addEventListener('click', () => {
                    pressure_value.innerText = `${mmhg} mmHg`;

                })
                const milesValue = Math.round(usingWind * 62) / 100;
                kmByhr_to_mileByhr.addEventListener('click', () => {
                    wind_value.innerText = `${milesValue} mile/hr`;

                })
            } else {
                console.log('Not found the city');
                main.classList.add('error')
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            locationSearch.value = '';
        })

}


//   LIGHT  THEME
light_theme.addEventListener('click', () => {
    document.querySelector("body").style.backgroundColor = `rgba(255, 255, 255, 0.389);`;
    document.querySelector('.bgimage').style.background = `linear-gradient(to bottom, rgba(255, 253, 186, 0.49), rgba(152, 244, 235, 0.626), rgba(156, 156, 156, 0.63))`;
    form.style.backgroundColor = 'rgba(255, 255, 255, 0.489)';
    // searchBar.style.backgroundColor='rgba(255, 255, 255, 0.489)' ; 
    document.querySelector(".cityname_and_icon").style.color = 'rgb(120, 120, 120)'
    document.querySelector(".temperature_and_icon").style.color = 'rgb(121, 121, 121)'
    let font_color = document.querySelectorAll(".info_box")
    font_color.forEach(e => {
        e.style.color = 'rgb(35, 44, 48)'
    });
    let info_color = document.querySelectorAll(".info_box")
    info_color.forEach(e => {
        e.style.backgroundImage = 'linear-gradient(to bottom, rgba(169, 169, 169, 0.68))'
    });
    let border_color = document.querySelectorAll('.info_box')
    border_color.forEach(e => {
        e.style.border = '2px solid rgba(199, 255, 253, 0.83)';
    });
    //document.querySelector("details").childElementCount(5).style.backgroundColor='rgba(255, 255, 255, 0.87)'

    c_to_f.style.backgroundColor = 'rgb(255,255,255)';
    hpa_to_atm.style.backgroundColor = 'rgb(255,255,255)';
    kmByhr_to_mileByhr.style.backgroundColor = 'rgb(255,255,255)';
    km_to_miles.style.backgroundColor = 'rgb(255,255,255)';
    light_theme.style.backgroundColor = 'rgb(255,255,255)';
    dark_theme.style.backgroundColor = 'rgb(255,255,255)';

    c_to_f.style.color = 'rgb(0,0,0)';
    hpa_to_atm.style.color = 'rgb(0,0,0)';
    kmByhr_to_mileByhr.style.color = 'rgb(0,0,0)';
    km_to_miles.style.color = 'rgb(0,0,0)';
    light_theme.style.color = 'rgb(0,0,0)';
    dark_theme.style.color = 'rgb(0,0,0)';
})

// DARK THEME
dark_theme.addEventListener('click', () => {
    document.querySelector("body").style.backgroundColor = `rgba(0, 0, 0, 0.389);`;
    document.querySelector('.bgimage').style.background = `linear-gradient(to bottom, rgba(3, 35, 54, 0.67),rgba(4, 90, 81, 0.66), rgba(2, 1, 2, 0.82))`;

    setting.style.backgroundColor = 'rgba(255, 255, 255, 0.72)';
    document.querySelector("form").style.backgroundColor = 'rgba(255, 255, 255, 0.71)';
    document.querySelector(".cityname_and_icon").style.color = 'rgb(255, 243, 184)'
    document.querySelector(".temperature_and_icon").style.color = 'rgb(255, 240, 164)'
    let font_color = document.querySelectorAll(".info_box")
    font_color.forEach(e => {
        e.style.color = 'rgb(193, 253, 239)'
    });
    let info_color = document.querySelectorAll(".info_box")
    info_color.forEach(e => {
        e.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.447))'
    });
    let border_color = document.querySelectorAll('.info_box')
    border_color.forEach(e => {
        e.style.border = '2px solid rgba(32, 207, 255, 0.79)';
    });
    //document.querySelector("details").childElementCount(5).style.backgroundColor='rgba(255, 255, 255, 0.87)'

    c_to_f.style.backgroundColor = 'rgba(52, 52, 52, 0.87)';
    hpa_to_atm.style.backgroundColor = 'rgba(52, 52, 52, 0.87)';
    kmByhr_to_mileByhr.style.backgroundColor = 'rgba(52, 52, 52, 0.87)';
    km_to_miles.style.backgroundColor = 'rgba(52, 52, 52, 0.87)';
    light_theme.style.backgroundColor = 'rgba(52, 52, 52, 0.87)';
    dark_theme.style.backgroundColor = 'rgba(52, 52, 52, 0.87)';

    c_to_f.style.color = 'rgb(255,255,255)';
    hpa_to_atm.style.color = 'rgb(255,255,255)';
    kmByhr_to_mileByhr.style.color = 'rgb(255,255,255)';
    km_to_miles.style.color = 'rgb(255,255,255)';
    light_theme.style.color = 'rgb(255,255,255)';
    dark_theme.style.color = 'rgb(255,255,255)';
})
const initApp = () => {
    locationSearch.value = 'mumbai';
    searchWeather()
}
initApp();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (locationSearch != '') {
        searchWeather();
    }
})

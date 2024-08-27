const inputlocation = document.querySelector('.inputlocation');
// console.log(inputlocation);
const searchbtn = document.getElementById('searchbtn');
// console.log(searchbtn);
const weather_img = document.querySelector('#weather_img');
// console.log(weather_img);
const weather_num = document.querySelector('#weather_num');
// console.log(weather_num);
const water_percent = document.querySelector('.water_percent');
// console.log(water_percent);
const description = document.querySelector('.description');
// console.log(description);
const wind_speed = document.querySelector('.wind_speed');
// console.log(wind_speed);



async function checkweather(city){
    const api_key = "8362aded19e741c87296b9233342803a";
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(Response => Response.json());

    if(weather_data.cod === '404'){
        weather_img.src = "/img/notfound.png";
        weather_num.innerHTML = "? °C ";
        water_percent.innerHTML = "? %"
        wind_speed.innerHTML = "? Km/H";
        description.innerHTML = "Unknown Location !!!"
    }

    else{
    weather_num.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    water_percent.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`
    
    switch(weather_data.weather[0].main){
        case 'Clouds': 
            weather_img.src = "/img/cloudy.png";
            break;
        case 'Clear': 
            weather_img.src = "/img/sunny.png";
            break;
        case 'Rain': 
            weather_img.src = "/img/rainy.png";
            break;
        case 'Mist': 
            weather_img.src = "/img/mist.png";
            break;
        case 'Snow': 
            weather_img.src = "/img/snow.jpg";
            break;
    }
}
    
    
}

searchbtn.addEventListener('click' , ()=>{
    checkweather(inputlocation.value);
})







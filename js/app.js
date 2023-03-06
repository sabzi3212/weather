//do not show api key on your js file

const API_KEY = `55e3f22d63a3cb9e49564aec3f708e91`

const loadTemp = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data));
}

const displayTemparature = data =>{
    const displayCity = document.getElementById('city');
    displayCity.innerText = data.name;

    const displayDes = document.getElementById('description');
    displayDes.innerText = data.weather[0].main;
    // displayCity.innerText = '';
    const temparature = document.getElementById('temp');
    console.log(data.weather[0].main);
    temparature.innerText = data.main.temp;
    // temparature.innerText = data.main.temp;
}

const searchButton = document.getElementById('weather-button').addEventListener('click',function(){
    const inputTextString = document.getElementById('weather-input');
    const inputText = inputTextString.value;
    loadTemp(inputText);
})
// loadTemp('dhaka');
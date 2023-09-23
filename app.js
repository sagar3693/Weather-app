    const apiKey = "";// create your own apikey on openweathermap website
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    let searchBox = document.querySelector('.search input');
    let searchBtn = document.querySelector('.search-btn');
    let img = document.querySelector('.whmain');

    async function checkWeather(city) {
        try{
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        let data = await response.json();
        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `<sup>°</sup>C`
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if(data.weather[0].main == "Clouds"){
            // img.setAttribute("src",'./cloudyt.png');
            // img.src = './cloudyt.png';
            img.src = './img/cld2.png';

        }
        else if(data.weather[0].main == 'Rain'){
            img.src = './img/rain.png';
        }
        else if(data.weather[0].main == 'Snow'){
            img.src = './img/snow.png';
        }
        // else{
        //     img.src = './snow.png';
        // }
        }
        catch(err){
            document.querySelector('.city').innerHTML = "Somthing wrong";
            document.querySelector('.temp').innerHTML = "0";
            document.querySelector('.humidity').innerHTML = "0";
            document.querySelector('.wind').innerHTML = "0";

        }
    }

    // checkWeather("latur");

    searchBtn.addEventListener("click", function () {
        checkWeather(searchBox.value);
        // console.log("hello");
    })

    searchBox.addEventListener("keydown", function (event) {
        if(event.key == "Enter"){
            event.preventDefault(); // Prevent the default behavior of the Enter key
            checkWeather(searchBox.value);
        }
        // console.log("hello");
    })

async function getWeather() {

    const city = document.getElementById("city").value.trim();
    const weatherData = document.getElementById("weatherData");

    if(city === ""){
        weatherData.innerHTML =
        "<p class='error'>Please enter a city name</p>";
        return;
    }

    try {

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        const data = await response.json();

        weatherData.innerHTML = `
            <div class="weather-info">

                <h2>${city}</h2>

                <div class="temp">
                    ${data.current_condition[0].temp_C}°C
                </div>

                <div class="details">

                    <div class="box">
                        <h3>Humidity</h3>
                        <p>${data.current_condition[0].humidity}%</p>
                    </div>

                    <div class="box">
                        <h3>Wind Speed</h3>
                        <p>${data.current_condition[0].windspeedKmph} km/h</p>
                    </div>

                    <div class="box">
                        <h3>Feels Like</h3>
                        <p>${data.current_condition[0].FeelsLikeC}°C</p>
                    </div>

                    <div class="box">
                        <h3>Weather</h3>
                        <p>${data.current_condition[0].weatherDesc[0].value}</p>
                    </div>

                </div>

            </div>
        `;

    }
    catch(error){

        weatherData.innerHTML =
        "<p class='error'>Unable to fetch weather data</p>";

    }
}
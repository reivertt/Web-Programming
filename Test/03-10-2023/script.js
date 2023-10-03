function getWeather() {
    const apiKey = '52a5dcc57f134788a0913328230310';  // Replace with your WeatherAPI.com API key
    const city = document.getElementById('city').value;

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            const locationData = response.location;
            const weatherData = response.current;
            const weatherInfo = `
            <span class="fs-3">Showing results for <span class="fw-bold">${locationData.name}, ${locationData.region}, ${locationData.country}</span></span> 
            <br>
            
            <div class="d-flex flex-row justify-content-between">
                <div class="d-flex flex-row">
                    <img src="${weatherData.condition.icon}" width="100">
                    <span style="font-size:64px;">${weatherData.temp_c}</span><span class="fs-3">°C</span>
                    <div class="ms-3">
                        <span class="fs-5 text-secondary">
                            Feels Like: ${weatherData.feelslike_c}°C
                            <br>
                            Humidity: ${weatherData.humidity}%
                            <br>
                            Wind: ${weatherData.wind_kph} km/h
                        </span>
                    </div>
                </div>
                <div class="ms-5 d-flex flex-column">
                    <span class="fs-1 text-end">${weatherData.condition.text}</span>
                    <span class="fs-4 text-secondary text-end">${locationData.localtime}</span>
                </div>
            </div>
            `;
                    document.getElementById('weatherInfo').innerHTML = weatherInfo;
                },
        error: function(error) {
            console.error('Error:', error);
            document.getElementById('weatherInfo').innerText = 'Error fetching weather data.';
        }
    });
}

let input = document.getElementById('city');

input.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
       getWeather();
    }
 });
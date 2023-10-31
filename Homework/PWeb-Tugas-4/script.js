function getWeather() {
    const apiKey = '52a5dcc57f134788a0913328230310';  // Replace with your WeatherAPI.com API key
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.xml?key=${apiKey}&q=${city}`;
    
    // fetch(apiUrl)
    //     .then(response => response.text())
    //     .then(data => {
    //         console.log(data);
            
    //         const parser = new DOMParser();
    //         const xmlDoc = parser.parseFromString(data, "text/xml");

    //         const weatherInfo = `
    //             <span class="fs-3">Showing results for <span class="fw-bold">${xmlDoc.querySelector("name").textContent}, ${xmlDoc.querySelector("region").textContent}, ${xmlDoc.querySelector("country").textContent}</span></span> 
    //             <br>
                
    //             <div class="d-flex flex-row justify-content-between">
    //                 <div class="d-flex flex-row">
    //                     <img src="${xmlDoc.querySelector("icon").textContent}" width="100">
    //                     <span style="font-size:64px;">${xmlDoc.querySelector("temp_c").textContent}</span><span class="fs-3">°C</span>
    //                     <div class="ms-3">
    //                         <span class="fs-5">
    //                             Feels Like: ${xmlDoc.querySelector("feelslike_c").textContent}°C
    //                             <br>
    //                             Humidity: ${xmlDoc.querySelector("humidity").textContent}%
    //                             <br>
    //                             Wind: ${xmlDoc.querySelector("wind_kph").textContent} km/h
    //                         </span>
    //                     </div>
    //                 </div>
    //                 <div class="ms-5 d-flex flex-column">
    //                     <span class="fs-1 text-end">${xmlDoc.querySelector("text").textContent}</span>
    //                     <span class="fs-4 text-end">${xmlDoc.querySelector("localtime").textContent}</span>
    //                 </div>
    //             </div>
    //         `;
    //         document.getElementById('weatherInfo').innerHTML = weatherInfo;
    //         const temp = xmlDoc.querySelector('temp_c').textContent;
    //         if (temp < 10) document.body.style.backgroundColor = "#7D97F5";
    //         else if (temp < 20) document.body.style.backgroundColor = "#7DF58E"
    //         else if (temp < 30) document.body.style.backgroundColor = "#F5D682";
    //         else document.body.style.backgroundColor = "#F57975";
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         document.getElementById('weatherInfo').innerText = 'Invalid City.';
    //     });

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4){
            if (this.status == 200) {
                // const parser = new DOMParser();
                const response = xhr.responseXML;
                // const response = parser.parseFromString(this.responseXML, 'text/xml');
                
                // const temp = response.querySelector('temp_c').textContent;
                // const condition = response.querySelector('feelslike_c').textContent;
                
                const temp = response.querySelector('temp_c').textContent;
                // const condition = response.getElementsByTagName('feelslike_c')[0].childNodes[0].nodeValue;

                console.log('Temperature: ', temp);
                // console.log('Condition: ', condition);
            }
            else {
                console.error('Request failed. Status: ', this.status);
            }
        }
    }
    
    xhr.open('GET', apiUrl, true);
    xhr.send();

    // $.ajax({
    //     url: apiUrl,
    //     type: 'GET',
    //     dataType: 'json',
    //     success: function(response) {
    //         const locationData = response.location;
    //         const weatherData = response.current;
    //         const weatherInfo = `
    //         <span class="fs-3">Showing results for <span class="fw-bold">${locationData.name}, ${locationData.region}, ${locationData.country}</span></span> 
    //         <br>
            
    //         <div class="d-flex flex-row justify-content-between">
    //             <div class="d-flex flex-row">
    //                 <img src="${weatherData.condition.icon}" width="100">
    //                 <span style="font-size:64px;">${weatherData.temp_c}</span><span class="fs-3">°C</span>
    //                 <div class="ms-3">
    //                     <span class="fs-5">
    //                         Feels Like: ${weatherData.feelslike_c}°C
    //                         <br>
    //                         Humidity: ${weatherData.humidity}%
    //                         <br>
    //                         Wind: ${weatherData.wind_kph} km/h
    //                     </span>
    //                 </div>
    //             </div>
    //             <div class="ms-5 d-flex flex-column">
    //                 <span class="fs-1 text-end">${weatherData.condition.text}</span>
    //                 <span class="fs-4 text-end">${locationData.localtime}</span>
    //             </div>
    //         </div>
    //         `;
    //         document.getElementById('weatherInfo').innerHTML = weatherInfo;
    //         const temp = response.current.temp_c;
    //         if (temp < 10) document.body.style.backgroundColor = "#7D97F5";
    //         else if (temp < 20) document.body.style.backgroundColor = "#7DF58E"
    //         else if (temp < 30) document.body.style.backgroundColor = "#F5D682";
    //         else document.body.style.backgroundColor = "#F57975";
    //     },
    //     error: function(error) {
    //         console.error('Error:', error);
    //         document.getElementById('weatherInfo').innerText = 'Error fetching weather data.';
    //     }
    // });
}

document.getElementById('city').addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
       getWeather();
    }
 });
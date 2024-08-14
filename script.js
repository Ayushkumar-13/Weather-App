const apiKey = '92830b03bbcbf8454834df1dbc560860'; 

document.getElementById('get-weather-btn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city-input').value;
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('city').textContent = `City: ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity} %`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching weather data');
    }
}

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '338b083281d4734bf4beec49b9d3ec97'; // Your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const resultDiv = document.getElementById('weatherResult');
    if (data.cod === 200) {
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <img src="${iconUrl}" alt="Weather icon">
      `;

      // Change background based on temperature
      const temp = data.main.temp;
      if (temp < 10) {
        document.body.style.background = '#b3e5fc'; // cold blue
      } else if (temp < 25) {
        document.body.style.background = '#ffe082'; // mild yellow
      } else {
        document.body.style.background = '#ffab91'; // hot orange
      }

      // Save to search history
      let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
      if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem('weatherHistory', JSON.stringify(history));
        updateHistoryList();
      }
    } else {
      resultDiv.innerHTML = `<p>City not found. Try again.</p>`;
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
    document.getElementById('weatherResult').innerHTML = `<p>Something went wrong. Please try again.</p>`;
  }
}

function updateHistoryList() {
  const historyList = document.getElementById('historyList');
  const history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
  historyList.innerHTML = '';
  history.forEach(city => {
    const li = document.createElement('li');
    li.textContent = city;
    historyList.appendChild(li);
  });
}

// Load history on page load
window.onload = updateHistoryList;

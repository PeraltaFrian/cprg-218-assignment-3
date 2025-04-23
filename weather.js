function loadWeatherWidget() {
  const apiURL = "https://api.weatherapi.com/v1/current.json?q=Cancun&key=4e5e576e864142e780a45600252403";

  const weatherWidget = document.querySelector(".weather-widget");
  if (!weatherWidget) {
    console.warn("Weather widget not found in the DOM.");
    return;
  }

  fetch(apiURL)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not OK");
      return response.json();
    })
    .then(data => {
      document.getElementById("city").textContent = data.location.name;
      document.getElementById("temp").textContent = data.current.temp_c;
      document.getElementById("wind_direction").textContent = data.current.wind_dir;
      document.getElementById("icon").src = data.current.condition.icon;
      document.getElementById("icon").alt = data.current.condition.text;
    })
    .catch(error => {
      console.error("Weather API Error:", error);
    });
}

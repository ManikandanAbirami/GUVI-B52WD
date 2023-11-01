// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

document.getElementById("weatherInfo").addEventListener("click", () => {
  const country = "France";
  const api = "19a8470a463433487b03f8f82158f8e9";

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const capital = data[0].capital[0];
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "details"
      ).innerHTML = `Weather is ${data.name}: ${data.weather[0].main}, Temp: ${data.main.temp}`;
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

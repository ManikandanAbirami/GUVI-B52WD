// fetch(`https://restcountries.com/v3.1/name/France`)
//   .then((response) => response.json())
//   .then((data) => {
//     const capital = data[0].capital[0];
//     return fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
//     );
//   });

async function fetchData() {
  let response = await fetch(`https://restcountries.com/v3.1/name/France`);
  let data = await response.json();
  let capital = data[0].capital[0];
  console.log("France capital:", capital);
}

fetchData();

const fetchDataAsync = async () => {
  let response = await fetch(`https://restcountries.com/v3.1/name/France`);
  let data = await response.json();
  let capital = data[0].capital[0];
  console.log("Async Programming France capital:", capital);
};

fetchDataAsync();

function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, interval);
  });
}

const promise1 = timeoutPromise("1st promise resolved", 1000);
const promise2 = timeoutPromise("2nd promise resolved", 2000);
const promise3 = timeoutPromise("3rd promise resolved", 3000);

// promise1.then((res) => {
//   console.log("promise1:", res);
// });

// promise2.then((res) => {
//   console.log("promise2:", res);
// });

// promise3.then((res) => {
//   console.log("promise3:", res);
// });

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error("A Promise failed to resolve", error);
  });

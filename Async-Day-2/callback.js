function getDressed() {
  console.log("Getting dressed...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function eatBreakfast() {
  console.log("Eating breakfast...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function goOut() {
  console.log("Going out!");
}

// getDressed(() => {
//   eatBreakfast(() => {
//     goOut();
//   });
// });

getDressed()
  .then(eatBreakfast)
  .then(goOut)
  .catch((err) => {
    console.error("An error occurred:", err);
  });

async function startDay() {
  await getDressed();
  await eatBreakfast();
  goOut();
}

startDay();

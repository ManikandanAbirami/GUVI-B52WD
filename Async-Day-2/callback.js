function getDressed() {
  console.log("Getting dressed...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
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

async function startDay() {
  try {
    await getDressed();
    await eatBreakfast();
    goOut();
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

startDay();

// getDressed(() => {
//   eatBreakfast(() => {
//     goOut();
//   });
// });

// getDressed()
//   .then(eatBreakfast)
//   .then(goOut)
//   .catch((err) => {
//     console.error("An error occurred:", err);
//   });

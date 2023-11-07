// function getDressed() {
//   console.log("Getting dressed...");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 5000);
//   });
// }

// function eatBreakfast() {
//   console.log("Eating breakfast...");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }

// function goOut() {
//   console.log("Going out!");
// }

// async function startDay() {
//   try {
//     await getDressed();
//     await eatBreakfast();
//     goOut();
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// }

// startDay();

// getDressed()
//   .then(eatBreakfast)
//   .then(goOut)
//   .catch((err) => {
//     console.error("An error occurred:", err);
//   });

// getDressed(() => {
//   eatBreakfast(() => {
//     goOut();
//   });
// });

// function getDressed(callback) {
//   console.log("Getting dressed!");
//   setTimeout(() => {
//     callback();
//     // eatBreakfast(() => {
//     //   goOut();
//     // });
//   }, 1000);
// }

// function eatBreakfast(callback) {
//   console.log("Eating Breakfast!");
//   setTimeout(() => {
//     callback();
//     //   goOut();
//   }, 1000);
// }

// function goOut() {
//   console.log("Going out!");
// }
debugger;
function dosa() {
  console.log("ordering dosa..");
}
function dosapreparation() {
  console.log("dosai served afer 5 mins of preparation");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("dosai is served");
    }, 5000);
  });
}
function juice() {
  console.log("juice is served");
}

function freshJuice() {
  console.log("Fresh Juice served here!!");
}
async function hotel() {
  try {
    dosa();
    let result = await dosapreparation();
    console.log(result);
    juice();
  } catch (err) {
    console.error("an error occured: ", err);
  }
}
hotel();
freshJuice();

// setTimeout(() => {
//   console.log("This is executed after 3 seconds!!!!");
// }, 3000);

let add = (callback) => {
  let x = 2,
    y = 3;
  console.log("Sum :", x + y);
  callback();
};

let subtract = (callback) => {
  let x = 2,
    y = 3;
  console.log("Difference :", x - y);
  callback();
};

// add(() => {
//   console.log("Finished this operation!!!");
// });
// subtract(() => {
//   console.log("Finished this operation!!!");
// });

let displayCompletion = () => {
  console.log("Finished this operation!!!");
};

add(displayCompletion);
subtract(displayCompletion);

// let promiseObj
// promiseObj = new Promise();
// promiseObj = new Promise(() => {});
// promiseObj = new Promise((resove, reject) => {});
let promiseObj = new Promise((resolve, reject) => {
  // producer code
  console.log("Get the name from DataBase!!!");
  try {
    let a = 10;
    let b = "Mani";
    const c = a + b;
    c = a + b + 30;
    resolve(c);
  } catch (err) {
    reject("Oh ho! some error occurred!!!", err);
  }
});

// console.log(promiseObj);

//promiseObj.then(successCallback, errorCallback);

promiseObj.then(
  (val) => {
    console.log("Resolved:", val);
  },
  (err) => {
    console.log("Rejected from then:", err);
  }
);

promiseObj.catch((err) => {
  console.log("Rejected from catch:", err);
});

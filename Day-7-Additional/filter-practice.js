let a = [10, 20, 30, 40, 50];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > 10) {
//     console.log(a[i]);
//   }
// }
let result = a.filter((item) => {
  return item > 10;
});
console.log(a.toString());

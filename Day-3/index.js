var houseAddress = "Chennai-93";

function house() {
  let accNoteBook = "accounts maintanence!!";
  console.log(accNoteBook);
  if (true) {
    //block scope
    //Room
    let gift = "Gift to mom!";
  }
  console.log(gift);
}

console.log(houseAddress);
house();

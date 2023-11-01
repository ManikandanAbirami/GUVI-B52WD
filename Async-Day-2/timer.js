function update(txt) {
  document.getElementById("countdown").innerText = txt;
}

function startCountdown() {
  update(5);
  setTimeout(() => {
    update(4);
    setTimeout(() => {
      update(3);
      setTimeout(() => {
        update(2);
        setTimeout(() => {
          update(1);
          setTimeout(() => {
            update("Happy New Year 2024!!!!");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

startCountdown();

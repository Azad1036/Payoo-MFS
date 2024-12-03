// show the cash out from
document
  .getElementById("cashOUt-show-btn")
  .addEventListener("click", function () {
    // show cash out btn click
    document.getElementById("cashOut-from").classList.remove("hidden");
    document.getElementById("addMoney-from").classList.add("hidden");
  });

document
  .getElementById("addMoney-show-btn")
  .addEventListener("click", function () {
    document.getElementById("addMoney-from").classList.remove("hidden");
    document.getElementById("cashOut-from").classList.add("hidden");
  });

// document
//   .getElementById("transactions-btn")
//   .addEventListener("click", function () {
//     document.getElementById("cashOUt-show-btn").classList.add("hidden");
//     document.getElementById("addMoney-show-btn").classList.add("hidden");

//     document.getElementById("cashOut-from").classList.add("hidden");
//     document.getElementById("addMoney-from").classList.add("hidden");
//   });

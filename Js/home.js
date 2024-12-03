document.getElementById("btn-addMoney").addEventListener("click", function (e) {
  e.preventDefault();

  const addMoney = document.getElementById("add-money").value;
  const pinNumber = document.getElementById("pin").value;
  console.log(addMoney, pinNumber);
});

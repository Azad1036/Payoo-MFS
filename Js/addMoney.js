document.getElementById("btn-addMoney").addEventListener("click", function (e) {
  e.preventDefault();

  const addMoney = document.getElementById("add-money").value;
  const pinNumber = document.getElementById("pin").value;

  // Verfy Pin Numbre
  if (pinNumber === "1234") {
    // get the corrent Amaount
    const blance = document.getElementById("Balance").innerText;

    // add addmoney mainBlance
    const addMoneyNumber = parseInt(blance);
    const correntAmount = parseInt(addMoney);
    const newBlance = addMoneyNumber + correntAmount;

    // update blance ui
    document.getElementById("Balance").innerText = newBlance;
  } else {
    alert("Pls Try Again");
  }
});

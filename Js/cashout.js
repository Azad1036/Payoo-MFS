document.getElementById("btn-cashOut").addEventListener("click", function (e) {
  e.preventDefault();

  const addMoney = document.getElementById("cashOut-money").value;
  const pinNumber = document.getElementById("pin-number").value;

  // Verfy Pin Numbre
  if (pinNumber === "1234") {
    // get the corrent Amaount
    const blance = document.getElementById("Balance").innerText;

    // add addmoney mainBlanceN=
    const cashOutMoney = parseInt(blance);
    const correntAmount = parseInt(addMoney);
    const newBlance = cashOutMoney - correntAmount;

    // update blance ui
    document.getElementById("Balance").innerText = newBlance;
  } else {
    alert("Pls Try Again");
  }
});

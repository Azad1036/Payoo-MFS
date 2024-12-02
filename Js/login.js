document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  if (phoneNumber === "5" && pinNumber === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Worng Phone or Pin Number");
  }
});

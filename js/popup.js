function clickedButton () {
  var alertArea = document.getElementById("yo_alert_area");
  alertArea.innerHTML = 'The button was clicked';
}

document.getElementById("yo_button").addEventListener("click", clickedButton);

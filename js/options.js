window.onload = function() {
  //JS for the options page

  /***********************
         Structure:
         Global Vars
         Functions
         Listeners
  ***********************/

  var yo_API_key = document.getElementById("yo_API_key").value;
  var alertArea = document.getElementById("yo_alert_area");
  var savedKey = null;

  //Get Saved API key and put in input on page load
  alertArea.innerHTML = function () {
    var deffered = new
  }

  function getSavedAPIKey () {
    chrome.storage.sync.get("yo_API_key", function(result) {
      savedKey = result["yo_API_key"];
      console.log(result["yo_API_key"]);
    });
  }

  //Functions
  function saveYoOptions () {
    //declare the needed inputs
    yo_API_key = document.getElementById("yo_API_key").value;
    alertArea = document.getElementById("yo_alert_area");

    if(yo_API_key.length > 0) {
      //Remove error message if it exists
      alertArea.innerHTML = "";
      chrome.storage.sync.set({"yo_API_key": yo_API_key}, function (result){

        var savedKey = getSavedAPIKey();

        if(savedKey === yo_API_key) {
          alertArea.innerHTML = "Your API key was saved! Start YO'ing!";
        }
        else {
          alertArea.innerHTML = "Sooo something terrible happened.... Try it again!" + " " + savedKey;
        }
      });
    }
    else {
      alertArea.innerHTML = "Gonna have to enter something in there!";
    }
  }

  //Listeners
  document.getElementById("yo_options_button").addEventListener("click", saveYoOptions);
}

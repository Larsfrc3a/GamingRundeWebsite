//https://api.mcsrvstat.us/2/gamingrunde.tk
//x.online
var settings = {
  async: true,
  crossDomain: true,
  url: "https://api.mcsrvstat.us/2/gamingrunde.tk",
  method: "GET",
  headers: {}
};

$.ajax(settings).done(function (response) {
  var element = document.getElementById("mcserverstatus");
  if (response.online === true) {
    element.innerHTML = "ONLINE";
    element.classList.remove("bg-orange-600");
    element.classList.add("bg-green-600");
  } else {
    element.innerHTML = "OFFLINE";
    element.classList.remove("bg-orange-600");
    element.classList.add("bg-red-600");
  }

  document.getElementById("mconline").innerHTML =
    response.players.online + " | " + response.players.max;
});

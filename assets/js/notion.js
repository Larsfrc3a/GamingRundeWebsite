var notion = {
  async: true,
  crossDomain: true,
  url: "https://potion-api.now.sh/table?id=38d9300f80634a638a92f5c4925c6848",
  method: "GET",
  processData: false,
  data: ""
};

$.ajax(notion).done(function (response) {
  if (response[1].fields.value !== undefined) {
    document.getElementById("news-text").innerHTML = response[1].fields.value;
    document.getElementById("news-text").classList.remove("invisible");
  }

  document.getElementById("start").innerHTML = response[2].fields.value;
  document.getElementById("web-fertig").innerHTML = response[0].fields.value;
  document.getElementById("server-fertig").innerHTML = response[3].fields.value;
});

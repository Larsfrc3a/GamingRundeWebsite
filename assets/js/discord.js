var discord = {
  async: true,
  crossDomain: true,
  url: "https://discordapp.com/api/guilds/710483657571172463/widget.json",
  method: "GET",
  processData: false,
  data: ""
};

$.ajax(discord).done(function (response) {
  document.getElementById("online").innerHTML = response.presence_count;
});

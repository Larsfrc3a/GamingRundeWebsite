$(function () {
    $('#btn').click(function () {
        var link = "https://discordapp.com/api/webhooks/745291430301532210/fbpyoumPpOM3HJ-tJETgMU6sd4Q2FSjTP9YKs0v6QBSoXjxleIdyLZSwM65Dqr5KLOHw";
        var username = $('#username').val();
        var email = $('#email').val();
        var betreff = $('#betreff').val();
        var content = $('#content').val();

        if (content === "" || username === "") {
          alert("Feld nicht ausgefÃ¼llt!")
        }
        else {
        $.post(link, {
            "content": "Betreff: " + betreff + "\nNachricht: " + content,
            "username": username + "[" + email + "]",
          });
      }

    });
});

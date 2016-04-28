/* Globals */
var game_pages = ["https://raw.githubusercontent.com/samfriedman/fantasy2016/master/d.html",
                  "https://raw.githubusercontent.com/samfriedman/fantasy2016/master/r.html",
                  "https://raw.githubusercontent.com/samfriedman/fantasy2016/master/s.html",
                  ""];

var choices = new Array(4);
for (i = 0; i < 4; i++) {
  choices[i] = new Array(15);
}

// Game menu

$(document).ready(function() {
  $('#gameContent').load(game_pages[0]);
  //$("#game-part-1").addClass("selected");
});

/*$(".game-part").on('click', function() {
  $(".game-part").removeClass("selected");
  $(this).addClass("selected");

  var idx = parseInt($(this).attr('id').slice(-1)) - 1;
  $("#gameContent").load(game_pages[idx]);
})*/

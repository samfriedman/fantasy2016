/* Locals */
var my_idx;

// Game content

$(document).ready(function() {
  my_idx = parseInt($(".my-idx").attr('id').slice(-1));
  var blank_found = false;
  $(".choice").toArray().forEach(function(e, i, arr) {
    $(e).html(choices[my_idx][i]);
    if ($(e).text().match("-")) {
      blank_found = true;
    }
  });
  if (blank_found) {
    $("#next").addClass("disabled");
  } else {
    $("#next").removeClass("disabled");
  }
  $(".primaries-body > tr").not(".past").first().addClass("startPulse");
});

$(".primaries-body > tr").not(".past").on('click', function() {
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  $(this).removeClass("startPulse");
  $(".candidates-body").addClass("startPulse");
});

$(".cand").on('click', function() {
  $(".selected > .choice").html($(this).children(".cand-pic").html());
  $(".my-idx .selected").removeClass("selected");
  var bio = "#" + $(this).attr('id') + "-bio";
  //$(bio).hide();
  //$(".primaries").show();
  $(bio).css("opacity", "0");
  $(bio).css("z-index", "1");
  $(".primaries").css("opacity", "1");
  $(".choice").toArray().forEach(function(e, i, arr) {
    choices[my_idx][i] = $(e).html();
  });
  if (!choices[my_idx].contains("-")) {
    $(".next").removeClass("disabled");
  }
});

$(".cand-bio-wrapper").hover(
  function() {
    $(this).css("opacity", "1");
    $(this).css("z-index", "3");
    $(".primaries").css("opacity", "0");
  },
  function() {
    $(this).css("opacity", "0");
    $(this).css("z-index", "1");
    $(".primaries").css("opacity", "1");
  }
);

$(".cand").hover(
  function() {
    $(this).addClass("selected");
    var bio = "#" + $(this).attr('id') + "-bio";
    $(bio).width($(".primaries").width() - 2);
    $(bio).height($(".primaries").height() - 2);
    //$(bio).show();
    //$(".primaries").hide();
    $(bio).css("opacity", "1");
    $(bio).css("z-index", "3");
    $(".primaries").css("opacity", "0");
  },
  function() {
    $(this).removeClass("selected");
    var bio = "#" + $(this).attr('id') + "-bio";
    //$(bio).hide();
    $(bio).css("opacity", "0");
    $(bio).css("z-index", "1");
    $(".primaries").css("opacity", "1");
    //$(".primaries").show();
  }
);

$("#reset").on('click', function() {
  $(".choice").html("-");
  $("tr").removeClass("selected");
  choices = new Array(4);
  for (i = 0; i < 4; i++) {
    choices[i] = new Array(15);
  }
  $(".next").addClass("disabled");
});

$("#next").on('click', function() {
  if (!$(this).hasClass("disabled")) {
    $(".game-part").removeClass("selected");
    $(".game-part:eq(" + (my_idx + 1) + ")").addClass("selected");

    $("#gameContent").load(game_pages[my_idx + 1]);

    if (my_idx == 1) {
      $(".game-menu").hide();
    }
  }
});

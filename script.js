$(document).ready();

$("#toggle").on("click", () => {
  $("#form").toggle();
  $("#toggle-on").show().css("color", "#86ca95");
  $("#toggle").hide();
  $("#success").css("color", "#86ca95");
  $("#volume-off").hide();
  $("#volume").show();
});

$("#toggle-sm").on("click", () => {
  $("#form-sm").toggle();
  $("#toggle-on-sm").show().css("color", "#86ca95");
  $("#toggle-sm").hide();
  $("#success-sm").css("color", "#86ca95");
  $("#volume-off-sm").hide();
  $("#volume-sm").show();
});

$("#toggle-on").on("click", () => {
  $("#form").toggle();
  $("#toggle").show();
  $("#toggle-on").hide();
  $("#success").css("color", "inherit");
  $("#volume").hide();
  $("#volume-off").show();
});

$("#toggle-on-sm").on("click", () => {
  $("#form-sm").toggle();
  $("#toggle-sm").show();
  $("#toggle-on-sm").hide();
  $("#success-sm").css("color", "inherit");
  $("#volume-sm").hide();
  $("#volume-off-sm").show();
});

$("#expand").on("click", () => {
  $("#show-upcoming").toggle();
  $("#expand").hide();
  $("#expand-less").show();
});

$("#expand-sm").on("click", () => {
  $("#show-upcoming-sm").toggle();
  $("#expand-sm").hide();
  $("#expand-less-sm").show();
});

$("#expand-less").on("click", () => {
  $("#show-upcoming").toggle();
  $("#expand-less").hide();
  $("#expand").show();
});

$("#expand-less-sm").on("click", () => {
  $("#show-upcoming-sm").toggle();
  $("#expand-less-sm").hide();
  $("#expand-sm").show();
});

$("#volume-off").on("click", () => {
  $("#volume-off").hide();
  $("#volume").show();
});

$("#volume").on("click", () => {
  $("#volume").hide();
  $("#volume-off").show();
});

$("#drop").on("click", () => {
  $("#side-nav").toggle();
});

$("#burger").on("click", () => {
  $("#side-nav").hide();
  $("#phone").hide();
  $("#help").hide();
  $("#profile").hide();
  $("#messages").hide();
  $("#bell").hide();
  $("#side-nav").hide();
  $("#drop").show();
});

$("#questions").on("click", () => {
  $("#help").toggle();
  $("#profile").hide();
  $("#bell").hide();
  $("#messages").hide();
  $("#phone").hide();
});

$("#me").on("click", () => {
  $("#profile").toggle();
  $("#help").hide();
  $("#bell").hide();
  $("#messages").hide();
  $("#phone").hide();
});

$("#notify").on("click", () => {
  $("#bell").toggle();
  $("#help").hide();
  $("#profile").hide();
  $("#messages").hide();
  $("#phone").hide();
});

$("#chat").on("click", () => {
  $("#messages").toggle();
  $("#help").hide();
  $("#profile").hide();
  $("#bell").hide();
  $("#phone").hide();
});

$("#celly").on("click", () => {
  $("#phone").toggle();
  $("#help").hide();
  $("#profile").hide();
  $("#messages").hide();
  $("#bell").hide();
});

$("#main, #navlinks-left, #nav-logo, #error404").on("click", () => {
  $("#phone").hide();
  $("#help").hide();
  $("#profile").hide();
  $("#messages").hide();
  $("#bell").hide();
  $("#side-nav").hide();
});

$("#pg2, #pg3, #pg4, #pg5, #pg6").on("click", () => {
  $("#main").hide();
  $("#error404").show();
});

$(" #dashboard").on("click", () => {
  $("#main").show();
  $("#error404").hide();
  $(".start").show(1000);
  $(".res").hide(1000);
  $(".lib").hide(1000);
  $(".his").hide(1000);
  $(".pro").hide(1000);
  $(".pri").hide(1000);
});

$("#go-home").on("click", () => {
  $("#main").show();
  $("#error404").hide();
});

$("#pg2").on("click", () => {
  $(".pri").show(1000);
  $(".res").hide(1000);
  $(".lib").hide(1000);
  $(".his").hide(1000);
  $(".pro").hide(1000);
  $(".start").hide(1000);
});

$("#pg3").on("click", () => {
  $(".res").show(1000);
  $(".pri").hide(1000);
  $(".lib").hide(1000);
  $(".his").hide(1000);
  $(".pro").hide(1000);
  $(".start").hide(1000);
});

$("#pg4").on("click", () => {
  $(".lib").show(1000);
  $(".pri").hide(1000);
  $(".res").hide(1000);
  $(".his").hide(1000);
  $(".pro").hide(1000);
  $(".start").hide(1000);
});

$("#pg5").on("click", () => {
  $(".his").show(1000);
  $(".pri").hide(1000);
  $(".lib").hide(1000);
  $(".res").hide(1000);
  $(".pro").hide(1000);
  $(".start").hide(1000);
});

$("#pg6").on("click", () => {
  $(".pro").show(1000);
  $(".pri").hide(1000);
  $(".lib").hide(1000);
  $(".his").hide(1000);
  $(".res").hide(1000);
  $(".start").hide(1000);
});

const displayTime = document.querySelector(".display-time");
const displayTimeSm = document.querySelector(".display-time-sm");

// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  displayTimeSm.innerText = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  setTimeout(showTime, 1000);
}

showTime();

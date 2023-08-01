$(document).ready();

$("#toggle").on("click", () => {
  $("#form").toggle();
  $("#toggle-on").show().css("color", "#86ca95");
  $("#toggle").hide();
  $("#success").css("color", "#86ca95");
  $("#volume-off").hide();
  $("#volume").show();
});

$("#toggle-on").on("click", () => {
  $("#form").toggle();
  $("#toggle").show();
  $("#toggle-on").hide();
  $("#success").css("color", "inherit");
  $("#volume").hide();
  $("#volume-off").show();
});

$("#expand").on("click", () => {
  $("#show-upcoming").toggle();
  $("#expand").hide();
  $("#expand-less").show();
});

$("#expand-less").on("click", () => {
  $("#show-upcoming").toggle();
  $("#expand-less").hide();
  $("#expand").show();
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
  $("#side-nav").show();
  $("#drop").hide();
});

$("#burger").on("click", () => {
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
  $("#phone").toggle();
  $("#help").hide();
  $("#profile").hide();
  $("#bell").hide();
  $("#messages").hide();
});

$("#celly").on("click", () => {
  $("#phone").toggle();
  $("#help").hide();
  $("#profile").hide();
  $("#messages").hide();
  $("#bell").hide();
});

const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: true });
  setTimeout(showTime, 1000);
}

showTime();

let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
    $(".first").css("background", "purple");
  }

if (number > "100") {
    $(".second").text("whoa, that's a big number.");
}   else {
    $(".second").text("just a regulat number, please.");
}

if (word === "cool") {
    $(".third").text("Power of DOM");
}   else {
    $(".fourth").text("Power of DOM");
}
import "./app3.css";
import $ from "jquery";

const $square = $("#app3 .square");
const localKey = "app3.active";
const active = localStorage.getItem(localKey) === "yes";
// if(active){
//   $square.addClass('active')
// }else{
//   $square.removeClass('active')
// }
$square.toggleClass("active", active);
$square.on("click", () => {
  if ($square.hasClass("active")) {
    $square.removeClass("active");
    localStorage.setItem(localKey, "no");
  } else {
    $square.addClass("active");
    localStorage.setItem(localKey, "yes");
  }
});

"use strict";

let font_color = document.querySelectorAll(".font_color ul li");
let font_size = document.querySelectorAll(".font_size ul li");

font_color.forEach((ele) => {
  ele.addEventListener("click", function () {
    font_color.forEach((el) => el.classList.remove("active"));
    ele.classList.toggle("active");
  });
});

font_size.forEach((ele) => {
  ele.addEventListener("click", function () {
    font_size.forEach((el) => el.classList.remove("active"));
    ele.classList.toggle("active");
  });
});

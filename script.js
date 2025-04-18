"use strict";

let font_color = document.querySelectorAll(".font_color ul li");
let font_size = document.querySelectorAll(".font_size ul li");
let parg_test = document.querySelector("main .content p");
let spanDefault = document.querySelector(".settings span");

function applyLocal() {
  let saveColor = window.localStorage.getItem("color");
  let saveSize = window.localStorage.getItem("size");
  let activeColor = window.localStorage.getItem("activeColor");
  let activeSize = window.localStorage.getItem("activeSize");
  if (saveColor) {
    parg_test.style.color = saveColor;
    font_color.forEach((all) => {
      all.style.color = saveColor;
    });
    font_size.forEach((all) => {
      all.style.color = saveColor;
    });
  }
  if (saveSize) {
    parg_test.style.fontSize = saveSize;
  }
  if (activeColor) {
    font_color.forEach((el, index) => {
      if (index === parseInt(activeColor)) {
        el.classList.add("active");
      }
    });
  }
  if (activeSize) {
    font_size.forEach((el, index) => {
      if (index === parseInt(activeSize)) {
        el.classList.add("active");
      }
    });
  }
}
applyLocal();

font_color.forEach((ele, index) => {
  ele.addEventListener("click", function () {
    font_color.forEach((el) => el.classList.remove("active"));
    spanDefault.classList.remove("active");
    window.localStorage.setItem("activeColor", index);
    window.localStorage.setItem("color", ele.attributes[0].value);
    applyLocal();
    console.log(ele.attributes[0].value);
  });
});

font_size.forEach((ele, index) => {
  ele.addEventListener("click", function () {
    font_size.forEach((el) => el.classList.remove("active"));
    spanDefault.classList.remove("active");
    window.localStorage.setItem("size", ele.innerHTML);
    window.localStorage.setItem("activeSize", index);
    applyLocal();
  });
});

spanDefault.addEventListener("click", function (el) {
  window.localStorage.clear();
  spanDefault.classList.add("active");
  location.reload();
});

//=============================================
let add_to_output = document.querySelector(
  ".to_do_list .todo_input .add_to_output"
);
let input = document.querySelector(".to_do_list .todo_input input");
input.value = "";

let todo_output = document.querySelector(".todo_output");

function chessck() {
  let counter = 0;
  // create elmenets for outputs
  let createTodoMainOutput = document.createElement("div");
  let createTodoMainP = document.createElement("p");
  let createTodoRemoveBTN = document.createElement("button");

  createTodoMainOutput.className = `${++counter} todo`;
  createTodoMainP.className = `todoP`;
  createTodoRemoveBTN.className = "btnToRemove";
  createTodoRemoveBTN.innerHTML = "❌";
  // appened them
  todo_output.appendChild(createTodoMainOutput);
  createTodoMainOutput.appendChild(createTodoMainP);
  createTodoMainOutput.appendChild(createTodoRemoveBTN);
  console.log(todo_output.innerHTML);

  document.querySelector(".todo_output span").style.display = "none";
  createTodoMainP.innerHTML = input.value;
  input.value = "";

  createTodoRemoveBTN.addEventListener("click", function () {
    createTodoRemoveBTN.parentElement.remove();
  });
}
add_to_output.addEventListener("click", chessck);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    chessck();
  }
});

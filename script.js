let prev = document.getElementById("prev");
let back = document.getElementById("back");
let next = document.getElementById("next");
let seeMore = document.querySelectorAll(".see-more");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");

next.onclick = function () {
  showSlider("next");
  carousel.classList.remove("showDetails")
};
prev.onclick = function () {
  showSlider("prev");
  carousel.classList.remove("showDetails")
};

let unAcceptClick;
const showSlider = (type) => {
  next.style.pointerEvents = "none";
  prev.style.pointerEvents = "none";
  carousel.classList.remove("next", "prev");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add("prev");
  }
  clearTimeout(unAcceptClick);
  unAcceptClick = setTimeout(() => {
    next.style.pointerEvents = "auto";
    prev.style.pointerEvents = "auto";
  }, 2000);
};

seeMore.forEach((element) => {
  element.onclick = function () {
    carousel.classList.add("showDetails");
  };
});
back.onclick = function () {
  carousel.classList.remove("showDetails");
};

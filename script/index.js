/* Modal Display of stars info*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
let modalName = document.querySelector("#name");
let modalgender = document.querySelector("#gender");
let modalheight = document.querySelector("#height");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


// API CALL
const images = [
  "one.jpg",
  "two.jpg",
  "three.jpg",
  "four.jpg",
  "five.jpg",
  "six.jpg",
  "seven.jpg",
  "eight.jpg",
  "nine.jpg",
  "ten.jpg",
];

const BASE_URL = "https://swapi.dev/api/people";
const main = document.getElementById("main");

function getPeople(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showPeople(data.results);
    });
}
getPeople(BASE_URL);

function showPeople(data) {
  main.innerHTML = "";
  data.forEach((character, index) => {
    const { name, gender, height } = character;
    const charEl = document.createElement("div");
    charEl.classList.add("card");
    let showModal = document.createElement("div");
    showModal.classList.add("show-modal");
    charEl.appendChild(showModal);
    showModal.innerHTML = `
    <div>
    <img src="./series/${images[index]}" alt="image">
    <div class="movie-info">
    <h2>NAME : ${name}</h2>

    </div>

    `;
    const openModal = function () {
      modalName.textContent = `Name: ${name}`;
      modalgender.textContent = `Gender: ${gender}`;
      modalheight.textContent = `Height: ${height}`;
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };
    showModal.addEventListener("click", openModal);

    main.appendChild(charEl);
  });
}
